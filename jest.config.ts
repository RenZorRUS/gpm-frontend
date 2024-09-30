/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest";

const config: Config = {
    clearMocks: true,
    testEnvironment: "jsdom",
    coveragePathIgnorePatterns: ["\\\\node_modules\\\\"],
    moduleDirectories: ["node_modules"],
    moduleFileExtensions: ["js", "mjs", "cjs", "jsx", "ts", "tsx", "json", "node"],
    modulePaths: ["<rootDir>/src"],
    testMatch: ["<rootDir>/src/**/*(*.)+(spec|test).[tj]s?(x)"],
    rootDir: ".",
    setupFilesAfterEnv: ["<rootDir>/config/jest/setupTests.ts"],
    transform: {
        "^.+.tsx?$": [
            "ts-jest",
            {
                diagnostics: {
                    ignoreCodes: ["TS151001"],
                },
                tsconfig: "<rootDir>/tsconfig.app.json",
            },
        ],
    },
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg.*|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "<rootDir>/config/jest/jestEmptyComponent.tsx",
        "\\.(s?css|less|sass)$": "identity-obj-proxy",
        "^@/(.*)$": "<rootDir>/src/$1",
    },
};

export default config;
