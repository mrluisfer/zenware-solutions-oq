// app/polyfills.ts
// -----------------------------------------------------------------------------
// A universal shim for the Next.js runtime.
// Ensures `process.versions.node` exists so libraries that check it don’t crash.
// -----------------------------------------------------------------------------

declare const process: any

if (typeof process !== "undefined") {
  if (!process.versions) process.versions = {}
  if (!process.versions.node || process.versions.node === "") process.versions.node = "20.0.0" // arbitrary non-empty value
}
