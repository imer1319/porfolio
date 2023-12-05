<template>
  <div class="text-center pb-4">
    <img class="w-full h-full shadow-img" :src="img" alt="icon" />
    <span class="font-semibold">{{ name }}</span>
  </div>
</template>
<script>
export default {
  props: ["img", "name"],
};
</script>
