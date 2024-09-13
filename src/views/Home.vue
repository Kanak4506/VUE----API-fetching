<script setup>
async function apiFetching() {
   const res = await fetch('https://fakestoreapi.com/products');
   const data = await res.json();
   console.log(data);
}
apiFetching()
</script>

<template>
   <div>
    home page
   </div>
</template>

<style scoped></style>