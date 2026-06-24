import React from "react";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

function FormTextField({ name, label, control, rules, multiline = false, rows = 1 }) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          label={label}
          fullWidth
          multiline={multiline}
          rows={multiline ? rows : undefined}
          error={!!error}
          helperText={error?.message}
        />
      )}
    />
  );
}

export default FormTextField;