<script setup>
defineProps({
  image: String,
  title: String,
  description: String,
  classe: String,
});
</script>

<template>
    <div :class="'card card-'+ classe">
        <div class="contianer-img">
            <img :src="image" alt="Card Image">
        </div>
        <div class="content">
            <h2>{{ title }}</h2>
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<style scoped>
p{
    font-size: 19px;
}

.card {
    padding: 25px;
    height: 220px;
    margin-bottom: 50px;
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    width: 300px;
    text-align: center;
    z-index: 1;
}

.card-2{
    margin-top: 40px;
}
.card-3{
    margin-top: 90px;
}

.contianer-img {
    position: absolute;    
    margin-top: -65px;
    background-color: #3A3053;
    border-radius: 50%;
    padding: 10px;
    width: 60px;
    height: auto;
}

.contianer-img img{
    width: 50px;
    height: 50px;
}

.content {
    margin-top: 30px;
    text-align: start;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0px;
}
</style>
