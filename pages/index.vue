<template>
  <div class="page bg-amber-50">
    <Header />
    <LandingPageHeroe />
    <LandingPageAmenities />
    <LandingPageRooms />
    <LandingPageNews />

    <!-- Button to redirect to clientAccount page -->
    <router-link to="/login">
      <button class="btn btn-primary">Login</button>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue'
import LandingPageHeroe from '~/components/landingPage/Heroe.vue'
import LandingPageAmenities from '~/components/landingPage/Amenities.vue'
import LandingPageRooms from '~/components/landingPage/Rooms.vue'
import LandingPageNews from '~/components/landingPage/News.vue'
</script>
