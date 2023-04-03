<template>
    <div 
      class="card p-4 mb-5"
      :class="`has-background-${ bgColor }-dark`"
    >
        <label
          v-if="props.label"
          class="label has-text-white"
        >
            {{ label }}
        </label>
        <div class="field">
            <div class="control">
                <textarea
                    :value="props.modelValue"
                    @input="$emit('update:modelValue', $event.target.value)"
                    :placeholder=placeholderText
                    ref="textareaRef"
                    class="textarea"
                    >
                </textarea>
            </div>
            </div>

            <div class="field is-grouped is-grouped-right">
            <div class="control">
                <slot name="buttons"/>
            </div>
        </div>
    </div>
</template>

<script setup>

// IMPORTS

import { ref } from 'vue';

// DATA

const textareaRef = ref(null)

// PROPS

const props = defineProps({
    modelValue: {
        type: String,
        required: true
    },
    bgColor: {
        type: String,
        default: 'success'
    },
    placeholderText: {
        type: String,
        default: 'Type something...'
    },
    label: {
        type: String,
    }
})


// METHODS

const focusTextarea = () => {
    textareaRef.value.focus()
}

defineExpose({
    focusTextarea
})

</script>