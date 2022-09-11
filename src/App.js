import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
const OtherComponent = React.lazy(() => import('./navbar'));


function App() {
  return (
    <OtherComponent/>
  );
}

export default App;
