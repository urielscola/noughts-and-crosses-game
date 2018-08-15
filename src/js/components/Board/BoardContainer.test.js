import React from 'react';
import { mount } from 'enzyme';

import BoardContainer from './BoardContainer';
import Root from 'Components/Root';

let wrapped;

describe('Board features', () => {

    beforeEach(() => {
        wrapped = mount(
            <Root>
                <BoardContainer />
            </Root>
        );
    });
    
    afterEach(() => {
        wrapped.unmount();
    });

    it('Possui a estrutura HTML correta', () => {
        expect(wrapped.find(BoardContainer).length).toEqual(1);
    });

});
