<template>
  <section class="p-5" id = "generalpromotion">
    <!--We show div if client is avaible for the promotion-->
    <div id = "promotionok"
      v-show="data.promoOk"
      class="p-5 flex flex-col gap-5 bg-gradient-to-br from-yellow-400 via-red-400 to-pink-600 rounded-xl text-white"
    >
      <p class="font-bold text-2xl md:text-4xl">¡Enhorabuena! 🥳</p>
      <p>
        Estás habilitado para disfrutar de nuestra promoción #RoofRevolution y de todas las
        ventajas de nuestros paneles solares.
      </p>
      <div v-show="data.is5Discount === true">
        <p>Además, dispones de un descuento especial del <span class="p-1 bg-white text-pink-600 rounded-lg">5%</span></p>
      </div>
      <div v-show="data.is12discount === true">
        <p class="font-bold">Además, dispones de un descuento especial del <span class="p-1 bg-white text-pink-600 rounded-lg">12%</span></p>
      </div>
      <button class="btn  btn-secondary">Contactar con nosotros. <i class="fa-solid fa-headset"></i></button>
    </div>
    <!--We show the div if the client is not avaible for the promotion-->
    <div id = "promotionnook"
      v-show="!data.promoOk"
      class="p-5 flex flex-col gap-5 border border-primary rounded-xl text-primary"
    >
      <p class="font-bold text-2xl md:text-4xl">¡Lo sentimos! 😞</p>
      <p>
        Por el momento, no tienes disponible la promoción #RoofRevolution de Holaluz, pero puedes acceder a nuestra web para buscar más promociones y ventajas.
      </p>
      <a href="https://www.holaluz.com/" target="_blank" class="btn  btn-secondary">Ir a Holaluz.com. <i class="fa-solid fa-headset"></i></a>
      <router-link to = "/search" class="btn"><i class="fa-solid fa-arrow-left"></i> Tengo más identificadores</router-link>
    </div>
  </section>
</template>
<script setup lang="ts">
//import methods
import { onMounted, reactive } from 'vue'
//Import interfaces
import type { SupplyInterface } from '../../db/DbInterfaces'
//imports stores
import { users } from '../../stores/Users'
import { supply } from '../../stores/Supply'

//Variables
const userStore = users()
const supplyStore = supply()
const data = reactive({
  promoOk: false,
  is5Discount: false,
  is12discount: false,
  discountPercent: 0,
})

//Take DB Data and do all logic in mounted
onMounted(async () => {
  await supplyStore.ReadSupplys()
  IsOkPromotion()
  if (await IsOkPromotion()) {
    ValidateSpecial5Discount()
    ValidateSpecial10Discount()
  }
})

//Validate if the client is ok with this promotion
const IsOkPromotion = async () => {
  let response = false
  const searchResponse = await supplyStore.SearchMySupply(userStore.findUser.cups)
  if(searchResponse === true){
    if (supplyStore.mySupply.neighbors.length > 0 && userStore.findUser.building_type === 'house') {
      response = true
      data.promoOk = true
    }
  }
  return response
}

//Validate if especial promotions are avaible
const ValidateSpecial5Discount = () => {
  let response = true
  let neighborsArrayData: Array<SupplyInterface> = []

  //This forEach is for take the data of all neighbors
  supplyStore.mySupply.neighbors.forEach((neighborsCups) => {
    const searchNeighborData = supplyStore.supplys.find((element) => element.cups == neighborsCups)
    if (searchNeighborData !== undefined) {
      neighborsArrayData.push(searchNeighborData)
    }
  })

  //This forEach is for validate p1 and p2
  neighborsArrayData.forEach((element) => {
    if (parseInt(element.power.p1) > parseInt(supplyStore.mySupply.power.p1)) {
      response = false
      return true
    } else if (parseInt(element.power.p2) > parseInt(supplyStore.mySupply.power.p2)) {
      response = false
      return true
    }
  })
  data.is5Discount = response
  return response
}

const ValidateSpecial10Discount = () => {
  let response = true
  let neighborsArrayData: Array<SupplyInterface> = []

  //This forEach is for take the data of all neighbors
  supplyStore.mySupply.neighbors.forEach((neighborsCups) => {
    const searchNeighborData = supplyStore.supplys.find((element) => element.cups == neighborsCups)
    if (searchNeighborData !== undefined) {
      neighborsArrayData.push(searchNeighborData)
    }
  })

  //This forEach calculate the totalmount of Neighbors
  let totalMountNeighbors = 0
  neighborsArrayData.forEach((element) => {
    totalMountNeighbors = totalMountNeighbors + parseInt(element.invoiced_amount)
  })

  if(totalMountNeighbors < 100){
    response = false
  }
  data.is12discount = response
  return response
}
</script>
