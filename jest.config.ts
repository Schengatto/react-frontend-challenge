import type { Config } from "@jest/types";

// To have consistent date time parsing both in local and CI environments we set
// the timezone of the Node process. https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/27738
process.env.TZ = "CET";

const config: Config.InitialOptions = {
    testEnvironment: "jsdom",
    bail: false,
    collectCoverageFrom: [
        "src/**/*.{ts,js,tsx}",
        "!src/**/*d.ts",
    ],
    setupFilesAfterEnv: [ "./test-setup.ts" ],
    coverageReporters: [ "text", "cobertura", "html" ],
    reporters: [ "default", "jest-junit" ],
    moduleFileExtensions: [ "js", "ts", "json", "vue" ],
    moduleNameMapper: {
        "\\.(scss|sass|css)$": "identity-obj-proxy",
        // This must be the last one (from most specific to most generic)
        "^@/(.*)$": "<rootDir>/src/$1"
    },
    testMatch: undefined,
    testRegex: "(/__tests__/.*/.test/.*|(\\.|/)(test))\\.(jsx?|tsx?)$",
    transform: {
        "^.+\\.tsx?$": "ts-jest",
        "^.+\\.jsx?$": "babel-jest",
        ".+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
    },
    modulePathIgnorePatterns: [ "tests/e2e/", ".*.stories.*" ],
    transformIgnorePatterns: [ "[/\\\\]node_modules[/\\\\]).+\\.js$" ],
    globals: {
        "ts-jest": {
            diagnostics: false,
        },
    },
};
export default config;
