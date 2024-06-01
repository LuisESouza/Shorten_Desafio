<script setup>
    import { ref } from 'vue';
    import { defineEmits } from 'vue';
    import axios from 'axios';

    const input_url = ref('');
    const emit = defineEmits(['link-shorted']);

    const submit = async () => {
        if (!input_url.value) {
            alert('Por favor, insira uma URL válida.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3001/shorten-url', {
                url: input_url.value,
            });

            const result = await response.data;
            
            if(result.url != null){
                emit('link-shorted', { shortened: result.url, original: input_url.value });
            }else{
                alert("URL Invalid");
            }

            input_url.value = "";
        } catch (error) {
            console.error(error);
            alert('Ocorreu um erro ao encurtar a URL.');
        }
    }
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