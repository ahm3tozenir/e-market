import React, { useEffect, useState } from 'react'




function Basket() {

  let getArr = JSON.parse(localStorage.getItem('arr'))

  const [sepet,setSepet] = useState(getArr)

  function deleteHandler(event,i){
    console.log(event.target.parentElement)
    let newArr = [...sepet]
    newArr.splice(i,1)
    setSepet(newArr)
  }
  
  useEffect(()=>{
    localStorage.setItem('arr',JSON.stringify(sepet))
  },[sepet])

  let total = 0
  sepet.map((e)=>{
    total += Number(e[2])
  })

  function increaseHandler(event,i){
    let adet = Number(event.target.parentElement.lastChild.previousElementSibling.value)
    adet = adet+1
    let newArr = [...sepet]
    newArr[i].count = adet
    setSepet(newArr)
  }

  function decreaseHandler(event,i){
    let adet = Number(event.target.parentElement.lastChild.previousElementSibling.value)
    adet = adet-1
    let newArr = [...sepet]
    newArr[i].count = adet
    setSepet(newArr)
  }


  return (
    <div className='h-screen bg-gray-100 pt-20'>
    <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
    <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
      <div className='rounded-lg md:w-2/3'>
        {
          sepet.map((e,i)=>(
              <div key={i} className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                <img src={e.img} className="w-full rounded-lg sm:w-40" alt="" />
                <div className='sm:ml-4 sm:flex sm:w-full sm:justify-between'>
                  <div className='mt-5 sm:mt-0'>
                    <h2 className='text-lg font-bold text-gray-900 capitalize'>{e.title}</h2>
                  </div>
                  <div className='mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6'>
                    <div className='flex items-center border-gray-100'>
                      <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={(event)=>decreaseHandler(event,i)}> - </span>
                      <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" readOnly value={e.count} />
                      <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={(event)=>increaseHandler(event,i)}> + </span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <p className="text-sm after:content-['$']">{e.price}</p>
                      <button className='h-5 w-5 cursor-pointer duration-150 hover:text-red-500' onClick={(event)=>deleteHandler(event,i)}>x</button>
                    </div>
                  </div>
                </div>
              </div>
          ))
        }
      </div>

      <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
        <div className="mb-2 flex justify-between">
          <p className="text-gray-700">Subtotal</p>
          <p className="text-gray-700">$129.99</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-700">Shipping</p>
          <p className="text-gray-700">$4.99</p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between">
          <p className="text-lg font-bold">Total</p>
          <div className="">
            <p className="mb-1 text-lg font-bold">$134.98 USD</p>
            <p className="text-sm text-gray-700">including VAT</p>
          </div>
        </div>
        <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
      </div>
    </div>

    </div>
  )
}

export default Basket