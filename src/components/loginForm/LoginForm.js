import { Formik, Form } from "formik";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { login } from "../../helper/api";
import StoreContext from "../../store/context-store";
import Card from "../UI/Card";
import InputField from "./InputField";

const LoginForm = () => {
  const navigate = useNavigate();
  const store = useContext(StoreContext);
  const [error, setError] = useState("");

  const validate = Yup.object({
    email: Yup.string()
      .email("Please enter a valid email address")
      .lowercase("Email address should be lowercase")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const submitHandler = async (values) => {
    const response = await login({ ...values });
    if (response.success) {
      store.onLogin(values.email);
      navigate("/showjobs");
      if (error.trim().length > 0) setError("");
    } else {
      setError(response.message);
    }
  };

  return (
    <div className="relative w-full h-full">
      <div className="absolute top-1/2 left-1/2 translate-x-[-50%] ">
        <Card classes="w-[557px] h-[447px]  my-[5rem] rounded-[20px] p-[30px] ">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={validate}
            onSubmit={(values) => {
              submitHandler(values);
            }}
          >
            {(formik) => {
              return (
                <Form className="relative w-full">
                  <h1 className="text-primary-2 text-[22px] font-semibold">
                    Login
                  </h1>
                  <InputField
                    label="Email address"
                    name="email"
                    type="text"
                    placeholder="Enter your email"
                  />
                  <InputField
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                  />
                  {error.trim().length > 0 && (
                    <p className="error absolute right-0 text-xs text-primary-8 mt-3">
                      Incorrect email or password
                    </p>
                  )}
                  <button
                    className="bg-primary-4 h-[46px] w-[148px] text-[16px] rounded-[5px] text-white my-[4rem] mx-auto block"
                    type="submit"
                  >
                    Login
                  </button>
                </Form>
              );
            }}
          </Formik>
        </Card>
      </div>
    </div>
  );
};

export default LoginForm;
