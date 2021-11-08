import React, { useCallback } from "react";
import { Link, useNavigate, Routes, Route } from "react-router-dom";

import { Page0 } from './Page0';
import { Page1 } from './Page1';
import { Page2 } from './Page2';
import { Subpage1 } from './Page2/Subpage1';
import { Subpage2 } from './Page2/Subpage2';
import { SubpageX } from './Page2/SubpageX'
import { Page3 } from './Page3';
import { LayoutRoute1 } from "./Page3/LayoutRoute1";
import { LayoutRoute2 } from "./Page3/LayoutRoute2";

function Routing() {
    const navigate = useNavigate();
    const navigateFn = useCallback(() => navigate('/page1', { state: 'Navigate push state' }), [navigate]);

    return (
        <>
            <h2>Routing</h2>

            <nav>
                <button onClick={navigateFn}>Navigate with state (Page1 - Default!)</button><br/>
                
                <Link to="/page2">Page2</Link><br/>

                <Link to="/layoutRoute1">Layout Route (Page 3) - 1</Link><br/>
                <Link to="/layoutRoute2">Layout Route (Page 3) - 2</Link><br/>
            </nav>

            <Routes>
                <Route path="/" element={<Page0 />} />

                {/* Checks descendant routes (*) + nested useRoute + better param matching! */}
                <Route path="page1/*" element={<Page1 />} />

                {/* Checks Outlet + Index Route (same as parent) */}
                <Route path="page2" element={<Page2 />}>
                    {/* index -> default/matching parent */}
                    <Route index element={<Subpage1 />} />
                    {/* Normal route */}
                    <Route path="subpage2" element={<Subpage2 />} />
                    {/* "*" -> other */}
                    <Route path="*" element={<SubpageX />} />
                </Route>

                {/* Checks Layout Routes - no path (treat as high order route ;D) */}
                <Route element={<Page3 />}>
                    <Route path="layoutRoute1" element={<LayoutRoute1 />} />
                    <Route path="layoutRoute2" element={<LayoutRoute2 />} />
                </Route>

                {/* Missing  */}
            </Routes>
        </>
    )
}

export default React.memo(Routing);