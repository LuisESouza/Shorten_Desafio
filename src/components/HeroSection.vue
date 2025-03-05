<template>
    <section class="upside">
        <div class="home-container">
            <div class="text-content">
                <h1>More than just shorter links</h1>
                
                <p>
                    Build your brand's recognition and get detailed insights 
                    on how your links are performing
                </p>
                
                <button>Get Started</button>
            </div>

            <div class="image-container">
                <img src="../assets/images/illustration-working.svg" alt="working image">
            </div>
        </div>
    </section>
</template>

<style scoped>

    .home-container {
        display: flex;
        height: 64vh;
        justify-content: space-between;
        align-items: center;
        padding: 25px;
        flex-wrap: wrap;
    }

    .text-content {
        flex: 1;
        margin-right: 0px;
    }

    .image-container {
        flex: 1;
    }

    .upside{
        background-color: white;
        padding-left: 130px;
        padding-right: 130px;
    }

    img {
        width: 100%;
    }

    button {
        background-color: #2acfcf;
        color: white;
        border: none;
        padding: 12px 30px;
        font-size: 1em;
        cursor: pointer;
        border-radius: 25px;
        margin-top: 20px;
    }

    button:hover {
        opacity: 0.6;
    }

    p {
        color: var( --color-p);
        width: 80%;
        margin: 20px 0;
        font-size: var(--font-size-p);
    }

    h1 {
        color: #34313C;
        font-weight: 900;
        font-size: var(--font-size-h1);
        margin: 0;
    }

</style>