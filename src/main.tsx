import ReactDOM from 'react-dom/client';

import { Cards } from './components/Cards';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <div style={{ display: 'flex', width: '100vw', justifyContent: 'center' }}>
    <Cards />
  </div>
);
