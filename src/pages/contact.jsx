import React from 'react'

function Contact() {
  return (
    <section class="text-gray-600 body-font relative">
  <div class="absolute inset-0 bg-gray-300">
    <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"></iframe>
  </div>
  <div class="container px-5 py-24 mx-auto flex">
    <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md !bg-gray-300">
      <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">İletişim</h2>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-[#FF32AF] focus:ring-2 focus:ring-[#FFB9E3] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="message" class="leading-7 text-sm text-gray-600">Mesaj</label>
        <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-[#FF32AF] focus:ring-2 focus:ring-[#FFB9E3] h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button class="text-black bg-[#FF32AF] border-0 py-2 px-6 focus:outline-none hover:bg-black hover:text-[#FF32AF] rounded text-lg duration-200 ease-in-out">Gönder</button>
    
    </div>
  </div>
</section>
  )
}

export default Contact