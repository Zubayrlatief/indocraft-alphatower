<template>
  <NavbarComp/>
  <router-view/>
  <FooterComp/>
</template>


<script lang="ts">
import FooterComp from './components/FooterComp.vue';
import NavbarComp from './components/NavbarComp.vue';

export default{
component: {
  NavbarComp,
  FooterComp
}
};
</script>
<style>
</style>
