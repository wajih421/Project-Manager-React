import React from "react";

import {
TextField
} from "@mui/material";


function MultilineTextField({register,error}){


return(

<TextField

label="Description"

multiline

rows={4}

fullWidth


error={!!error}

helperText={error?.message}



{...register("description",{

required:"Description is required"

})}


/>

)

}


export default MultilineTextField;