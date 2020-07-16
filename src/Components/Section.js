import React from 'react';
import {useOvermind} from '../Others/OvermindHelper'
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import {replacer} from "../Others/GlobalMethods";
import Divider from "@material-ui/core/Divider";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CheckboxedTextfield from "./CheckboxedTextfield";

const Section = (props) => {
    const {actions, state} = useOvermind()
    const {item} = props;
    return (
        <Paper style={{padding: 16, margin: 8}} elevation={2}>
            <Grid container direction='column' justify='center' alignContent='center' alignItems='center'>
                <Typography variant='h6'>For {item.name}</Typography>
                <Grid container item xs alignItems='center' alignContent='center' justify='center'>
                    <TextField onChange={(e) => {
                        try {
                            var splittedParts = new URL(e.target.value.toString()).pathname.split("/")
                            actions.setUser(splittedParts[1])
                            actions.setRepo(splittedParts[2])
                        } catch (e) {
                            //
                        }

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
            <Divider style={{margin: 32}}/>

            <Grid container direction='row'>
                {
                    item.options.map((option) => {
                        return <CheckboxedTextfield option={option}/>
                    })
                }
            </Grid>

        </Paper>
    );
};

export default Section;