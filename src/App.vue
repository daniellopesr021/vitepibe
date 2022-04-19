<template>
  <router-view></router-view>
</template>
<script setup lang="ts">
  useHead({
    title: 'Example Title',
    meta: [{ name: 'description', content: 'Sample Example' }],
  });
</script>
