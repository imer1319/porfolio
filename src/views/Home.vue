<template>
  <h2 class="after-effect after:left-64 font-semibold">Acerca de mi</h2>
  <div class="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[15px] items-center">
    <div class="col-span-12 space-y-2.5">
      <div class="lg:mr-16">
        <p class="text-[#44566c] leading-7 text-justify">
          Soy un desarrollador web con experiencia en el uso de Laravel y VueJS
          para la creación de aplicaciones web y sistemas empresariales. Me
          especializo en el desarrollo de aplicaciones escalables, seguras y
          fáciles de usar, utilizando las últimas tecnologías y prácticas en la
          industria.
        </p>
        <p class="text-[#44566c] leading-7 mt-2.5 text-justify">
          Además de Laravel y VueJS, también tengo habilidades en HTML, CSS,
          JavaScript, jQuery, MySQL, Git, y otras herramientas y tecnologías
          relacionadas con el desarrollo web. Soy un colaborador proactivo y me
          gusta trabajar en equipo, siempre estoy dispuesto a ayudar y aprender
          de mis colegas.
        </p>
      </div>
      <div></div>
    </div>
  </div>

  <div class="pb-12">
    <h3 class="text-[35px] font-semibold pb-5">
      ¿A qué me dedico?
    </h3>
    <div class="grid gap-8 grid-cols-3 md:grid-cols-4 px-8">
      <ImgAbout
        :img="icon.img"
        :name="icon.name"
        v-for="(icon, index) in icons"
        :key="index"
      />
    </div>
  </div>
</template>

<script setup>
import ImgAbout from "../components/ImgAbout.vue";

const icons = [
  { name: "Html", img: "icons/HTML.svg" },
  { name: "Css", img: "icons/CSS.svg" },
  { name: "JavaScript", img: "icons/JavaScript.svg" },
  { name: "Java", img: "icons/Java-Light.svg" },
  { name: "Php", img: "icons/PHP-Light.svg" },
  { name: "Laravel", img: "icons/Laravel-Light.svg" },
  { name: "VueJS", img: "icons/VueJS-Light.svg" },
  { name: "JQuery", img: "icons/JQuery.svg" },
  { name: "TailwindCSS", img: "icons/TailwindCSS-Light.svg" },
  { name: "Bootstrap", img: "icons/Bootstrap.svg" },
  { name: "MySQL", img: "icons/MySQL-Light.svg" },
  { name: "PostgreSQL", img: "icons/PostgreSQL-Light.svg" },
  { name: "Git", img: "icons/Git.svg" },
  { name: "Github", img: "icons/Github-Light.svg" },
];
</script>
