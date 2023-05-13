<script setup>

</script>

<template>
    <section class="bg-white   lg:rounded-2xl dark:bg-[#111111]">
        <h2 class="after-effect after:left-48 lg:mt-0">Proyectos</h2>

        <div class="row-img">
            <!-- portfolio items one start -->
            <div class="col-img">
                <div class="rounded-lg bg-[#f4f4ff] p-6 dark:bg-transparent dark:border-[2px] border-[#212425]">
                    <div class="overflow-hidden rounded-lg">
                        <a href="#portfiloOne" rel="modal:open">
                            <img class="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
                                src="/projects/carrito.png" alt="portfolio image" />
                        </a>
                    </div>
                    <span class="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">Laravel -
                        Vuejs - Vuex</span>
                    <h2
                        class="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
                        <a href="#portfiloOne" rel="modal:open"> Sistema ecommerce </a>
                    </h2>
                </div>
            </div>

            <!-- modal start for item one  -->
            <div id="portfiloOne" class="modal-container modal">
                <div
                    class="overflow-y-scroll scroll-hide-1700  max-h-[60vh] lg:max-h-[80vh] dark:scrollbarDark scrollbarLight">
                    <h2 class="text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold">
                        Sistema ecommerce
                    </h2>
                    <div class="grid grid-cols-1 lg:grid-cols-2 my-6 pr-3">
                        <div class="space-y-2">
                            <p class="dark:text-white flex items-center text-[15px] sm:text-lg">
                                <i class="fa-regular fa-file-lines sm:text-lg hidden sm:block mr-4 md:text-xl"></i>
                                <span class="font-medium"> Sistema web</span>
                            </p>
                        </div>

                        <div class="space-y-2">
                            <p class="dark:text-white flex items-center text-[15px] sm:text-lg">
                                <i class="fa-solid fa-code text-lg mr-2 hidden sm:block"></i>
                                <span class="font-medium">Laravel - Vue - Vuex</span>
                            </p>
                        </div>
                    </div>

                    <p class="dark:text-white">
                        La aplicación fue creada utilizando Laravel como framework de backend y Vue.js, Vuex y Bootstrap
                        para la construcción de la interfaz de usuario.</p>
                    <p class="dark:text-white font-medium pt-1">Caracteristicas del sistema:</p>
                    <p class="dark:text-white">Modulo de roles y permisos.</p>
                    <p class="dark:text-white">Modulo de autenticación.</p>
                    <p class="dark:text-white">Modulo de usuarios.</p>
                    <p class="dark:text-white">Modulo de productos.</p>
                    <p class="dark:text-white">Modulo de categorias.</p>
                    <p class="dark:text-white">Modulo de etiquetas.</p>
                    <p class="dark:text-white">Impresion de boleta.</p>
                    <p class="dark:text-white">Inventario de productos.</p>
                    <p class="dark:text-white">Ventas por año.</p>
                    <p class="dark:text-white">Ventas por mes.</p>
                    <div class="pr-3">
                        <img class="w-full md:h-[450px] h-auto object-cover rounded-xl mt-6" src="/projects/carrito.png"
                            alt="portfolio image" />
                    </div>
                </div>
                <a href="#close-modal" rel="modal:close" class="close bg-close-light dark:bg-close-dark">Close</a>
            </div>

            <!-- portfolio items two start -->
            <div class="col-img">
                <div class="rounded-lg bg-[#fff3fc] dark:bg-transparent p-6 dark:border-[2px] border-[#212425]">
                    <div class="overflow-hidden rounded-lg">
                        <a href="#portfiloTwo" rel="modal:open">
                            <img class="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
                                src="/projects/social3.png" alt="portfolio image" />
                        </a>
                    </div>
                    <span class="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">Laravel - Vue -
                        Pusher</span>
                    <h2
                        class="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
                        <a href="#portfiloTwo" rel="modal:open">Red social</a>
                    </h2>
                </div>
            </div>

            <!-- modal start for item two  -->
            <div id="portfiloTwo" class="modal-container modal">
                <div
                    class="overflow-y-scroll scroll-hide-1700  max-h-[60vh] lg:max-h-[80vh] dark:scrollbarDark scrollbarLight">
                    <h2 class="text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold">
                        Red social
                    </h2>
                    <div class="grid grid-cols-1 lg:grid-cols-2 my-6 pr-3">
                        <div class="space-y-2">
                            <p class="dark:text-white flex items-center text-[15px] sm:text-lg">
                                <i class="fa-regular fa-file-lines sm:text-lg hidden sm:block mr-4 md:text-xl"></i>
                                <span class="font-medium"> Sistema web</span>
                            </p>
                        </div>

                        <div class="space-y-2">
                            <p class="dark:text-white flex items-center text-[15px] sm:text-lg">
                                <i class="fa-solid fa-code text-lg mr-2 hidden sm:block"></i>
                                <span class="font-medium">Laravel - Vue - Pusher</span>
                            </p>
                        </div>
                    </div>

                    <p class="dark:text-white">
                        La aplicación fue creada utilizando Laravel como framework de backend y Vue.js Pusher para el envio
                        de notificaciones en tiempo real.</p>
                    <p class="dark:text-white font-medium pt-1">Caracteristicas del sistema:</p>
                    <p class="dark:text-white">Modulo de autenticación.</p>
                    <p class="dark:text-white">Modulo de usuarios.</p>
                    <p class="dark:text-white">Comentarios en tiempo real.</p>
                    <p class="dark:text-white">Likes en tiempo real.</p>
                    <p class="dark:text-white">Invitacion de amistad.</p>
                    <p class="dark:text-white">Test unitarios con PHPUNIT (backend).</p>
                    <p class="dark:text-white">Test unitarios con LARAVEL DUSK (frontend).</p>
                    <div class="pr-3">
                        <img class="w-full md:h-[450px] h-auto object-cover rounded-xl mt-6" src="/projects/social1.png"
                            alt="portfolio image" />
                    </div>
                </div>
                <a href="#close-modal" rel="modal:close" class="close bg-close-light dark:bg-close-dark">Close</a>
            </div>

            <!-- portfolio items three start -->
            <div class="col-img">
                <div class="rounded-lg bg-[#f4f4ff] dark:bg-transparent p-6 dark:border-[2px] border-[#212425]">
                    <div class="overflow-hidden rounded-lg">
                        <a href="#portfiloThree" rel="modal:open">
                            <img class="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
                                src="/projects/lectura1.png" alt="portfolio image" />
                        </a>
                    </div>
                    <span class="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">Laravel - Vue</span>
                    <h2
                        class="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
                        <a href="#portfiloThree" rel="modal:open">
                            Sistema lectura veloz
                        </a>
                    </h2>
                </div>
            </div>

            <!-- modal start for item three start -->
            <div id="portfiloThree" class="modal-container modal">
                <div
                    class="overflow-y-scroll scroll-hide-1700  max-h-[60vh] lg:max-h-[80vh] dark:scrollbarDark scrollbarLight">
                    <h2 class="text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold">
                        Sistema lectura veloz
                    </h2>
                    <div class="grid grid-cols-1 lg:grid-cols-2 my-6 pr-3">
                        <div class="space-y-2">
                            <p class="dark:text-white flex items-center text-[15px] sm:text-lg">
                                <i class="fa-regular fa-file-lines sm:text-lg hidden sm:block mr-4 md:text-xl"></i>
                                <span class="font-medium"> Sistema web</span>
                            </p>
                        </div>

                        <div class="space-y-2">
                            <p class="dark:text-white flex items-center text-[15px] sm:text-lg">
                                <i class="fa-solid fa-code text-lg mr-2 hidden sm:block"></i>
                                <span class="font-medium">Laravel - Vue</span>
                            </p>
                        </div>
                    </div>

                    <p class="dark:text-white">
                        La aplicación fue creada utilizando Laravel como framework de backend y Vue.js para el frontend,
                        estilizado con el framework bootstrap.</p>
                    <p class="dark:text-white font-medium pt-1">Caracteristicas del sistema:</p>
                    <p class="dark:text-white">Modulo de autenticación.</p>
                    <p class="dark:text-white">Modulo de roles.</p>
                    <p class="dark:text-white">Modulo de usuarios.</p>
                    <p class="dark:text-white">Rango para los usuarios.</p>
                    <p class="dark:text-white">Ranking de usuarios.</p>
                    <p class="dark:text-white">Realización de ejercicios para obtener puntos.</p>
                    <p class="dark:text-white">Realización de examenes para desbloquear el curso.</p>
                    <p class="dark:text-white">Resultados de examenes.</p>
                    <div class="pr-3">
                        <img class="w-full md:h-[450px] h-auto object-cover rounded-xl mt-6" src="/projects/lectura2.png"
                            alt="portfolio image" />
                    </div>
                </div>
                <a href="#close-modal" rel="modal:close" class="close bg-close-light dark:bg-close-dark">Close</a>
            </div>

            <!-- portfolio items four start -->
            <div class="col-img">
                <div class="rounded-lg p-6 bg-[#e9faff] dark:bg-transparent dark:border-[2px] border-[#212425]">
                    <div class="overflow-hidden rounded-lg">
                        <a href="#portfiloFour" rel="modal:open">
                            <img class="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
                                src="/projects/blog1.png" alt="portfolio image" />
                        </a>
                    </div>
                    <span class="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">Laravel</span>
                    <h2
                        class="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
                        <a href="#portfiloFour" rel="modal:open">Sistema de blog
                        </a>
                    </h2>
                </div>
            </div>

            <!-- modal start for item one start -->
            <div id="portfiloFour" class="modal-container modal">
                <div
                    class="overflow-y-scroll scroll-hide-1700  max-h-[60vh] lg:max-h-[80vh] dark:scrollbarDark scrollbarLight">
                    <h2 class="text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold">
                        Sistema de blog
                    </h2>
                    <div class="grid grid-cols-1 lg:grid-cols-2 my-6 pr-3">
                        <div class="space-y-2">
                            <p class="dark:text-white flex items-center text-[15px] sm:text-lg">
                                <i class="fa-regular fa-file-lines sm:text-lg hidden sm:block mr-4 md:text-xl"></i>
                                <span class="font-medium"> Sistema web</span>
                            </p>
                        </div>

                        <div class="space-y-2">
                            <p class="dark:text-white flex items-center text-[15px] sm:text-lg">
                                <i class="fa-solid fa-code text-lg mr-2 hidden sm:block"></i>
                                <span class="font-medium">Laravel</span>
                            </p>
                        </div>
                    </div>

                    <p class="dark:text-white">
                        La aplicación fue creada utilizando Laravel como framework de backend y
                        estilizado con el framework bootstrap.</p>
                    <p class="dark:text-white font-medium pt-1">Caracteristicas del sistema:</p>
                    <p class="dark:text-white">Modulo de autenticación.</p>
                    <p class="dark:text-white">Modulo de usuarios.</p>
                    <p class="dark:text-white">Modulo de posts.</p>
                    <p class="dark:text-white">Modulo de categorias.</p>
                    <p class="dark:text-white">Modulo de etiquetas.</p>
                    <div class="pr-3">
                        <img class="w-full md:h-[450px] h-auto object-cover rounded-xl mt-6" src="/projects/blog1.png"
                            alt="portfolio image" />
                    </div>
                </div>
                <a href="#close-modal" rel="modal:close" class="close bg-close-light dark:bg-close-dark">Close</a>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
