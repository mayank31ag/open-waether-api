import { render, screen } from '@testing-library/react';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
configure({ adapter: new Adapter() });

test('renders learn react link', () => {
  const Appel = shallow(<App />);
  expect(Appel).toBeTruthy();
});
