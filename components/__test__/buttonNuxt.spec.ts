import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import buttonNuxt from '../buttonNuxt.vue';

describe('buttonNuxt', () => {
  const slotsComponent = {
    slots: {
      default: 'Main Content'
    }
  }

  it('renders buttonNuxt component', () => {
    const wrapper = mount(buttonNuxt, slotsComponent);
    
    expect(wrapper).toBeTruthy();
  });

  it('renders slots buttonNuxt component', () => {
    const wrapper = mount(buttonNuxt, slotsComponent)
  
    expect(wrapper.find('button').text()).toContain('Main Content');
  });

  it('emits an event when clicked buttonNuxt component', () => {
    const wrapper = mount(buttonNuxt, slotsComponent);

    wrapper.find('button').trigger('click');

    expect(wrapper.emitted()).toHaveProperty('onClick')
  });
})