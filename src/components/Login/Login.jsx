import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      "url(https://i.pinimg.com/originals/0e/53/89/0e53891279165157683767990158b363.jpg)",
    backgroundSize: "cover",
    height: "100vh",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    width: "150px",
    lineHeight: 1.5,
    backgroundColor: "#05595b",
    borderRadius: "12px",
  },
  submit1: {
    margin: theme.spacing(3, 0, 2),
    width: "150px",
    lineHeight: 1.5,
    backgroundColor: "#e2d784",
    borderRadius: "12px",
  },
}));

export const Login = (LoginE, setLogin) => {
  const classes = useStyles();

  return (
    <main>
      {/*  <Grid container component="main" className={classes.root} style={{ display: 'flex'}}> */}
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper} style={{ display: "flex" }}>
          {/* <img src="src\assets\logo.JPG" alt="" /> */}
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Ingresar usuario"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Ingresar contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Aceptar terminos y condiciones"
            />
            <div
              style={{
                display: "block",
                justifyContent: "center",
                paddingLeft: "180px",
              }}
            >
              <div>
                <Button
                  href="/"
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Iniciar Cesion
                </Button>
              </div>
              <div>
                <Button
                  href="/cliente"
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit1}
                >
                  Crear cuenta nueva
                </Button>
              </div>
              <Grid container>
                <Grid item>
                  <Link href="#" variant="body2">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </Grid>
              </Grid>
            </div>
          </form>
        </div>
      </Grid>
      {/* </Grid> */}
    </main>
  );
};

export default Login;
