import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChessPawn, faChessQueen, faChessKing} from '@fortawesome/free-solid-svg-icons'



function Subs() {
  return (
    <div>
      <div className="antialiased w-full h-full bg-black text-gray-400 font-inter p-10">
    <div className="container px-4 mx-auto">
      <div>
        <div id="title" className="text-center my-10">
          <h1 className="font-bold text-4xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">Abonelikler</h1>
          <p className="text-light text-gray-500 text-xl">
            Ücretsiz, Aylık ve Yıllık
          </p>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly gap-10 pt-10"
        >
          <div
            id="plan"
            className="rounded-lg text-center overflow-hidden w-full transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in"
          >
            <div id="title" className="w-full py-5 border-b border-gray-800">
              <h2 className="font-bold text-3xl text-white">Ücretsiz</h2>
              <h3 className="font-normal text-[#FF32AF] text-xl mt-2">
                0$
              </h3>
            </div>
            <div id="content" className="">
              <div id="icon" className="my-5 text-2xl text-[#FFB9E3]">
              <FontAwesomeIcon icon={faChessPawn} />
                <p className="text-gray-500 text-sm pt-2 capitalize">
                  Ücretsiz üyelik ile hızlı bir başlangıç Yapın
                </p>
              </div>
              <div id="contain" className="leading-8 mb-10 text-lg font-light">
                <ul>
                  <li>Ücretsiz Canlı Destek</li>
                  <li>150$ Üzerine Ücretsiz Kargo</li>
                  <li>7 Gün İçinde İade Hakkı</li>
                </ul>
                <div id="choose" className="w-full mt-10 px-6">
                  <button
                    className="w-full block bg-gray-900 font-medium text-xl py-4 rounded-xl hover:shadow-lg transition duration-200 ease-in-out hover:bg-[#1DD2E6] hover:text-white"
                    >Ücretisiz Üyelik Oluştur</button>
                </div>
              </div>
            </div>
          </div>
          <div
            id="plan"
            className="rounded-lg text-center overflow-hidden w-full transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in"
          >
            <div id="title" className="w-full py-5 border-b border-gray-800">
              <h2 className="font-bold text-3xl text-white">Aylık Abonelik</h2>
              <h3 className="font-normal text-[#FF32AF] text-xl mt-2">
                5<sup>,99</sup>$/ayda
              </h3>
            </div>
            <div id="content" className="">
              <div id="icon" className="my-5 text-2xl text-[#FFB9E3]">
                <FontAwesomeIcon icon={faChessQueen} />
                <p className="text-gray-500 text-sm pt-2">
                  Aylık Aboneliğe Geçerek Fırsatları Yakalayın
                </p>
              </div>
              <div id="contain" className="leading-8 mb-10 text-lg font-light">
                <ul>
                  <li>Canlı Destekte Öncelik</li>
                  <li>Ücretsiz Kargo</li>
                  <li>Ertesi Gün Teslimat</li>
                </ul>
                <div id="choose" className="w-full mt-10 px-6">
                  <button
                    
                    className="w-full block bg-gray-900 font-medium text-xl py-4 rounded-xl hover:shadow-lg transition duration-200 ease-in-out hover:bg-[#1DD2E6] hover:text-white"
                    >Choose</button>
                </div>
              </div>
            </div>
          </div>
          <div
            id="plan"
            className="rounded-lg text-center overflow-hidden w-full transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in"
          >
            <div id="title" className="w-full py-5 border-b border-gray-800">
              <h2 className="font-bold text-3xl text-white">Yıllık Abonelik</h2>
              <h3 className="font-normal text-[#FF32AF] text-xl mt-2">
                60$/yıllık
              </h3>
            </div>
            <div id="content" className="">
              <div id="icon" className="my-5 text-2xl text-[#FFB9E3]">
                <FontAwesomeIcon icon={faChessKing} />
                <p className="text-gray-500 text-sm pt-2">
                  Daha Uygun Fiyatlarla Yıllık Aboneliğe Geçiş Yapın
                </p>
              </div>
              <div id="contain" className="leading-8 mb-10 text-lg font-light">
                <ul>
                  <li>Aylık Aboneliğin Tüm Avantajları</li>
                  <li>10 ay Fiyatına</li>
                  <li>İstediğiniz Zaman İptal Edebilme Hakkı</li>
                </ul>
                <div id="choose" className="w-full mt-10 px-6">
                  <button
                    className="w-full block bg-gray-900 font-medium text-xl py-4 rounded-xl hover:shadow-lg transition duration-200 ease-in-out hover:bg-[#1DD2E6] hover:text-white"
                    >Choose</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Subs