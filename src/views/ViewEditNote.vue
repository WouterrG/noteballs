<template>
    <div class="edit-note">
        <AddEditNote
            v-model="noteContent"
            ref="addEditNoteRef"
            bgColor="link"
            placeholderText="Edit note..."
            label="Edit your note"
        >
            <template #buttons>
                <button
                      @click="$router.back()"
                      class="button is-link is-light has-text-black mr-2"
                    >
                        Cancel
                </button>
                <button
                      @click="handleSavedClicked"
                      class="button is-link has-background-info has-text-white"
                      :disabled="!noteContent"
                    >
                        Save Note
                </button>

            </template>
        </AddEditNote>
    </div>
</template>

<script setup>

// IMPORTS

import AddEditNote from '../components/Notes/AddEditNote.vue';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import { useStoreNotes } from '@/stores/storeNotes.js'

// ROUTER

const route = useRoute()

const router = useRouter()

// STORE

const storeNotes = useStoreNotes()

// DATA

const noteContent = ref('')

noteContent.value = storeNotes.getNoteContent(route.params.id)

// METHODS

const handleSavedClicked = () => {
    storeNotes.updateNote(route.params.id, noteContent.value)
    router.push('/')
}

</script>