import { LoginUser } from "./LoginUser";
import { Outlet } from "react-router-dom";

const useAuthentication = () =>{

        var id = localStorage.getItem("id");
        return id ? true : false;
}

const ProtectedRoutes = () =>{

    //useAuth () --> custome hook  ---> return boolea
    const auth = useAuthentication();

return auth ? <Outlet/>: <LoginUser/>
}

export default ProtectedRoutes