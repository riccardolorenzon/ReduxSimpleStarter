import { renderComponent , expect } from '../test_helper';
import app from '../../src/components/app';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(app);
  });

  it('shows a comment box', () => {
    expect(component.find('.comment-box')).to.exist;
  });

  it('shows a comment list', () => {
    expect(component.find('.comment-list')).to.exist;
  });
});
