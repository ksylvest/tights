import type { FC } from "react";

import { Control } from "./control";
import { Field } from "./field";
import { File } from "./file";
import { Help } from "./help";
import { Input } from "./input";
import { Label } from "./label";
import { Textarea } from "./textarea";

const Form: FC<JSX.IntrinsicElements["form"]> = (props) => <form {...props} />;

const Combined = Object.assign(Form, {
  Control,
  Field,
  File,
  Help,
  Input,
  Label,
  Textarea,
});

export { Combined as Form };
