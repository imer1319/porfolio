<template>
    <header
        class="w-full shadow-[0_35px_60px_2px_rgba(0,0,0,0.8)] lg:shadow-none p-[8px] fixed bottom-0 z-10 rounded-tl-2xl rounded-tr-2xl bg-white lg:w-[430px] lg:h-[8.7rem] lg:relative lg:p-[30px] lg:ml-auto lg:mb-10 lg:rounded-[15px] dark:bg-[#111111]">
        <nav class=" lg:block ">
            <ul class="flex items-center justify-center">
                <li v-for="route in routes">
                    <router-link :to="route.url" exact onclick="scrollToContent()"
                        :class="[$route.path === route.url ? 'menu-active' : 'menu-item']">
                        <span class="text-xl mb-1">
                            <i :class="route.icon"></i>
                        </span>
                        <span class="hidden lg:block">
                            {{ route.name }}
                        </span>
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>
<script setup>
const routes = [
    { url: '/', name: 'Sobre mi', icon: 'fa-regular fa-user', id: 'about' },
    { url: '/resume', name: 'Resumen', icon: 'fa-regular fa-file-lines', id: 'resume' },
    { url: '/project', name: 'Proyectos', icon: 'fas fa-briefcase', id: 'project' },
    { url: '/contact', name: 'Contacto', icon: 'fa-solid fa-address-book', id: 'contact' },
];
</script>