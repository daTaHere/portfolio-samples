import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/index';

function App() {
  return (
    <Suspense fallback={<div>Loading app...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
