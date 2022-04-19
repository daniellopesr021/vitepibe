<script lang="ts">
  export default {
    name: 'ExampleForm'
  }
</script>

<script setup lang="ts">
  import { useExampleStore } from '@/store/example';
  import { storeToRefs } from 'pinia';
  const exampleStore = useExampleStore();
  const indexForm = ref(0);

  const { currentExample: example } = storeToRefs(exampleStore);
  const { setNewExample } = exampleStore;

  function handleCreateExample(): void {
    setNewExample();
    indexForm.value += 1;
  }
</script>

<template>
  <article :key="indexForm" class="[ flow ]" data-type="column">
    <d-text-input id="name" v-model="example.name"> Example Name </d-text-input>
    <d-text-input id="data" v-model="example.data"> Example Data </d-text-input>
    <button class="[ mt-4 ] [ btn ]" @click="handleCreateExample">Save</button>
  </article>
</template>
