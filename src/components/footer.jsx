import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
<footer className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
      <p className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <span className="ml-3 text-xl">Tailblocks</span>
      </p>
      <p className="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <p className="text-gray-600 hover:text-gray-800">First Link</p>
          </li>
          <li>
            <p className="text-gray-600 hover:text-gray-800">Second Link</p>
          </li>
          <li>
            <p className="text-gray-600 hover:text-gray-800">Third Link</p>
          </li>
          <li>
            <p className="text-gray-600 hover:text-gray-800">Fourth Link</p>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <p className="text-gray-600 hover:text-gray-800">First Link</p>
          </li>
          <li>
            <p className="text-gray-600 hover:text-gray-800">Second Link</p>
          </li>
          <li>
            <p className="text-gray-600 hover:text-gray-800">Third Link</p>
          </li>
          <li>
            <p className="text-gray-600 hover:text-gray-800">Fourth Link</p>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <p className="text-gray-600 hover:text-gray-800">First Link</p>
          </li>
          <li>
            <p className="text-gray-600 hover:text-gray-800">Second Link</p>
          </li>
          <li>
            <p className="text-gray-600 hover:text-gray-800">Third Link</p>
          </li>
          <li>
            <p className="text-gray-600 hover:text-gray-800">Fourth Link</p>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <p className="text-gray-600 hover:text-gray-800">First Link</p>
          </li>
          <li>
            <p className="text-gray-600 hover:text-gray-800">Second Link</p>
          </li>
          <li>
            <p className="text-gray-600 hover:text-gray-800">Third Link</p>
          </li>
          <li>
            <p className="text-gray-600 hover:text-gray-800">Fourth Link</p>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">© 2023 e-market —
        <a href="https://github.com/ahm3tozenir" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@ahm3tozenir</a>
      </p>
      <div className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
      <button id="facebook" className="bg-white  duration-500 border-2 border-blue-600 fixed  w-12 transform hover:-translate-y-3   h-12 text-2xl rounded-full hover:bg-blue-600 hover:text-white text-blue-600 ">
      <FontAwesomeIcon icon={faFacebook} />
    </button>
    <button id="instagram" className=" border-2 hover:border-0 border-pink-500 bg-gradient-to-b text-2xl hover:from-indigo-600 hover:via-pink-600 hover:to-yellow-500 min-w-wull hover:text-white bg-white text-pink-600 w-12 h-12  transform hover:-translate-y-3 rounded-full duration-500 ">
    <FontAwesomeIcon icon={faInstagram} />
  </button>
  <button id="twitter" className="bg-white  transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white text-2xl">
  <FontAwesomeIcon icon={faTwitter} />
  </button>
  <button id="linkedin" className="bg-white transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-blue-500 border-blue-500  hover:bg-blue-500 hover:text-white text-2xl">
  <FontAwesomeIcon icon={faLinkedin} />
  </button>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer