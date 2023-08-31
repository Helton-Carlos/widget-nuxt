import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import mainText from '../mainText.vue';

describe('mainText', () => {
  const propsComponent = {
    slots: {
      default: 'Pacotes em promoção'
    }
  }

  it('renders mainText component', () => {
    const wrapper = mount(mainText, propsComponent);
    
    expect(wrapper).toBeTruthy();
  });

  it('renders slots mainText component', () => {
    const wrapper = mount(mainText, propsComponent)
  
    expect(wrapper.text()).toContain('Pacotes em promoção');
  });
})