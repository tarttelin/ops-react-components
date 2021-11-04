module.exports = {
    roots: ["src"],
    setupFilesAfterEnv: ["./jest.setup.ts"],
    transform: {
      "^.+\\.tsx?$": "ts-jest",
    },
    preset: "ts-jest",
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    testEnvironment: 'jest-environment-jsdom'
  };