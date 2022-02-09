import Card from '@molecules/Card';
import Pagination from '@molecules/Pagination';
import Layout from '@organism/Layout';
import React, { useState } from 'react';

export default function history() {
  const [page, setPage] = useState(1);
  return (
    <Layout>
      <Card title="Riwayat Pesanan" className="m-5 relative">
        <table className='table-auto w-full mt-3 relative'>
          <div className='bg-blue-100 absolute w-full h-full opacity-80 flex'>
            <div className='m-auto animate-bounce h-36'>
              mohon menunggu . . . 
            </div>
          </div>
          <thead className='border-b text-left'>
            <tr className='bg-gray-50'>
              <th className='p-3'>No</th>
              <th className='p-3 hidden xl:table-cell'>Code</th>
              <th className='p-3 hidden xl:table-cell'>Contact</th>
              <th className='p-3'>Product</th>
              <th className='p-3 hidden xl:table-cell'>Price</th>
              <th className='p-3 hidden xl:table-cell'>Pax</th>
              <th className='p-3'>Status</th>
              <th className='p-3 hidden xl:table-cell'>PJD</th>
              <th className='p-3 hidden xl:table-cell'>Date</th>
              <th className='p-3'>Detail</th>
            </tr>
          </thead>
          <tbody>
          <tr>
              <td className='p-3'>1</td>
              <td className='p-3 hidden xl:table-cell'>MD2310210001</td>
              <td className='p-3 hidden xl:table-cell'>Hamdan Awaludin</td>
              <td className='p-3'>Garuda, CGK - DPS</td>
              <td className='p-3 hidden xl:table-cell text-right'>950.000</td>
              <td className='p-3 hidden xl:table-cell'>1</td>
              <td className='p-3 text-xs'>
                <div className='bg-blue-500 py-1 px-2 rounded-lg text-white'>
                  complete
                </div>
              </td>
              <td className='p-3 hidden xl:table-cell'>belum</td>
              <td className='p-3 hidden xl:table-cell'>10 Okt 2021</td>
              <td className='p-3 flex justify-center'>
                <div className="p-1 text-white bg-blue-500 rounded-lg cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </td>
            </tr>
            <tr>
              <td className='p-3'>2</td>
              <td className='p-3 hidden xl:table-cell'>MD2310210002</td>
              <td className='p-3 hidden xl:table-cell'>Awaludin Hamdan</td>
              <td className='p-3'>THe Margo Hotel</td>
              <td className='p-3 hidden xl:table-cell text-right'>1.150.000</td>
              <td className='p-3 hidden xl:table-cell'>1</td>
              <td className='p-3 text-xs'>
                <div className='bg-blue-500 py-1 px-2 rounded-lg text-white'>
                  complete
                </div>
              </td>
              <td className='p-3 hidden xl:table-cell'>belum</td>
              <td className='p-3 hidden xl:table-cell'>10 Okt 2021</td>
              <td className='p-3 flex justify-center'>
                <div className="p-1 text-white bg-blue-500 rounded-lg cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </td>
            </tr>
            <tr>
              <td className='p-3'>1</td>
              <td className='p-3 hidden xl:table-cell'>MD2310210001</td>
              <td className='p-3 hidden xl:table-cell'>Hamdan Awaludin</td>
              <td className='p-3'>Garuda, CGK - DPS</td>
              <td className='p-3 hidden xl:table-cell text-right'>950.000</td>
              <td className='p-3 hidden xl:table-cell'>1</td>
              <td className='p-3 text-xs'>
                <div className='bg-blue-500 py-1 px-2 rounded-lg text-white'>
                  complete
                </div>
              </td>
              <td className='p-3 hidden xl:table-cell'>belum</td>
              <td className='p-3 hidden xl:table-cell'>10 Okt 2021</td>
              <td className='p-3 flex justify-center'>
                <div className="p-1 text-white bg-blue-500 rounded-lg cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </td>
            </tr>
            <tr>
              <td className='p-3'>2</td>
              <td className='p-3 hidden xl:table-cell'>MD2310210002</td>
              <td className='p-3 hidden xl:table-cell'>Awaludin Hamdan</td>
              <td className='p-3'>THe Margo Hotel</td>
              <td className='p-3 hidden xl:table-cell text-right'>1.150.000</td>
              <td className='p-3 hidden xl:table-cell'>1</td>
              <td className='p-3 text-xs'>
                <div className='bg-blue-500 py-1 px-2 rounded-lg text-white'>
                  complete
                </div>
              </td>
              <td className='p-3 hidden xl:table-cell'>belum</td>
              <td className='p-3 hidden xl:table-cell'>10 Okt 2021</td>
              <td className='p-3 flex justify-center'>
                <div className="p-1 text-white bg-blue-500 rounded-lg cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </td>
            </tr>
            <tr>
              <td className='p-3'>1</td>
              <td className='p-3 hidden xl:table-cell'>MD2310210001</td>
              <td className='p-3 hidden xl:table-cell'>Hamdan Awaludin</td>
              <td className='p-3'>Garuda, CGK - DPS</td>
              <td className='p-3 hidden xl:table-cell text-right'>950.000</td>
              <td className='p-3 hidden xl:table-cell'>1</td>
              <td className='p-3 text-xs'>
                <div className='bg-blue-500 py-1 px-2 rounded-lg text-white'>
                  complete
                </div>
              </td>
              <td className='p-3 hidden xl:table-cell'>belum</td>
              <td className='p-3 hidden xl:table-cell'>10 Okt 2021</td>
              <td className='p-3 flex justify-center'>
                <div className="p-1 text-white bg-blue-500 rounded-lg cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </td>
            </tr>
            <tr>
              <td className='p-3'>2</td>
              <td className='p-3 hidden xl:table-cell'>MD2310210002</td>
              <td className='p-3 hidden xl:table-cell'>Awaludin Hamdan</td>
              <td className='p-3'>THe Margo Hotel</td>
              <td className='p-3 hidden xl:table-cell text-right'>1.150.000</td>
              <td className='p-3 hidden xl:table-cell'>1</td>
              <td className='p-3 text-xs'>
                <div className='bg-blue-500 py-1 px-2 rounded-lg text-white'>
                  complete
                </div>
              </td>
              <td className='p-3 hidden xl:table-cell'>belum</td>
              <td className='p-3 hidden xl:table-cell'>10 Okt 2021</td>
              <td className='p-3 flex justify-center'>
                <div className="p-1 text-white bg-blue-500 rounded-lg cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </td>
            </tr>
            <tr>
              <td className='p-3'>1</td>
              <td className='p-3 hidden xl:table-cell'>MD2310210001</td>
              <td className='p-3 hidden xl:table-cell'>Hamdan Awaludin</td>
              <td className='p-3'>Garuda, CGK - DPS</td>
              <td className='p-3 hidden xl:table-cell text-right'>950.000</td>
              <td className='p-3 hidden xl:table-cell'>1</td>
              <td className='p-3 text-xs'>
                <div className='bg-blue-500 py-1 px-2 rounded-lg text-white'>
                  complete
                </div>
              </td>
              <td className='p-3 hidden xl:table-cell'>belum</td>
              <td className='p-3 hidden xl:table-cell'>10 Okt 2021</td>
              <td className='p-3 flex justify-center'>
                <div className="p-1 text-white bg-blue-500 rounded-lg cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </td>
            </tr>
            <tr>
              <td className='p-3'>2</td>
              <td className='p-3 hidden xl:table-cell'>MD2310210002</td>
              <td className='p-3 hidden xl:table-cell'>Awaludin Hamdan</td>
              <td className='p-3'>THe Margo Hotel</td>
              <td className='p-3 hidden xl:table-cell text-right'>1.150.000</td>
              <td className='p-3 hidden xl:table-cell'>1</td>
              <td className='p-3 text-xs'>
                <div className='bg-blue-500 py-1 px-2 rounded-lg text-white'>
                  complete
                </div>
              </td>
              <td className='p-3 hidden xl:table-cell'>belum</td>
              <td className='p-3 hidden xl:table-cell'>10 Okt 2021</td>
              <td className='p-3 flex justify-center'>
                <div className="p-1 text-white bg-blue-500 rounded-lg cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </td>
            </tr>
            <tr>
              <td className='p-3'>1</td>
              <td className='p-3 hidden xl:table-cell'>MD2310210001</td>
              <td className='p-3 hidden xl:table-cell'>Hamdan Awaludin</td>
              <td className='p-3'>Garuda, CGK - DPS</td>
              <td className='p-3 hidden xl:table-cell text-right'>950.000</td>
              <td className='p-3 hidden xl:table-cell'>1</td>
              <td className='p-3 text-xs'>
                <div className='bg-blue-500 py-1 px-2 rounded-lg text-white'>
                  complete
                </div>
              </td>
              <td className='p-3 hidden xl:table-cell'>belum</td>
              <td className='p-3 hidden xl:table-cell'>10 Okt 2021</td>
              <td className='p-3 flex justify-center'>
                <div className="p-1 text-white bg-blue-500 rounded-lg cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </td>
            </tr>
            <tr>
              <td className='p-3'>2</td>
              <td className='p-3 hidden xl:table-cell'>MD2310210002</td>
              <td className='p-3 hidden xl:table-cell'>Awaludin Hamdan</td>
              <td className='p-3'>THe Margo Hotel</td>
              <td className='p-3 hidden xl:table-cell text-right'>1.150.000</td>
              <td className='p-3 hidden xl:table-cell'>1</td>
              <td className='p-3 text-xs'>
                <div className='bg-blue-500 py-1 px-2 rounded-lg text-white'>
                  complete
                </div>
              </td>
              <td className='p-3 hidden xl:table-cell'>belum</td>
              <td className='p-3 hidden xl:table-cell'>10 Okt 2021</td>
              <td className='p-3 flex justify-center'>
                <div className="p-1 text-white bg-blue-500 rounded-lg cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </td>
            </tr>
            <tr>
              <td className='p-3'>1</td>
              <td className='p-3 hidden xl:table-cell'>MD2310210001</td>
              <td className='p-3 hidden xl:table-cell'>Hamdan Awaludin</td>
              <td className='p-3'>Garuda, CGK - DPS</td>
              <td className='p-3 hidden xl:table-cell text-right'>950.000</td>
              <td className='p-3 hidden xl:table-cell'>1</td>
              <td className='p-3 text-xs'>
                <div className='bg-blue-500 py-1 px-2 rounded-lg text-white'>
                  complete
                </div>
              </td>
              <td className='p-3 hidden xl:table-cell'>belum</td>
              <td className='p-3 hidden xl:table-cell'>10 Okt 2021</td>
              <td className='p-3 flex justify-center'>
                <div className="p-1 text-white bg-blue-500 rounded-lg cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </td>
            </tr>
            <tr>
              <td className='p-3'>2</td>
              <td className='p-3 hidden xl:table-cell'>MD2310210002</td>
              <td className='p-3 hidden xl:table-cell'>Awaludin Hamdan</td>
              <td className='p-3'>THe Margo Hotel</td>
              <td className='p-3 hidden xl:table-cell text-right'>1.150.000</td>
              <td className='p-3 hidden xl:table-cell'>1</td>
              <td className='p-3 text-xs'>
                <div className='bg-blue-500 py-1 px-2 rounded-lg text-white'>
                  complete
                </div>
              </td>
              <td className='p-3 hidden xl:table-cell'>belum</td>
              <td className='p-3 hidden xl:table-cell'>10 Okt 2021</td>
              <td className='p-3 flex justify-center'>
                <div className="p-1 text-white bg-blue-500 rounded-lg cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </td>
            </tr>
            <tr>
              <td className='p-3'>1</td>
              <td className='p-3 hidden xl:table-cell'>MD2310210001</td>
              <td className='p-3 hidden xl:table-cell'>Hamdan Awaludin</td>
              <td className='p-3'>Garuda, CGK - DPS</td>
              <td className='p-3 hidden xl:table-cell text-right'>950.000</td>
              <td className='p-3 hidden xl:table-cell'>1</td>
              <td className='p-3 text-xs'>
                <div className='bg-blue-500 py-1 px-2 rounded-lg text-white'>
                  complete
                </div>
              </td>
              <td className='p-3 hidden xl:table-cell'>belum</td>
              <td className='p-3 hidden xl:table-cell'>10 Okt 2021</td>
              <td className='p-3 flex justify-center'>
                <div className="p-1 text-white bg-blue-500 rounded-lg cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </td>
            </tr>
            <tr>
              <td className='p-3'>2</td>
              <td className='p-3 hidden xl:table-cell'>MD2310210002</td>
              <td className='p-3 hidden xl:table-cell'>Awaludin Hamdan</td>
              <td className='p-3'>THe Margo Hotel</td>
              <td className='p-3 hidden xl:table-cell text-right'>1.150.000</td>
              <td className='p-3 hidden xl:table-cell'>1</td>
              <td className='p-3 text-xs'>
                <div className='bg-blue-500 py-1 px-2 rounded-lg text-white'>
                  complete
                </div>
              </td>
              <td className='p-3 hidden xl:table-cell'>belum</td>
              <td className='p-3 hidden xl:table-cell'>10 Okt 2021</td>
              <td className='p-3 flex justify-center'>
                <div className="p-1 text-white bg-blue-500 rounded-lg cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </td>
            </tr>
            <tr>
              <td className='p-3'>1</td>
              <td className='p-3 hidden xl:table-cell'>MD2310210001</td>
              <td className='p-3 hidden xl:table-cell'>Hamdan Awaludin</td>
              <td className='p-3'>Garuda, CGK - DPS</td>
              <td className='p-3 hidden xl:table-cell text-right'>950.000</td>
              <td className='p-3 hidden xl:table-cell'>1</td>
              <td className='p-3 text-xs'>
                <div className='bg-blue-500 py-1 px-2 rounded-lg text-white'>
                  complete
                </div>
              </td>
              <td className='p-3 hidden xl:table-cell'>belum</td>
              <td className='p-3 hidden xl:table-cell'>10 Okt 2021</td>
              <td className='p-3 flex justify-center'>
                <div className="p-1 text-white bg-blue-500 rounded-lg cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </td>
            </tr>
            <tr>
              <td className='p-3'>2</td>
              <td className='p-3 hidden xl:table-cell'>MD2310210002</td>
              <td className='p-3 hidden xl:table-cell'>Awaludin Hamdan</td>
              <td className='p-3'>THe Margo Hotel</td>
              <td className='p-3 hidden xl:table-cell text-right'>1.150.000</td>
              <td className='p-3 hidden xl:table-cell'>1</td>
              <td className='p-3 text-xs'>
                <div className='bg-blue-500 py-1 px-2 rounded-lg text-white'>
                  complete
                </div>
              </td>
              <td className='p-3 hidden xl:table-cell'>belum</td>
              <td className='p-3 hidden xl:table-cell'>10 Okt 2021</td>
              <td className='p-3 flex justify-center'>
                <div className="p-1 text-white bg-blue-500 rounded-lg cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </td>
            </tr>
            <tr>
              <td className='p-3'>1</td>
              <td className='p-3 hidden xl:table-cell'>MD2310210001</td>
              <td className='p-3 hidden xl:table-cell'>Hamdan Awaludin</td>
              <td className='p-3'>Garuda, CGK - DPS</td>
              <td className='p-3 hidden xl:table-cell text-right'>950.000</td>
              <td className='p-3 hidden xl:table-cell'>1</td>
              <td className='p-3 text-xs'>
                <div className='bg-blue-500 py-1 px-2 rounded-lg text-white'>
                  complete
                </div>
              </td>
              <td className='p-3 hidden xl:table-cell'>belum</td>
              <td className='p-3 hidden xl:table-cell'>10 Okt 2021</td>
              <td className='p-3 flex justify-center'>
                <div className="p-1 text-white bg-blue-500 rounded-lg cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </td>
            </tr>
            <tr>
              <td className='p-3'>2</td>
              <td className='p-3 hidden xl:table-cell'>MD2310210002</td>
              <td className='p-3 hidden xl:table-cell'>Awaludin Hamdan</td>
              <td className='p-3'>THe Margo Hotel</td>
              <td className='p-3 hidden xl:table-cell text-right'>1.150.000</td>
              <td className='p-3 hidden xl:table-cell'>1</td>
              <td className='p-3 text-xs'>
                <div className='bg-blue-500 py-1 px-2 rounded-lg text-white'>
                  complete
                </div>
              </td>
              <td className='p-3 hidden xl:table-cell'>belum</td>
              <td className='p-3 hidden xl:table-cell'>10 Okt 2021</td>
              <td className='p-3 flex justify-center'>
                <div className="p-1 text-white bg-blue-500 rounded-lg cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </td>
            </tr>
            
          </tbody>
        </table>

        <div className='relative mt-5 flex'>
          <div>
            show
          </div>
          <Pagination page={page} setState={setPage} max={20} />

        </div>
      </Card>
    </Layout>
  )};
