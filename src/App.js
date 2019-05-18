import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Checkbox from '@material-ui/core/Checkbox';
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import {
  FormControl,
  InputLabel,
  Input,
  TextField,
  Tab,
  Tabs,
} from "@material-ui/core";

function RegisTration(theme) {
  return (

    <div style={{ display: "flex", justifyContent: "center", margin: 20, padding: 20 }}>
      <form style={{ width: "50%" }}>
        <h1>ReGIStrATioN</h1>

        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="name">First Name</InputLabel>
          <Input id="name" type="text" />
        </FormControl>

        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="name">Second Name</InputLabel>
          <Input id="name" type="text" />
        </FormControl>

        <FormControl>
          <Checkbox label="Gender" />Gender
        </FormControl>

        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="name">Username</InputLabel>
          <Input id="name" type="text" />
        </FormControl>

        <TextField id="standard-password-input" label="Password" type="password" autoComplete="current-password" margin="normal" />

        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input id="email" type="email" />
        </FormControl>

        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="phonenumber">Phone Number</InputLabel>
          <Input id="phonenumber" type="phonenumber" />
        </FormControl>

        <Button variant="contained" color="primary" size="medium">
          Register m8
          </Button>

      </form>

    </div>
  );
}

function LogIn(theme) {
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: 20, padding: 20 }}>
      <div>
        <form style={{ width: "50%" }}>
          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="name">Username</InputLabel>
            <Input id="name" type="text" />
          </FormControl>

          <TextField id="standard-password-input" label="Password" type="password" autoComplete="current-password" margin="normal" />

          <Button variant="contained" color="primary" size="medium">
            LoGIn m8
    </Button>
        </form>
      </div>
    </div>
  );
}

class App extends React.Component {
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center", margin: 20, padding: 20 }}>
        <div>
          <BrowserRouter>

            <AppBar position="static" color="default">
              <Tabs indicatorColor="primary" textColor="primary" vfullWidth>
                <Tab label="ReGIsTraTIoN" component={Link} to="/one" />
                <Tab label="LoGIn m8" component={Link} to="/two" />
              </Tabs>
            </AppBar>

            <Switch>
              <Route path="/one" component={(RegisTration)} />
              <Route path="/two" component={(LogIn)} />
            </Switch>

          </BrowserRouter>
        </div>
      </div>
    );
  }
}


export default App;
