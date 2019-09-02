import * as React from "react";

import { Control } from "./control";
import { Field } from "./field";
import { File } from "./file";
import { Help } from "./help";
import { Input } from "./input";
import { Label } from "./label";

const Form: React.FC<React.FormHTMLAttributes<HTMLFormElement>> = (props) => (
  <form {...props} />
);

const Combined = Object.assign(Form, {
  Control,
  Field,
  File,
  Help,
  Input,
  Label,
});

export { Combined as Form };
