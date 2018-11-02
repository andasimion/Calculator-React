import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './Calculator';
import Enzyme, {mount, shallow, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Calculator />, div);
  //ReactDOM.unmountComponentAtNode(div);
});
