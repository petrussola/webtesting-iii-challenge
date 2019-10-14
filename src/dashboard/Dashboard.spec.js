// Test away
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './Dashboard';

let wrapper;
beforeEach(() => {
    wrapper = rtl.render(<Dashboard />);
})
afterEach(rtl.cleanup);

describe('Dashboard component', () => {
    test('shows the controls and display', () => {
        expect(wrapper.queryByText(/open/i)).toBeInTheDocument();
        expect(wrapper.queryByText(/unlocked/i)).toBeInTheDocument();
        expect(wrapper.queryByText(/lock gate/i)).toBeInTheDocument();
        expect(wrapper.queryByText(/close gate/i)).toBeInTheDocument();
        
    })
});