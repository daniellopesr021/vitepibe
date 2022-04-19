<script lang="ts">
  export default {
    name: 'DTextInput',
  };
</script>

<script setup lang="ts">
  defineEmits(['update:modelValue']);
  const $attrs = useAttrs();
  const inputValue = ref($attrs.modelValue);
</script>

<template>
  <label class="[ flow ]" data-type="column">
    <span class="[ capitalize text-purple-900 ]">
      <slot></slot>
    </span>
    <input
      v-model="inputValue"
      class="[ d-text-input ]"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </label>
</template>

<style scoped>
  .d-text-input {
    @apply transition 
      duration-150 
      p-2 text-sm 
      rounded-md 
      border-purple-400 
      border-solid 
      focus:border-purple-800
      text-purple-900;
  }
</style>
