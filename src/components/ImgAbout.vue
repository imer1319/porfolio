<template>
    <div class="dark:bg-transparent text-center pb-4">
        <img class="w-full h-full shadow-img" :src="img" alt="icon" />
        <span class="dark:text-white font-semibold">{{ name }}</span>
    </div>
</template>
<script>
export default {
    props: ['img', 'name']
}
</script>