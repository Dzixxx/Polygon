import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import LogEvents from '../utils/LogEvents';

export default function RefExample () {
    const ref = useRef('initial X');
    const [value, setValue] = useState('1');

    console.log('[RefExample] -> [Ref]', ref.current, '[State]', value);

    useEffect(() => {
        ref.current = `modified Y-${value}`;
        console.log('[RefExample] -> [useEffect]', ref.current);
    }, [value])

    useLayoutEffect(() => {
        // nice way to make sure it's up-to-date before any other code runs
        // cause this logs an old value! (before useEffect)
        console.log('[RefExample] -> [useLayoutEffect]', ref.current);
    }, [value])

    const changeStateCb = useCallback(() => {
        console.log('[RefExample] -> Changing value');
        setValue('2');
    }, [value])

    return (
        <>
            <h2>Ref Example (tricks 'n tips)</h2>
            <button onClick={changeStateCb}>Change ref</button>

            <LogEvents cmp={"RefExample"} />
        </>
    )
}
