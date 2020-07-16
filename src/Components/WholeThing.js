import React from 'react';
import {useOvermind} from '../Others/OvermindHelper'
import Grid from "@material-ui/core/Grid";
import Section from "./Section";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

const WholeThing = (props) => {
    const {actions, state} = useOvermind()

    return (
        <Grid>
            {
                state.servicesAndBadges.map((item, index) => {
                    return <Section item={item} key={index} index={index}/>
                })
            }

            <Paper style={{padding: 16, margin: 8}} elevation={2}>
                <TextField size='small' style={{textAlignLast: 'center'}} fullWidth variant='outlined'
                           placeholder="CODE TO COPY"/>
            </Paper>

        </Grid>
    );
};

export default WholeThing;