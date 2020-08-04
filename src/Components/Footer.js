import React from 'react';
import {useOvermind} from "../Others/OvermindHelper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = {
    text: {
        color: "#FFF"
    }
}

const Footer = (props) => {
    const {state, actions} = useOvermind()

    return (
        <Grid alignContent='center' alignItems='center' justify='center'
              style={{height: 56, background: "#757575", margin: 8, width: '100%'}} container direction='column'>
            <Typography style={styles.text}>Star/Fork it: <a
                style={{color: "#fff"}}
                href="https://github.com/p32929/Badges/">https://github.com/p32929/Badges/</a></Typography>
        </Grid>
    );
};

export default Footer;