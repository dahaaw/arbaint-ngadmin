import React from 'react';

export default function Pagination({page, max, setState}) {
    let start = 1;
    if(page - 2 > 1) start = page - 2;
    let end = start + 4;

    if(end > max){
        start = max - 4;
        end = max; 
    }

    const arrPage = [];
    for (let index = start; index <= end; index++) arrPage.push(index);

    const action = (page) => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setState(page);
    }

    return (
        <div className='absolute right-2 flex'>
            {start > 2 && <div onClick={() => action(1)} className='cursor-pointer px-2'>{`<<`}</div>}
            {page !== 1 && <div onClick={() => action(page - 1)} className='cursor-pointer px-2'>{`<`}</div>}

            {arrPage.map(v => <div onClick={() => action(v)} className={`cursor-pointer ${v === page && 'bg-blue-100 rounded-lg'} px-2`}>{v}</div> )}

            {page < max && <div onClick={() => action(page + 1)} className='cursor-pointer px-2'>{`>`}</div>}
            {(start + 4) < max &&  <div onClick={() => action(max)} className='cursor-pointer px-2'>{`>>`}</div>}
        </div>
    );
}
