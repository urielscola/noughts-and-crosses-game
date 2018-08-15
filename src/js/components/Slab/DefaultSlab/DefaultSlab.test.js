import React from 'react';
import { mount } from 'enzyme';

import DefaultSlab from './DefaultSlab';
import NoughtSlab from '../NoughtSlab/NoughtSlab';
import CrossSlab from '../CrossSlab/CrossSlab';


let wrapped;


describe('DefaultSlab + NoughtSlab features', () => {

    beforeEach(() => {
        wrapped = mount(
            <DefaultSlab>
                <NoughtSlab />
            </DefaultSlab>
        );
    });
    
    afterEach(() => {
        wrapped.unmount();
    });

    it('Possui a estrutura HTML correta', () => {
        expect(wrapped.find(DefaultSlab).length).toEqual(1);
    });
});

describe('DefaultSlab + CrossSlab features', () => {

    beforeEach(() => {
        wrapped = mount(
            <DefaultSlab>
                <CrossSlab />
            </DefaultSlab>
        );
    });
    
    afterEach(() => {
        wrapped.unmount();
    });
    
    it('Possui a estrutura HTML correta', () => {
        expect(wrapped.find(DefaultSlab).length).toEqual(1);
    });
});