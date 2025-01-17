<template>
  <div class="client-account-container">
    <div class="bg-white overflow-hidden shadow rounded-lg border">
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          User Profile
        </h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">
          This is some information about the user.
        </p>
      </div>
      <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl class="sm:divide-y sm:divide-gray-200">
          <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
              Full name
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              John Doe
            </dd>
          </div>
          <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
              Email address
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              johndoe@example.com
            </dd>
          </div>
          <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
              Phone number
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              (123) 456-7890
            </dd>
          </div>
          <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
              Address
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              123 Main St<br>
              Anytown, USA 12345
            </dd>
          </div>
        </dl>
      </div>
    </div>
    </div>

</template>

<script setup lang="ts">
import { ref } from 'vue'

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
  justify-content: center;
  align-items: center;
}

.form-container {
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
