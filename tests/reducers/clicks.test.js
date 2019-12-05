import clicks from '../../src/reducers/clicks';

test('SET_CLICKS action returns an object with the expected value', () => {
  const state = { value: 0 };
  const action = { type: 'SET_CLICKS', value: 1 };

  expect(clicks(state, action)).toEqual({ value: 1 });
});

test("Using an action that doesn't exist just returns the original state", () => {
  const state = { value: 0 };
  const action = { type: 'NO_EXIST', value: 56 };

  expect(clicks(state, action)).toEqual(state);
});
