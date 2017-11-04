import React from 'react';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';
import Dialog, {
    DialogActions,
    DialogContent
} from 'material-ui/Dialog';

const styleSheet = theme => ({
    progress: {
        margin: `0 ${theme.spacing.unit * 2}px`,
        position: 'fixed',
        height:'100%',
        top: '50%',
        left: '50%',
        marginTop:'-90px',
        marginLeft:'-90px'
    },
});

const CircularIndeterminate = props  => {
    const {classes, status} = props;

    return (
        <Dialog open>
            <CircularProgress color="accent" className={classes.progress} size={180} />
        </Dialog>

    );
}
export default withStyles(styleSheet)(CircularIndeterminate);
