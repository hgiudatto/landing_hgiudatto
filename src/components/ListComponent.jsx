import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemIcon, ListItemText, ListSubheader } from "@material-ui/core";
import data from "../listData";

const ListComponent = () => {
    const classes = useStyles();
    return (
        <List component="nav" aria-labelledby='nested-list-subheader'
        subheader={
            <ListSubheader component='div' id='nested-list-subheader'>
                Cost based on a group of 30ps, accommodated in towin rooms
            </ListSubheader>
        } className={classes.listRoot}>
        {
            data.map(item => (
                <ListItem key={item.text}>
                    <ListItemIcon className={classes.icon}>
                        {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text}/>
                </ListItem>
            ))
        }
        </List>
    )
}

export default ListComponent

const useStyles = makeStyles((theme) => ({
    icon: {
        color: "#ea5933"
    }
 }))
