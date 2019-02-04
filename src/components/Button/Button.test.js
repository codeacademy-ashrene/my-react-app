import React from 'react';
import Button from '.';
import renderer from 'react-test-renderer';

describe('Button', () => {
  it('should render a button', () => {
    const tree = renderer.create(<Button/>).toJSON();
    expect(tree).toMatchSnapshot();

  });
});