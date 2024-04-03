<script setup>
import About from './components/About.vue';
import Landing from './components/Landing.vue';
import Navbar from './components/Navbar.vue';
import Experience from './components/Experience.vue'
import Project from './components/Project.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';

</script>

<template>
  <div class="divide-y-2 divide-white">
    <Navbar />
    <Landing />
    <About />
    <Experience />
    <Project />
    <Contact />
    <Footer />
  </div>
</template>
