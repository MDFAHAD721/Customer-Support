Q:1 What is JSX, and why is it used?
Ans : JSX (JavaScript XML) is a syntax extension for JavaScript that allows developers to write HTML-like code inside JavaScript. It is commonly used in React to describe the user interface in a simple and readable way.

JSX makes code easier to write, understand, and maintain. It also allows developers to embed JavaScript expressions inside HTML using curly braces ({}), making it easy to create dynamic and interactive user interfaces. Before the code runs in the browser, JSX is automatically transformed into regular JavaScript using React.createElement().

Q:2 What is the difference between State and Props?

Ans : Props (short for Properties) are used to pass data from a parent component to a child component. Props are read-only, meaning the child component cannot modify them.

State is a component's own data that can change over time. It is managed within the component using the useState hook, and updating the state causes the component to re-render.

Q:3 What is the useState hook, and how does it work?

Ans : The useState hook is a built-in React Hook that allows functional components to manage and update state. It enables components to store dynamic data that can change over time.

The useState hook returns an array containing two values:

The current state value.
A setter function used to update the state.

When the setter function is called, React updates the state and automatically re-renders the component to display the latest data.

Q:4 How can you share state between components in React?

Ans : State can be shared between components by lifting the state up to their closest common parent component. The parent component manages the state and passes it down to child components through props. Child components can also receive the state updater function to modify the shared state.

For larger applications where passing props through many components becomes difficult (known as props drilling), React provides the Context API, and developers often use state management libraries such as Redux Toolkit or Zustand.

Q:5 How is event handling done in React?

Ans : Event handling in React is performed by attaching event handlers to JSX elements using camelCase event names, such as onClick, onChange, and onSubmit. Instead of writing JavaScript code as a string, React passes a function as the event handler.

When an event occurs, React executes the specified function, allowing developers to update the component's state, perform actions, or trigger other logic.
