import React from 'react';
import renderer from 'react-test-renderer';

import { App } from '../../../src/components/app/app.js';

test('Component renders, matching snapshot', () => {
  const tree = renderer.create(<App />).toJSON();

  expect(tree).toMatchSnapshot();
});
