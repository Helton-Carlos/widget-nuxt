import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import cardCredit from "../cardCredit.vue";

describe("cardCredit", () => {
  it("renders cardCredit component", () => {
    const wrapper = mount(cardCredit);

    expect(wrapper).toBeTruthy();
  });

  it("renders data-test cardCredit component", () => {
    const wrapper = mount(cardCredit);

    const name = wrapper.get('[data-test="name"]');
    const number = wrapper.get('[data-test="number"]');
    const valid = wrapper.get('[data-test="valid"]');
    const expiry = wrapper.get('[data-test="expiry"]');
    const cvv = wrapper.get('[data-test="cvv"]');

    expect(name.text()).toBe("JOHN SMITH");
    expect(number.text()).toBe("4642 3489 9867 7632");
    expect(valid.text()).toBe("11/25");
    expect(expiry.text()).toBe("02/28");
    expect(cvv.text()).toBe("123");
  });

  it("renders data-test cardCredit component", () => {
    const wrapper = mount(cardCredit);

    const name = wrapper.get('[data-test="name"]');
    const number = wrapper.get('[data-test="number"]');
    const valid = wrapper.get('[data-test="valid"]');
    const expiry = wrapper.get('[data-test="expiry"]');
    const cvv = wrapper.get('[data-test="cvv"]');

    expect(name.text()).toBe("JOHN SMITH");
    expect(number.text()).toBe("4642 3489 9867 7632");
    expect(valid.text()).toBe("11/25");
    expect(expiry.text()).toBe("02/28");
    expect(cvv.text()).toBe("123");
  });
});
