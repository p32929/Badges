import React from 'react';
import {useOvermind} from '../Others/OvermindHelper'
import Grid from "@material-ui/core/Grid";
import {servicesAndBadges} from '../Others/GlobalVars'
import Section from "./Section";

const WholeThing = (props) => {
    const {actions, state} = useOvermind()

    return (
        <Grid>
            {
                servicesAndBadges.map((item, index) => {
                    return <Section item={item} key={index}/>
                })
            }
        </Grid>
    );
};

export default WholeThing;