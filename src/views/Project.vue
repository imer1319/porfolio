<script setup></script>

<template>
  <section class="bg-white lg:rounded-2xl">
    <h2 class="after-effect after:left-48 lg:mt-0">Proyectos</h2>

    <div class="row-img">
      <!-- portfolio items one start -->
      <div class="col-img">
        <div class="rounded-lg bg-[#e4eaf3] p-6 border-[#212425]">
          <div class="overflow-hidden rounded-lg">
            <a href="#project-activos" rel="modal:open">
              <img
                class="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
                src="/projects/activos-fijos1.png" alt="portfolio image" />
            </a>
          </div>
          <span class="pt-5 text-[14px] font-normal text-gray-lite block">Vuejs - Electronjs</span>
          <h2 class="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#4d235a]">
            <a href="#project-activos" rel="modal:open">
              Sistema de activos fijos
            </a>
          </h2>
        </div>
      </div>

      <!-- modal start for item one  -->
      <div id="project-activos" class="modal-container modal">
        <div class="overflow-y-scroll scroll-hide-1700 max-h-[60vh] lg:max-h-[80vh] scrollbarLight">
          <h2 class="text-[#ef4060] text-4xl text-center font-bold">
            Sistema de activos fijos para la gobernacion del Gran Chaco
          </h2>
          <div class="grid grid-cols-1 lg:grid-cols-2 my-6 pr-3">
            <div class="space-y-2">
              <p class="flex items-center text-[15px] sm:text-lg">
                <i class="fa-regular fa-file-lines sm:text-lg hidden sm:block mr-4 md:text-xl"></i>
                <span class="font-medium"> Plataforma Web</span>
              </p>
            </div>

            <div class="space-y-2">
              <p class="flex items-center text-[15px] sm:text-lg">
                <i class="fa-solid fa-code text-lg mr-2 hidden sm:block"></i>
                <span class="font-medium">Laravel</span>
              </p>
            </div>
          </div>

          <p class="">
            Este sistema ha sido desarrollado empleando Laravel como el framework de backend, todo ello integrado y estilizado utilizando el framework Bootstrap.
          </p>
          <p class="font-medium pt-1">Caracteristicas del sistema:</p>
          <p class="">Modulo de autenticación.</p>
          <p class="">Modulo de activos fijos, con busquedas con relaciones entre tablas, y aplicacion de depreciacion de activos.</p>
          <p class="">Modulo de Grupo contable.</p>
          <p class="">Modulo de Auxiliar contable.</p>
          <p class="">Modulo de Empleados.</p>
          <p class="">Modulo de Oficinas.</p>
          <p class="">Modulo de Parque automotor.</p>
          <p class="">Modulo de Formularios.</p>
          <p class="">Reportes de activos.</p>
          <div class="pr-3">
            <img class="w-full md:h-[450px] h-auto object-cover rounded-xl mt-6" src="/projects/activos-fijos-2.png"
              alt="portfolio image" />
          </div>
        </div>
        <a href="#close-modal" rel="modal:close" class="close bg-close-light">Close</a>
      </div>
      <div class="col-img">
        <div class="rounded-lg bg-[#e4eaf3] p-6 border-[#212425]">
          <div class="overflow-hidden rounded-lg">
            <a href="#project-lsb" rel="modal:open">
              <img
                class="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
                src="/projects/lsb-1.png" alt="portfolio image" />
            </a>
          </div>
          <span class="pt-5 text-[14px] font-normal text-gray-lite block">Vuejs - Electronjs</span>
          <h2 class="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#4d235a]">
            <a href="#project-lsb" rel="modal:open">
              Sistema lenguaje de señas</a>
          </h2>
        </div>
      </div>

      <!-- modal start for item one  -->
      <div id="project-lsb" class="modal-container modal">
        <div class="overflow-y-scroll scroll-hide-1700 max-h-[60vh] lg:max-h-[80vh] scrollbarLight">
          <h2 class="text-[#ef4060] text-4xl text-center font-bold">
            Sistema para la enseñanza del lenguaje de señas
          </h2>
          <div class="grid grid-cols-1 lg:grid-cols-2 my-6 pr-3">
            <div class="space-y-2">
              <p class="flex items-center text-[15px] sm:text-lg">
                <i class="fa-regular fa-file-lines sm:text-lg hidden sm:block mr-4 md:text-xl"></i>
                <span class="font-medium"> Aplicacion de escritorio</span>
              </p>
            </div>

            <div class="space-y-2">
              <p class="flex items-center text-[15px] sm:text-lg">
                <i class="fa-solid fa-code text-lg mr-2 hidden sm:block"></i>
                <span class="font-medium">Vuejs - Electronjs</span>
              </p>
            </div>
          </div>

          <p class="">
            Sistema innovador para enseñar lenguaje de señas, con
            interfaz intuitiva y funcional. Utilicé Vue.js y Electron.js para
            facilitar el aprendizaje efectivo de este medio de comunicación.
          </p>
          <p class="font-medium pt-1">Caracteristicas del sistema:</p>
          <p class="">Modulo de busqueda de palabras casuales incluido sinonimos.</p>
          <p class="">Modulo de lecciones.</p>
          <p class="">Modulo de Juegos por lecciones.</p>
          <div class="pr-3">
            <img class="w-full md:h-[450px] h-auto object-cover rounded-xl mt-6" src="/projects/lsb-4.png"
              alt="portfolio image" />
          </div>
        </div>
        <a href="#close-modal" rel="modal:close" class="close bg-close-light">Close</a>
      </div>


      <!-- portfolio items two start -->
      <div class="col-img">
        <div class="rounded-lg bg-[#fff3fc] p-6 border-[#212425]">
          <div class="overflow-hidden rounded-lg">
            <a href="#portfiloTwo" rel="modal:open">
              <img
                class="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
                src="/projects/social3.png" alt="portfolio image" />
            </a>
          </div>
          <span class="pt-5 text-[14px] font-normal text-gray-lite block">Laravel - Vue - Pusher</span>
          <h2 class="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#4d235a]">
            <a href="#portfiloTwo" rel="modal:open">Red social</a>
          </h2>
        </div>
      </div>

      <!-- modal start for item two  -->
      <div id="portfiloTwo" class="modal-container modal">
        <div class="overflow-y-scroll scroll-hide-1700 max-h-[60vh] lg:max-h-[80vh] scrollbarLight">
          <h2 class="text-[#ef4060] text-4xl text-center font-bold">
            Red social
          </h2>
          <div class="grid grid-cols-1 lg:grid-cols-2 my-6 pr-3">
            <div class="space-y-2">
              <p class="flex items-center text-[15px] sm:text-lg">
                <i class="fa-regular fa-file-lines sm:text-lg hidden sm:block mr-4 md:text-xl"></i>
                <span class="font-medium"> Sistema web</span>
              </p>
            </div>

            <div class="space-y-2">
              <p class="flex items-center text-[15px] sm:text-lg">
                <i class="fa-solid fa-code text-lg mr-2 hidden sm:block"></i>
                <span class="font-medium">Laravel - Vue - Pusher</span>
              </p>
            </div>
          </div>

          <p class="">
            La aplicación fue creada utilizando Laravel como framework de
            backend y Vue.js Pusher para el envio de notificaciones en tiempo
            real.
          </p>
          <p class="font-medium pt-1">Caracteristicas del sistema:</p>
          <p class="">Modulo de autenticación.</p>
          <p class="">Modulo de usuarios.</p>
          <p class="">Comentarios en tiempo real.</p>
          <p class="">Likes en tiempo real.</p>
          <p class="">Invitacion de amistad.</p>
          <p class="">Test unitarios con PHPUNIT (backend).</p>
          <p class="">Test unitarios con LARAVEL DUSK (frontend).</p>
          <div class="pr-3">
            <img class="w-full md:h-[450px] h-auto object-cover rounded-xl mt-6" src="/projects/social1.png"
              alt="portfolio image" />
          </div>
        </div>
        <a href="#close-modal" rel="modal:close" class="close bg-close-light">Close</a>
      </div>

      <!-- portfolio items three start -->
      <div class="col-img">
        <div class="rounded-lg bg-[#f4f4ff] p-6 border-[#212425]">
          <div class="overflow-hidden rounded-lg">
            <a href="#portfiloThree" rel="modal:open">
              <img
                class="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
                src="/projects/lectura1.png" alt="portfolio image" />
            </a>
          </div>
          <span class="pt-5 text-[14px] font-normal text-gray-lite block">Laravel - Vue</span>
          <h2 class="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#4d235a]">
            <a href="#portfiloThree" rel="modal:open">
              Sistema lectura veloz
            </a>
          </h2>
        </div>
      </div>

      <!-- modal start for item three start -->
      <div id="portfiloThree" class="modal-container modal">
        <div class="overflow-y-scroll scroll-hide-1700 max-h-[60vh] lg:max-h-[80vh] scrollbarLight">
          <h2 class="text-[#ef4060] text-4xl text-center font-bold">
            Sistema lectura veloz
          </h2>
          <div class="grid grid-cols-1 lg:grid-cols-2 my-6 pr-3">
            <div class="space-y-2">
              <p class="flex items-center text-[15px] sm:text-lg">
                <i class="fa-regular fa-file-lines sm:text-lg hidden sm:block mr-4 md:text-xl"></i>
                <span class="font-medium"> Sistema web</span>
              </p>
            </div>

            <div class="space-y-2">
              <p class="flex items-center text-[15px] sm:text-lg">
                <i class="fa-solid fa-code text-lg mr-2 hidden sm:block"></i>
                <span class="font-medium">Laravel - Vue</span>
              </p>
            </div>
          </div>

          <p class="">
            La aplicación fue creada utilizando Laravel como framework de
            backend y Vue.js para el frontend, estilizado con el framework
            bootstrap.
          </p>
          <p class="font-medium pt-1">Caracteristicas del sistema:</p>
          <p class="">Modulo de autenticación.</p>
          <p class="">Modulo de roles.</p>
          <p class="">Modulo de usuarios.</p>
          <p class="">Rango para los usuarios.</p>
          <p class="">Ranking de usuarios.</p>
          <p class="">Realización de ejercicios para obtener puntos.</p>
          <p class="">Realización de examenes para desbloquear el curso.</p>
          <p class="">Resultados de examenes.</p>
          <div class="pr-3">
            <img class="w-full md:h-[450px] h-auto object-cover rounded-xl mt-6" src="/projects/lectura2.png"
              alt="portfolio image" />
          </div>
        </div>
        <a href="#close-modal" rel="modal:close" class="close bg-close-light">Close</a>
      </div>

      <!-- portfolio items four start -->
      <div class="col-img">
        <div class="rounded-lg p-6 bg-[#e9faff] border-[#212425]">
          <div class="overflow-hidden rounded-lg">
            <a href="#portfiloFour" rel="modal:open">
              <img
                class="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
                src="/projects/blog1.png" alt="portfolio image" />
            </a>
          </div>
          <span class="pt-5 text-[14px] font-normal text-gray-lite block">Laravel</span>
          <h2 class="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#4d235a]">
            <a href="#portfiloFour" rel="modal:open">Sistema de blog </a>
          </h2>
        </div>
      </div>

      <!-- modal start for item one start -->
      <div id="portfiloFour" class="modal-container modal">
        <div class="overflow-y-scroll scroll-hide-1700 max-h-[60vh] lg:max-h-[80vh] scrollbarLight">
          <h2 class="text-[#ef4060] text-4xl text-center font-bold">
            Sistema de blog
          </h2>
          <div class="grid grid-cols-1 lg:grid-cols-2 my-6 pr-3">
            <div class="space-y-2">
              <p class="flex items-center text-[15px] sm:text-lg">
                <i class="fa-regular fa-file-lines sm:text-lg hidden sm:block mr-4 md:text-xl"></i>
                <span class="font-medium"> Sistema web</span>
              </p>
            </div>

            <div class="space-y-2">
              <p class="flex items-center text-[15px] sm:text-lg">
                <i class="fa-solid fa-code text-lg mr-2 hidden sm:block"></i>
                <span class="font-medium">Laravel</span>
              </p>
            </div>
          </div>

          <p class="">
            La aplicación fue creada utilizando Laravel como framework de
            backend y estilizado con el framework bootstrap.
          </p>
          <p class="font-medium pt-1">Caracteristicas del sistema:</p>
          <p class="">Modulo de autenticación.</p>
          <p class="">Modulo de usuarios.</p>
          <p class="">Modulo de posts.</p>
          <p class="">Modulo de categorias.</p>
          <p class="">Modulo de etiquetas.</p>
          <div class="pr-3">
            <img class="w-full md:h-[450px] h-auto object-cover rounded-xl mt-6" src="/projects/blog1.png"
              alt="portfolio image" />
          </div>
        </div>
        <a href="#close-modal" rel="modal:close" class="close bg-close-light">Close</a>
      </div>
      <div class="col-img">
        <div class="rounded-lg bg-[#f4f4ff] p-6 border-[#212425]">
          <div class="overflow-hidden rounded-lg">
            <a href="#project-ecommerce" rel="modal:open">
              <img
                class="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
                src="/projects/carrito.png" alt="portfolio image" />
            </a>
          </div>
          <span class="pt-5 text-[14px] font-normal text-gray-lite block">Laravel - Vuejs - Vuex</span>
          <h2 class="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#4d235a]">
            <a href="#project-ecommerce" rel="modal:open"> Sistema ecommerce </a>
          </h2>
        </div>
      </div>

      <!-- modal start for item one  -->
      <div id="project-ecommerce" class="modal-container modal">
        <div class="overflow-y-scroll scroll-hide-1700 max-h-[60vh] lg:max-h-[80vh] scrollbarLight">
          <h2 class="text-[#ef4060] text-4xl text-center font-bold">
            Sistema ecommerce
          </h2>
          <div class="grid grid-cols-1 lg:grid-cols-2 my-6 pr-3">
            <div class="space-y-2">
              <p class="flex items-center text-[15px] sm:text-lg">
                <i class="fa-regular fa-file-lines sm:text-lg hidden sm:block mr-4 md:text-xl"></i>
                <span class="font-medium"> Sistema web</span>
              </p>
            </div>

            <div class="space-y-2">
              <p class="flex items-center text-[15px] sm:text-lg">
                <i class="fa-solid fa-code text-lg mr-2 hidden sm:block"></i>
                <span class="font-medium">Laravel - Vue - Vuex</span>
              </p>
            </div>
          </div>

          <p class="">
            La aplicación fue creada utilizando Laravel como framework de
            backend y Vue.js, Vuex y Bootstrap para la construcción de la
            interfaz de usuario.
          </p>
          <p class="font-medium pt-1">Caracteristicas del sistema:</p>
          <p class="">Modulo de roles y permisos.</p>
          <p class="">Modulo de autenticación.</p>
          <p class="">Modulo de usuarios.</p>
          <p class="">Modulo de productos.</p>
          <p class="">Modulo de categorias.</p>
          <p class="">Modulo de etiquetas.</p>
          <p class="">Impresion de boleta.</p>
          <p class="">Inventario de productos.</p>
          <p class="">Ventas por año.</p>
          <p class="">Ventas por mes.</p>
          <div class="pr-3">
            <img class="w-full md:h-[450px] h-auto object-cover rounded-xl mt-6" src="/projects/carrito.png"
              alt="portfolio image" />
          </div>
        </div>
        <a href="#close-modal" rel="modal:close" class="close bg-close-light">Close</a>
      </div>
    </div>

  </section>
</template>