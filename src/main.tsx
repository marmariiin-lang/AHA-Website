import { createRoot } from 'react-dom/client';
import { Router } from 'wouter';

import App from './App';
import { ErrorBoundary } from '@/components/error-boundary';

import './index.css';

createRoot(document.getElementById('root')!, {
  // Keeps caught errors off reportError(), which would raise the dev overlay.
  onCaughtError: (error, errorInfo) => {
    console.error(error, errorInfo.componentStack);
  },
}).render(
  <Router base={import.meta.env.BASE_URL}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Router>,
);
