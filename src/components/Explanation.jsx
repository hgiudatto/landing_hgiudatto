import { Button, Divider, makeStyles, Paper, Typography } from "@material-ui/core";
import Emoji from "./Emoji";
import EmailIcon from "@material-ui/icons/Email";

const Explanation = () => {
    const classes = useStyles()
    return (
        <h1>
            <Paper variant="outlined" elevation={0} square className={classes.explanation}>
                <Typography variant="subtitle2" paragraph gutterBottom>
                    <strong>MICE</strong> groups are finally back, <Emoji symbol="✌️" label="victory"/> and we feel like we are in the pink! All this past months, we have been
                    talking to you guys, and we have listened what the new necessities are now for the <strong>MICE</strong> Market, now that ... 
                    this thingy is over <Emoji symbol="😷" /> ehem...
                </Typography>
                <Divider/>
                <Typography variant="subtitle1" paragraph gutterBottom style={{margin: "1rem 1.5rem"}}>
                    <Emoji symbol="👉" /> For day 1, we prepared a 1/2 meeting, and a lunch in Les Apotres de Pigalle <Emoji symbol="🦞" /><Emoji symbol="🧀" /><Emoji symbol="🦪" /><Emoji symbol="🍷" /><Emoji symbol="🌰" />
                </Typography>
                <div className={classes.action}>
                    <Button variant="contained" startIcon={<EmailIcon/>} style={{margin: "2rem 0", backgroundColor: "#ea5933"}}>
                        <a className={classes.link} href="mailto:hector.giudatto@gmail.com">
                            Send me an email <span className={classes.extendText}>to learn more ...</span>
                        </a>
                    </Button>
                    <br />
                    <Typography variant="h6">
                        Or get in touch at worldtravellers@cuttingedge-events.com
                    </Typography>
                </div>
            </Paper>
        </h1>
    )
}

export default Explanation

const useStyles = makeStyles((theme) => ({
    explanation: {
        width: "inherit",
        height: "auto",
        padding:theme.spacing(2)
    },
    action: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        "& button:hover": {
            backgroundColor: "#ccc !important",
            color: "#fff"
        }
    },
    link: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: "1rem",
        textDecoration: "none",
        fontStyle: "italic",
    },
    [theme.breakpoints.down("md")]: {
        extendText: {
            display: "none"
        }
    }
}))
