<template>
  <section class="p-5">
    <div class="w-full p-5">
      <p class="font-bold mb-5 text-primary"><i class="fa-solid fa-user"></i> Datos cliente Holaluz</p>
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
            <!-- Row data clients -->
            <template v-for="(userData, i) in usersStore.findUser" :key="userData.cups">
              <tr>
                <template v-if="i === `full_name`">
                  <td class="w-full"><span class="text-primary"><i class="fa-solid fa-signature"></i> Nombre:</span> {{ userData }}</td>
                </template>
                <template v-if="i === `address`">
                  <td class="w-full"><span class="text-primary"><i class="fa-solid fa-map-pin"></i> Dirección:</span> {{ userData }}</td>
                </template>
                <template v-if="i === `cups`">
                  <td class="w-full"><span class="text-primary"><i class="fa-solid fa-lightbulb"></i> Punto de luz:</span> {{ userData }}</td>
                </template>
                <template v-if="i === `role`">
                  <template v-if="userData === `customer`">
                    <td class="w-full"><span class="text-primary"><i class="fa-solid fa-user-tag"></i> Consumidor:</span> Cliente</td>
                  </template>
                  <template v-if="userData === `customer-basic`">
                    <td class="w-full"><span class="text-primary"><i class="fa-solid fa-user-tag"></i> Consumidor:</span> Plan básico</td>
                  </template>
                  <template v-if="userData === `customer-premium`">
                    <td class="w-full">
                      <p class="p-1 rounded-lg bg-secondary w-max">Consumidor: Plan premium <i class="fa-solid fa-award"></i></p>
                    </td>
                  </template>
                </template>
                <template v-if="i === `building_type`">
                  <template v-if="userData === `house`">
                    <td class="w-full"><span class="text-primary"><i class="fa-solid fa-house-user"></i> Edificio:</span> Casa</td>
                  </template>
                  <template v-if="userData === `apartment`">
                    <td class="w-full"><span class="text-primary"><i class="fa-solid fa-building"></i> Edificio:</span> Apartamento</td>
                  </template>
                </template>
                <td>
                  <div>
                    <button class="btn btn-primary w-max" disabled>Modificar <i class="fa-regular fa-pen-to-square"></i></button>
                  </div>
                </td>
              </tr>
            </template>
            <!-- Row supply client -->
            
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { users } from '../../stores/Users'
const usersStore = users()
</script>
