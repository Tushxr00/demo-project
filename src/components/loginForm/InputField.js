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
        className={`w-full mt-2 h-[46px] placeholder:text-[14px] border-[1px] border-primary-10 rounded-[5px] pl-[1rem] outline-primary-4 ${
          meta.error && "border-[#FF333380]"
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
        className="error absolute right-0 text-xs text-primary-8 mt-[5px]"
      />
    </div>
  );
};

export default InputField;
