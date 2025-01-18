import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return <h1>Hello from React 18!</h1>;
}

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);

