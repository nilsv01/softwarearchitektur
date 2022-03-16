import React, { Component } from 'react'
import { Box } from '@mui/material';
import { TextField } from '@mui/material';
class CreateHaltestelle extends Component {

    constructor(props){
        super(props);
    }

    render() {
        
        return (
            <Box>
                <TextField
                    id="outlined-required"
                    label="Required"
                    defaultValue="Hello World"
                />
            </Box>
        );
    };
}
export default CreateHaltestelle;