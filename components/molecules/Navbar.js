import Logo from "@atoms/image/Logo";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Badge from "@atoms/typography/Badge";
import { useState } from "react";
import { logout } from "redux/reducer/auth/action";

export default function Navbar() {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const [menus, setMenus] = useState(false);
    return (
        <div className='flex shadow-xl h-16 w-full items-center px-5 sticky top-0 z-50 bg-white'>
            <div>silang</div>
            <div className="absolute right-0 px-5 cursor-pointer">
                <div className="flex items-center mb-2" onClick={() => setMenus(!menus) }>
                    <div className="shadow-lg rounded-full flex">
                        <Image src="/img/logo.png" width={35} height={35} className="rounded-full object-cover m-auto"/>
                    </div>
                    <div className="ml-2 text-sm">
                        {state?.auth?.logged?.company?.name || null}
                    </div>
                </div>
                <div className={`${!menus && 'hidden'} fixed bg-white w-64 rounded-lg right-5 border shadow-2xl p-3 cursor-default`}>
                    <div className='text-center'>
                        {state?.auth?.logged?.company?.name || null}
                        <hr className="mt-2"/>
                    </div>
                    <div className="flex mt-2 relative cursor-pointer hover:bg-blue-100 rounded-lg p-1">
                        Profile
                    </div>
                    <div className="flex mt-2 relative cursor-pointer hover:bg-blue-100 rounded-lg p-1">
                        Quickpick
                    </div>
                    <div className="flex mt-2 relative cursor-pointer hover:bg-blue-100 rounded-lg p-1">
                        Notification <Badge text="hu" className="absolute right-0" color="bg-red-500"/>
                    </div>
                    <div className="flex mt-2 relative cursor-pointer hover:bg-blue-100 rounded-lg p-1" onClick={() => dispatch(logout())}>
                        Logout
                    </div>
                </div>
            </div>
        </div>
    )
}
