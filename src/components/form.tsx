import type { FC } from "react";

import { Control } from "./form_control";
import { Field } from "./form_field";
import { File } from "./form_file";
import { Help } from "./form_help";
import { Input } from "./form_input";
import { Label } from "./form_label";
import { Textarea } from "./form_textarea";

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
