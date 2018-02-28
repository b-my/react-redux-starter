import React from 'react';
import {shallow} from 'enzyme';
import App from './app';

describe('App', () => {
  test('It shows the correct text', () => {
    const component = shallow(<App />);
    expect(component.find('div').text()).toEqual('React redux starter');
    expect(component).toMatchSnapshot();
  });
});