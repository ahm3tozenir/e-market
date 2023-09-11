import React, { useEffect, useState } from 'react'




function Basket() {

  let getArr = JSON.parse(localStorage.getItem('arr'))

  const [sepet,setSepet] = useState(getArr)

  function deleteHandler(event,i){
    let newArr = [...sepet]
    newArr.splice(i,1)
    setSepet(newArr)
  }
  
  useEffect(()=>{
    localStorage.setItem('arr',JSON.stringify(sepet))
  },[sepet])

  let nakliye = 0

  let total = 0
  sepet.map((e)=>{
    total = total+(e.price*e.count)
  })

  if(total<150){
    nakliye = 19.99
  }

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
    <div className='h-full bg-gradient-to-r from-blue-200 to-cyan-200 pt-20'>
    <h1 className="mb-10 text-center text-2xl font-bold">Sepetteki Ürünler</h1>
    <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
      <div className='rounded-lg md:w-2/3'>
        {
          sepet.map((e,i)=>(
              <div key={i} className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md shadow-gray-400 sm:flex sm:justify-start">
                <img src={e.img} className="w-full rounded-lg sm:w-40" alt="" />
                <div className='sm:ml-4 sm:flex sm:w-full sm:justify-between'>
                  <div className='mt-5 sm:mt-0'>
                    <h2 className='text-lg font-bold text-gray-900 capitalize'>{e.title}</h2>
                    <p className='truncate lg:w-[300px] md:w-[100px] font-extralight'>{e.desc}</p>
                  </div>
                  <div className='mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6'>
                    <div className='flex items-center border-gray-100'>
                      <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-cyan-400 hover:text-blue-50" onClick={(event)=>decreaseHandler(event,i)}> - </span>
                      <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" readOnly value={e.count} />
                      <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-cyan-400 hover:text-blue-50" onClick={(event)=>increaseHandler(event,i)}> + </span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <p className="text-sm after:content-['$']">{e.price}</p>
                      <button className='h-5 w-5 cursor-pointer duration-150 hover:text-red-500 text-2xl' onClick={(event)=>deleteHandler(event,i)}>x</button>
                    </div>
                  </div>
                </div>
              </div>
          ))
        }
      </div>

      <div className="mt-6 h-full mb-0 md:mb-10 rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3 shadow-gray-400">
        <div className="mb-2 flex justify-between">
          <p className="text-gray-700">Ürünlerin Toplamı</p>
          <p className="text-gray-700">{total}$</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-700">Kargo</p>
          <p className="text-gray-700">{nakliye===0?'ücretsiz kargo':`${nakliye}$`}</p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between">
          <p className="text-lg font-bold">Toplam</p>
          <div className="">
            <p className="mb-1 text-lg font-bold">{(total+nakliye).toFixed(2)}$</p>
            <p className="text-sm text-gray-700">KDV dahildir</p>
          </div>
        </div>
        <button className="mt-6 w-full rounded-md bg-cyan-500 shadow-lg shadow-cyan-500/50 py-1.5 font-medium text-blue-50 hover:bg-cyan-400 duration-300 ease-in-out">Ödeme Yap</button>
      </div>
    </div>

    </div>
  )
}

export default Basket