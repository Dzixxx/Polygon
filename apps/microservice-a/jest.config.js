module.exports = {
  name: 'microservice-a',
  preset: '../../jest.config.js',
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.spec.json',
    }
  },
  coverageDirectory: '../../coverage/apps/microservice-a'
};