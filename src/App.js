import './App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00a0e9',
    },
    secondary: {
      main: '#e98f00',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
];

const defaultProps = {
  options: top100Films,
  getOptionLabel: (option) => option.title,
};

const styles = {
  input: {
    width: '100%',
    border: 'none',
    borderBottom: '1px solid #ebebeb',
    fontSize: '20px',
    color: '#818181',
    lineHeight: '32px',
  }
}

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Autocomplete
        {...defaultProps}
        id="debug"
        debug
        renderInput={(params) => <TextField {...params} label="debug" margin="normal" />}
      />
      <Autocomplete
        id="checkboxes-tags-demo"
        options={top100Films}
        getOptionLabel={(option) => option.title}
        renderOption={(option, { selected }) => (
          <React.Fragment>
            <img src="http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg" style={{ width: '25px' }} />
            {option.title}
          </React.Fragment>
        )}
        style={{ width: 500 }}
        renderInput={(params) => {
          params.inputProps.value = "!!!" + params.inputProps.value;
          console.log(params);
          return (
            <TextField {...params} label="Checkboxes" placeholder="Favorites"/>
            )
        }}
      />
    </ThemeProvider>
  );
}

export default App;
