<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="has-text-right has-text-grey-light mt-2">
          <small>{{ characterLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink
        :to="`/editNote/${note.id}`"
        class="card-footer-item"
        href="#"
      >
        Edit
      </RouterLink>
      <a
        @click.prevent="storeNotes.deleteNote(note.id)"
        class="card-footer-item"
        href="#"
      >
        Delete
      </a>
    </footer>
  </div>
</template>

<script setup>
// IMPORTS

import { computed, reactive } from "vue";
import { useStoreNotes } from "@/stores/storeNotes";

// STORE

const storeNotes = useStoreNotes();

// PROPS

const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

// CHARACTER COUNT

const characterLength = computed(() => {
  let length = props.note.content.length;
  let description = length > 1 ? "characters" : "character";
  return `${length} ${description}`;
});

// MODALS

const modals = reactive({
  deleteNote: false,
  editNote: false,
});
</script>
