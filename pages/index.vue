<template>
  <div class="page bg-amber-50">
    <Header/>
    <LandingPageHeroe/>
    <LandingPageAmenities/>
    <LandingPageRooms/>
    <LandingPageNews/>
  </div>

</template>
<script setup lang="ts">
import LandingPageHeroe from "~/components/landingPage/LandingPageHeroe.vue";
import LandingPageAmenities from "~/components/landingPage/LandingPageAmenities.vue";
import LandingPageRooms from "~/components/landingPage/LandingPageRooms.vue";
import LandingPageNews from "~/components/landingPage/LandingPageNews.vue";
</script>