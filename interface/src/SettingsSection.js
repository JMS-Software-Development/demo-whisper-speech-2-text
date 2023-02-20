import React from "react";
import { Grid, FormControl } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


const SettingsSections = ({ disabled, possibleLanguages, selectedLanguage, onLanguageChange }) => {

  return (
    <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
      <Grid item>
        <FormControl variant="standard" style={{ minWidth: 120 }}>
          <Autocomplete id="language-select" disableClearable options={possibleLanguages} getOptionLabel={(option) => option}
            disabled={disabled} value={selectedLanguage} onChange={(event, newValue) => {
              onLanguageChange(newValue);
            }}
            renderInput={(params) => <TextField {...params} label="Language" />} />
        </FormControl>
      </Grid>
    </Grid>
  )
}

export default SettingsSections;
