import React, {useState} from "react";


import {

TextField,

Button,

Box,

Select,

MenuItem,

InputLabel,

FormControl

} from "@mui/material";


import {useForm, Controller} from "react-hook-form";




function ProjectForm({addProject, project}) {



const [image,setImage]=useState(

project?.image || null

);




const {

register,

handleSubmit,

control

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







<TextField


label="Name"


{...register("name",{

required:"Name is required"

})}


/>







<TextField


label="Description"


{...register("description",{

required:"Description is required"

})}


/>







<FormControl fullWidth>


<InputLabel>Status</InputLabel>



<Controller


name="status"

control={control}

defaultValue="active"


render={({field})=>(



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









<input

type="file"

accept="image/*"


onChange={(e)=>{


setImage(e.target.files[0])


}}


/>









<TextField


label="Deadline"


{...register("deadline",{

required:"Deadline is required"

})}


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