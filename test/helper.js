import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from '../src/reducers'

export const renderWithProvider = (ComponentClass, props = {}, state) => {
  const store = createStore(reducers, state);
  const instance = shallow(
    <Provider store={store}>
      <ComponentClass {...props} />
    </Provider>
  );
  return instance.dive({context: {store}});
};