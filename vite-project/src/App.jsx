import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import {  Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";




const Heading = styled(Typography)({
  fontSize: "34.401px",
  color: "#11175D",
  fontWeight: "700",
  fontFamily: ' "Nunito", sans-serif',
});

const FromContainer = styled("section")`
  height: 1024px;
  width: 1440px;
  display: flex;
  flex-direction: row;
  gap: 69px;
  margin: 0 auto;
`;

const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    height: "81.73px",
    width: "368.09px",
    backgroundColor: "#fff",
    padding: "0 55px",
    color: "#11175D",
    fontSize: "20.641px",
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#11175D",
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#11175D",
    borderRadius: "8.6px",
    fontSize: "13.67px",
    color: "#fff",
    opacity:"0.3"
  },
  "& .MuiInputLabel-root": {
    color: "#11175D",
    fontSize: "16px",
    "&.MuiInputLabel-shrink": {
      fontSize: "13.76px",
      color: "#11175D",
    },
  },
}));

const CustomButton = styled(Button)({
  height: "67.492px",
  width: "368px",
  borderRadius: "86.033px",
  backgroundColor: "#5F35F5",
  color: "#fff",
  fontSize:"20.641px"
});


function App() {
  return (
    <FromContainer>
      <Grid item xs={6}>
        <div className="Box_root">
          <form className="form_box">
            <div className="heading_wrapper">
              <Heading variant="h5" component="h5">
                Get started with easily register
              </Heading>
              <Heading
                style={{ fontSize: "20.641px", opacity: 0.5 }}
                variant="span"
                component="span"
              >
                Free register and you can enjoy it
              </Heading>
            </div>
            <div className="inp_btn_wrapper">
              <div className="inp_Wrapper">
                <CustomTextField
                  id="outlined-basic"
                  label="Email Address"
                  variant="outlined"
                  type="email"
                />
                <CustomTextField
                  id="outlined-basic"
                  label="Full name"
                  variant="outlined"
                  type="text"
                />
                <CustomTextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  type="password"
                />
              </div>
              <div className="btn_wrapper">
                <CustomButton variant="contained"> sign up </CustomButton>
                <div>
                  <span className="txt_link">
                    Already have a account ?{" "}
                    <p style={{ color: "#EA6C00", fontWeight: "700" }}>
                      {" "}
                      Sign In{" "}
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Grid>
      <Grid item xs={6}>
        <div className="img_box">
          <img src="/hero.jpg" alt="hero.jpg" />
        </div>
      </Grid>
    </FromContainer>
  );
}

export default App;
