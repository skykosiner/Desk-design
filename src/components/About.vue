<template>
    <div class="about">
        <p>This website will allow you to design your own desk and log back in later to view it over time and make changes for more info visit our 
        <router-link to="/about">About page</router-link></p>
    </div>
</template>

<script>
export default {
    name: "About"
}
</script>

<style scoped>
    .about{
        position: absolute;
        bottom: 42%;
        font-size: 25px;
        font-family: 'Roboto', sans-serif;
    }
    .about p {
        color: #000;
    }
</style>