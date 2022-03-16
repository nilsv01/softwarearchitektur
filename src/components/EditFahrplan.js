import React, { Component } from 'react'
import { Box } from '@mui/material';
import { TextField } from '@mui/material';

class EditFahrplan extends Component {

    state = {
        anchorEl: true
    }

    constructor(props) {
        super(props);
    }


    render() {
        const EditSelectedRow = this.props.EditSelectedRow;
        return (
            <Box>
                <TextField
                    id="outlined-required"
                    label="Required"
                    defaultValue={EditSelectedRow.name}
                />
                
            </Box>
        );
    };
}
export default EditFahrplan;
