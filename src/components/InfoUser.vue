<template>
  <div
    class="col-span-12 lg:col-span-4 lg:block lg:h-screen lg:sticky top-44 mb-12"
  >
    <div
      class="w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0"
    >
      <!-- profile image -->
      <img
        src="/images/imagen.jpg"
        class="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px]"
        alt="about"
      />
      <div class="pt-[100px] pb-8">
        <h2 class="mt-6 mb-1 text-[26px] font-semibold">Imer Mamani</h2>
        <h3 class="mb-4 text-[#7B7B7B] inline-block px-5 py-1.5 rounded-lg">
          Ingeniero informático <br>Desarrollador web
        </h3>
        <div class="flex justify-center space-x-3">
          <!-- linkedin icon and link -->
          <a href="https://www.linkedin.com/in/imer-mamani/" target="_blank">
            <span class="socialbtn text-[#0072b1]">
              <i class="fa-brands fa-linkedin-in"></i>
            </span>
          </a>
          <!-- dribbble icon and link -->
          <a href="https://github.com/imer1319" target="_blank">
            <span class="socialbtn text-[#000]">
              <i class="fa-brands fa-github"></i>
            </span>
          </a>
          <!-- twitter icon and link -->
          <a href="https://twitter.com/Imer_nd" target="_blank">
            <span class="socialbtn text-[#1C9CEA]">
              <i class="fa-brands fa-twitter"></i>
            </span>
          </a>
        </div>

        <div class="p-7 rounded-2xl mt-7 bg-[#F3F6F6]">
          <div class="flex border-b border-[#E3E3E3] pb-2.5">
            <span class="socialbtn bg-white text-[#E93B81] shadow-md">
              <i class="fa-solid fa-mobile-screen-button"></i>
            </span>
            <div class="text-left ml-2.5">
              <p class="text-xs text-[#44566C]">Telefono</p>
              <p class="">+591 70239101</p>
            </div>
          </div>

          <div class="flex border-b border-[#E3E3E3] py-2.5">
            <span class="socialbtn bg-white text-[#6AB5B9] shadow-md">
              <i class="fa-solid fa-envelope-open-text"></i>
            </span>
            <div class="text-left ml-2.5">
              <p class="text-xs text-[#44566C]">Email</p>
              <p class="">imer.mamani.bo@gmail.com</p>
            </div>
          </div>

          <div class="flex border-b border-[#E3E3E3] py-2.5">
            <span class="socialbtn bg-white text-[#FD7590] shadow-md">
              <i class="fa-solid fa-location-dot"></i>
            </span>
            <div class="text-left ml-2.5">
              <p class="text-xs text-[#44566C]">Ubicación</p>
              <p class="">Argentina - Salta capital</p>
            </div>
          </div>

          <div class="flex py-2.5">
            <span class="socialbtn bg-white text-[#C17CEB] shadow-md">
              <i class="fa-solid fa-calendar-days"></i>
            </span>
            <div class="text-left ml-2.5">
              <p class="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                Fecha de nacimiento
              </p>
              <p class="">Ago, 04 1996</p>
            </div>
          </div>
        </div>
        <div class="flex items-center">
          <a class="dowanload-btn" href="/imer-mamani.pdf" target="_blank">
            <img class="mr-3" src="/images/icons/dowanload.png" alt="icon" />
            Descargar CV
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
