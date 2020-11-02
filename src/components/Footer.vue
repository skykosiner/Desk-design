<template>
    <div class="footer">
        <h1>Designed and developed by &copy;Yoni Kosiner 2020</h1>
    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
    body{
        overflow-x: hidden;
    }
    .footer{
        position: fixed;
        background-color: #1e1e1e;
        bottom: 0%;
        width: 100%;
        left: 0%;
    }
    .footer h1 {
        color: #fff;
        text-align: left;
    }
</style>