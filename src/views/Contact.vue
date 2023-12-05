<script setup></script>

<template>
  <h2 id="contacto" class="after-effect after:left-48 font-semibold">
    Contacto
  </h2>

  <div class="p-4 md:p-8 bg-color-810 rounded-xl mb-[1px] md:mb-[12px]">
    <form
      action="https://formsubmit.co/5f6dc3996619117e669d938db5d4297e"
      method="POST"
    >
      <div
        class="returnmessage"
        data-success="Your message has been received, We will contact you soon."
      ></div>
      <div class="empty_notice">
        <span class="text-[#CA56F2]">Por favor llene los campos marcados</span>
      </div>

      <!-- name input  -->
      <div class="relative z-0 w-full mt-[40px] mb-8 group">
        <input
          type="text"
          id="name"
          name="name"
          class="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none focus:outline-none focus:ring-0 focus:border-[#FF6464] peer"
          placeholder=" "
          required=""
        />
        <label
          for="name"
          class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
        >
          Nombre *
        </label>
      </div>

      <!-- email input  -->
      <div class="relative z-0 w-full mb-8 group">
        <input
          type="email"
          name="email"
          class="block autofill:text-red-900 needed py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none  focus:outline-none focus:ring-0 focus:border-[#5185D4] peer"
          placeholder=" "
          id="email"
          required=""
        />
        <label
          for="email"
          class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#5185D4]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
        >
          Correo electrónico *
        </label>
      </div>

      <!-- message input  -->
      <div class="relative z-0 w-full mb-8 group">
        <input
          type="text"
          name="body"
          class="block py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none  focus:outline-none focus:ring-0 focus:border-[#CA56F2] peer"
          placeholder=" "
          id="body"
          required=""
        />
        <label
          for="body"
          class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#CA56F2]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
        >
          Tu mensaje *
        </label>
      </div>

      <!-- submit buttons -->
      <input
        type="submit"
        class="px-6 py-2 rounded-lg border-[2px] mt-3 border-color-910 font-semibold cursor-pointer hover:bg-gradient-to-r from-[#7a579f] to-[#5E17EB] hover:text-white transition-colors duration-300 ease-in-out hover:border-transparent "
        value="Enviar"
      />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input
        type="hidden"
        name="_next"
        value="https://imer-mamani.netlify.app/gracias"
      />
    </form>
  </div>
  <span class="p-4 md:p-8 "
    >Tambien puedes enviarme un mensaje directo</span
  >
  <div class="block p-4 md:p-8">
    <a
      class="px-4 py-2 bg-[#25d366] rounded-full"
      href="https://api.whatsapp.com/send/?phone=59170239101&text=Hola+imer+te+escribo+para+..."
      target="_blank"
    >
      <i class="fa-brands fa-whatsapp text-white"></i>
      <span class="text-white">&nbsp;Whatsapp</span>
    </a>
    <a
      class="ml-4 px-4 py-2 bg-[#3487f1] rounded-full"
      href="https://telegram.me/Sabio24"
      target="_blank"
    >
      <i class="fa-brands fa-telegram text-white"></i>
      <span class="text-white">&nbsp;Telegram</span>
    </a>
  </div>
</template>

<style scoped></style>
