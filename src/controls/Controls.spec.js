// Test away!
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Controls from './Controls';

let wrapper;
beforeEach(() => {
    wrapper = rtl.render(<Controls locked={false} closed={false} />);
});
// afterEach(rtl.cleanup);

describe('Controls component', () => {
    test('provide buttons to toggle the closed and locked states', () => {
        expect(wrapper.getByTestId('toggleLocked')).toBeInTheDocument();
        expect(wrapper.getByTestId('toggleClosed')).toBeInTheDocument();
    });
    test('the closed toggle button is disabled if the gate is locked', () => {
        rtl.cleanup();
        wrapper = rtl.render(<Controls locked={true} closed={true} />)
        expect(wrapper.getByTestId('toggleClosed')).toBeDisabled();
    });
    test('the locked toggle button is disabled if the gate is open', () => {
        rtl.cleanup();
        wrapper = rtl.render(<Controls locked={false} closed={false} />)
        expect(wrapper.getByTestId('toggleLocked')).toBeDisabled();
    })
})