/* eslint-disable eqeqeq */
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react'; 

const Auth=()=>{
    const navigate=useNavigate();
    useEffect(()=>{
        var path=window.location.pathname;
        // eslint-disable-next-line eqeqeq
        if(path=="/admin" || path=="/manageuser"|| path=="/addcategory"|| path=="/addsubcategory")
        {
            if(!localStorage.getItem("token") || localStorage.getItem("role")!="admin")
            navigate("/logout");
        }
        else if(path=="/user")
        {
            if(!localStorage.getItem("token") || localStorage.getItem("role")!="user")
            {
                navigate("/logout");
            }
        }
        else
        {
            if(localStorage.getItem("role")=="admin")
            navigate("/admin");
            else if(localStorage.getItem("role")=="user")
            navigate("/user");
            else 
            navigate("/");
        }
    },[])
    return (
    <></>
    )
}
export default Auth;