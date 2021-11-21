import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import Routing from './routing/Routing';
import RecoilApp from './recoil/Recoil';
import RefExample from "./tips/RefExample";
import BatchExample from './tips/BatchExample';
import TransitionExample from './tips/TransitionExample'

function App(props: {
  callback: () => void
}) {
  useEffect(() => {
    console.log('[App] -> [useEffect] (called after repaint)');
  }, []);

  return (
    <div ref={props.callback}>
      <h1> Welcome on Dzixxx Polygon </h1>

      {/* Checking Router v6 */}
      <BrowserRouter>
        <Routing />
      </BrowserRouter>

      {/* Recoil with Suspense */}
      <RecoilApp />

      {/* React hooks knowledge sharing */}
      <RefExample />
      <BatchExample />
      <TransitionExample />
    </div>
  );
}

export default App;
