import { makeStyles } from "@material-ui/core"

const StickyFooter = () => {
    const classes = useStyles()
    return (
        <h1>
           Este es el pie de página 
        </h1>
    )
}

export default StickyFooter

const useStyles = makeStyles((theme) => ({
    root: {
        
    }
}))
