import React from 'react';
import {useOvermind} from '../Others/OvermindHelper'
import Grid from "@material-ui/core/Grid";
import Section from "./Section";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
                <Grid container direction='column' alignItems='center' alignContent='center' justify='center'>
                    <TextField size='small' style={{textAlignLast: 'left'}} fullWidth variant='outlined'
                               value={state.code}
                               rows={5}
                               multiline={true}
                               placeholder="CODE TO COPY"/>
                    <Button onClick={() => {
                        navigator.clipboard.writeText(state.code)
                    }} style={{width: '100%', margin: 8}} variant='contained' color='primary'>Copy to
                        clipboard</Button>
                </Grid>
            </Paper>

        </Grid>
    );
};

export default WholeThing;