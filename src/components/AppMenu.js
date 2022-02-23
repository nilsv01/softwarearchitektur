import React, { Component } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import App from '../App';
import './AppMenu.css'
class AppMenu extends Component {
   state = {
      customer: true
   };

   constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
   }

   handleChange = (event) => {
      this.setState({ customer: event.target.checked });
   };

   render() {
      const customer = this.state.customer;
      return (
         <Box>
            <AppBar position="static"
               sx={{ bgcolor: 'warning.light' }}>
               <Container maxWidth="xl">
                  <Toolbar disableGutters>
                     <Typography className='Title' variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        Busfahrplan
                     </Typography>
                     <Box>
                        <FormControlLabel
                           control={
                              <Switch
                                 className='UserSwitch'
                                 checked={this.state.customer}
                                 onChange={this.handleChange}
                                 value="checked"
                                 color='primary' S
                                 variant="contained"
                              />
                           }
                           labelPlacement="start"
                           label={this.state.customer ? 'Kunde' : 'Mitarbeiter'} />
                     </Box>
                  </Toolbar>
               </Container>
            </AppBar>
            <App customer={customer} />
         </Box>
      );
   }
}

export default AppMenu