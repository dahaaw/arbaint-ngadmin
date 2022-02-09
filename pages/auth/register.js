import {createRef, useEffect} from 'react';
import Container from '@organism/Container'
import Card from '@molecules/Card';
import Input from '@atoms/form/Input';
import Option from '@atoms/form/Option';
import Notif from '@molecules/Notif';
import Textarea from '@atoms/form/Textarea';
import Formgroup from '@molecules/Formgroup';
import Button from '@atoms/form/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNotif } from 'redux/reducer/general/action';
import Phonevalidation from '@utils/validation/Phonevalidation';
import ReCAPTCHA from 'react-google-recaptcha';
const recaptchaRef = createRef();
import Link from 'next/link';
import { register } from 'redux/reducer/auth/action';
import { getAllCityOption, getAllCountryOption, getAllProvinceOption } from 'redux/reducer/location/action';
import Logo from '@atoms/image/Logo';

export async function getServerSideProps(context) {
    const countryList = await getAllCountryOption(); 
    const provinceList = await getAllProvinceOption();

    return { props: {
        countryList,
        provinceList
    }}
}

export default function Register({countryList, provinceList}) {
    const dispatch = useDispatch();

    // PIC DATA
    const [title, setTitle] = useState('Mr.');
    const [firstName, setFirstName] = useState('Hamdan');
    const [lastName, setLastName] = useState('Awaludin');

    const titleOption = [
        {value: 'Mr.', text: 'Tuan'},
        {value: 'Ms.', text: 'Nona'}
    ];

    const [phoneCode, setPhoneCode] = useState('62');
    const [phone, setPhone] = useState('085210566071');
    const phoneCodeOption = ['60', '61', '62', '63'];
    const phoneChange = (setState ,d) => {
        Phonevalidation(d)
        .then(d => setState(d))
        .catch(e => dispatch(addNotif(e)))
    }

    const [position, setPosition] = useState('Manager');

    // COMPANY DATA
    const [companyName, setCompanyName] = useState("PT. GAGAL MANING");
    const [industry, setIndustry] = useState('Jasi');
    const [taxStatus, setTaxStatus] = useState('pkp');
    const [country, setCountry] = useState('ID');
    const [address, setAddress] = useState('Jl. Raya H. Baping No 100');
    const [province, setProvince] = useState('Jawa Timur');
    const [city, setCity] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [email, setEmail] = useState('');
    const [companyPhoneCode, setCompanyPhoneCode] = useState('62');
    const [companyPhone, setCompanyPhone] = useState('085210566071');
    const [website, setWebsite] = useState('');

    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [tnc, setTnc] = useState(false);
    const [captcha, setCaptcha] = useState('');

    const reCap = () => recaptchaRef.current.execute();
    useEffect(() => {
        reCap();
    }, [])
    const submit  = () => {
        reCap();
        if(password !== passwordConfirm) return dispatch(addNotif('konfirmasi password tidak sama'));

        const data = {
            company_name: companyName,
            website: website,
            tax_status: taxStatus,
            title,
            first: firstName,
            last: lastName,
            position,
            email,
            phone_country: companyPhoneCode,
            phone: companyPhone,
            pic_phone_country: phoneCode,
            pic_phone: phone,
            industry_type: industry,
            address,
            city,
            province,
            country,
            zipcode,
            password,
            captcha
        }
        dispatch(register(data));               
    }

    const [cityList, setCityList] = useState([]);
    const provinceChange = async (id_province) => {
        setProvince(id_province);
        setCityList(await getAllCityOption(id_province))
    }

    return (
        <div className="bg-gray-50">
            <ReCAPTCHA
                ref={recaptchaRef}
                size="invisible"
                sitekey={process.env.NEXT_PUBLIC_GOOGLE_CAPTCHA}
                onChange={(d) => {
                    console.log(d);
                    setCaptcha(d);
                }}
            />
            <Notif />
            <div className="h-16 shadow-xl bg-white">
                <Container className="h-full">
                <div className="flex h-full">
                    <div className="w-3/12 h-full py-1">
                        <Logo />
                    </div>
                    <div className="w-9/12 relative flex items-center">
                        <div className="absolute right-0">
                            
                            <span className="h-ful text-xs text-white bg-blue-500 rounded-xl px-2 py-1 mr-1"><b>1</b></span>
                            Formulir pendaftaran
                        </div>
                    </div>
                </div>
                </Container>
            </div>
            <Container>
                <div className="flex my-8 space-x-4">
                    <div className="w-8/12">

                        {/* PIC FORM */}
                        <Formgroup 
                            title="Beri tahu kami  tentang anda"
                            subtitle="Kami akan menghubungi Anda sebagai Company Person-in-Charge (PIC) untuk proses aktivasi dan pengisian data"
                        >
                            <div className="flex items-center space-x-1 my-2">
                                <div className="w-4/12">Nama Anda</div>
                                <div className="w-2/12">
                                    <Option data={titleOption} onChange={(d) => setTitle(d.target.value)} value={title}/>
                                </div>
                                <div className="w-3/12"><Input onChange={(d) => setFirstName(d.target.value)} value={firstName} /> </div>
                                <div className="w-3/12"><Input onChange={(d) => setLastName(d.target.value)} value={lastName} /> </div>                                    
                            </div>

                            <div className="flex items-center space-x-1 my-2">
                                <div className="w-4/12">Nomor Telepon</div>
                                <div className="w-2/12"><Option data={phoneCodeOption} value={phoneCode} onChange={(d) => setPhoneCode(d.target.value)} /> </div>
                                <div className="w-6/12"><Input mode='phone' onChange={(d) => phoneChange(setPhone, d.target.value)} value={phone} /> </div>
                            </div>

                            <div className="flex items-center space-x-1 my-2">
                                <div className="w-4/12">Jabatan</div>
                                <div className="w-8/12"><Input onChange={(d) => setPosition(d.target.value)} value={position} /> </div>
                            </div>
                        </Formgroup>

                        <Formgroup title="Detail Perusahaan">
                            <div className="flex items-center space-x-1 my-2">
                                <div className="w-4/12">Nama Perusahaan</div>
                                <div className="w-8/12"><Input onChange={(d) => setCompanyName(d.target.value)} value={companyName} /> </div>                                  
                            </div>
                            <div className="flex items-center space-x-1 my-2">
                                <div className="w-4/12">Jenis Industri</div>
                                <div className="w-8/12">
                                    <Option data={['Jasa', 'Jasi']} value={industry} onChange={(d) => setIndustry(d.target.value)} />
                                </div>
                            </div>
                            <div className="flex items-center space-x-1 my-2">
                                <div className="w-4/12">Status Pajak</div>
                                <div className="w-8/12">
                                    <Option data={[{text:'Non PKP', value: 'non_pkp'}, {value:'pkp', text: 'PKP'}]} value={taxStatus} onChange={(d) => setTaxStatus(d.target.value)} />
                                </div>
                            </div>
                            <div className="flex items-center space-x-1 my-2">
                                <div className="w-4/12">Negara</div>
                                <div className="w-8/12">
                                    <Option mode="country" data={countryList} value={country} onChange={(d) => setCountry(d.target.value)} />
                                </div>
                            </div>

                            <div className="flex items-start space-x-1 my-2">
                                <div className="w-4/12">Alamat Perusahaan</div>
                                <div className="w-8/12">
                                    <Textarea placeholder="Alamat perusahaan" value={address} onChange={(d) => setAddress(d.target.value)} />                                    
                                </div>
                            </div>
                            <div className="flex items-center space-x-1 my-2">
                                <div className="w-4/12"></div>
                                <div className="w-4/12">
                                    <Option selected="Pilih provinsi" data={provinceList} value={province} onChange={(d) => provinceChange(d.target.value)} />
                                </div>
                                <div className="w-4/12">
                                    <Option selected={!cityList.length && "Provinsi belum dipilih"} data={cityList} value={city} onChange={(d) => setCity(d.target.value)} />
                                </div>
                            </div>
                            <div className="flex items-center space-x-1 my-2">
                                <div className="w-4/12"></div>
                                <div className="w-4/12">
                                    <Input placeholder="kode pos" value={zipcode} onChange={d => setZipcode(d.target.value)}/>
                                </div>
                                <div className="w-4/12"></div>
                            </div>

                            <div className="flex items-center space-x-1 my-2">
                                <div className="w-4/12">Email Perusahaan</div>
                                <div className="w-8/12">
                                    <Input type="email" placeholder="email" value={email} onChange={d => setEmail(d.target.value)}/>
                                </div>
                            </div>

                            <div className="flex items-center space-x-1 my-2">
                                <div className="w-4/12">Telepon Perusahaan</div>
                                <div className="w-2/12"><Option data={phoneCodeOption} value={companyPhoneCode} onChange={(d) => setCompanyPhoneCode(d.target.value)} /> </div>
                                <div className="w-6/12"><Input onChange={(d) => phoneChange(setCompanyPhone ,d.target.value)} value={companyPhone} /> </div>
                            </div>

                            <div className="flex items-center space-x-1 my-2">
                                <div className="w-4/12">Website Perusahaan</div>
                                <div className="w-8/12"><Input placeholder="opsional" onChange={(d) => setWebsite(d.target.value)} value={website} /> </div>
                            </div>
                        </Formgroup>

                        <Formgroup title="Pengaturan Password">
                            <div className="flex items-center space-x-1 my-2">
                                <div className="w-4/12">Password</div>
                                <div className="w-4/12"><Input type="password" placeholder="password" onChange={(d) => setPassword(d.target.value)} value={password} /> </div>
                                <div className="w-4/12"><Input type="password" placeholder="konfirmasi password" onChange={(d) => setPasswordConfirm(d.target.value)} value={passwordConfirm} /> </div>
                            </div>

                            <hr className="w-full my-5" />

                            <p>Syarat dan Ketentuan</p>
                            <div className="cursor-pointer" onClick={(()=> setTnc(!tnc))}>
                                <Input type="checkbox" checked={tnc} onChange={() => setTnc(!tnc)} className="mr-2" width="w-auto" />
                                Saya telah membaca dan menyetujui untuk menerima <a>Syarat dan ketentuan yang berlaku</a>.
                            </div>

                        </Formgroup>

                        <div className="flex">
                            <div className="w-6/12">
                                <Link href="/auth/login"><Button text="Batalkan untuk ke halaman login" className="bg-red-400 w-full" /></Link>
                            </div>
                            <div className="w-6/12">
                                <Button text="Lanjutkan untuk mendaftar sekarang" className="bg-blue-400 w-full" onClick={() => submit()} />
                            </div>
                        </div>
                    </div>


                    <div className="w-4/12">

                        <Card title="Mengapa kami membutuhkan informasi anda">
                            <div className="text-justify">
                                <p className="mb-2">Untuk memvalidasi informasi perusahaan Anda, kami perlu menghubungi Anda atau seseorang dari perusahaan Anda sebagai Penanggung Jawab (PIC).</p>
                                <p className="">PIC ini akan diberi wewenang sebagai Administrator untuk Mengatur, Mengedit, atau Mengelola Pengaturan Perusahaan Anda di platform Master Diskon Corporate. Anda juga dapat menugaskan kembali atau mendelegasikan peran PIC Anda kepada karyawan lain di perusahaan Anda nanti.</p>
                            </div>
                        </Card>

                        <Card title="Produk kami">
                            <div className="flex text-center">
                                <div className="w-6/12">Flight</div>
                                <div className="w-6/12">Hotel</div>
                            </div>
                        </Card>

                    </div>
                </div>
            </Container>
        </div>
    )
}
