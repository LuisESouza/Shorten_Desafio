<script setup>
  import HeroSection from './components/HeroSection.vue';
  import Footer from './components/utils/Footer.vue';
  import NavBar from './components/utils/NavBar.vue';
  import ShowLinks from './components/ShowLinks.vue';
  import Cards from './components/utils/Cards.vue';
  import Form from './components/utils/Form.vue';
  import Boost from './components/Boost.vue';

  import { ref } from 'vue';
  const links = ref([]);

  const handleLinkShorted = (newLink) => {
    links.value.push(newLink);
  }

  const cards = [
    {image: '/icon-brand-recognition.svg', title: 'Brand Recognition', description: 'Boost your brand recognition with each click.Generic links dont mean a thing. Branded links help instil confidence in your content.', classe: "1"},
    {image: '/icon-detailed-records.svg', title: 'Detailed Records', description: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.', classe: "2"},
    {image: '/icon-fully-customizable.svg', title: 'Fully Customizable', description: 'Improve brand awareness and content discoverability thourgh customizable links, supercharging audience engagement.', classe: "3"},
  ]
</script>

<template>
  <NavBar />
  <main>
    <section id="hero">
      <HeroSection/>
    </section>

    <section id="links"> 
      <Form @link-shorted="handleLinkShorted"/>
      <ShowLinks :links="links"/>
    </section>

    <section id="statics">
      <div class="text-statics">
        <h2>Advanced Statics</h2>
        <p>Track how your links are performing across the web with our advanced statics dashboard.</p>
      </div>

      <div class="container-cards">
      <span class="line"></span>
        <Cards 
          v-for="(card, index) in cards" 
          :key="index"
          :image="card.image"
          :title="card.title"
          :description="card.description"
          :classe="card.classe"
        />
      </div>
    </section>
    <Boost />
  </main>
  <Footer />
</template>

<style scoped>
  .text-statics{
    text-align: center;
    font-size: 23px;
  }
  .text-statics h2{
    font-size: 50px;
  }

  .line{
    margin-top: 120px;
    margin-left: 0rem;
    position: absolute;
    display: block;
    height: 10px;
    width: 950px;
    background-color: #29D1D1;
  }

  #statics{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 80px;
  }

  .container-cards{
    display: flex;
    gap: 50px;
  }
</style>