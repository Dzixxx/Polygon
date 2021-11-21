import { useState } from "react";
import LogEvents from '../utils/LogEvents';

export default function BatchExample() {
    const [a, setA] = useState(1);
    const [b, setB] = useState(2);
    const [c, setC] = useState(3);
    const [d, setD] = useState(4);
  
    function handleClick() {
      console.log("[BatchExample] -> handleClick");
  
      setA((v) => v + 1); // Will ask for re-render
      setB((v) => v + 1); // Will ask for re-render
      setC((v) => v + 1); // Will ask for re-render
      setD((v) => v + 1); // Will ask for re-render
  
      // React will only re-render once at the end (that's batching!)
    }

    async function handleAsyncClick() {
        console.log("[BatchExample] -> handleAsyncClick");
        await new Promise(r => setTimeout(r, 1))
            
        setA((v) => v + 1); // Will ask for re-render
        setB((v) => v + 1); // Will ask for re-render
        setC((v) => v + 1); // Will ask for re-render
        setD((v) => v + 1); // Will ask for re-render
    
        // React will only re-render once at the end (that's batching!)
    }

    function handlePromiseClick() {
        console.log("[BatchExample] -> handlePromiseClick");
        Promise.resolve()
            .then(() => {
                setA((v) => v + 1); // Will ask for re-render
                setB((v) => v + 1); // Will ask for re-render
                // React will re-render for only once!
            })
            .then(() => {
                setC((v) => v + 1); // Will ask for re-render
                setD((v) => v + 1); // Will ask for re-render
                // React will re-render for only once!
            });
    }

    return (
      <>
        <h2>Batch Example (tricks 'n tips)</h2>
        <button onClick={handleClick}>Change</button>
        <button onClick={handleAsyncClick}>Async Change</button>
        <button onClick={handlePromiseClick}>Promise Chain Change</button>

        <p>a: {a}, b: {b}, c: {c}, d: {d}</p>
        <LogEvents cmp={"BatchExample"}/>
      </>
    );
  }