import Controls from "./Controls"
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
// Test away!

test("Close Gate button",  async () => {
    const wrapper = rtl.render(<Controls />);
    const close = wrapper.getByText(/close gate/i);

    expect(close).toBeVisible();
})

test("Lock Gate Button", async () => {
    const wrapper = rtl.render(<Controls />);
    const lockButton = wrapper.getByText(/lock gate/i)

    expect(lockButton.disabled).toBeTruthy();

    expect(lockButton).toBeVisible();
})