import { Outlet, Link } from 'react-router-dom';

export const Page2 = () => (
    <div>
        <h3>Page 2</h3>

        <Link to="subpage2">Page2 Subpage2 </Link><br/>
        <Link to="subpageX">Page2 SubpageX</Link><br/>

        <Outlet />
    </div>
)
