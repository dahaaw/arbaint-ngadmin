import Navbar from "@molecules/Navbar";
import Notif from "@molecules/Notif";
import Sidebar from "@molecules/Sidebar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkLogged } from "redux/reducer/auth/action";

export default function Layout({children}) {
    const dispatch = useDispatch();
    const state = useSelector(state => state);    
    console.log(state);
    useEffect(() => {
        dispatch(checkLogged(state.auth.logged));
    }, []);
    
    return (
        <div className="min-h-screen flex">
            <Notif />
            <div>
                <Sidebar />
            </div>
            <div className="w-full">
                <Navbar />
                {/* <script crossorigin src="https://app.sandbox.midtrans.com/snap/snap.js" data-client-key="SB-Mid-client-zxkvGZYYuXIidGRG"></script>
                <button onClick={ () => window.snap.pay('417958ec-4ac9-405b-8a96-00c9a7bf42e2')}>huhu</button> */}
                <div className="p-4">
                    {children}
                </div>
            </div>
        </div>
    )
}
