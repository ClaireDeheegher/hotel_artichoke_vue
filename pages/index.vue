<template>
  <div class="page bg-amber-50 min-h-screen">

    <Header/>

    <div class="flex justify-center mt-8 space-x-4">
      <NuxtLink to="/login">
        <button class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-purple-600">Login</button>
      </NuxtLink>
      <NuxtLink to="/register">
        <button class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-purple-600">Register</button>
      </NuxtLink>
      <NuxtLink to="/account">
        <button class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-purple-600">Account</button>
      </NuxtLink>
    </div>

    <LandingPageHeroe/>
    <LandingPageAmenities/>
    <LandingPageRooms/>
    <LandingPageNews/>

  </div>
</template>

<script setup lang="ts">

</script>
