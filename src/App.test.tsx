import React from 'react';
import { getByText, render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const {container, getByText} = render(<App />);
  expect(getByText('Please enter the input')).toBeInTheDocument()// 
  // expect(container.nextSibling).toMatchInlineSnapshot(`
  // <label>Please enter the input </label> 
  // `)
});

// test('renders a message', () => {
//   const {container, getByText} = render(<Greeting />)

//   expect(getByText('Hello, world!')).toBeInTheDocument()
//   expect(container.firstChild).toMatchInlineSnapshot(`
//     <h1>Hello, World!</h1>
//   `)
// })

