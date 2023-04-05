<template>
  <div class="notes">
    <AddEditNote
      v-model="newNote"
      placeholderText="Add a new note..."
      ref="addEditNoteRef"
    >
      <template #buttons>
        <button
          @click="addNote"
          :disabled="!newNote"
          class="button is-link has-background-success"
        >
          Add New Note
        </button>
      </template>
    </AddEditNote>

    <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
  </div>
</template>

<script setup>
// IMPORTS

import { ref } from "vue";
import Note from "@/components/Notes/Note.vue";
import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { useStoreNotes } from "@/stores/storeNotes";
import { useWatchCharacters } from "@/use/useWatchCharacters";

// STORE

const storeNotes = useStoreNotes();

const addEditNoteRef = ref(null);

// DATA

const newNote = ref("");

// METHODS

const addNote = () => {
  storeNotes.addNote(newNote.value);

  newNote.value = "";
  addEditNoteRef.value.focusTextarea();
};

// WATCHER

useWatchCharacters(newNote, 75);
</script>
