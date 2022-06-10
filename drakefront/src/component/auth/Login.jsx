import * as React from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Form from 'react-bootstrap/Form';
import { 
  Avatar, 
  Stack, 
  Switch,
  TextField,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  FormHelperText,
  IconButton,
  Button,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Box,
  FilledInput,
  Input,
  Typography

} from '@mui/material';




export default function Login() {



  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });

  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChecked = (event) => {
    setChecked(event.target.checked);
  };
  const [checked, setChecked] = React.useState(true);

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 2, width: '55ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Stack direction="column" alignItems="center" justifyContent="center" spacing={2} sx={{ paddingBottom: 0 }}>
        <Avatar alt="Cindy Baker" src="https://64.media.tumblr.com/6430bbf22c54bd7446a96be8af5ec0a5/94d97124995c74f1-59/s400x600/87501bd52c57ba8b2aad5cd5ac0c722db51923c6.pnj" sx={{ width: 100, height: 100 }} />

        <Typography gutterBottom variant="p" component="div" sx={{ paddingTop: 1, fontWeight: 600, fontSize: 24, textAlign: "center", paddingLeft: 0, }}>
        Sign In
      </Typography>
      </Stack>
      
      <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 100 }}>
        Software Developer Goal Tool for Project Management
      </Typography>
      <Form sx={{ alignItems: "center" }}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <TextField label="Email" color="secondary" sx={{ m: 0, width: '35ch' }} />
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicEmail">
          <FormControl sx={{ m: 0, width: '35ch' }} variant="outlined" color="secondary" >
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicCheckbox">

          <FormControlLabel
            control={
              <Switch checked={checked} onChange={handleChecked} name="check" />
            }
            label="Keep me signed in"
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Box>
  );
}
