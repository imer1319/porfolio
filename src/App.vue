<script setup>
import InfoUser from "./components/InfoUser.vue";
import Menu from "./components/Menu.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div
    id="inicio"
    class="bg-homeBg min-h-screen bg-no-repeat bg-center bg-cover bg-fixed pb-12 md:pb-8 w-full"
  >
    <Navbar />
    <div
      class="container grid grid-cols-12 md:gap-10 justify-between lg:mt-[120px]"
    >
      <InfoUser />
      <div class="col-span-12 lg:col-span-8">
        <Menu></Menu>
        <div class="rounded-2xl bg-white p-6 lg:p-12 lg:pb-6" id="content">
          <router-view v-slot="{ Component, route }">
            <transition name="fade" mode="out-in">
              <div :key="route.name">
                <component :is="Component"></component>
              </div>
            </transition>
          </router-view>
        </div>
      </div>
    </div>
  </div>
</template>