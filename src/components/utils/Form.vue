<script setup>
import { apiPost } from '../../api/index.js';
import { defineEmits, ref } from 'vue';

const emit = defineEmits(['link-shorted']);
const input_url = ref('');

const submit = async () => {
    if (!input_url.value) {
        alert('Por favor, insira uma URL válida.');
        return;
    }
        const response = await apiPost('http://localhost:4004/api/shorten-link', {
            url: input_url.value,
        });
        // Emitir o evento com o novo link
        emit('link-shorted', {
            original: input_url.value,
            shortened: response.shortenedUrl
        });

        input_url.value = "";
};
</script>

<template>
    <div class="form-container">
        <form @submit.prevent="submit">
            <input type="text" id="input_url" placeholder="Shorten a link here..." v-model="input_url">
            <button>Shorten It!</button>
        </form>
    </div>
</template>

<style scoped>
    .form-container {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
    }

    form {
        display: flex;
        width: 74%;
        position: absolute;
        margin-bottom: 40px;

        background-color: var(--bg-color-form);
        background-image: url('@/assets/images/bg-shorten-desktop.svg');
        padding: 35px;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    input {
        flex: 1;
        padding: 10px;
        font-size: 16px;
        border: none;
        border-radius: 5px;
        outline: none;
        margin-right: 10px;
    }

    button {
        padding: 10px 20px;
        font-size: 16px;
        color: var(--color-btn);
        border: none;
        background-color: var(--bg-color-btn);
        border-radius: 5px;
        cursor: pointer;
        transition: opacity 0.3s, box-shadow 0.3s;
    }

    button:hover {
        background-color: var(--bg-color-btn) ;
    }
</style>