import React from 'react';
import Counter from '.';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
describe('Counter', () => {
  it('should render counter', () => {
    const tree = renderer.create(<Counter/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should set initial value', () => {
    const wrapper = shallow(<Counter initialValue={10}/>);
    expect(wrapper.instance().state.counter).toEqual(10);
  })
  it('should set increment counter on increment', () => {
    const wrapper = shallow(<Counter initialValue={10}/>);
    wrapper.instance().increment();
    expect(wrapper.instance().state.counter).toEqual(11);
  })
  it('should set decrement counter on decrement', () => {
    const wrapper = shallow(<Counter initialValue={10}/>);
    wrapper.instance().decrement();
    expect(wrapper.instance().state.counter).toEqual(9);
  })
});