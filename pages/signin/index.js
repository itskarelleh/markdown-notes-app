import React from "react";
import Form from "@/components/inputs/form/Form";
import BaseLayout from "@/components/BaseLayout";
import InputField from "@/components/inputs/form/InputField";
import PasswordInput from "@/components/inputs/form/PasswordInput";
import Input from "../../components/inputs/form/Input";
import FormHeading from "../../components/inputs/form/FormHeading";
import FormWrapper from "../../components/inputs/form/FormWrapper";

export default function SignIn() {
  const handleSubmit = async () => {
    //   const req = await fetch(
    //     `${process.env.NEXT_PUBLIC_SERVER_URL}${process.env.NEXT_PUBLIC_API_ENDPOINT}/signin`,
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({}),
    //     }
    //   );
  };

  return (
    <BaseLayout style={{ height: "100vh", overflow: "hidden", scroll: "none" }}>
      <FormWrapper>
        <Form className="w-1/2 mx-auto">
          <FormHeading title="Sign In" />
          <InputField labelFor="accountEmail" labelName="Email">
            <Input name="accountEmail" />
          </InputField>
          <InputField labelFor="accountPassword" labelName="Password">
            <PasswordInput name="accountPassword" />
          </InputField>
          <InputField justifyContent="justify-end">
            <button className="bg-white text-black p-2" type="submit">
              Sign Up
            </button>
          </InputField>
        </Form>
      </FormWrapper>
    </BaseLayout>
  );
}
