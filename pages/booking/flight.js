import Input from "@atoms/form/Input";
import Card from "@molecules/Card";
import Layout from "@organism/Layout";
import { useState } from "react";

export default function index() {
    const [rt, setRt] = useState(false);
    const [direct, setDirect] = useState(false)
    return (
        <Layout>
            <div className="p-5 w-full">
                <Card title="Flight" className="w-full" >
                    <div className="flex items-center bg-gray-100">
                        <div className="cursor-pointer flex items-center w-2/12" onClick={() => setRt(false)}>
                            <div className="w-2/12">
                                <Input type="radio" checked={!rt} onChange={() => setRt(false)} />
                            </div>
                            <div>
                                Sekali Jalan
                            </div>
                        </div>
                        <div className="cursor-pointer flex items-center w-2/12" onClick={() => setRt(true)}>
                            <div className="w-2/12">
                                <Input type="radio" checked={rt} onChange={() => setRt(true)} />
                            </div>
                            Pulang Pergi
                        </div>
                        <div className="cursor-pointer flex items-center w-4/12" onClick={() => setDirect(!direct)}>
                            <div className="w-2/12">
                                <Input type="checkbox" checked={direct} onChange={() => setDirect(!direct)}/>
                            </div>
                            <div className="">
                                Penerbangan Langsung
                            </div>
                        </div>
                        
                    </div>
                    <div className="flex items-center">
                        <div className="">
                            Dari
                            <Input />
                        </div>
                        <div className="">
                            Ke
                            <Input />
                        </div>
                        <div className="">
                            Penumpang
                            <Input />
                        </div>
                    </div>
                </Card>
            </div>
        </Layout>
    )
}
