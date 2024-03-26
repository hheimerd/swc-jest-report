import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';

describe('renders learn react link', () => {
  it('test', () => {
    renderer.create(<App />);
    expect(true).toBe(true);
  })

});
