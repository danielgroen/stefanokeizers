module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js',

    '^@atom/(.*)$': '<rootDir>/components/Atom/$1',
    '^@molecule/(.*)$': '<rootDir>/components/Molecule/$1',
    '^@organism/(.*)$': '<rootDir>/components/Organism/$1',
  },
  moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue',
  ],
  setupFiles: ['./test/jest.init.js'],
  setupFilesAfterEnv: ['./test/jest.setup.js'],
}
