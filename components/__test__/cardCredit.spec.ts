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

  it("setValue on input text", async () => {
    const wrapper = mount(cardCredit);

    await wrapper.get('[data-test="input-name"]').setValue("JOHN SMITH");
    const name = await wrapper.get('[data-test="name"]');

    expect(name.text()).toBe("JOHN SMITH");
  });

  it("setValue on input number", async () => {
    const wrapper = mount(cardCredit);

    await wrapper
      .get('[data-test="input-number"]')
      .setValue("4642 3489 9867 7632");
    const number = await wrapper.get('[data-test="number"]');

    expect(number.text()).toBe("4642 3489 9867 7632");
  });

  it("setValue on input valid", async () => {
    const wrapper = mount(cardCredit);

    await wrapper.get('[data-test="input-valid"]').setValue("03/21");
    const valid = await wrapper.get('[data-test="valid"]');

    expect(valid.text()).toBe("03/21");
  });

  it("setValue on input expiry", async () => {
    const wrapper = mount(cardCredit);

    await wrapper.get('[data-test="input-expiry"]').setValue("03/21");
    const expiry = await wrapper.get('[data-test="expiry"]');

    expect(expiry.text()).toBe("03/21");
  });

  it("setValue on input cvv", async () => {
    const wrapper = mount(cardCredit);

    await wrapper.get('[data-test="input-cvv"]').setValue("123");
    const cvv = await wrapper.get('[data-test="cvv"]');

    expect(cvv.text()).toBe("123");
  });

  it("validate card purchase form", async () => {
    const wrapper = mount(cardCredit);

    await wrapper.get('[data-test="name"]');
    await wrapper.get('[data-test="number"]');
    await wrapper.get('[data-test="valid"]');
    await wrapper.get('[data-test="expiry"]');
    await wrapper.get('[data-test="cvv"]');

    await wrapper.get('[data-test="form"]').trigger("submit");

    const modal = await wrapper.get('[data-test="modal-buy"]');

    expect(modal.isVisible()).toBe(true);
  });

  it("invalid credit card form", async () => {
    const wrapper = mount(cardCredit);

    await wrapper.get('[data-test="input-name"]').setValue("");
    await wrapper.get('[data-test="input-number"]').setValue("");
    await wrapper.get('[data-test="input-valid"]').setValue("");
    await wrapper.get('[data-test="input-expiry"]').setValue("");
    await wrapper.get('[data-test="input-cvv"]').setValue("");

    await wrapper.get('[data-test="form"]').trigger("submit");

    const card = await wrapper.get('[data-test="card-credit"]');

    expect(card.isVisible()).toBe(true);
  });
});
