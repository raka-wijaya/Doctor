import React from 'react';
import { Link } from 'react-router-dom'; // Pastikan Anda menggunakan React Router
import { HiXCircle } from "react-icons/hi"; // Pastikan Anda menggunakan React Icons

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-100 p-4">
      <div className="bg-white p-10 rounded-xl shadow-lg max-w-md w-full">
        <div className="mb-6 text-red-500">
          <HiXCircle className="mx-auto w-24 h-24" />
        </div>
        <h1 className="text-7xl font-bold text-red-600">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mt-2 mb-4">Halaman Tidak Ditemukan</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Maaf, halaman yang Anda cari tidak ada. Mungkin Anda salah mengetik alamatnya, atau halaman tersebut sudah dipindahkan.
        </p>
        
        <Link 
          to="/" 
          className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out hover:bg-blue-700"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;