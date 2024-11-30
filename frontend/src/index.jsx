import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './store/index.jsx';


createRoot(document.getElementById('root')).render(
  <Provider store={store}> {/* Provider로 전체 애플리케이션을 감쌈 */}
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </Provider>
);
