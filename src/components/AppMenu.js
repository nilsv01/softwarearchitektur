import React, { Component } from 'react'
import './AppMenu.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, styled } from '@mui/material/styles';
import { AlignVerticalTopSharp } from '@mui/icons-material';


class AppMenu extends GreenSwitch{
   state = {
      checked: true
    }; 
   
   constructor(props){
      super(props);
      this.handleChange = this.handleChange.bind(this);
      const GreenSwitch = styled(Switch)(({ theme }) => ({
         '& .MuiSwitch-switchBase.Mui-checked': {
           color: "#21b6ae",
           '&:hover': {
             backgroundColor: alpha("#21b6ae", theme.palette.action.hoverOpacity),
           },
         },
         '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
           backgroundColor: "#21b6ae",
         },
       }));
   }

   handleChange = (event) => {
      this.setState({checked: event.target.checked});
   };


   render(){
      return(
         <AppBar position="static">
            <Container maxWidth="xl">
               <Toolbar disableGutters>
                  <Box>
                     <FormControlLabel
                         control={
                           <Switch
                            className='UserSwitch'
                            checked={this.state.checked}
                            onChange={this.handleChange}
                            value="checked"
                            color= 'primary'
                            variant="contained"
                           />
                         }       
                         labelPlacement="start"                          
                         label={this.state.checked ? 'Kunde' : 'Mitarbeiter'}     
                         href={this.state.checked ? '../' : '../Mitarbeiter'}/>
                  </Box>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                      Busfahrplan
                  </Typography>
               </Toolbar>
            </Container>
         </AppBar>
      );
   }
}

export default AppMenu