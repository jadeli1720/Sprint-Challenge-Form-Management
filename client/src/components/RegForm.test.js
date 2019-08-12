import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import RegForm from './RegForm';

describe('<RegForm />', () => {
    it('submits', () => {
        let button = false;
        const { getByText } = render(<RegForm onClick={() => (button = true)} />);
        let submitBtn = getByText(/Submit/i);
        fireEvent.click(submitBtn);
        expect(button).toBe(false);
    });
 
    it('should update the inputs when user types', () => {
        const { getByPlaceholderText, getByDisplayValue } = render(<RegForm/>);
        const nameInput = getByPlaceholderText (/username/i);
        const passwordInput = getByPlaceholderText (/password/i);
        const name = 'John';
        const password = 'password';

        fireEvent.change(nameInput, { target: { value:name }});
        getByDisplayValue(name);
        fireEvent.change(passwordInput, { target: { value:password }});
        getByDisplayValue(password);

    })
})