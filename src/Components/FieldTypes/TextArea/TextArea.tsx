import * as React from 'react';
import { TextField } from "@mui/material";
import "../FieldTypes.scss";

interface Props {
  title: string;
  value: any;
  attrName: any;
  value_update: Function;
  warn_status: boolean;
  class_name: string;
  error_messg?: string;
  placeholder?:string
}

const defaultProps: Props = {
  title: "",
  value: "",
  attrName: "",
  value_update: () => {},
  warn_status: false,
  class_name: "inputField",
  error_messg: "Please enter valid value",
  placeholder: '',
};

const TextArea: React.FC<Props> = ({
  title,
  value,
  value_update,
  attrName,
  warn_status,
  class_name,
  error_messg,
  placeholder,
}) => {
  return (
    <div className={class_name}>
      <TextField
        fullWidth
        label={title}
        variant="outlined"
        value={value}
        placeholder={placeholder}
        multiline
        rows={3}
        maxRows={6}
        onChange={(e) => {
          value_update(attrName, e.target.value);
        }}
      />
      {warn_status == true ? (
        <span className="error">{error_messg}</span>
      ) : null}
    </div>
  );
};

TextArea.defaultProps = defaultProps;
export default TextArea;
