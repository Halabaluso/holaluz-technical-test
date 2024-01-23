<script setup lang="ts">
//Import router vue
import { useRouter } from "vue-router"

//Import user stores
import { users } from "./stores/Users"

//Commons components import
import ShowToast from "./components/toasts/AllToasts.vue"
import Header from "./components/commons/Header.vue"
import { onMounted } from "vue"

//If findUser is {} we go home
const router = useRouter()
const userStore = users()
onMounted(() => {
  if(userStore.findUser.address === undefined){
    router.push("/")
  }
})
</script>

<template>
  <Header />
  <RouterView />
  <ShowToast/>
</template>

