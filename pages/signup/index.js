import React from "react";
import BaseLayout from "@/components/BaseLayout";
import Form from "@/components/inputs/form/Form";
import InputField from "@/components/inputs/form/InputField";
import Input from "@/components/inputs/form/Input";
import PasswordInput from "@/components/inputs/form/PasswordInput";
import * as yup from "yup";
import FormHeading from "@/components/inputs/form/FormHeading";
import Checkbox from "@/components/inputs/form/Checkbox";
import FormWrapper from "@/components/inputs/form/FormWrapper";
export default function SignUp() {
  let schema = yup.object().shape({
    email: yup.string().required(),
    phone: yup.string(),
    password: yup.string().required(),
    joinedAt: yup.date().default(function () {
      return new Date();
    }),
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    //first check that password and password confirm are equal
    // schema.isValid({
    //   email: ,
    //   password:
    // }).then((valid) => valid)
  };

  return (
    <main style={{ height: "100vh", overflow: "hidden", scroll: "none" }}>
      <FormWrapper>
        <Form onSubmit={handleSubmit} className="w-1/2 mx-auto">
          <FormHeading title="Sign Up" />
          <InputField labelName="Email">
            <Input type="email" name="accountEmail" />
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
            <PasswordInput
              minLength="8"
              maxLength="20"
              name="accountConfirmPassword"
            />
          </InputField>
          <InputField classname="flex-row">
            <Checkbox
              required
              helper={
                <>
                  I agree to the <a href="#">Terms of Service</a>
                </>
              }
            />
            {/* <p>I agree to the <a href="#">Terms of Service</a></p> */}
          </InputField>
          <InputField justifyContent="justify-end">
            <button className="bg-white text-black p-2" type="submit">
              Sign Up
            </button>
          </InputField>
        </Form>
      </FormWrapper>
    </main>
  );
}
