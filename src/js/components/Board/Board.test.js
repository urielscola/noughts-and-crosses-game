import React from 'react';
import { mount } from 'enzyme';

import Board from './Board';
import Root from 'Components/Root';

let wrapped;

describe('Board features', () => {

    beforeEach(() => {
        wrapped = mount(
            <Root>
                <Board board={[null, null, null, null, null, null, null, null, null]}/>
            </Root>
        );
    });
    
    afterEach(() => {
        wrapped.unmount();
    });

    it('Possui a estrutura HTML correta', () => {
        expect(wrapped.find('li').length).toEqual(9);
        expect(wrapped.find('button').length).toEqual(1);
        expect(wrapped.find('button').text()).toEqual('Reset');
    });

});
