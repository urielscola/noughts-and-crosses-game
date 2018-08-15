import React from 'react';
import { shallow } from 'enzyme';
import NoughtSlab from './NoughtSlab';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<NoughtSlab />);
});

afterEach(() => {
  wrapped.unmount();
});

describe('Nought Slab features', () => {
  it('Possui a estrutura HTML correta', () => {
    expect(wrapped.find('.nought-slab').length).toEqual(1);
    expect(wrapped.find('span').length).toEqual(1);
  });
});
