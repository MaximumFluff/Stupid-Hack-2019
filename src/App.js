import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {
  FormControl,
  InputLabel,
  Input,
  TextField,
} from "@material-ui/core";


class App extends React.Component {
  render() {
  return (
<div>
    <div>
    <AppBar color="primary" position="static">
    <Toolbar>
      <TypoGraphy variant="title" color="inherit">Stupid Form</TypoGraphy>
    </Toolbar>
      
    </AppBar>
  </div>

<div>
<div style={{ display: "flex", justifyContent: "center", margin: 20, padding: 20 }}>
        <form style={{ width: "50%" }}>
          <h1>Contact Form</h1>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="name">First Name</InputLabel>
            <Input id="name" type="text" />
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="name">Second Name</InputLabel>
            <Input id="name" type="text" />
          </FormControl>

          <FormControl>
          <Checkbox label="Gender"/>
        </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="name">Username</InputLabel>
            <Input id="name" type="text" />
          </FormControl>

          <TextField id="standard-password-input" label="Password" type="password" autoComplete="current-password" margin="normal"/>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" type="email" />
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="phonenumber">Phone Number</InputLabel>
            <Input id="phonenumber" type="phonenumber" />
          </FormControl>


          <Button variant="contained" color="primary" size="medium">
            Register
          </Button>

        </form>
      </div>
    );
  }
}
</div>

    </div>
  );
}
}


export default App;
