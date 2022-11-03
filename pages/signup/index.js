import React from "react";
import BaseLayout from "@/components/BaseLayout";
import Form from "@/components/inputs/Form";
import InputField from "@/components/inputs/InputField";
import PasswordInput from "../../components/inputs/PasswordInput";
import * as yup from "yup";

export default function SignUp() {
  let schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
    joinedAt: yup.date().default(function () {
      return new Date();
    }),
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // schema.isValid({
    //   email: ,
    //   password:
    // }).then((valid) => valid)
  };

  return (
    <BaseLayout style={{ height: "100vh", overflow: "hidden", scroll: "none" }}>
      <div className="pt-6 container">
        <Form
          onSubmit={handleSubmit}
          formWidthClassname="form-1-2"
          // action={`${process.env.SERVER_URL}${process.env.API_ENDPOINT}/accounts/signup`}
          // method="post"
        >
          <div className="field">
            <h1 className="is-size-1 is-text-center">Sign Up</h1>
          </div>
          <InputField labelName="Email">
            <input className="input" type="email" name="accountEmail" />
          </InputField>
          {/* <InputField labelName="Phone" labelFor="accountPhone">
            <input className="input" type="phone" name="accountPhone" />
          </InputField> */}
          <InputField labelFor="accountPassword" labelName="Password">
            <PasswordInput name="accountPassword" />
          </InputField>
          <InputField
            labelFor="accountConfirmPassword"
            labelName="Confirm Password"
          >
            <PasswordInput name="accountConfirmPassword" />
          </InputField>
          <div className="field">
            <div className="control">
              <button className="button" type="submit">
                Sign Up
              </button>
            </div>
          </div>
        </Form>
      </div>
    </BaseLayout>
  );
}
