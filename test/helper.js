import React from 'react';
import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from '../src/reducers'

export const renderWithProvider = (ComponentClass, props = {}, state) => {
  const instance = mount(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );
  return instance.find(ComponentClass);
};