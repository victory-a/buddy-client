import React, { useState } from "react";
import { useField } from "formik";
import { Input, Container, Label, Span, ErrorSpan } from "./styles";
import { IoIosEyeOff, IoIosEye } from "react-icons/io";

const PasswordInput = ({ label, placeholder = "Password", ...props }) => {
  const [field, meta] = useField(props);
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <Container className={`${meta.touched && meta.error ? "error" : ""}`}>
      <Label>{label}</Label>
      <Span>
        <Input
          placeholder={placeholder}
          type={showPassword ? "text" : "password"}
          {...field}
          {...props}
        />
        <span onClick={togglePassword}>
          {showPassword ? <IoIosEyeOff /> : <IoIosEye color="CFCFCF" />}
        </span>
      </Span>

      {meta.touched && meta.error ? <ErrorSpan>{meta.error}</ErrorSpan> : null}
    </Container>
  );
};

export default PasswordInput;
