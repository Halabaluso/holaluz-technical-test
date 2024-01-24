<template>
  <section class="p-5">
    <div class="flex flex-col min-h-screen items-center justify-center">
      <form @submit.prevent="SearchUser" class="max-w-xl" id = "searchcupform">
        <div class="flex flex-col text-center gap-5">
          <p class="text-4xl font-bold font-extrabold"><i class="fa-regular fa-id-card"></i> Introduzca su ID de punto de suministro.</p>
          <p class="italic">
            Para más información sobre cómo saber su identificador, <a disabled class="link link-primary">pincha aquí</a>
          </p>
        </div>
        <div class="mt-5 gap-2 flex flex-col">
          <input id = "searchcup"
            v-model="data.userCups"
            type="number"
            placeholder="Ej: 000003"
            class="input input-bordered input-primary w-full animate-shake animate-delay-500 shadow"
          />
          <button type="submit" class="btn bg-gradient-to-br from-yellow-400 via-red-400 to-pink-600 text-white">Buscar mi oferta <i class="fa-solid fa-magnifying-glass"></i></button>
          <button type="button" @click="router.push(`/`)" class="btn btn-secondary"><i class="fa-solid fa-arrow-left"></i> Atrás</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
//Import methods & interfaces
import { reactive } from 'vue'
import { useRouter } from "vue-router"

//Import stores
import { toast } from '../../stores/Toast'
import { users } from "../../stores/Users"

//All variables
const data = reactive({
  userCups: 0 as number
})
const userStore = users()
const router = useRouter()

//All functions
//This search the user of the complete form
const SearchUser = async () => {
  if(ValidateForm()){
    await userStore.ReadUsers()
    const isUser = userStore.users.find(element => element.cups == data.userCups)
    if(isUser !== undefined){
        userStore.findUser = isUser
        toast().ShowToast(`Bienvenido a Holaluz, ${userStore.findUser.full_name}. 😉`, 'alert-success', 3000)
        router.push("/client")
    }else{
      toast().ShowToast(`No hay ningún cliente con este identificador. 😕`, 'alert-error', 2000)
    }
  }else{
    toast().ShowToast('Por favor, complete bien el formulario.', 'alert-error', 3000)
  }
}

//Validate form middleware
const ValidateForm = () => {
  let response = true
    if (data.userCups.toString().length === 0) {
      response = false
    }

  return response
}
</script>

<style></style>
