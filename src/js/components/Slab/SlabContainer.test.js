import React from 'react';
import { mount } from 'enzyme';

import SlabContainer from './SlabContainer';
import Root from 'Components/Root';


let wrapped;


describe('SlabContainer features', () => {

    beforeEach(() => {
        wrapped = mount(
            <Root>
                <SlabContainer slabProps={null}/>
            </Root>
        );
    });
    
    afterEach(() => {
        wrapped.unmount();
    });

    it('Possui a estrutura HTML correta', () => {
        expect(wrapped.find(SlabContainer).length).toEqual(1);
    });

});