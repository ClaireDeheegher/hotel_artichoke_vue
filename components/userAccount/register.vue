<script setup lang="ts">

</script>

<template>
  <div class="h-screen w-screen bg-gray-100 pt-10">
    <div class="max-w-xl mx-auto bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <form class="flex-col space-y-4">
        <div class="flex flex-col space-y-2">
          <label class="block font-medium text-gray-700">E-Mail Adress</label><input type="email" class="shadow-sm block w-full py-2 sm:text-sm rounded-md text-gray-800 disabled:bg-gray-200 sm:text-sm border-gray-300 focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400 focus:outline-none  " name="email" required="" placeholder="E-Mail Adress">
        </div>
        <div class="flex flex-col space-y-2">
          <label class="block font-medium text-gray-700">Password <span class="text-gray-500 font-base text-sm">(Min. 6 Zeichen)</span></label><input type="password" class="shadow-sm block w-full py-2 sm:text-sm rounded-md text-gray-800 disabled:bg-gray-200 sm:text-sm border-gray-300 focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400 focus:outline-none  " name="password" minlength="6" placeholder="Password" required="">
        </div>
        <div class="flex flex-col space-y-2">
          <label class="block font-medium text-gray-700">First and Last Name</label><input type="text" class="shadow-sm block w-full py-2 sm:text-sm rounded-md text-gray-800 disabled:bg-gray-200 sm:text-sm border-gray-300 focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400 focus:outline-none  " name="displayName" required="" placeholder="First and Last Name">
        </div>
        <div class="flex flex-col space-y-2">
          <label class="block font-medium text-gray-600 font-normal flex items-start space-x-2"><div><input type="checkbox" class="h-4 w-4 rounded border-gray-300 focus:ring-indigo-500 text-indigo-600" required=""></div><div>I have read and agree to the <a href="/legal/privacy" target="_blank" class="text-primary-600 hover:text-primary-700">Privacy Policy</a> and <a href="/legal/terms" target="_blank" class="text-primary-600 hover:text-primary-700">Terms and Conditions</a>.</div></label>
        </div>
        <div class="flex justify-end">
          <button class="inline-flex items-center justify-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none ring-2 ring-offset-2 ring-transparent ring-offset-transparent disabled:bg-gray-400 appearance-none text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-white w-full" type="submit" name="_action" value="create"><div class="relative"><div class="">Sign up</div><div class="hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"><svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></div></div></button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>