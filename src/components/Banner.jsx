import { makeStyles, Paper, Typography } from "@material-ui/core"
import seine from "../images/seine.JPG";
import logo from "../images/travel_logo.png";
import StarsIcon from "@material-ui/icons/Stars";

const Banner = () => {
    const classes = useStyles()
    return (
        <>
            <Paper variant="outlined" square elevation={0} className={classes.banner}>
                <div className={classes.titleContainer}>
                    <Typography variant="h4" component="h1" className={classes.title}>
                        <span style={{color: "#edff21"}}>Reset your Events in</span><span style={{color: "#ea5933"}}> Paris</span>
                    </Typography>
                    {/* <img src={logo} alt="logo" className={classes.logo} /> */}
                </div>
                <div className={classes.subtitleContainer}>
                    <Typography className={classes.subtitle} variant="h6">
                        Organize your meeting in a ...
                        <br />
                        100% certified eco-resort
                        <StarsIcon className={classes.icon} fontSize="small"/>
                        best-in-class-speed-connection
                        <StarsIcon className={classes.icon} fontSize="small"/>
                        surrounded by the city of light
                        <StarsIcon className={classes.icon} fontSize="small"/>
                        11-hours from Buenos Aires
                    </Typography>
                </div>
            </Paper>
        </>
    )
}

export default Banner

const useStyles = makeStyles((theme) => ({
    banner: {
        width: "inherit",
        height: "75vh",
        backgroundImage: `url(${seine})`,
        backgroundSize: "cover",
        backgroundPosition: "center center center",
        color: "#fff",
        fontWeight: "bold",
        position: "relative",
    },
    titleContainer: {
        background: "#000",
        opacity: 0.8,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
    },
    logo: {
        width: "10rem",
        height: "auto",
        padding: theme.spacing(3),
    },
    title: {
        padding: theme.spacing(2)
    },
    subtitleContainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#000",
        opacity: 0.9
    },
    subtitle: {
        color: "#ea5933",
        fontWeight: "bold",
        height: "auto",
        textAlign: "center",
    },
    icon: {
        verticalAlign: "middle",
        margin: theme.spacing(0,1)
    },
    [theme.breakpoints.down("sm")]: {
        title: {
            fontStyle: "1.5rem",
        },
        logo: {
            width: "7rem",
        },
        subtitle: {
            fontSize: "1rem"
        }
    },
    [theme.breakpoints.down("xs")]: {
        subtitle: {
            display: "none",
        }
    }
}))