import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import modal from "../modal.vue";

describe("modal", () => {
  it("renders modal component", () => {
    const wrapper = mount(modal);

    expect(wrapper).toBeTruthy();
  });

  it("renders slots modal component", () => {
    const wrapper = mount(modal, {
      slots: {
        header: "<div>Header</div>",
        body: "<div>Body Content</div>",
        footer: "<div>Footer</div>",
      },
    });

    expect(wrapper.html()).toContain("<div>Header</div>");
    expect(wrapper.html()).toContain("<div>Body Content</div>");
    expect(wrapper.html()).toContain("<div>Footer</div>");
  });
});
