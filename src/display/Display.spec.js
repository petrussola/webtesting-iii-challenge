// Test away!
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './Display';


let wrapper;

beforeEach(() => {
    wrapper = rtl.render(<Display />)
})

afterEach(rtl.cleanup);

describe('Display component', () => {
    it('displays if gate is open/closed and if it is locked/unlocked', () => {
        let open = wrapper.queryByText(/open/i);
        let closed = wrapper.queryByText(/closed/i);
        let locked = wrapper.queryByText(/locked/i);
        let unlocked = wrapper.queryByText(/unlocked/i);
        expect((open || closed) && (locked || unlocked)).toBeInTheDocument();
    });
    it('displays Closed if the closed prop is true', () => {
        expect(wrapper.queryByText(/open/i)).toBeInTheDocument();
    });
    it('displays Open if the closed prop is false', () => {
        wrapper = rtl.render(<Display closed={true} />)
        expect(wrapper.queryByText(/close/i)).toBeInTheDocument();
    });
    it('displays Locked if the locked prop is true', () => {
        rtl.cleanup();
        wrapper = rtl.render(<Display locked={true} />)
        expect(wrapper.queryByText(/^locked$/i)).toBeInTheDocument();
    });
    it('displays unlocked if the locked prop is false', () => {
        expect(wrapper.queryByText(/unlocked/i)).toBeInTheDocument();
    });
    it('when locked or closed use the red-led class', () => {
        rtl.cleanup();
        wrapper = rtl.render(<Display locked={true} closed={true} />)
        expect(wrapper.queryByText(/locked/i)).toHaveClass('red-led');
        expect(wrapper.queryByText(/closed/i)).toHaveClass('red-led');
    });
    it('when unlocked or open use the green-led clas', () => {
        rtl.cleanup()
        wrapper = rtl.render(<Display locked={false} closed={false} />);
        expect(wrapper.queryByText(/unlocked/i)).toHaveClass('green-led');
        expect(wrapper.queryByText(/open/i)).toHaveClass('green-led');
    })

})