import React from 'react';
import Notif from '@molecules/Notif';

export default function LayoutAuth({children}) {
    return (
        <>
            <Notif />
            <div className="flex bg-auth bg-cover h-screen">
                <div className="m-auto bg-white rounded w-auth">
                    {children}


                    <div className="bottom-0 flex px-12 py-5 rounded-tr bg-gray-200">
                        Belum punya akun? Daftar sekarang!
                        <button className="ml-8 border px-1 rounded border-black text-sm">Daftar</button> 
                    </div>
                </div>
            </div>   
        </>
    )
}
