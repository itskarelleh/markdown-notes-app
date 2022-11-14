import React, { useState } from "react";
import Form from "@/components/inputs/form/Form";
import InputField from "@/components/inputs/form/InputField";
import Input from "@/components/inputs/form/Input";
import PasswordInput from "@/components/inputs/form/PasswordInput";
import FormHeading from "@/components/inputs/form/FormHeading";
import Checkbox from "@/components/inputs/form/Checkbox";
import FormWrapper from "@/components/inputs/form/FormWrapper";
import Main from "@/components/Main";
import Button from "@/components/inputs/buttons/Button";
import { useFormik, Formik } from "formik";
import TermsOfServices from "../../components/TermsOfServices";
import { setCookie, getCookie } from "cookies-next";
import * as Yup from "yup";

export default function SignUp() {
  const formik = useFormik({
    initialValues: { email: "", phone: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string().email().required("Email is required"),
      phone: Yup.string().matches(
        /^([0]{1}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g,
        "Invalid phone number",
      ),
      password: Yup.string()
        .required()
        .min(8, "Password is too short - should be at least 8 characters."),
      confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
      joinedAt: Yup.date().default(function () {
        return new Date();
      }),
    }),
    onSubmit: (values) => {
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="email"
              name="email"
              value={formik.values.email}
            />
          </InputField>
          <InputField labelFor="phone" labelName="Phone">
            <Input
              type="text"
              name="phone"
              value={formik.values.phone}
            />
          </InputField>
          <InputField labelFor="password" labelName="Password">
            <PasswordInput
              value={formik.values.password}
              name="password"
            />
          </InputField>
          <InputField labelFor="confirmPassword" labelName="Password">
            <PasswordInput
              value={formik.values.confirmPassword}
              name="confirmPassword"
            />
          </InputField>
          <InputField classname="flex-row">
            <Checkbox
              required
              helper={
                <>
                  I agree to the <TermsOfServices />
                </>
              }
            />
          </InputField>
          <InputField justifyContent="justify-end">
            <Button type="submit" label="Submit" />
          </InputField>
        </Form>
      </FormWrapper>
    </Main>
  );
}
