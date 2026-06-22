import React from "react";

import {
TextField,
Button,
Box
} from "@mui/material";

import {useForm} from "react-hook-form";




function ProjectForm({addProject,project}){


const {

register,

handleSubmit

}=useForm({

defaultValues:project || {}

});





return(


<Box

component="form"

onSubmit={handleSubmit(addProject)}

sx={{

display:"flex",

flexDirection:"column",

gap:2,

mt:2

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



<TextField

label="Status"

{...register("status")}

/>



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


)



}


export default ProjectForm;