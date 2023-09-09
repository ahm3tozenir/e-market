import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faEllipsisVertical} from '@fortawesome/free-solid-svg-icons'

function Nvbr() {
	const [show,setShow] = useState(false)
	let location = useLocation();
	if(location.pathname === '/404'){
	  return null;
	}else{

  return (
    <>
      <nav className="relative px-4 py-4 flex justify-between items-center bg-black">
		<Link to={'/'} className="text-3xl font-bold leading-none">
			<img className={`w-20 ${show?'hidden':'block'}`} src="./img/navimg.png" alt="" />
		</Link>
		<div className="lg:hidden">
			<button className="navbar-burger flex items-center text-blue-600 p-3 text-3xl" onClick={()=>setShow(!show)}>
				<FontAwesomeIcon icon={faBars} />
			</button>
		</div>
		<ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
			<li><NavLink to={'/'} className="text-sm text-gray-400 hover:text-gray-500">Anasayfa</NavLink></li>
			<li className="text-gray-300">
				<FontAwesomeIcon icon={faEllipsisVertical} />
			</li>
			<li><NavLink to={'/subscription'} className="text-sm text-gray-400 font-semibold hover:text-gray-500">Abonelik</NavLink></li>
			<li className="text-gray-300">
				<FontAwesomeIcon icon={faEllipsisVertical} />
			</li>
			<li><NavLink to={'/faq'} className="text-sm text-gray-400 hover:text-gray-500">S.S.S</NavLink></li>
			<li className="text-gray-300">
				<FontAwesomeIcon icon={faEllipsisVertical} />
			</li>
			<li><NavLink to={'/contact'} className="text-sm text-gray-400 hover:text-gray-500">İletişim</NavLink></li>
		</ul>
		<Link to={'/login'} className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200">Giriş Yap</Link>
		<Link to={'/register'} className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200">Kayıt Ol</Link>
	</nav>
	<aside className={`navbar-menu relative z-50 ${show?'block':'hidden'}`}>
		<div className="navbar-backdrop fixed inset-0"></div>
		<nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-opacity-75 bg-black border-r overflow-y-auto">
			<div className="flex items-center mb-8">
				<Link to={'/'} className="me-auto text-3xl font-bold leading-none">
					<img className='w-20' src="./img/sideimg.png" alt="" />
				</Link>
				<button className="navbar-close text-white text-3xl" onClick={()=>setShow(!show)}>
					x
				</button>
			</div>
			<div>
				<ul>
					<li className="mb-1">
						<Link to={'/'} className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">Anasayfa</Link>
					</li>
					<li className="mb-1">
						<Link to={'/subscription'} className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">Abonelik</Link>
					</li>
					<li className="mb-1">
						<Link to={'/faq'} className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">S.S.S</Link>
					</li>
					<li className="mb-1">
						<Link to={'/contact'} className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">İletişim</Link>
					</li>
				</ul>
			</div>
			<div className="mt-auto">
				<div className="pt-6">
					<Link to={'/login'} className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold bg-gray-50 hover:bg-gray-100 rounded-xl">Giriş Yap</Link>
					<Link to={'/register'} className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl">Kayıt Ol</Link>
				</div>
			</div>
		</nav>
	</aside>
    </>
  )}
}

export default Nvbr