import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import blokPng from "../assets/blok.png";
import { useNavigate } from "react-router-dom";
import { toastSuccessNotify, toastErrorNotify } from "../helpers/ToastNotify";
import { useFormik } from "formik";
import * as yup from "yup";
import { useAuth } from "../context/AuthContext";
import loadingGif from "../assets/loading.gif";
import googlePng from "../assets/google.png";

const ValidationSchema = yup.object().shape({
  email: yup
    .string("Enter your email")
    .email("Email is invalid.")
    .min(2, "email should be of minimum 2 characters length.")
    .required("email is required"),
  password: yup.string("Enter your password").required("Password is required"),
});

const LoginAndRegisterForm = (props) => {
  return (
    <Grid container component="main" sx={useStyles.root}>
      <CssBaseline />
      <Grid container justify="center" sx={useStyles.image}>
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
          <Grid sx={useStyles.paper}>
            <Avatar sx={useStyles.avatar}>
              <img src={blokPng} style={{ width: 200 }} alt="candela" />
            </Avatar>
            <Typography sx={useStyles.header} component="h1" variant="h5">
              {/* ── Register ── */}
              ── {props.method} ──
            </Typography>
            <form style={useStyles.form} onSubmit={formik.handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoFocus
                value={formik.values.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              {loading ? (
                <div style={useStyles.loadingContainer}>
                  <img
                    src={loadingGif}
                    alt="Loading"
                    style={useStyles.loadingGif}
                  />
                </div>
              ) : (
                <>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={useStyles.submit}
                  >
                    Register
                  </Button>
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={handleGoogleProvider}
                    sx={useStyles.googleBtn}
                  >
                    With{" "}
                    <img
                      src={googlePng}
                      alt="google"
                      style={useStyles.googleImg}
                    />
                  </Button>
                </>
              )}
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const useStyles = {
  root: {
    height: "calc(100vh - 68px)",
    "& .MuiPaper-root": {
      borderRadius: "10px",
      boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75);",
      height: "fit-content",
      marginTop: 20,
      maxWidth: "500px",
    },
    marginTop: 68,
  },
  image: {
    backgroundImage: "url(https://picsum.photos/1600/900)",
    backgroundRepeat: "no-repeat",

    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    paddingTop: "40px",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    backgroundColor: "#046582",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
  },
  submit: {
    backgroundColor: "#046582",
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      color: "#046582",
    },
  },
  header: {
    fontFamily: "Girassol",
    textAlign: "center",
    color: "#046582",
  },
  loadingGif: {
    width: 75,
  },
  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  bottomLink: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  googleImg: {
    width: 75,
    marginLeft: 10,
  },
  googleBtn: {
    backgroundColor: "white",
    fontWeight: "bold",
  },
};

const Autorization = () => {
  const navigate = useNavigate();
  const { signup, login, currentUser } = useAuth();
  // const [method] = useState(props.method);

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={ValidationSchema}
        onSubmit={(values, actions) => {}}
        component={LoginAndRegisterForm}
      ></Formik>
    </div>
  );
};

export default Autorization;

// function Autorization() {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const { signup, loginWithGoogle, currentUser } = useAuth();

//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     validationSchema: validationSchema,
//     onSubmit: async (values) => {
//       setLoading(true);
//       try {
//         await signup(values.email, values.password);
//         navigate("/");
//         toastSuccessNotify("Registered successfully!");
//       } catch (error) {
//         toastErrorNotify(error.message);
//       }

//       setLoading(false);
//     },
//   });

//   const handleGoogleProvider = () => {
//     loginWithGoogle();
//   };

//   useEffect(() => {
//     if (currentUser) {
//       navigate("/");
//     }
//     console.log({ currentUser });
//   }, [currentUser, navigate]);

//   return (
//     <Grid container component="main" sx={useStyles.root}>
//       <CssBaseline />
//       <Grid container justify="center" sx={useStyles.image}>
//         <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//           <Grid sx={useStyles.paper}>
//             <Avatar sx={useStyles.avatar}>
//               <img src={blokPng} style={{ width: 200 }} alt="candela" />
//             </Avatar>
//             <Typography sx={useStyles.header} component="h1" variant="h5">
//               ── Register ──
//             </Typography>
//             <form style={useStyles.form} onSubmit={formik.handleSubmit}>
//               <TextField
//                 variant="outlined"
//                 margin="normal"
//                 fullWidth
//                 id="email"
//                 label="Email"
//                 name="email"
//                 autoComplete="email"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 autoFocus
//                 value={formik.values.email}
//                 error={formik.touched.email && Boolean(formik.errors.email)}
//                 helperText={formik.touched.email && formik.errors.email}
//               />
//               <TextField
//                 variant="outlined"
//                 margin="normal"
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="password"
//                 value={formik.values.password}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 error={
//                   formik.touched.password && Boolean(formik.errors.password)
//                 }
//                 helperText={formik.touched.password && formik.errors.password}
//               />
//               {loading ? (
//                 <div style={useStyles.loadingContainer}>
//                   <img
//                     src={loadingGif}
//                     alt="Loading"
//                     style={useStyles.loadingGif}
//                   />
//                 </div>
//               ) : (
//                 <>
//                   <Button
//                     type="submit"
//                     fullWidth
//                     variant="contained"
//                     sx={useStyles.submit}
//                   >
//                     Register
//                   </Button>
//                   <Button
//                     fullWidth
//                     variant="contained"
//                     onClick={handleGoogleProvider}
//                     sx={useStyles.googleBtn}
//                   >
//                     With{" "}
//                     <img
//                       src={googlePng}
//                       alt="google"
//                       style={useStyles.googleImg}
//                     />
//                   </Button>
//                 </>
//               )}
//             </form>
//           </Grid>
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// }

// export default Autorization;
