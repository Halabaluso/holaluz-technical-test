<template>
    <section class="p-5">
      <div class="w-full p-5 rounded-lg shadow-lg">
        <div class="flex flex-row w-full items-center gap-5">
          <div class="avatar">
            <div class="w-24 rounded-full ring ring-pink-600 ring-offset-base-100 ring-offset-2">
              <img src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png" />
            </div>
          </div>
          <div class="flex flex-col">
            <p>Te estabamos esperando,</p>
            <p id = "clientname" class="font-bold text-3xl">{{ userStore.findUser.full_name }}.</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  <script setup lang="ts">
  import { users } from '../../stores/Users'
  const userStore = users()
  </script>