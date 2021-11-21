import React, { useCallback, useRef, useState } from "react";
import { fibonacci } from "../utils/functions";
import LogEvents from '../utils/LogEvents';

function ExpensiveCmp({ num }: { num: number }) {
    return <p>{fibonacci(num)}</p>
}

let counterA = 37;
let counterB = 1;
export default function TransitionExample() {
    const [a, setA] = useState(1);
    const [b, setB] = useState(1);
    const [isPending, startTransition] = (React as any).useTransition();
    const actualPending = useRef(isPending);

    console.log(`[TransitionExample] Actual values a:${a}, b: ${b}, isPending: ${isPending}`)

    const changeValue = () => {
        console.log(`[TransitionExample] changeValue - start, a: ${a}`);

        startTransition(() => {
            let transitionValueB = counterA - 1
            setB(transitionValueB); // this setB will be overriden by 2nd transition!!!
            console.log(`[TransitionExample] changeValue - 1st transition, b: ${b}, nextOne: ${transitionValueB}`);
        });
        startTransition(() => {
            let transitionValueB = counterA + 1
            setB(counterA + 1); // this setB will 'override' setB from first transition + THIS VALUE WILL BE SET IN NEXT RERENDER so if we will trigger another changeValue this one will show only render last calculation!!!
            console.log(`[TransitionExample] changeValue - 2nd transition, b: ${b}, nextOne: ${transitionValueB}`);
        });

        const nextValueA = counterA--;
        setA(nextValueA);
        console.log(`[TransitionExample] changeValue - end, a: ${a}, nextOne: ${nextValueA}`);
    }

    const changeValue2 = async () => {
        // FYI this will block UI anyway!
        const tempFibResult = fibonacci(40 - counterB++);
        startTransition(() => {
            // in ADHD approach startTransition will render b from last transition (only one rerender!)
            console.log(`[TransitionExample] Async changeValue3 in startTransition (${tempFibResult})`);
            setB(tempFibResult);
        });
    }

    if (!isPending && actualPending !== isPending) {
        console.log('[TransitionExample] Applies things from pending(&finished) transitions'); // in our case "b"!
    }

    return (
      <>
        <h2>Transitions {isPending && 'IS PENDING'}</h2>

        <button onClick={changeValue}>Check transition order/batching</button>
        <button onClick={changeValue2}>Async fn with startTransition in the middle (ADHD WELCOME)</button>

        <p>a: {a}, b: {b}</p>
        
        <ExpensiveCmp num={a}/>
        <LogEvents cmp={"TransitionExample"}/>
      </>
    );
  }