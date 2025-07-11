"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  Laptop,
  AlertTriangle,
  CheckCircle,
  Zap,
  Volume2,
  Battery,
  Frown,
  Meh,
  Smile,
  Heart,
  Sparkles,
  Phone,
  Mail,
  Calendar,
  ArrowLeft,
  ArrowRight,
  Play,
} from "lucide-react"

interface Question {
  id: string
  title: string
  subtitle: string
  icon: React.ComponentType<{ className?: string }>
  options: {
    text: string
    value: number
    icon: React.ComponentType<{ className?: string }>
    color: string
  }[]
}

interface Answer {
  questionId: string
  value: number
  text: string
}

const questions: Question[] = [
  {
    id: "performance",
    title: "How's your device feeling lately?",
    subtitle: "Has it been running slower than usual?",
    icon: Laptop,
    options: [
      { text: "Lightning fast!", value: 0, icon: Smile, color: "text-brand-600" },
      { text: "A bit sluggish", value: 2, icon: Meh, color: "text-yellow-600" },
      { text: "Painfully slow", value: 4, icon: Frown, color: "text-red-600" },
    ],
  },
  {
    id: "sounds",
    title: "Let's talk about sounds",
    subtitle: "Any unusual noises coming from your device?",
    icon: Volume2,
    options: [
      { text: "Quiet as a whisper", value: 0, icon: CheckCircle, color: "text-brand-600" },
      { text: "Some fan noise", value: 1, icon: Meh, color: "text-yellow-600" },
      { text: "Sounds like a jet engine", value: 3, icon: AlertTriangle, color: "text-red-600" },
    ],
  },
  {
    id: "errors",
    title: "Error messages and crashes",
    subtitle: "How often do you see error messages or experience crashes?",
    icon: AlertTriangle,
    options: [
      { text: "Never or rarely", value: 0, icon: CheckCircle, color: "text-brand-600" },
      { text: "Occasionally", value: 2, icon: Meh, color: "text-yellow-600" },
      { text: "Daily struggles", value: 4, icon: Frown, color: "text-red-600" },
    ],
  },
  {
    id: "battery",
    title: "Power and battery life",
    subtitle: "How's your device holding up throughout the day?",
    icon: Battery,
    options: [
      { text: "All-day champion", value: 0, icon: Smile, color: "text-brand-600" },
      { text: "Needs frequent charging", value: 2, icon: Meh, color: "text-yellow-600" },
      { text: "Dies quickly", value: 3, icon: Frown, color: "text-red-600" },
    ],
  },
  {
    id: "overall",
    title: "Overall, how do you feel?",
    subtitle: "What's your gut feeling about your device's health?",
    icon: Heart,
    options: [
      { text: "Confident and happy", value: 0, icon: Smile, color: "text-brand-600" },
      { text: "A bit concerned", value: 2, icon: Meh, color: "text-yellow-600" },
      { text: "Really worried", value: 4, icon: Frown, color: "text-red-600" },
    ],
  },
]

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
}

const confettiVariants = {
  initial: { scale: 0, rotate: 0 },
  animate: {
    scale: [0, 1, 0],
    rotate: [0, 180, 360],
    transition: {
      duration: 2,
      ease: "easeOut",
    },
  },
}

