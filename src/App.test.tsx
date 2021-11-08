import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('works', () => {
  render(<App callback={() => null} />);
  expect(1).toEqual(1);
});
