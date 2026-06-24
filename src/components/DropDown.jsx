import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { Controller } from "react-hook-form";

function DropDown({ control }) {
  return (
    <Controller
      name="status"
      control={control}
      rules={{ required: "Status is required" }}
      render={({ field, fieldState: { error } }) => (
        <FormControl fullWidth error={!!error}>
          <InputLabel id="status-label">Status</InputLabel>
          <Select {...field} labelId="status-label" label="Status">
            <MenuItem value="active">Active</MenuItem>
            <MenuItem value="progress">Progress</MenuItem>
            <MenuItem value="completed">Completed</MenuItem>
          </Select>
          <FormHelperText>{error?.message}</FormHelperText>
        </FormControl>
      )}
    />
  );
}

export default DropDown;