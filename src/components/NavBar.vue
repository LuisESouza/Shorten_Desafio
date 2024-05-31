<template>
    <header>
        <nav>
            <div class="nav-links">
                <div class="logo">
                    <img src="../assets/images/logo.svg" alt="Logo">
                </div>

                <a href="#" class="link-nav">Features</a>
                <a href="#" class="link-nav">Pricing</a>
                <a href="#" class="link-nav">Resources</a>
            </div>

            <div class="nav-buttons">
                <button class="btn-login">Login</button>
                <button class="btn-signup">Sign Up</button>
            </div>
        </nav>
    </header>
</template>

<style scoped>
    header{
        background-color: white;
        padding-top: 20px;
        padding-left: 130px;
        padding-right: 130px;
    }
    nav {
        padding: 25px;
        display: flex;
        justify-content: space-between;
    }

    .nav-links{
        display: flex;
        gap: 35px;
    }

    a{ 
        text-decoration: none;
        font-weight: 700;
        color: #96959B;
        font-size: 17px;
    }

    a:hover{ 
        color: black;
    }

    button{
        margin-left: 15px;
        font-size: 14px;
        color: #96959B;
        font-weight: 700;

        border: none;
        background-color: transparent;
        border-radius: 10px;
        padding: 8px;
        width: 80px;
        cursor: pointer;
    }

    .btn-signup{
        color: white;
        background-color: #2BD0D1;
    }

    .btn-signup:hover{
        opacity: 0.6;
    }
</style>