<template>
  <section class="p-5">
    <div class="w-full p-5">
      <p class="font-bold mb-5 text-primary"><i class="fa-solid fa-lightbulb"></i> Datos punto de luz Holaluz</p>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <!-- head -->
          <thead>
            <tr>
              <th>Mis datos</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <!-- Row supply client -->
            <template v-for="(supplyData, i) in supplyStore.mySupply" :key="supplyData.cups">
              <tr>
                <template v-if="i === `cups`">
                  <td class="w-full"><span class="text-primary"><i class="fa-solid fa-lightbulb"></i> Punto de luz:</span> {{ supplyData }}</td>
                </template>
                <template v-if="i === `tariff`">
                  <td class="w-full"><span class="text-primary"><i class="fa-solid fa-signature"></i> Producto contratado:</span> {{ supplyData }}</td>
                </template>
                <template v-if="i === `invoiced_amount`">
                  <td class="w-full"><span class="text-primary"><i class="fa-solid fa-file-invoice"></i> Facturación mensual:</span> {{ supplyData }}€</td>
                </template>
                <template v-if="i === `power`">
                  <td class="w-full"><span class="text-primary"><i class="fa-solid fa-plug-circle-bolt"></i> Potencia 1 y 2:</span> {{ supplyData.p1 }} Watts - {{ supplyData.p2 }} Watts</td>
                </template>
                <template v-if="i === `neighbors`">
                  <td class="w-full"><span class="text-primary"><i class="fa-solid fa-users"></i> Vecinos:</span> {{ supplyData.length }} </td>
                </template>
                <td>
                  <div>
                    <button class="btn btn-primary w-max" disabled>Modificar <i class="fa-regular fa-pen-to-square"></i></button>
                  </div>
                </td>
              </tr>
              
            </template>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { supply } from '../../stores/Supply'
const supplyStore = supply()
</script>
