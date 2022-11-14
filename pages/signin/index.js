import React, { useContext } from "react";
import Form from "@/components/inputs/form/Form";
import Main from "@/components/Main";
import InputField from "@/components/inputs/form/InputField";
import PasswordInput from "@/components/inputs/form/PasswordInput";
import Button from "@/components/inputs/buttons/Button";
import Checkbox from "@/components/inputs/form/Checkbox";
import Input from "@/components/inputs/form/Input";
import FormHeading from "@/components/inputs/form/FormHeading";
import FormWrapper from "@/components/inputs/form/FormWrapper";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AuthContext } from "@/context/AuthProvider";

export default function SignIn() {
  const { authenticateUser } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string().email().required("Email is required"),
      password: Yup.string()
        .required()
        .min(8, "Password is too short - should be at least 8 characters."),
    }),
    onSubmit: (values) => {
      authenticateUser(values);
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Main>
      <FormWrapper>
        <Form onSubmit={formik.handleSubmit} className="w-1/2 h-3/4 mx-auto">
          <FormHeading title="Sign Up" />
          <InputField labelFor="email" labelName="Email">
            <Input
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="email"
              name="email"
            />
          </InputField>
          <InputField labelFor="password" labelName="Password">
            <PasswordInput
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="password"
            />
          </InputField>
          <InputField classname="flex-row">
            <Checkbox helper={<>Remember Me</>} />
          </InputField>
          <InputField justifyContent="justify-end">
            <Button type="submit" label="Submit" />
          </InputField>
        </Form>
      </FormWrapper>
    </Main>
  );
}
