import React from "react";
import { useField, ErrorMessage } from "formik";

const InputField = (props) => {
  const [field, meta] = useField({
    name: props.name,
    type: props.type,
  });
  return (
    <div className="mb-3 mt-5 relative">
      <label htmlFor={field.name} className="text-primary-2 text-sm">
        {props.label}
      </label>
      <input
        // className={`form-control shadow-none ${
        //   meta.touched && meta.error && "is-invalid"
        // } `}
        className={`w-full mt-2 h-[46px] placeholder:text-[14px] pl-[1rem] outline-primary-4 ${
          meta.touched && meta.error && "outline-primary-9"
        }`}
        autoComplete="off"
        {...field}
        placeholder={props.placeholder}
        name={props.name}
        type={props.type}
      />
      <ErrorMessage
        component="div"
        name={field.name}
        className="error absolute right-0 text-xs text-primary-8 mt-3"
      />
    </div>
  );
};

export default InputField;
