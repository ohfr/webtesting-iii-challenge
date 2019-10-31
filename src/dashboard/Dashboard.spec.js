import React from 'react';
import Dashboard from "./Dashboard"
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


// Test away

afterEach(rtl.cleanup);

test("<Dashboard /> screenshot", () => {
    const wrapper = rtl.render(<Dashboard />);

    expect(wrapper.asFragment()).toMatchSnapshot();
})

test('Open Gate Button', async () => {
    const wrapper = rtl.render(<Dashboard />);

    const button = wrapper.getByText(/Close Gate/i);

    rtl.act(() => {
        rtl.fireEvent.click(button);
    })

    const newButton = await wrapper.findByText(/Open Gate/i);

    expect(newButton).toBeVisible();
})

test('Lock Gate Button', async () => {
    const wrapper = rtl.render(<Dashboard />);
    const lock = wrapper.getByText(/lock gate/i);
    const close = wrapper.getByText(/close gate/i);

    rtl.act(() => {
        rtl.fireEvent.click(close)
    })

    rtl.act(() => {
        rtl.fireEvent.click(lock)
    })

    const newButton = await wrapper.findByText(/unlock gate/i)
    expect(newButton).toBeVisible();
    expect(newButton.disabled).toBeFalsy();
})

test('unlocked and open class list', () => {
    const wrapper = rtl.render(<Dashboard />);
    const unlocked = wrapper.getByText(/unlocked/i);
    const open = wrapper.getByText(/open/i);

    expect(unlocked.classList).toContain("green-led");
    expect(open.classList).toContain("green-led");
    
})

test('Locked/Unlocked and LED class get changed', async () => {
    const wrapper = rtl.render(<Dashboard />);
    const lock = wrapper.getByText(/lock gate/i);
    const close = wrapper.getByText(/close gate/i);

    rtl.act(() => {
        rtl.fireEvent.click(close)
    })
    
    rtl.act(() => {
        rtl.fireEvent.click(lock)
    })

    const closed = await wrapper.findByText(/closed/i);
    const locked = await wrapper.findByText(/locked/i);

    expect(closed).toBeVisible();
    expect(locked).toBeVisible();
    expect(closed.classList).toContain("red-led");
    expect(locked.classList).toContain("red-led");
})