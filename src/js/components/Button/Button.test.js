import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

let wrapped;

describe('Button features', () => {

  beforeEach(() => {
    wrapped = shallow(<Button text={'Some text'}/>);
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it('Possui a estrutura HTML correta', () => {
    expect(wrapped.find('button').length).toEqual(1);
    expect(wrapped.text()).toEqual('Some text');
  });
});
