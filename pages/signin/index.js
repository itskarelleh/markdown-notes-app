import React from "react";
import Form from "@/components/inputs/Form";
import BaseLayout from "@/components/BaseLayout";
import InputField from "@/components/inputs/InputField";
import PasswordInput from "../../components/inputs/PasswordInput";

export default function SignIn() {
  return (
    <BaseLayout style={{ height: "100vh", overflow: "hidden", scroll: "none" }}>
      <div className="pt-6 container">
        <Form formWidthClassname="form-1-2">
          <div className="field">
            <h1 className="is-size-1 is-text-center">Sign In</h1>
          </div>
          <InputField labelFor="email" labelName="Email">
            <input className="input" type="email" name="accountEmail" />
          </InputField>
          <InputField labelFor="accountPassword" labelName="Password">
            <PasswordInput name="accountPassword" />
          </InputField>
          <InputField>
            <button className="button" type="submit">
              Sign In
            </button>
          </InputField>
        </Form>
      </div>
    </BaseLayout>
  );
}
