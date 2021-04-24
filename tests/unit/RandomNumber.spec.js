import { mount } from "@vue/test-utils";
import RandomNumber from "@/components/RandomNumber";

describe("RandomNumber", () => {
  test("By default, randomNumber data should be 0", () => {
    const wrapper = mount(RandomNumber);
    expect(wrapper.html()).toContain(`<span>0</span>`);
  });
  test("If button is clicked, randomNumber data should be between 1 and 10", async () => {
    const wrapper = mount(RandomNumber);
    wrapper.find("button").trigger("click");

    await wrapper.vm.$nextTick();
    const randomNumber = parseInt(wrapper.find("span").element.textContent);
    expect(randomNumber).toBeGreaterThanOrEqual(1);
    expect(randomNumber).toBeLessThanOrEqual(10);
  });
  test("If button is clicked, randomNumber data should be between 100 and 200", async () => {
    //Set new min and max props
    const wrapper = mount(RandomNumber, {
      propsData: {
        min: 100,
        max: 200,
      },
    });
    wrapper.find("button").trigger("click");

    await wrapper.vm.$nextTick();
    const randomNumber = parseInt(wrapper.find("span").element.textContent);
    expect(randomNumber).toBeGreaterThanOrEqual(100);
    expect(randomNumber).toBeLessThanOrEqual(200);
  });
});
