<script setup>
import { defineProps, ref } from "vue";

const props = defineProps(['links']);
const linkIndex = ref(null);

function copyToClipboard(link, index) {
    navigator.clipboard.writeText(link).then(() => {
        linkIndex.value = index;
        setTimeout(() => {
            linkIndex.value = null;
        }, 2000);
    });
}
</script>

<template>
    <div class="links-container">
        <div class="links" v-for="(link, index) in links" :key="index">
            <p class="link-original" :title="link.original">{{ link.original }}</p>
            <div class="link-actions">
                <a class="link-shortened" :href="link.shortened" target="_blank">{{ link.shortened }}</a>
                <button 
                    @click="copyToClipboard(link.shortened, index)" 
                    :class="{ copied: linkIndex === index }"
                >
                    {{ linkIndex === index ? 'Copied!' : 'Copy' }}
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.links-container {
    overflow: hidden;
    height: 250px;
    margin: auto;
    width: 80%;
}

.links-container:hover {
    overflow: auto;
}

.links {
    justify-content: space-between;
    display: flex;
    margin-top: 35px;
    height: 40px;
    align-items: center;
    border-radius: 12px;
    background-color: white;
    padding: 12px;
    font-size: 16px;
}

.link-actions {
    align-items: center;
    display: flex;
    padding: 20px;
    gap: 20px;
}

.link-original {
    padding: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.link-shortened {
    color: #26baba;
}

button {
    border: none;
    border-radius: 6px;
    background-color: var(--bg-color-btn);
    color: var(--color-btn);
    padding: 6px 22px;
    transition: background-color 0.3s;
    cursor: pointer;
}
button:hover {
    opacity: 0.6;
}

button.copied {
    background-color: #3A3053;
}
button.copied:hover {
    opacity: 1;
}
</style>