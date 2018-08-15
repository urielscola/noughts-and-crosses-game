import React from 'react';
import { mount } from 'enzyme';

import HeaderContainer from './HeaderContainer';
import Root from 'Components/Root';

let wrapped;

describe('Board features', () => {

    beforeEach(() => {
        wrapped = mount(
            <Root>
                <HeaderContainer />
            </Root>
        );
    });
    
    afterEach(() => {
        wrapped.unmount();
    });

    it('Possui a estrutura HTML correta', () => {
        expect(wrapped.find(HeaderContainer).length).toEqual(1);
    });

});
