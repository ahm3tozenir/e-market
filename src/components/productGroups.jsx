import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars } from '@fortawesome/free-solid-svg-icons'

function ProductGroups() {
  return (
    <div className='container mx-auto'>
        <ul className='flex justify-between'>
            {/* <li className='absolute left-[20px] cursor-pointer'><FontAwesomeIcon icon={faBars} /></li> */}
            <li>Kadın</li>
            <li>Erkek</li>
            <li>Ev & Ofis</li>
            <li>Spor & Outdoor</li>
            <li>Elektronik</li>
            <li>Kitap, Müzik & Hobi</li>
            <li>Kızmetik & Kişisel Bakım</li>
        </ul>
    </div>
  )
}

export default ProductGroups