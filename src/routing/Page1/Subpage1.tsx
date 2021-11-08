import { useLocation, useParams } from "react-router-dom";

export const Subpage1 = () => {
    const { subpageNumber } = useParams();
    const location = useLocation();
    return (
        <div>
            <h4>Subpage 1 - {subpageNumber || 'Default'} + state: {location.state}</h4>
        </div>
    )
}