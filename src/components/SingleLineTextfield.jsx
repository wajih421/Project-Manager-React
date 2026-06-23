import React from "react";

import {
TextField
} from "@mui/material";


function SingleLineTextfield({register,error}){


return(

<TextField

label="Name"

fullWidth


error={!!error}

helperText={error?.message}



{...register("name",{

required:"Name is required"

})}


/>

)


}


export default SingleLineTextfield;