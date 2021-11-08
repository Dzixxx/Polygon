import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

(ReactDOM as any) // v18 new Root API missing typings ;)
  .createRoot(document.getElementById('root'))
  .render(
    // React Strict Mode run certain callbacks/methods twice (in DEV mode only)
    <StrictMode>
      <App callback={() => console.log('[App callback] fired synchronously when div is added to DOM - App cmp commited!')}/>
    </StrictMode>
  )

requestIdleCallback(() => console.log('[Idle Callback] Low priority'));
setTimeout(() => console.log('[Timeout] React yields first time'), 0);

reportWebVitals(/* console.log */);
