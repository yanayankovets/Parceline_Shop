import React from "react";
import { ErrorStyled } from "./errors.styled";

type ErrorProps = {
  error: any;
};

export const Error = (props: ErrorProps) => {
  return <ErrorStyled>{props.error}</ErrorStyled>;
};
