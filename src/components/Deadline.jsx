import React from "react";

import {
TextField
} from "@mui/material";


function Deadline({register,error}){


return(

<TextField

label="Deadline"

type="date"

fullWidth


InputLabelProps={{
shrink:true
}}


error={!!error}

helperText={error?.message}



{...register("deadline",{

required:"Deadline is required"

})}


/>

)

}


export default Deadline;