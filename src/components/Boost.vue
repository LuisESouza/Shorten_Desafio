<script setup></script>

<template>
    <div class="Boost">
        <h2>Boost your links today</h2>
        <button>Get Started</button>
    </div>
</template>

<style scoped>
    h2{
        color: white;
    }

    .Boost {
        background-image: url('@/assets/images/bg-boost-desktop.svg');
        background-color: var(--bg-color-boost);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;


        padding: 50px;
        text-align: center;
        color: white;
        font-size: var(--font-size-boost-h2);
    }

    button {
        margin-top: 20px;
        background-color: var(--bg-color-btn);
        color: white;
        border: none;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        border-radius: 25px;
        transition: background-color 0.3s ease;
    }

    button:hover {
        background-color: #9BE3E2;
    }
</style>
