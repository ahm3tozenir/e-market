import React, { useState, useEffect } from 'react'



function ProductDetail() {


  let detay = JSON.parse(localStorage.getItem('detay'))

  let ls = Number(localStorage.getItem('fiyat'))
  let degisken = 0

  if(ls!==0){
      degisken = ls
  }
  

  let getArr = JSON.parse(localStorage.getItem('arr'))
  let empArr = []

  if(getArr){
    empArr = getArr
  }
  const [cost,setCost] = useState(degisken)
  const [local,setLocal] = useState(empArr)
  let count = 1
  function buyHandler(e){

        let addCost = Number(e.target.parentElement.parentElement.firstChild.lastChild.textContent)
        setCost(cost + addCost)
        let id = e.target.parentElement.parentElement.lastChild.firstChild.textContent
        let title = e.target.parentElement.parentElement.parentElement.firstChild.firstChild.textContent
        let img = e.target.parentElement.parentElement.parentElement.parentElement.firstChild.firstChild.firstChild.src
        let price = addCost
        let desc = e.target.parentElement.parentElement.parentElement.firstChild.lastChild.textContent

      getArr = JSON.parse(localStorage.getItem('arr'))

      for(let i=0; i<local.length; i++){
          if(id === local[i].id){
              let del = local.indexOf(local[i])
              local.splice(del,1)
              count = getArr[i].count +1
          }
      }

      let lsObj = {
          'id':id,
          'title':title,
          'img':img,
          'price':price,
          'count':count,
          'desc':desc
      }

      setLocal([...local,lsObj])
  }

  useEffect(()=>{
    localStorage.setItem('arr',JSON.stringify(local))
},[local])


  return (
    <>
    <div className="min-w-screen min-h-screen bg-gradient-to-r from-fuchsia-500 to-pink-500 flex items-center p-5 lg:p-10 overflow-hidden relative">
    <div className="w-full max-w-6xl rounded bg-gradient-to-r from-violet-200 to-pink-200 shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
        <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                <div className="relative">
                    <img src={detay.img} className="w-full relative z-10 rounded shadow-2xl shadow-[#FF32AF]" alt=""/>
                    <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                </div>
            </div>
            <div className="w-full md:w-1/2 px-10">
                <div className="mb-10">
                    <h1 className="font-bold uppercase text-2xl mb-5">{detay.title}</h1>
                    <p className="text-sm">{detay.desc}</p>
                </div>
                <div>
                    <div className="inline-block align-bottom mr-5">
                        <span className="text-2xl leading-none align-baseline">$</span>
                        <span className="font-bold text-5xl leading-none align-baseline">{detay.cPrice}</span>
                    </div>
                    <div className="inline-block align-bottom">
                        <p className='hidden'>{detay.id}</p>
                        <button onClick={buyHandler} className="bg-[#1DD2E6] text-black hover:text-[#1DD2E6] hover:bg-black rounded-full px-10 py-2 font-semibold duration-300 ease-in-out"><i className="mdi mdi-cart -ml-2 mr-2"></i>Satın Al</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default ProductDetail