export function TechHealthCheck() {
  const [currentStep, setCurrentStep] = useState<"welcome" | "questions" | "results">("welcome")
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Answer[]>([])
  const [direction, setDirection] = useState(0)
  const [showConfetti, setShowConfetti] = useState(false)

  const progress = ((currentQuestion + 1) / questions.length) * 100

  const handleAnswer = (questionId: string, value: number, text: string) => {
    const newAnswers = [...answers.filter((a) => a.questionId !== questionId), { questionId, value, text }]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setDirection(1)
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setCurrentStep("results")
      const totalScore = newAnswers.reduce((sum, answer) => sum + answer.value, 0)
      if (totalScore <= 3) {
        setShowConfetti(true)
      }
    }
  }

  const goBack = () => {
    if (currentQuestion > 0) {
      setDirection(-1)
      setCurrentQuestion(currentQuestion - 1)
    } else {
      setCurrentStep("welcome")
    }
  }

  const resetHealthCheck = () => {
    setCurrentStep("welcome")
    setCurrentQuestion(0)
    setAnswers([])
    setDirection(0)
    setShowConfetti(false)
  }

  const totalScore = answers.reduce((sum, answer) => sum + answer.value, 0)
  const maxScore = questions.length * 4

  const getHealthStatus = () => {
    const percentage = (totalScore / maxScore) * 100
    if (percentage <= 20)
      return {
        status: "Excellent",
        color: "brand",
        message: "Your device is in fantastic shape!",
        icon: CheckCircle,
      }
    if (percentage <= 40)
      return {
        status: "Good",
        color: "green",
        message: "Your device is doing well with minor areas to watch.",
        icon: Smile,
      }
    if (percentage <= 60)
      return {
        status: "Fair",
        color: "yellow",
        message: "Your device could use some attention.",
        icon: Meh,
      }
    return {
      status: "Needs Care",
      color: "red",
      message: "Your device needs professional attention soon.",
      icon: AlertTriangle,
    }
  }

  const healthStatus = getHealthStatus()

  const getRecommendations = () => {
    const recs = []
    const performanceAnswer = answers.find((a) => a.questionId === "performance")
    const soundsAnswer = answers.find((a) => a.questionId === "sounds")
    const errorsAnswer = answers.find((a) => a.questionId === "errors")
    const batteryAnswer = answers.find((a) => a.questionId === "battery")

    if (performanceAnswer && performanceAnswer.value >= 2) {
      recs.push("Performance optimization and cleanup")
    }
    if (soundsAnswer && soundsAnswer.value >= 2) {
      recs.push("Hardware inspection and cleaning")
    }
    if (errorsAnswer && errorsAnswer.value >= 2) {
      recs.push("Software diagnostics and repair")
    }
    if (batteryAnswer && batteryAnswer.value >= 2) {
      recs.push("Battery health assessment")
    }

    if (recs.length === 0) {
      recs.push("Preventive maintenance to keep things running smoothly")
    }

    return recs
  }

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => setShowConfetti(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [showConfetti])

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 via-white to-accent-50">
      {/* Confetti Animation */}
      <AnimatePresence>
        {showConfetti && (
          <div className="fixed inset-0 pointer-events-none z-50">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                variants={confettiVariants}
                initial="initial"
                animate="animate"
              >
                <Sparkles className="w-6 h-6 text-brand-500" />
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatePresence mode="wait">
          {/* Welcome Screen */}
          {currentStep === "welcome" && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.div
                className="w-24 h-24 bg-gradient-to-br from-brand-500 to-accent-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Laptop className="w-12 h-12 text-white" />
              </motion.div>

              <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">Tech Health Check</h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Let's give your device a quick checkup! Answer a few friendly questions and we'll tell you how your tech
                is doing.
              </p>
              <p className="text-lg text-slate-500 mb-12">
                Takes less than 2 minutes • Get personalized recommendations • No technical jargon
              </p>

              <Button
                size="lg"
                onClick={() => setCurrentStep("questions")}
                className="bg-gradient-to-r from-brand-500 to-accent-600 hover:from-brand-600 hover:to-accent-700 text-white px-8 py-6 text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Start Health Check
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          )}

          {/* Questions */}
          {currentStep === "questions" && (
            <motion.div
              key="questions"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-3xl mx-auto"
            >
              {/* Progress Bar */}
              <div className="mb-12">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-slate-600">
                    Question {currentQuestion + 1} of {questions.length}
                  </span>
                  <span className="text-sm font-medium text-slate-600">{Math.round(progress)}% Complete</span>
                </div>
                <Progress value={progress} className="h-3 bg-slate-200 rounded-full overflow-hidden" />
              </div>

              {/* Question Card */}
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={currentQuestion}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                >
                  <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm rounded-3xl mb-8">
                    <CardHeader className="text-center pb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-brand-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        {(() => {
                          const CurrentIcon = questions[currentQuestion].icon
                          return <CurrentIcon className="w-8 h-8 text-white" />
                        })()}
                      </div>
                      <CardTitle className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
                        {questions[currentQuestion].title}
                      </CardTitle>
                      <p className="text-lg text-slate-600">{questions[currentQuestion].subtitle}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {questions[currentQuestion].options.map((option, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Button
                            variant="outline"
                            onClick={() => handleAnswer(questions[currentQuestion].id, option.value, option.text)}
                            className="w-full p-6 h-auto border-2 border-slate-200 hover:border-brand-300 hover:bg-brand-50 rounded-2xl transition-all duration-300 group"
                          >
                            <div className="flex items-center space-x-4 w-full">
                              <div className={`p-3 rounded-xl bg-slate-100 group-hover:bg-white transition-colors`}>
                                {(() => {
                                  const OptionIcon = option.icon
                                  return <OptionIcon className={`w-6 h-6 ${option.color}`} />
                                })()}
                              </div>
                              <span className="text-lg font-medium text-slate-700 group-hover:text-slate-800">
                                {option.text}
                              </span>
                            </div>
                          </Button>
                        </motion.div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex justify-between items-center">
                <Button variant="ghost" onClick={goBack} className="text-slate-600 hover:text-slate-800">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
                <div className="text-sm text-slate-500">
                  {answers.length > 0 && `${answers.length} answer${answers.length > 1 ? "s" : ""} recorded`}
                </div>
              </div>
            </motion.div>
          )}

          {/* Results */}
          {currentStep === "results" && (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <motion.div
                  className={`w-24 h-24 bg-gradient-to-br from-${healthStatus.color}-500 to-${healthStatus.color}-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <healthStatus.icon className="w-12 h-12 text-white" />
                </motion.div>

                <motion.h1
                  className="text-4xl md:text-5xl font-bold text-slate-800 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Health Status: {healthStatus.status}
                </motion.h1>

                <motion.p
                  className="text-xl text-slate-600 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  {healthStatus.message}
                </motion.p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Health Score */}
                <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}>
                  <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm rounded-3xl">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-slate-800 flex items-center space-x-2">
                        <Zap className="w-5 h-5 text-brand-600" />
                        <span>Your Responses</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {answers.map((answer, index) => (
                        <div key={index} className="flex justify-between items-center py-2">
                          <span className="text-sm text-slate-600">
                            {questions.find((q) => q.id === answer.questionId)?.title.split("?")[0]}
                          </span>
                          <span className="text-sm font-medium text-slate-800">{answer.text}</span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Recommendations */}
                <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.0 }}>
                  <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm rounded-3xl">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-slate-800 flex items-center space-x-2">
                        <Sparkles className="w-5 h-5 text-brand-600" />
                        <span>Recommendations</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {getRecommendations().map((rec, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-brand-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-700">{rec}</span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* CTA Section */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <Card className="border-0 shadow-2xl bg-gradient-to-br from-brand-50 to-accent-50 rounded-3xl">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">Ready to give your device some love?</h3>
                    <p className="text-lg text-slate-600 mb-8">
                      Our expert technicians are here to help keep your technology running smoothly. Get a personalized
                      service plan today!
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-brand-500 to-accent-600 hover:from-brand-600 hover:to-accent-700 text-white px-8 py-6 text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
                      >
                        <Calendar className="w-5 h-5 mr-2" />
                        Schedule Service
                      </Button>

                      <Button
                        variant="outline"
                        size="lg"
                        className="border-2 border-brand-200 text-brand-700 hover:bg-brand-50 px-8 py-6 text-lg rounded-2xl bg-transparent"
                      >
                        <Phone className="w-5 h-5 mr-2" />
                        Call Us Now
                      </Button>
                    </div>

                    <div className="flex justify-center items-center space-x-6 text-sm text-slate-500 mb-4">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4" />
                        <span>(555) 123-TECH</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4" />
                        <span>hello@bambu.tech</span>
                      </div>
                    </div>

                    <Button variant="ghost" onClick={resetHealthCheck} className="text-slate-500 hover:text-slate-700">
                      Take Another Health Check
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
