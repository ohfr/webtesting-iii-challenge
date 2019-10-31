import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import Display from './Display';

test('Displays locked or unlocked', () => {
    const wrapper = rtl.render(<Display />);

    const locked = wrapper.getByText(/locked/i)

    expect(locked).toBeVisible();
    expect(locked.classList).toContain("green-led")
})

test("Displays open or closed", () => {
    const wrapper = rtl.render(<Display />);

    const open = wrapper.getByText(/open/i);

    expect(open).toBeVisible();
    expect(open.classList).toContain("green-led");
})