import React from 'react';
import {useSelector} from "react-redux";

export default function Notif() {
    const state = useSelector(state => state);
    return (
        <div className="fixed z-50 mt-20 left-1/2 transform -translate-x-1/2">
            {state.general.notif.map((v, i) => {
                let bg;
                switch (v.type) {
                    case 'error':
                        bg = 'bg-red-500';       
                        break;

                    case 'info':
                        bg = 'bg-blue-400';       
                        break;

                    case 'success':
                        bg = 'bg-green-500';       
                        break;
                
                    default:
                        bg = 'bg-yellow-400';
                        break;
                }
                
                if(v.type === 'error') bg = 'bg-red-500';
                return <div key={i} className={`px-5 rounded text-white ${bg} mb-2`}>
                    {v.text}
                </div>
            })}
        </div>
    )
}
