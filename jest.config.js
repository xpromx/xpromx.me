module.exports = {
  roots: ["<rootDir>/src"],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/jest.setup.ts"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  transform: {
    "^.+\\.tsx?$": "babel-jest",
  },
  preset: "ts-jest",
};
