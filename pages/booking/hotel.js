import Card from "@molecules/Card";
import Layout from "@organism/Layout";
import Input from "@atoms/form/Input";
import { useEffect, useRef, useState } from "react";
import moment from 'moment';
import Button from "@atoms/form/Button";


export default function index() {
    const inputRef = useRef(null);
    const [destination, setDestination] = useState('');
    const formatDate = "YYYY-MM-DD";
    const [checkin, setCheckin] = useState(moment().format(formatDate));
    const [plusOneDay, setPlusOneDay] = useState(moment().add(1, 'days').format(formatDate));
    const [checkout, setCheckout] = useState(plusOneDay);
    const [night, setNight] = useState(1)
    const checkinChange = (v) => {
        const tomorrow = moment(v, formatDate).add(1, 'days').format(formatDate);
        setCheckin(v);
        setPlusOneDay(tomorrow);
        setCheckout(tomorrow);
        
    }

    useEffect(() => {
        const malam = moment(checkout, formatDate).diff(moment(checkin, formatDate), 'days')
        setNight(malam);
    }, [checkin, checkout])

    
    return (
        <Layout>
            <Card title="Hotel" className="m-5">
                <div className="md:flex md:space-x-2">
                    <div className="md:w-8/12 my-2">
                        <div className="mb-2">
                            Destinasi atau nama hotel
                        </div>
                        <Input type="text" value={destination} onChange={(d) => setDestination(d.target.value)} />
                    </div>
                    <div className="md:w-4/12 my-2">
                        <div className="mb-2">
                            Tamu dan Kamar
                        </div>
                        <Input type="text" value={`3 Tamu, 1 Kamar`} disabled onChange={(d) => setDestination(d.target.value)} />
                    </div>

                </div>
                <div className="md:flex md:space-x-2">
                    <div className="md:w-4/12 my-2">
                        <div className="mb-2">
                            Checkin
                        </div>
                        <Input ref={inputRef} form type="date" min={moment().format(formatDate)} value={checkin} onChange={(d) => checkinChange(d.target.value)} />
                    </div>
                    <div className="md:w-4/12 my-2">
                        <div className="mb-2">
                            Malam
                        </div>
                        <Input disabled value={`${night} Malam`} type="text"/>
                    </div>
                    <div className="md:w-4/12 my-2">
                        <div className="mb-2">
                            Checkout
                        </div>
                        <Input type="date" min={plusOneDay} value={checkout} onChange={(d) => setCheckout(d.target.value)}/>
                    </div>
                </div>
                <div className="mt-3 ">
                    <Button className=" bg-blue-500 w-full" text="Cari Hotel"/>
                </div>
            </Card>
        </Layout>
    )
}
