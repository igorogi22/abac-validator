module.exports = {
    collectCoverage: false,
    collectCoverageFrom: ['src/**/*', '!src/types/**/*'],
    coverageThreshold: {
      global: {
        branches: 50,
        functions: 95,
        lines: 92,
        statements: 92,
      },
    },
    transform: {
      '^.spec.ts?$': [
        'ts-jest',
        {
          tsconfig: 'tests/tsconfig.json',
          diagnostics: {
            ignoreCodes: ['TS151001'],
          },
        }
      ],
    },
    moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
    moduleDirectories: ['node_modules', 'src'],
    preset: 'ts-jest',
    testRegex: '__tests__/.*?\\.(test|spec)\\.tsx?$',
    verbose: false,
  };