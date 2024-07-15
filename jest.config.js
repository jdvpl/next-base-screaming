// @ts-nocheck
const nextJest = require("next/jest")

const createJestConfig = nextJest({ dir: "./" })

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
    // Add more setup options before each test is run
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js", "<rootDir>/.jest/setupTests.ts"],
    testEnvironment: "jest-environment-jsdom",
    testEnvironmentOptions: {
        customExportConditions: [""],
    },
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
    },
    collectCoverage: true,
}

module.exports = createJestConfig(customJestConfig)