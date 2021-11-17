import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue, selectorFamily } from 'recoil';
import { Suspense } from 'react';
import ErrorBoundary from '../utils/ErrorBoundary';

// atoms
const simpleAtom = atom({
    key: 'SimpleAtom',
    default: 1,
});

const anotherSimpleAtom = atom({
    key: 'AnotherSimpleAtom',
    default: 2,
});

// atomFamily

// selectors
const combinedSimpleAtomsState = selector({
    key: 'SimpleAtomSelector',
    get: ({ get }) => {
      const simple = get(simpleAtom);
      const another = get(anotherSimpleAtom);

      return simple + another
    },
});

// async selectors
const asyncResolveSimpleAtomState = selector({
    key: 'AsyncResolveSimpleAtomSelector',
    get: async ({get}) => {
        await new Promise(resolve => setTimeout(resolve, 2000));
        return get(simpleAtom);
    },
})

const asyncRejectSimpleAtomState = selector({
    key: 'AsyncRejectSimpleAtomSelector',
    get: async ({get}) => {
        await new Promise((__, reject) => setTimeout(() => reject('boom!'), 3000));
        return get(simpleAtom);
    },
})

// async's + waitForAll | waitForNone

// selectorFamily
const combinedParametrizedSimpleAtomsState = selectorFamily({
    key: 'ParametrizedSimpleAtomSelector',
    get: (additionalValue: number) => ({ get }) => {
      return additionalValue + get(combinedSimpleAtomsState);
    },
});

// Components / Examples 
function AsyncResolveSimpleComponent() {
    const asynsSimpleValue = useRecoilValue(asyncResolveSimpleAtomState);
    return <p>Async Simple Atom {asynsSimpleValue}</p>
}
function AsyncRejectSimpleComponent() {
    const asynsSimpleValue = useRecoilValue(asyncRejectSimpleAtomState);
    return null; // this should blow up due to async reject!
}

function Recoil () {
    // writable
    const [simpleAtomValue, setSimpleAtomValue] = useRecoilState(simpleAtom)
    // readonly
    const combinedValue = useRecoilValue(combinedSimpleAtomsState);
    const parametrizedValue = useRecoilValue(combinedParametrizedSimpleAtomsState(5));

    // ++ useRecoilCallback
    // useRecoilRefresher_UNSTABLE() 

    return (
        <>
            <h2>Recoil App (cannot be used with server-side rendering)</h2>

            <p>SimpleAtom</p>
            <p>(useRecoilState): {simpleAtomValue}</p>
            <p>(useRecoilValue - combined): {combinedValue}</p>
            <p>(useRecoilValue - parametrized): {parametrizedValue}</p>
            <Suspense fallback={<div>Loading Async Simple Atom...</div>}>
                <AsyncResolveSimpleComponent />
            </Suspense>

            <ErrorBoundary>
                {
                    (error: boolean) => error ? (
                        <p>Something blowed up!</p>
                    ) : (
                        <Suspense fallback={<div>Loading Async Simple Atom...</div>}>
                            <AsyncRejectSimpleComponent />
                        </Suspense>
                    )
                }
            </ErrorBoundary>


            <button onClick={() => setSimpleAtomValue(3)}>Change simple atom</button>
        </>
    )
}

export default function RecoilWrapper() {
    return (
        <RecoilRoot>
            <Recoil />
        </RecoilRoot>
    )
}