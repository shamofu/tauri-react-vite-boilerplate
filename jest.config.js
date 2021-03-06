module.exports = {
  verbose: true,
  collectCoverage: true,
  coverageDirectory: "src-vite/coverage",
  collectCoverageFrom: [
    "src-vite/**",
    "!src-vite/vite.config.js",
    "!src-vite/index.tsx",
    "!src-vite/tests/**",
    "!src-vite/dist/**",
    "!src-vite/coverage/**"
  ]
}
