import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faEllipsisVertical, faCartShopping} from '@fortawesome/free-solid-svg-icons'

function Nvbr() {
	const [show,setShow] = useState(false)
	let location = useLocation();

	const [myArray, setMyArray] = useState([]);
	const [arrayLength, setArrayLength] = useState(0);
  
	useEffect(() => {
	
	  setInterval(()=>{
		let storedArray = JSON.parse(localStorage.getItem('arr')) || [];
		setMyArray(storedArray);
		setArrayLength(storedArray.length);
	  },100)
	  
	}, []);
  
	useEffect(() => {
	  setArrayLength(myArray.length);
	}, [myArray]);
	




	if(location.pathname === '/404'){
	  return null;
	}else{
	

  return (
    <>
      <nav className="relative px-4 py-4 flex justify-between items-center bg-black">
		<Link to={'/'} className="text-3xl font-bold leading-none">
			<img className={`w-20 ${show?'hidden':'block'}`} src="./img/navimg.png" alt="" />
		</Link>
		<div className="lg:hidden ms-auto flex">
		<Link to={'/sepetim'} class="items-center justify-center w-10 h-10 rounded-full bg-white ms-3 me-5 lg:flex hover:scale-105 mt-2 transition duration-200">
			<div class="relative top-2 left-2">
				<FontAwesomeIcon icon={faCartShopping} className='text-[#1dd2e6d4]' />
				<span class="absolute -top-2 left-4 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 p-0.5 px-2 text-sm text-red-50">{arrayLength}</span>
			</div>
			</Link>
			<button className="navbar-burger flex items-center text-cyan-400 p-3 text-3xl" onClick={()=>setShow(!show)}>
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
		<Link to={'/login'} className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 border-2 border-[#FF32AF] bg-[#FF32AF] hover:bg-black hover:text-[#FF32AF] hover:border-2 hover:border-[#FF32AF] text-sm text-gray-900 font-bold  rounded-xl transition duration-200">Giriş Yap</Link>
		<Link to={'/register'} className="hidden lg:inline-block py-2 px-6 border-4 border-[#1DD2E6] hover:border-[#1DD2E6] hover:border-4 bg-[#1DD2E6] hover:bg-white hover:text-[#1DD2E6] text-sm text-white font-bold rounded-xl transition duration-200">Kayıt Ol</Link>
		<div>
		<Link to={'/sepetim'} class="hidden items-center justify-center w-10 h-10 rounded-full bg-white ms-3 me-5 lg:flex hover:scale-105  transition duration-200">
			<div class="relative">
				<FontAwesomeIcon icon={faCartShopping} className='text-[#1dd2e6d4]' />
				<span class="absolute -top-2 left-4 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 p-0.5 px-2 text-sm text-red-50">{arrayLength}</span>
			</div>
			</Link>
		</div>
	</nav>
	<aside className={`navbar-menu relative z-50 ${show?'block':'hidden'}`}>
		<div className="navbar-backdrop fixed inset-0"></div>
		<nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-opacity-75 bg-black border-r overflow-y-auto">
			<div className="flex items-center mb-8">
				<Link to={'/'} className="me-auto text-3xl font-bold leading-none">
					<img className='w-20' src="./img/sideimg.png" alt="" />
				</Link>
				<button className="navbar-close text-white text-3xl text-[#FF3AB2] hover:text-red-500 hover:scale-110 duration-200 ease-in-out" onClick={()=>setShow(!show)}>
					x
				</button>
			</div>
			<div>
				<ul>
					<li className="mb-1">
						<Link to={'/'} className="block p-4 text-sm font-semibold text-gray-400 hover:bg-gradient-to-r from-blue-200 to-cyan-200 hover:text-black rounded">Anasayfa</Link>
					</li>
					<li className="mb-1">
						<Link to={'/subscription'} className="block p-4 text-sm font-semibold text-gray-400 hover:bg-gradient-to-r from-blue-200 to-cyan-200 hover:text-black rounded">Abonelik</Link>
					</li>
					<li className="mb-1">
						<Link to={'/faq'} className="block p-4 text-sm font-semibold text-gray-400 hover:bg-gradient-to-r from-blue-200 to-cyan-200 hover:text-black rounded">S.S.S</Link>
					</li>
					<li className="mb-1">
						<Link to={'/contact'} className="block p-4 text-sm font-semibold text-gray-400 hover:bg-gradient-to-r from-blue-200 to-cyan-200 hover:text-black rounded">İletişim</Link>
					</li>
				</ul>
			</div>
			<div className="mt-auto">
				<div className="pt-6">
					<Link to={'/login'} className="block cursor-pointer px-4 py-3 mb-3 leading-loose text-sm text-center font-semibold bg-[#FF32AF] hover:bg-[#333538] hover:text-[#FF32AF] border-2 border-[#FF32AF] rounded-xl duration-200 ease-in-out">Giriş Yap</Link>
					<Link to={'/register'} className="block px-4 py-3 mb-2 cursor-pointer border-2 border-[#1DD2E6] leading-loose text-sm text-center text-white font-semibold bg-[#1DD2E6] hover:bg-blue-700 hover:bg-[#333538] hover:text-[#1DD2E6]  rounded-xl duration-200 ease-in-out">Kayıt Ol</Link>
				</div>
			</div>
		</nav>
	</aside>
    </>
  )}
}

export default Nvbr