import { RouterProvider } from 'react-router-dom';
import {routes} from './Router/routes'

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
