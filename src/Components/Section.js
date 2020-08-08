import React from 'react';
import {useOvermind} from '../Others/OvermindHelper'
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import {replacer} from "../Others/GlobalMethods";
import Button from "@material-ui/core/Button";

const Section = (props) => {
    const {actions, state} = useOvermind()
    const {item, index} = props;
    return (
        <Paper style={{padding: 16, margin: 8}} elevation={2}>
            <Grid container direction='column' justify='center' alignContent='center' alignItems='center'>
                <Typography variant='h6'>{item.name}</Typography>
                <Typography variant='subtitle2'>Thanks to {item.moreDetails}</Typography>
                <Grid container item xs alignItems='center' alignContent='center' justify='center'>
                    <TextField onChange={(e) => {
                        item.splitter(e.target.value.toString(), actions)
                    }} size='small' variant='outlined'
                               style={{marginTop: 8, textAlignLast: 'center', width: '50%'}}
                               placeholder={state.servicesAndBadges[index].placeholder}></TextField>
                </Grid>

                <Grid style={{marginTop: 16}} container direction='row' spacing={1}>
                    {
                        item.badges.map((badge, index2) => {
                            return <Grid item xs={12} sm={12} md={6} lg={3} xl={3} container direction='row' item>
                                <Checkbox name={index2} checked={state.servicesAndBadges[index].checked[index2]}
                                          onChange={(e) => {
                                              var b = e.target.checked
                                              const cb = {
                                                  b,
                                                  index,
                                                  index2
                                              }
                                              actions.setCheckboxState(cb)
                                          }}/>
                                <img src={replacer(badge, state)}/>
                            </Grid>

                            // return <Grid item xs={12}>
                            //     <p>{replacer(badge, state)}</p>
                            // </Grid>
                        })
                    }
                </Grid>

            </Grid>

            <Grid container direction='row' justify='center' alignItems='center'
                  alignContent='center'>
                <Button size='small' onClick={() => {
                    actions.setAllChecked(index);
                }} style={{margin: 8}} color='primary' variant='contained'>Select All</Button>
                <Button size='small' onClick={() => {
                    actions.setAllUnchecked(index)
                }} style={{margin: 8}} color='primary' variant='contained'>Select None</Button>
            </Grid>

        </Paper>
    );
};

export default Section;