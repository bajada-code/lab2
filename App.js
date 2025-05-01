import React from 'react';
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <RegistrationForm />
    </div>
  );
}

export default App;

// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
