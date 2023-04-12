<template>
  <NavBar />
  <div class="container is-max-desktop px-2 py-4">
    <RouterView />
  </div>
</template>

<script setup>
// IMPORTS

import { onMounted } from "vue";
import NavBar from "@/components/Layout/NavBar.vue";
import { useStoreNotes } from "@/stores/storeNotes";

// STORE

const storeNotes = useStoreNotes();

// MOUNTED

onMounted(() => {
  storeNotes.getNotes();
});
</script>

<style>
@import "bulma/css/bulma.min.css";
</style>
