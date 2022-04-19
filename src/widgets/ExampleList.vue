<script lang="ts">
  export default {
    name: 'ExampleList',
  };
</script>

<script setup lang="ts">
  import { useExampleStore } from '@/store/example';
  const exampleStore = useExampleStore();
</script>

<template>
  <section>
    <ul>
      <li v-for="(example, index) in exampleStore.getExamples" :key="index">
        <p>Name: {{ example.name }}, Data: {{ example.data }}</p>
      </li>
    </ul>
  </section>
</template>
