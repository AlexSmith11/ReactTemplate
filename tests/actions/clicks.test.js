import { clicks } from '../../src/actions/clicks';

test('Should create a new Action with the correct type and specified value', () => {
  expect(clicks(1)).toEqual({ type: 'SET_CLICKS', value: 1 });
  expect(clicks(2)).toEqual({ type: 'SET_CLICKS', value: 2 });
  expect(clicks(8)).toEqual({ type: 'SET_CLICKS', value: 8 });
});
