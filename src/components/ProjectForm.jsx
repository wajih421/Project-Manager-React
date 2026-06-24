import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import { useForm } from "react-hook-form";

// Updated Imports (MultilineTextField ko remove kar diya)
import FormTextField from "./FormTextField";
import Deadline from "./Deadline";
import DropDown from "./DropDown";
import ImageInput from "./ImageInput";

function ProjectForm({ addProject, project }) {
  const [image, setImage] = useState(project?.image || null);

  // register aur errors ko nikal diya hai, sirf control use hoga
  const { handleSubmit, control } = useForm({
    defaultValues: project || {
      name: "",
      description: "",
      status: "active",
      deadline: "",
    },
  });

  return (
    <Box
      component="form"
      onSubmit={handleSubmit((data) => {
        addProject({
          ...data,
          image: image,
        });
      })}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        mt: 2,
      }}
    >
      {/* 1. Single-line Text Field (Name) */}
      <FormTextField
        name="name"
        label="Name"
        control={control}
        rules={{ required: "Name is required" }}
      />

      {/* 2. Multiline Text Field (Description) - Same component with props */}
      <FormTextField
        name="description"
        label="Description"
        control={control}
        rules={{ required: "Description is required" }}
        multiline={true}
        rows={4}
      />

      {/* 3. Dropdown Component */}
      <DropDown control={control} />

      {/* 4. Deadline Component */}
      <Deadline control={control} />

      {/* 5. Image Input */}
      <ImageInput setImage={setImage} />

      <Button type="submit" variant="contained">
        Save
      </Button>
    </Box>
  );
}

export default ProjectForm;