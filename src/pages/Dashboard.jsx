import React from "react";

import {Box, Typography} from "@mui/material";


function Dashboard(){


return(

<Box

sx={{

padding:6

}}

>


<Typography

variant="h3"

fontWeight="bold"

>

Welcome to our project 

</Typography>


<Typography

variant="h6"

sx={{marginTop:2,color:"gray"}}

>

..

</Typography>


</Box>


)


}


export default Dashboard;