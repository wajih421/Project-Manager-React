import React from "react";

import {
  TextField,
  Button,
  Box,
  Select,
  MenuItem,
  InputLabel,
  FormControl
} from "@mui/material";

import { useForm, Controller } from "react-hook-form";

function ProjectForm({ addProject, project }) {
  
  const {
    register,
    handleSubmit,
    control
  } = useForm({
    defaultValues: project || {
      status: "active"
    }
  });

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(addProject)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        mt: 2
      }}
    >
      <TextField
        label="Name"
        {...register("name")}
      />

      <TextField
        label="Description"
        {...register("description")}
      />

      <FormControl fullWidth>
        <InputLabel>Status</InputLabel>

        <Controller
          name="status"
          control={control}
          defaultValue="active"
          render={({ field }) => (
            <Select
              {...field}
              label="Status"
            >
              <MenuItem value="active">
                Active
              </MenuItem>

              <MenuItem value="progress">
                Progress
              </MenuItem>

              <MenuItem value="completed">
                Completed
              </MenuItem>
            </Select>
          )}
        />
      </FormControl>

      <TextField
        label="Deadline"
        {...register("deadline")}
      />

      <Button
        type="submit"
        variant="contained"
      >
        Save
      </Button>
    </Box>
  );
}

export default ProjectForm;