import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';  // needed for toBeInTheDocument etc

import Form from '../src/form';

describe('<Form />', () => {
  test('check button press causes state change', async () => {
    const f = render(<Form />);

    const el = f.getByText(/report card/i);
    expect(el).toBeInstanceOf(HTMLHeadingElement);
    expect(el).toBeInTheDocument();

    const button = f.baseElement.querySelector('button')!;
    expect(button).toBeInstanceOf(HTMLButtonElement);
    button.click();

    const p = f.baseElement.querySelector('p')!;
    await waitFor(() => expect(p).toHaveTextContent('2'));
  });
});
