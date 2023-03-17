import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Typography, Grid } from "@material-ui/core";
import { Box } from "@mui/material";
import "./Footer.css";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";

function Footer() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );

      var footerComponent;
      if(token != ""){
        footerComponent = <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid alignItems="center" item xs={12}>
          <Box className="box1">
            <Box
              paddingTop={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
            ></Box>
            <Box display="flex" alignItems="center" justifyContent="center">
              <a
                href="https://www.github.com/fernandodelgadoazevedo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon className="redes" />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=5511983078800&text=Ol%C3%A1%21+Vim+Direto+do+Blog+Azevedo&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="redes" />
              </a>
              <a
                href="https://www.linkedin.com/in/fernandodazevedo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon className="redes" />
              </a>
            </Box>
          </Box>
          <Box className="box2">
            <Box paddingTop={1}>
              <Typography variant="subtitle2" align="center" gutterBottom>
                © 2023 Copyright:
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      }
  return (
    <>
      {footerComponent}
    </>
  );
}
export default Footer;