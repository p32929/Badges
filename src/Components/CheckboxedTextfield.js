import React, {useState} from 'react';
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";

const CheckboxedTextfield = (props) => {
    const {onChange, option} = props
    const [isChecked, setChecked] = useState(false)
    return (
        <Grid container direction='row' item xs={3}>
            <Checkbox onChange={(e) => {
                const checked = e.target.checked
                if (onChange) {
                    onChange(checked)
                }
                setChecked(checked)
            }}/>
            <TextField disabled={!isChecked} placeholder={option}/>
        </Grid>
    );
};

export default CheckboxedTextfield;