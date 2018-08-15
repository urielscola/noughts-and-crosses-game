import React from 'react';
import { mount } from 'enzyme';

import Header from './Header';

let wrapped;

describe('Board features', () => {

    beforeEach(() => {
        wrapped = mount(
            <Header message={"X turn's"}/>
        );
    });
    
    afterEach(() => {
        wrapped.unmount();
    });

    it('Possui a estrutura HTML correta', () => {
        expect(wrapped.find(Header).length).toEqual(1);
        expect(wrapped.text()).toEqual("X turn's");
    });

});
