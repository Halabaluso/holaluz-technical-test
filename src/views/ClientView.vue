<template>
    <main class="pt-16">
      <ClientWelcome/>
      <ClientDiscount/>
      <ClientData/>
      <ClientSupply/>
    </main>
  </template>
  <script setup lang="ts">
  import ClientWelcome from "../components/client/ClientWelcome.vue"
  import ClientData from "../components/client/ClientData.vue"
  import ClientDiscount from "../components/client/ClientDiscount.vue"
  import ClientSupply from "../components/client/SupplyData.vue"
  </script>