import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import ProjectForm from "../components/ProjectForm";

function Projects() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Portfolio Website",
      description: "React website",
      status: "completed",
      deadline: "2026-06-24",
      image: null,
    },
    {
      id: 2,
      name: "Expense Tracker",
      description: "Finance app",
      status: "progress",
      deadline: "2026-07-24",
      image: null,
    },
  ]);

  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [viewOpen, setViewOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const addProject = (data) => {
    setProjects([
      ...projects,
      {
        ...data,
        id: projects.length + 1,
      },
    ]);
    setOpen(false);
  };

  const deleteProject = () => {
    setProjects(projects.filter((project) => project.id !== selected.id));
    setDeleteOpen(false);
  };

  const editProject = (data) => {
    setProjects(
      projects.map((project) =>
        project.id === selected.id ? { ...project, ...data } : project
      )
    );
    setOpen(false);
  };

  const filteredProjects = projects.filter((project) =>
    project.id.toString().includes(search)
  );

  const columns = [
    { field: "id", headerName: "ID", width: 80 },
    {
      field: "image",
      headerName: "Image",
      width: 120,
      renderCell: (params) =>
        params.value instanceof File ? (
          <img
            src={URL.createObjectURL(params.value)}
            width="50"
            height="50"
            alt="project"
          />
        ) : (
          ""
        ),
    },
    { field: "name", headerName: "Project Name", width: 180 },
    { field: "description", headerName: "Description", width: 250 },
    { field: "status", headerName: "Status", width: 150 },
    { field: "deadline", headerName: "Deadline", width: 150 },
    {
      field: "actions",
      headerName: "Actions",
      width: 300,
      renderCell: (params) => (
        <Box>
          <Button
            size="small"
            variant="contained"
            onClick={() => {
              setSelected(params.row);
              setViewOpen(true);
            }}
          >
            View
          </Button>

          <Button
            size="small"
            sx={{ mx: 1 }}
            variant="outlined"
            onClick={() => {
              setSelected(params.row);
              setOpen(true);
            }}
          >
            Edit
          </Button>

          <Button
            size="small"
            color="error"
            variant="contained"
            onClick={() => {
              setSelected(params.row);
              setDeleteOpen(true);
            }}
          >
            Delete
          </Button>
        </Box>
      ),
    },
  ];

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h3" mb={3} fontWeight="bold">
        Projects
      </Typography>

      <Box sx={{display:"flex", gap:2, mb:3}}>
        <TextField
          label="Search ID"
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={() => {
            setSelected(null);
            setOpen(true);
          }}
        >
          + Add Project
        </Button>
      </Box>

      <DataGrid rows={filteredProjects} columns={columns} sx={{ height: 400 }} />

      {/* ADD / EDIT DIALOG */}
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
        <DialogTitle>{selected ? "Edit Project" : "Add Project"}</DialogTitle>
        <DialogContent>
          {open && (
            <ProjectForm
              key={selected ? selected.id : "new"}
              project={selected}
              addProject={selected ? editProject : addProject}
            />
          )}
        </DialogContent>
      </Dialog>

      {/* VIEW DIALOG */}
      <Dialog open={viewOpen} onClose={() => setViewOpen(false)} fullWidth>
        <DialogTitle>View Project</DialogTitle>
        <DialogContent>
          {selected?.image && selected.image instanceof File && (
            <img src={URL.createObjectURL(selected.image)} width="150" alt="project preview" />
          )}
          <TextField fullWidth margin="normal" label="Name" value={selected?.name || ""} disabled />
          <TextField fullWidth margin="normal" label="Description" value={selected?.description || ""} disabled />
          <TextField fullWidth margin="normal" label="Status" value={selected?.status || ""} disabled />
          <TextField fullWidth margin="normal" label="Deadline" value={selected?.deadline || ""} disabled />
        </DialogContent>
      </Dialog>

      {/* DELETE DIALOG */}
      <Dialog open={deleteOpen} onClose={() => setDeleteOpen(false)}>
        <DialogTitle>Are you sure you want to delete?</DialogTitle>
        <DialogActions>
          <Button onClick={() => setDeleteOpen(false)}>Cancel</Button>
          <Button color="error" variant="contained" onClick={deleteProject}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Projects;