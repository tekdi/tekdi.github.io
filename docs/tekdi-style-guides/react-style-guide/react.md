---
sidebar_position: 2
id: react
title: Style Guide
---
## React Style Guide

This style guide outlines the coding conventions and best practices for writing React code. Following these guidelines will help maintain consistency and readability across your React projects.

### General Guidelines

1. **Use Function Components**
   - Prefer functional components over class components.
   ```jsx
   // Avoid
   class MyComponent extends React.Component {
     render() {
       return <div>Hello, World!</div>;
     }
   }

   // Prefer
   function MyComponent() {
     return <div>Hello, World!</div>;
   }
   ```

2. **Use Hooks for State and Side Effects**
   - Utilize React hooks for managing state and side effects.
   ```jsx
   import { useState, useEffect } from 'react';

   function MyComponent() {
     const [count, setCount] = useState(0);

     useEffect(() => {
       document.title = `Count: ${count}`;
     }, [count]);

     return (
       <div>
         <p>{count}</p>
         <button onClick={() => setCount(count + 1)}>Increment</button>
       </div>
     );
   }
   ```

3. **Component Naming**
   - Use PascalCase for React component names.
   ```jsx
   // Avoid
   function mycomponent() {
     return <div />;
   }

   // Prefer
   function MyComponent() {
     return <div />;
   }
   ```

### JSX Style

1. **Self-Closing Tags**
   - Use self-closing tags for elements without children.
   ```jsx
   // Avoid
   <img src="image.png"></img>

   // Prefer
   <img src="image.png" />
   ```

2. **Quotes in JSX Attributes**
   - Use double quotes for JSX attributes.
   ```jsx
   // Avoid
   <div className='container'></div>

   // Prefer
   <div className="container"></div>
   ```

3. **JSX Bracket Alignment**
   - Align the closing tag of a multi-line JSX element with the opening tag.
   ```jsx
   // Avoid
   <Button
     onClick={handleClick}
     color="blue"
     size="large"
     >
     Click Me
   </Button>

   // Prefer
   <Button
     onClick={handleClick}
     color="blue"
     size="large"
   >
     Click Me
   </Button>
   ```

### Styling and CSS

1. **CSS-in-JS**
   - Use CSS-in-JS libraries like styled-components or emotion for styling.
   ```jsx
   import styled from 'styled-components';

   const Button = styled.button`
     background: blue;
     color: white;
     padding: 10px;
   `;

   function App() {
     return <Button>Click Me</Button>;
   }
   ```

2. **Class Names**
   - Use `camelCase` for CSS class names.
   ```jsx
   // Avoid
   <div className="container-item"></div>

   // Prefer
   <div className="containerItem"></div>
   ```

### State Management

1. **useState for Local State**
   - Use `useState` for managing local component state.
   ```jsx
   const [count, setCount] = useState(0);
   ```

2. **useReducer for Complex State**
   - Use `useReducer` for more complex state logic.
   ```jsx
   const initialState = { count: 0 };

   function reducer(state, action) {
     switch (action.type) {
       case 'increment':
         return { count: state.count + 1 };
       case 'decrement':
         return { count: state.count - 1 };
       default:
         throw new Error();
     }
   }

   function Counter() {
     const [state, dispatch] = useReducer(reducer, initialState);
     return (
       <div>
         <p>{state.count}</p>
         <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
         <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
       </div>
     );
   }
   ```
```