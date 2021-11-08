import React, { memo } from 'react';
import { Link, useLocation, useRoutes } from "react-router-dom";

import { Subpage1 } from './Subpage1';
import { Subpage2 } from './Subpage2';

export const Page1 = memo(() => {
    const location = useLocation();
    const element = useRoutes([
        // behave like index!
        {
            path: '',
            element: <Subpage1 />
        },
        // order should not be problematic now!
        {
            path: ':subpageNumber',
            element: <Subpage1 />
        },
        {
            path: 'subpage2',
            element: <Subpage2 />
        }
    ])

    return (
        <div>
            <h3>Page 1 ({location.pathname}) + state ({location.state})</h3>

            <Link to="12345" state={"Link push state"}>Subpage1</Link><br/>
            <Link to="subpage2">Subpage2</Link><br/>

            {element}
        </div>
    )
}, () => false)