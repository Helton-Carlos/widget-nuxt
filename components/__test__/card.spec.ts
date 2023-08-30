import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import card from "../card.vue";

describe("card", () => {
  const propsComponent = {
    slots: {
      default: 'Main Content'
    }
  }

  it("renders card component", () => {
    const wrapper = shallowMount(card, propsComponent);

    expect(wrapper).toBeTruthy();
  });

  it('emits an event when clicked card component', () => {
    const wrapper = shallowMount(card, propsComponent);

    const datacard = wrapper.get('[data-test="card"]');

    datacard.trigger('click');

    expect(wrapper.emitted()).toHaveProperty('selectCard')
  });
});
