import { GridList, GridListTile, makeStyles, Paper } from "@material-ui/core";
import tileData from "../tileData"

const GalleryComponent = () => {
    const classes = useStyles();
    return (
        <Paper variant='outlined' square elevation={0} className={classes.galleryRoot}>
            <div className={classes.mosaic}>
                <GridList cellHeight={220} className={classes.gridList}>
                    {
                        tileData.map(tile => {
                            <GridListTile key={tile.title}>
                                <img src={tile.img} alt={tile.title} />
                                <GridListTile title={tile.title}  />
                            </GridListTile>
                        })
                    }
                </GridList>
            </div>
        </Paper>
    )
};

export default GalleryComponent

const useStyles = makeStyles((theme) => ({
    icon: {
        color: "#ea5933"
    }
 }))
