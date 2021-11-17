import { useLayoutEffect } from "react";

export default function LogEvents(props: { cmp: string }) {
    useLayoutEffect(() => {
      console.log(`[LogEvents(${props.cmp})] -> Commit`);
    });
    console.log(`[LogEvents(${props.cmp})] -> Render`);
    return null;
}