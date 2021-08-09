module.exports = {
  transform: {
    "^.+\\.[jt]sx?$": `<rootDir>/tests/jest-preprocess.ts`,
},
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.ts`,
  },
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
  setupFiles: [`<rootDir>/tests/loadershim.ts`],
  testEnvironment: `jsdom`,
  setupFilesAfterEnv: ["<rootDir>/tests/setup-test-env.ts"],
  snapshotResolver: "<rootDir>/tests/snapshotResolver.ts",
  
}
