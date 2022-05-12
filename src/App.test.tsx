import React from 'react';
import { getByTestId, getByText, render, screen } from '@testing-library/react';
import App from './App';
import Contacts from './Contact';
import Card from './Contact';
import '@testing-library/jest-dom'
test('renders learn react link', () => {
  const {container, getByText} = render(<App />);
  expect(getByText('Please enter the input')).toBeInTheDocument()
  // expect(container.nextSibling).toMatchInlineSnapshot(`
  // <label>Please enter the input </label> 
  // `)
});



test('Should button click enabled or not.', () => {
  const {container, getByTestId} = render(<Contacts />);
  expect(getByTestId('button')).toBeEnabled()
  
});
test('Should button click enabled or not.', () => {
  const {container, getByTestId} = render(<Contacts />);
  expect(getByTestId('button')).toBeEnabled()
  
});


test('Should button click enabled or not.', () => {
  const {container, getByTestId} = render(<Contacts />);
  const ancestor = getByTestId('ancestor')
  const descendant = getByTestId('descendant')
  expect(ancestor).toContainElement(descendant)
  expect(descendant).not.toContainElement(ancestor)
});




/*test('Should check form page contains', () => {
  const {container, getByText} = render(<Contacts />);
  const ancestor = getByTestId('ancestor')
const descendant = getByTestId('descendant')
const nonExistantElement = getByTestId('does-not-exist')

expect(ancestor).toContainElement(descendant)
expect(descendant).not.toContainElement(ancestor)
  
});
*/

// test('renders a message', () => {
//   const {container, getByText} = render(<Greeting />)

//   expect(getByText('Hello, world!')).toBeInTheDocument()
//   expect(container.firstChild).toMatchInlineSnapshot(`
//     <h1>Hello, World!</h1>
//   `)
// })

