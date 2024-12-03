import * as React from 'react';
import { createRoot } from 'react-dom/client';
import TestComponent from './components/TestComponent.jsx';

const root = createRoot(document.body);
root.render(
    <React.StrictMode>
      <div>
        <h2>oh yes this is spotify</h2>
        <h1>definetely spotify</h1>
        <TestComponent />
      </div>
    </React.StrictMode>
  );
