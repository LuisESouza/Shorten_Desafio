<script setup>
import { ref } from 'vue';
import Form from './Form.vue';
import ShowLinks from './ShowLinks.vue';

    const links = ref([]);

    const handleLinkShorted = (newLink) => {
        links.value.push(newLink);
    }
</script>

<template>
    <section class="downside">
        <Form @link-shorted="handleLinkShorted" />
        <ShowLinks :links="links" />
    </section>
</template>

<style scoped>
    section{
        margin-bottom: 30px;
    }
</style>
