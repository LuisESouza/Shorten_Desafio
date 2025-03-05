<script setup></script>

<template>
    <footer>
        <div class="container">

            <div class="logo">
                <img src="@/assets/images/logo-white.svg" alt="Logo">
            </div>

            <div class="container-links">
                <div class="features">
                    <h2>Features</h2>
                    <a href="#" class="link-footer link">Link Shortening</a>
                    <a href="#" class="link-footer link">Branded Links</a>
                    <a href="#" class="link-footer link">Analytics</a>
                </div>

                <div class="resources">
                    <h2>Resources</h2>
                    <a href="#" class="link-footer link">Blog</a>
                    <a href="#" class="link-footer link">Developers</a>
                    <a href="#" class="link-footer link">Support</a>
                </div>

                <div class="company">
                    <h2>Company</h2>
                    <a href="#" class="link-footer link">About</a>
                    <a href="#" class="link-footer link">Our Team</a>
                    <a href="#" class="link-footer link">Careers</a>
                    <a href="#" class="link-footer link">Contact</a>
                </div>
            </div>
            
            <div class="social">
                <a href="" class="link-social"><img src="@/assets/images/icon-twitter.svg" alt="Twitter"></a>
                <a href="" class="link-social"><img src="@/assets/images/icon-facebook.svg" alt="Facebook"></a>
                <a href="" class="link-social"><img src="@/assets/images/icon-pinterest.svg" alt="Pinterest"></a>
                <a href="" class="link-social"><img src="@/assets/images/icon-instagram.svg" alt="Instagram"></a>
            </div>

        </div>
    </footer>
</template>

<style scoped>
    footer {
        color: var(--color-btn);
        background-color: var(--bg-color-footer);
        padding: 40px 0;
    }

    .container {
        width: 90%;
        margin: auto;
        display: flex;
        justify-content: space-between;
    }

    .logo img {
        height: 40px;
    }

    .container-links {
        display: flex;
        gap: 100px;
    }

    .features, .resources, .company {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .features h2, .resources h2, .company h2 {
        margin-bottom: 10px;
    }

    .social {
        display: flex;
        gap: 20px;
    }

    .link-footer {
        text-decoration: none;
        color: var(--color-btn);
    }

    .link-footer:hover {
        color: var(--color-hover-p);
    }

    .link-social img {
        width: 24px;
        height: 24px;
    }

    .link-social:hover img {
        filter: invert(20%) sepia(7%) saturate(3600%) hue-rotate(137deg) brightness(101%) contrast(98%);
    }
</style>