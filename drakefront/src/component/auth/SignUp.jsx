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




export default function SignUp() {



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
        <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/2.jpg" sx={{ width: 80, height: 80 }} />

        {/* <Typography gutterBottom variant="p" component="div" sx={{ paddingTop: 1, fontWeight: 600, fontSize: 24, textAlign: "center", paddingLeft: 0, }}>
        Register
      </Typography> */}
      </Stack>
      
      <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 100 }}>
        Create your account
      </Typography>
      <Form sx={{ alignItems: "center" }}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <TextField label="Name" color="secondary" sx={{ m: 0, width: '35ch' }} />
        </Form.Group>
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
      {/* confirm password */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <FormControl sx={{ m: 0, width: '35ch' }} variant="outlined" color="secondary" >
            <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
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
              label="Confirm Password"
            />
          </FormControl>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">

          <FormControlLabel
            control={
              <Switch checked={checked} onChange={handleChecked} name="check" />
            }
            label="Agree to terms and conditions"
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </Form.Group>
        <Stack
          direction="row">
          <Typography gutterBottom variant="p" color="primary" component="div" sx={{ paddingTop: 1, fontWeight: 500, fontSize: 14, textAlign: "center", paddingLeft: 0, justifyContent: "left", marginLeft: 10 }}>
            Have account? <a href="/">Login</a>
          </Typography >
          <Button variant="secondary" type="submit" sx={{ backgroundColor: "#4285F4", color: "#fff", justifyContent: "right", marginLeft: 7 }}>
            Submit
          </Button>
        </Stack>
      </Form>
    </Box>
  );
}
