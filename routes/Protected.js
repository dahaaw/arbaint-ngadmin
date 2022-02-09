import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "redux/reducer/auth/action";

const isBrowser = () => typeof window !== "undefined";


const ProtectedRoute = ({ router, children }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setProfile());
    }, [])
    

    const state = useSelector(state => state)
    // let isAuthenticated = state.auth.logged !== '';
    let isAuthenticated = true;

    let unProtectedRoute = [
        '/auth/login',
    ];

    let pathIsUnprotected = unProtectedRoute.includes(router.pathname);

    // REDIRECT KALO BELOM LOGIN
    if (isBrowser() && !isAuthenticated && !pathIsUnprotected) router.push('/auth/login')

    // KALO UDAH LOGIN MASUK KE HALAMAN LOGIN
    if (isBrowser() && isAuthenticated && pathIsUnprotected){
        if(router.pathname === '/auth/login') router.back()
        else router.push('/')
    };
    
    return children;
};

export default ProtectedRoute;