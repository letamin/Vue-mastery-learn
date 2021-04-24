import LoginForm from "@/components/LoginForm.vue";
import { mount } from "@vue/test-utils";

describe("LoginForm", () => {
  it("emits an event with a user data payload", () => {
    // 1. Find text input
    // 2. Set value for text input
    // 3. Simulate form submission
    // 4. Assert event has been emitted
    // 5. Assert payload is correct

    const wrapper = mount(LoginForm);
    const input = wrapper.find(`[data-testid="name-input"]`);
    input.setValue("Micky Mouse");
    wrapper.trigger("submit");

    //Check if component emits event
    const formSubmittedCalls = wrapper.emitted("formSubmitted"); //returns array
    expect(formSubmittedCalls).toHaveLength(1);

    const expectedPayload = { name: "Micky Mouse" };
    expect(wrapper.emitted("formSubmitted")[0][0]).toMatchObject(
      expectedPayload
    );
  });
});
