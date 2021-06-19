module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^~/(.*)$': '<rootDir>/src/$1',
    '^vue$': 'vue/dist/vue.common.js',

    '^@atom/(.*)$': '<rootDir>/src/components/Atom/$1',
    '^@molecule/(.*)$': '<rootDir>/src/components/Molecule/$1',
    '^@organism/(.*)$': '<rootDir>/src/components/Organism/$1',
  },
  moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
  collectCoverage: true,
  coverageReporters: ['json-summary'],
  coverageDirectory: './test',
  collectCoverageFrom: [
    '<rootDir>/src/components/**/*.vue',
    '<rootDir>/src/pages/**/*.vue',
  ],
  setupFiles: ['./test/jest.init.js'],
  setupFilesAfterEnv: ['./test/jest.setup.js'],
}
