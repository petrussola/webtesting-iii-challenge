// Test away!
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './Display';

afterEach(rtl.cleanup);

let wrapper;

describe('Display component', () => {
    it('displays if gate is open/closed and if it is locked/unlocked', () => {
        const wrapper = rtl.render(<Display locked={false} closed={false}/>)
        expect(wrapper.queryByText(/unlocked/i)).toBeInTheDocument();
    })
})