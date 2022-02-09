import Logo from '@atoms/image/Logo';
import { Router, useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link';

export default function Sidebar() {
    const { asPath } = useRouter();
    console.log({asPath});
    const [show, setShow] = useState(true);
    const menu = [
        {
            name: 'DASHBOARDS',
            sub: [
                {
                    name: 'Overview',
                    url: '/',
                    svg: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                },
            ]
        },
        {
            name: 'MASTER',
            sub: [
                {
                    name: 'Product',
                    url: '/master/product',
                    svg: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                },
                {
                    name: 'Hotel',
                    url: '/booking/hotel',
                    svg: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                },
            ]
        },
        
    ];
    return (
        <div className="relative h-full">
            <div className={`${show ? 'w-16' : 'hidden'} h-full group hover:w-72 md:w-72 transition-all duration-500 shadow-xl bg-white absolute`}>
                <div className='p-3 sticky top-0'>
                    <div className='h-10 flex'>
                        <Logo width={"150px"} className="m-auto"/>
                    </div>
                    <hr className='mt-3 shadow-xl' />
                    <div className='mt-3'>
                        {menu.map((mn, i )=> <div className='text-blue-600 text-sm mt-3'>
                            <div className='h-4 mb-3'>
                                <b className='hidden group-hover:block md:block'>{mn.name}</b>
                                <div className='md:hidden group-hover:hidden h-full'>
                                    <div className='pt-2'><hr className='border-blue-400 '/></div>

                                </div>
                            </div>
                            {mn.sub.map((sb, isb) => <Link href={sb.url}>
                                <div className='flex h-full'>
                                    <div className={`px-2.5 py-2 w-full hover:bg-blue-100 ${asPath === sb.url && 'bg-blue-100'} rounded-lg flex cursor-pointer`}>
                                        <div>
                                            {sb.svg}    
                                        </div>
                                        <b className='hidden group-hover:block md:block text-black text-sm ml-3'>{sb.name}</b>
                                    </div>
                                </div>
                            </Link>)}
                        </div>)}
                        
                    </div>
                </div>
            </div>
            <div className={`${show ? 'w-16' : 'hidden'} h-full group md:w-72 transition-all duration-500 shadow-xl bg-white`}>
            </div>
        </div>
    )
}
