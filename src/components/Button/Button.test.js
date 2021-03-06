import React from 'react';
import Button from '.';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

describe('Button', () => {
  it('should render a button', () => {
    const tree = renderer.create(<Button/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should trigger onClick on button press', () => {
    const wrapper = shallow(<Button buttonText = "yo" onClick={jest.fn()}/>);
    console.log(wrapper.debug());
    wrapper.find('button').simulate('click');
    expect(wrapper.instance().props.onClick).toHaveBeenCalled();
  });
});