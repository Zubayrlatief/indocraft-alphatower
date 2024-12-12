<template>
  <NavbarComp/>
  <router-view/>
  <FooterComp/>
</template>


<script lang="ts">
import FooterComp from './components/FooterComp.vue';
import NavbarComp from './components/NavbarComp.vue';

export default{
components: {
  NavbarComp,
  FooterComp
}
};
</script>
<style>
h1,h2,h3,h4,h5,h6,p,div{
  font-family: 'Lexend Exa';
  font-weight: 600;
}
</style>
