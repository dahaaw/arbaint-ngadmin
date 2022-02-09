import Button from '@atoms/form/Button';
import Input from '@atoms/form/Input';
import Logo from '@atoms/image/Logo';
import Notif from '@molecules/Notif';
import Link from 'next/link';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginFunction } from 'redux/reducer/auth/action';

export default function Login() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    return (
        <div className='flex'>
            <Notif />
            <div className="w-full md:w-5/12 h-screen flex">
                <div className='text-black w-full p-16 m-auto'>
                    <div >
                        <Logo />
                    </div>
                    <div className='mb-4'>
                        Selamat datang,<br />
                        Silakan sign-in untuk memulai
                    </div>
                    <div className='mb-4'> 
                        <Input placeholder='email' onChange={(e) => setEmail(e.target.value)} value={email}/>
                    </div>
                    <div className='mb-4'>
                        <Input placeholder='password' type='password' onChange={(e) => setPassword(e.target.value)} value={password}/>
                    </div>
                    <div className='mb-4'>
                        <Button text={'LOGIN KE PORTAL'} className="bg-blue-500 w-full" bold={true} onClick={() => dispatch(loginFunction(email, password))} />
                    </div>
                    <div className="mb-4 text-sm cursor-pointer text-blue-500">
                        Lupan kata sandi ?
                    </div>
                    <div className='text-sm'>
                        Belum memiliki akun ? <Link href="/auth/register"><span className='text-blue-500 cursor-pointer'>Daftar</span></Link>
                    </div>
                </div>
            </div>
            <div className='w-0 md:w-7/12 bg-blue-500 flex'>
                <div className='m-auto text-white'>Pelajari Lebih Lanjut</div>
            </div>
        </div>
    )
}
