import React from 'react';
import { mount } from 'enzyme';

import App from './App';
import Root from 'Components/Root';
import HeaderContainer from 'Components/Header/HeaderContainer';
import BoardContainer from 'Components/Board/BoardContainer';

let wrapped;

describe('Board features', () => {

    beforeEach(() => {
        wrapped = mount(
            <Root>
                <App />
            </Root>
        );
    });
    
    afterEach(() => {
        wrapped.unmount();
    });

    it('Possui a estrutura HTML correta', () => {
        expect(wrapped.find(App).length).toEqual(1);
        expect(wrapped.find(HeaderContainer).length).toEqual(1);
        expect(wrapped.find(BoardContainer).length).toEqual(1);
    });

});
