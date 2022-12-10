import {Navigate, useOutlet} from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

export const Auth = () => {
    const {user} = useAuth();
    const outlet = useOutlet();

    if (!user) {
        console.log(user);
        return <Navigate to='/' />;
    }

    return (
        <div>
            {outlet}
        </div>
    );
}