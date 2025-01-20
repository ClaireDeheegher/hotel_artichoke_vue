<template>
  <Header />
  <div class="client-account-container">
    <!-- Header -->

      <h1 class="text-3xl font-bold text-center text-black">Please log in to continue</h1>


    <!-- Form Section -->
    <div class="form-container">
      <div class="max-w-md mx-auto p-8 border rounded-lg shadow-lg bg-white">
        <h2 class="text-2xl font-bold text-center mb-6">Login</h2>

        <div class="mb-6">
          <label for="clientName" class="block text-lg font-semibold text-gray-700">Client Name</label>
          <input
              id="clientName"
              type="text"
              v-model="clientName"
              placeholder="Enter your name"
              class="w-full px-4 py-3 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div class="mb-6">
          <label for="clientEmail" class="block text-lg font-semibold text-gray-700">Email</label>
          <input
              id="clientEmail"
              type="email"
              v-model="clientEmail"
              placeholder="Enter your email"
              class="w-full px-4 py-3 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div class="text-center">
          <button @click="submitForm" class="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Header from "~/components/Header.vue";

const clientName = ref('')
const clientEmail = ref('')

const submitForm = () => {
  if (clientName.value && clientEmail.value) {
    alert(`Account for ${clientName.value} has been created!`)
  } else {
    alert('Please fill in all fields.')
  }
}
</script>

<style scoped>
.client-account-container {
  background-color: #D9BD9C;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px; /* Added space for header */
}

.header-container {

    background-color: #333;
    color: white;
    padding: 1rem;
  }
  nav ul {
    list-style: none;
    display: flex;
    gap: 1rem;
  }
  nav a {
    color: white;
    text-decoration: none;
  }


.form-container {
  margin-top: 120px; /* Added margin to push form down below header */
  width: 100%;
  padding: 20px;
  background-color: #D9BD9C;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

button:hover {
  background-color: #8FA63C;
}
</style>
