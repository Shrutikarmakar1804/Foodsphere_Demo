import { createTheme } from "@mui/material";

export const darkTheme=createTheme({
    palette:{
        mode:"dark",
        primary:{
            main:"#00bcd4"
        },
        secondary:{
            main:"#ff3d00"
        },
        blue:{
            main:"#242B2E"
        },
        background:{
            main:"#ef5350",
            default:"#000000",
            paper:"#000000"
        },
        textcolor:{
            main:"#b71c1c",

        }
    }
})