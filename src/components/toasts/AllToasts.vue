<template>
  <div v-show="toast().show" class="toast toast-end" id = "toastmsg">
    <div class="alert" :class="toast().type">
      <span>{{ toast().msg }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
    import { toast } from "../../stores/Toast"
</script>
