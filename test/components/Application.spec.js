import React from 'react';
import { shallow } from 'enzyme';
import Application from 'components/Application';               // new import statement

describe('Application', () => {
  it ('should mount', () => {
    const wrapper = shallow(<Application />);
    expect(wrapper.type()).to.equal('div');
  });
});