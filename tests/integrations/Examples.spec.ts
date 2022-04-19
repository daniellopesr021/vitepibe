import { mount } from '@vue/test-utils';
import { describe, expect, it, beforeEach, vi } from 'vitest';
import { createTestingPinia } from '@pinia/testing';
import ExampleIndex from '../../src/pages/index.vue';
import ExampleForm from '../../src/widgets/ExampleForm.vue';
import ExampleList from '../../src/widgets/ExampleList.vue';

describe('Integration - Examples', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ExampleIndex, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            stubActions: false,
          }),
        ],
      },
    });
  });

  it('should be able to render the page that handles the list and addition of the examples', () => {
    expect(wrapper.isVisible()).toBe(true);
    expect(wrapper.vm).toBeTruthy();
    expect(wrapper.getComponent(ExampleForm).exists()).toBeTruthy();
    expect(wrapper.getComponent(ExampleList).exists()).toBeTruthy();
  });

  it('should be able to create a new example and update list', async () => {
    wrapper.find('#name input').setValue('New Name');
    wrapper.find('#data input').setValue('New Data');

    await wrapper.vm.$nextTick();

    wrapper.find('button').trigger('click');

    await wrapper.vm.$nextTick();

    expect(wrapper.findAll('li').length).toBe(1);

    wrapper.find('#name input').setValue('New Name 2');
    wrapper.find('#data input').setValue('New Data 2');

    await wrapper.vm.$nextTick();

    wrapper.find('button').trigger('click');

    await wrapper.vm.$nextTick();

    expect(wrapper.findAll('li').length).toBe(2);
  });
});
