import { memo } from "react";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from './routing/Routing';

function App(props: {
  callback: () => void
}) {
  useEffect(() => {
    console.log('[useEffect] Called after repaint');
  }, []);

  return (
    <div ref={props.callback}>
      <h1> Welcome on Dzixxx Polygon </h1>

      {/* Checking Router v6 */}
      <BrowserRouter>
        <Routing />
      </BrowserRouter>

      {/* Coming soon */}
    </div>
  );
}

export default memo(App);
