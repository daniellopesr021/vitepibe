import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import DTextInputVue from '../../src/components/DTextInput.vue';

describe('Unit - DTextInput Component', () => {
  it('should be able to render with default props', () => {
    const wrapper = shallowMount(DTextInputVue);
    expect(wrapper.isVisible()).toBe(true);
    expect(wrapper.vm).toBeTruthy();
  });

  it('should be able to input data and emit event', async () => {
    const wrapper = shallowMount(DTextInputVue);

    wrapper.find('input').setValue('123');

    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().input).toBeTruthy();
    expect(wrapper.emitted().input.length).toBe(1);
  });
});
