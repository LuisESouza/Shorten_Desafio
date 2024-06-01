<script setup>
import { ref } from 'vue';
import Form from './Form.vue';
import ShowLinks from './ShowLinks.vue';
import Boost from './Boost.vue'

    const links = ref([]);

    const handleLinkShorted = (newLink) => {
        links.value.push(newLink);
    }
</script>

<template>
    <section class="form-section">
        <Form @link-shorted="handleLinkShorted" />
        <ShowLinks :links="links" />
    </section>

    <section class="statistics-section">
        <div class="statistics-text-container">
            <h2>Advanced Statistics</h2>
            <p>
                Track how your links are performing across the web with 
                <span class="break"/>
                our advanced statics dashboard
            </p>
        </div>
        
        <div class="statistics-cards-container">
            <!-- cards -->
        </div>
    </section>
    <Boost />
</template>

<style scoped>
    .statistics-section{
        text-align: center;
        padding: 50px;
    }

    .statistics-text-container{
        
    }

    .break::before{
        content: "";
        display: block;
    }


    h2{
        font-weight: 900;
        color: var(--color-title);
        font-size: var(--font-size-h2);
    }

    p{
        line-height: 30px;
        color: var( --color-p);
        font-size: var(--font-size-p);
    }
</style>
