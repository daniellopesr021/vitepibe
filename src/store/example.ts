import IExample from '@/interfaces/IExample';
import { defineStore } from 'pinia';

export const useExampleStore = defineStore('example', () => {
  const defaultState = () => ({
    currentExample: ref<IExample>({ name: '', data: '' }),
    examples: ref(new Set<IExample>()),
  });

  const examples = defaultState().examples;
  const currentExample = defaultState().currentExample;

  const getExamples = computed(() => Array.from(examples.value));

  function setNewExample(): void {
    examples.value.add(currentExample.value);
    currentExample.value = {
      ...defaultState().currentExample.value,
    };
  }

  return {
    currentExample,
    setNewExample,
    getExamples,
  };
});
