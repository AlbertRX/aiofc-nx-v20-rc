/* eslint-disable no-undef */
const matchers = require('jest-extended');
expect.extend(matchers);

jest.setTimeout(60000);

afterEach(() => {
  jest.useRealTimers();
});
