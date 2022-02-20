<script setup>

import {useUserStore} from "../../stores/user.ts";

const userStore = useUserStore();


</script>

<template>
<h1>Welkom {{ userStore.email }}</h1>
</template>


<style scoped>

</style>