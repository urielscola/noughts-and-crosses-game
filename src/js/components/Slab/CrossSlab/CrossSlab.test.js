import React from 'react';
import { shallow } from 'enzyme';
import CrossSlab from './CrossSlab';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<CrossSlab />);
});

afterEach(() => {
  wrapped.unmount();
});

describe('Cross Slab features', () => {
  it('Possui a estrutura HTML correta', () => {
    expect(wrapped.find('.cross-slab').length).toEqual(1);
    expect(wrapped.find('span').length).toEqual(2);
  });
});
