import { describe, it, expect } from "vitest";
import { shallowMount, exists } from "@vue/test-utils";
import card from "../card.vue";

describe("card", () => {
  it("renders card component", () => {
    const wrapper = shallowMount(card, {
      props: {
        title: "name-card",
        imageMain: "image-main.jpeg",
        money: 1000,
        context: true,
        persona: "Joe Smith",
        imagePersona: "image-preson.jpeg"
      },
    });

    expect(wrapper).toBeTruthy();
  });

  it('emits an event when clicked card component', () => {
    const wrapper = shallowMount(card);

    const datacard = wrapper.get('[data-test="card"]');

    datacard.trigger('click');

    expect(wrapper.emitted()).toHaveProperty('selectCard')
  });
});
