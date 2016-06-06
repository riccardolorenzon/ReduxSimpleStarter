import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders something', () => {
    expect(component).to.contain('React simple starter');
  });
  it('shows the correct text', () => {
    // use 'expect' to make an 'assertion' about a target
    expect
  });
});
