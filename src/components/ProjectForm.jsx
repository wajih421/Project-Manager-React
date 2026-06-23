import React, { useState } from "react";

import {
  Button,
  Box
} from "@mui/material";

import { useForm } from "react-hook-form";


import FormTextField from "./SingleLineTextfield";
import MultilineTextField from "./MultilineTextField";
import Deadline from "./Deadline";
import DropDown from "./DropDown";
import ImageInput from "./ImageInput";


function ProjectForm({addProject, project}){


const [image,setImage]=useState(
project?.image || null
);



const {

register,

handleSubmit,

control,

formState:{errors}

}=useForm({

defaultValues: project || {

status:"active"

}

});




return(


<Box

component="form"

onSubmit={handleSubmit((data)=>{


addProject({

...data,

image:image

});


})}


sx={{

display:"flex",

flexDirection:"column",

gap:2,

mt:2

}}



>



<FormTextField

register={register}

error={errors.name}

/>




<MultilineTextField

register={register}

error={errors.description}

/>





<DropDown

control={control}

error={errors.status}

/>





<Deadline

register={register}

error={errors.deadline}

/>





<ImageInput

setImage={setImage}

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