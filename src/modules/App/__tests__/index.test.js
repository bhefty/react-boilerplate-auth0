import React from 'react';
import renderer from 'react-test-renderer'

import App from '../index';

describe('App', () => {
  let auth

  beforeEach(() => {
    auth = jest.fn()
  })

  test('App renders without crashing', () => {
    const tree = renderer.create(
      <App auth={auth} />
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
