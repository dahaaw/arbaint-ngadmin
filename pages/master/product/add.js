import Input from '@atoms/form/Input';
import Option from '@atoms/form/Option';
import Textarea from '@atoms/form/Textarea';
import Card from '@molecules/Card';
import Layout from '@organism/Layout';
import React, { useRef, useState } from 'react';
import {Editor} from '@tinymce/tinymce-react';
import Button from '@atoms/form/Button';

export default function add() {    

    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [SKU, setSKU] = useState("");
    const [price, setPrice] = useState(0);

    const initVariant = { name: "", option: [""] }
    const [menuVariant, setMenuVariant] = useState(false);
    const [variant, setVariant] = useState([initVariant]);

    const categoryList = [
        {text: "Sirwal", value: 1},
        {text: "Kurta", value: 2},
        {text: "Koko", value: 3}
    ]

    const addVariantOption = (variant, ke) => {
        const baru = [...variant];
        baru[ke].option.push("");
        setVariant(baru);
    }

    const setOptionValue = (variant, ke, optionKe, value ) => {
        const baru = [...variant];
        baru[ke].option[optionKe] =  value;
        setVariant(baru);
    }

    const setVariantName = (variant, ke, value) => {
        const baru = [...variant];
        baru[ke].name = value;
        setVariant(baru);
    }


    // const variantLoop = () => {
    //     let hasil = [];
    //     for(i = 0; i < variant[0].option.length * variant[1]?.option?.length; i++){

    //     }
    // }
    
    return (<Layout>
        <Card title="Buat Produk" className="space-y-3">
            <div className='lg:flex lg:space-x-3'>
                <div className='lg:w-4/12'>
                    Category
                    <Option selected="Pilih Kategori" data={categoryList} onChange={setCategory} value={category} />
                </div>
                <div className='lg:w-8/12'>
                    Product name
                    <Input onChange={setName} value={name}  />
                </div>
            </div>
            <div>
                Desciption
                {/* <Editor 
                    value={description}
                    onEditorChange={(d) =>setDescription(d)}
                /> */}
            </div>

            <div className='flex' >
                <div className='w-6'>
                    <Input type='checkbox' value={menuVariant} checked={menuVariant} onChange={() => setMenuVariant(!menuVariant)} />
                </div>
                <div onClick={() => setMenuVariant(!menuVariant)} className='cursor-pointer'>
                    Buat Variasi Produk
                </div>
            </div>

        </Card>

        {!menuVariant &&
            <Card>
                <div className='lg:flex lg:space-x-3'>
                    <div className='lg:w-4/12'>
                        SKU
                        <Input onChange={setSKU} value={SKU} placeholder='optional' />
                    </div>
                    <div className='lg:w-4/12'>
                        Harga
                        <Input onChange={setPrice} value={price}  />
                    </div>
                    <div className='lg:w-4/12'>
                        Stok
                        <Input onChange={setPrice} value={price}  />
                    </div>
                </div>
            </Card>
        }

        {menuVariant && 
        <div className='lg:flex lg:space-x-3'>
            {variant.map((v,i) => 
                <div className='lg:w-6/12'>
                    <Card title={`Variasi ${i+1}`} className="space-y-3">
                        <div>
                            Nama Variasi
                            <Input onChange={(d) => setVariantName(variant, i, d)} value={v.name} placeholder='contoh Warna' />
                        </div>
                        <div className='space-y-3'>
                            Pilihan
                            {v.option.map((o, oi) => <Input onChange={(d) => setOptionValue(variant, i, oi, d)} value={o} placeholder='contoh merah' /> )}
                        </div>
                        <Button className="w-full bg-blue-500" text="tambah pilihan" onClick={() => addVariantOption(variant, i)}/>
                    </Card>
                </div>
            )}

            {variant.length <2 && <div className='lg:w-6/12'>
                <Button text="tambah variasi" className="bg-blue-500 w-full" onClick={() => setVariant([...variant, initVariant]) }/>
            </div>}
        </div>
        }
        
        {menuVariant && variant[0].option.map((v1, i1) => {
                if(!variant[1]){
                    return (<Card title={`${variant[0].name} ${v1}`}>
                        <div className='lg:flex lg:space-x-3'>
                            <div className='lg:w-4/12'>
                                SKU
                                <Input onChange={setSKU} value={SKU} placeholder='optional' />
                            </div>
                            <div className='lg:w-4/12'>
                                Harga
                                <Input onChange={setPrice} value={price}  />
                            </div>
                            <div className='lg:w-4/12'>
                                Stok
                                <Input onChange={setPrice} value={price}  />
                            </div>
                        </div>
                    </Card>)
                }else{
                    return variant[1]?.option.map((v2, i2) => {
                        return (<Card title={`${variant[0].name} ${v1}, ${variant[1].name} ${v2}`}>
                            <div className='lg:flex lg:space-x-3'>
                                <div className='lg:w-4/12'>
                                    SKU
                                    <Input onChange={setSKU} value={SKU} placeholder='optional' />
                                </div>
                                <div className='lg:w-4/12'>
                                    Harga
                                    <Input onChange={setPrice} value={price}  />
                                </div>
                                <div className='lg:w-4/12'>
                                    Stok
                                    <Input onChange={setPrice} value={price}  />
                                </div>
                            </div>
                        </Card>)
                    })
                } 
            })
        }

        <Button onClick={() => console.log({description}) } >huhu</Button>
    </Layout>);
}
