import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/styles/global.scss';
import favicon from '@/assets/favicon.png';
import App from './App.tsx';

document.title = '奕行智能 API 网关';

const faviconEl = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
if (faviconEl) {
  faviconEl.href = favicon;
  faviconEl.type = 'image/png';
} else {
  const newFavicon = document.createElement('link');
  newFavicon.rel = 'icon';
  newFavicon.type = 'image/png';
  newFavicon.href = favicon;
  document.head.appendChild(newFavicon);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
