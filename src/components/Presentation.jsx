import { makeStyles, Paper, Typography } from "@material-ui/core"
import ListGallery from "./ListGallery";

const Presentation = () => {
    const classes = useStyles();
    return (
        <Paper variant="outlined"
               square
               elevation={0}
               className={classes.presentation}
            >
           <Typography variant="h5">Our packages includes</Typography> 
           <ListGallery/>
        </Paper>
    )
}

export default Presentation

const useStyles = makeStyles((theme) => ({
    root: {
        
    }
}))
