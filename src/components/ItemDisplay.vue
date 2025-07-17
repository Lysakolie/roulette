<script setup lang="ts">
import Card from "primevue/card";
import Item from "../data/Item.ts"

defineProps<{ pick: Item }>()
</script>

<template>
  <Card>
    <template #title>{{ pick.title }}</template>
    <template #content>{{ pick.description }}</template>
  </Card>
</template>

<style scoped>

</style>