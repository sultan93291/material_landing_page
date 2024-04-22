import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const FromContainer = styled("section")`
  height: 1024px;
  width: 1440px;
  background-color: black;
  display:flex;
  margin:0 auto;
`;

function App() {
  return (
    <FromContainer>
     
        <Grid item xs={6}>
          <div className="Box_root">
          <form >
            <h1>hello world</h1>
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
