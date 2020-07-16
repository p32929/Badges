import React from 'react';
import {useOvermind} from '../Others/OvermindHelper'
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import {replacer} from "../Others/GlobalMethods";

const Section = (props) => {
    const {actions, state} = useOvermind()
    const {item} = props;
    return (
        <Paper style={{padding: 16, margin: 8}} elevation={2}>
            <Grid container direction='column' justify='center' alignContent='center' alignItems='center'>
                <Typography variant='h6'>{item.name}</Typography>
                <Typography variant='subtitle2'>{item.moreDetails}</Typography>
                <Grid container item xs alignItems='center' alignContent='center' justify='center'>
                    <TextField onChange={(e) => {
                        item.splitter(e.target.value.toString(), actions)
                    }} size='small' variant='outlined'
                               style={{marginTop: 8, textAlignLast: 'center', width: '50%'}}
                               placeholder="Repo URL"></TextField>
                </Grid>

                <Grid style={{marginTop: 16}} container direction='row' spacing={1}>
                    {
                        item.badges.map((badge, index) => {
                            return <Grid container direction='row' item xs={3}>
                                <Checkbox/>
                                <img src={replacer(badge, state)}/>
                            </Grid>
                        })
                    }
                </Grid>

            </Grid>
        </Paper>
    );
};

export default Section;