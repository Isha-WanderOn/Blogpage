import React from "react";
import { Box1, FootSection, Text } from "./Footer.css";


const Footer = () => {
  return (
      <FootSection>
        <Box1>
          <Text>
            <i className="fa-brands fa-facebook" />
          </Text>
          <Text>
            <i className="fa-brands fa-instagram" />
          </Text>
          <Text>
            <i className="fa-brands fa-linkedin" />
          </Text>
          <Text>
            <i className="fa-brands fa-youtube" />
          </Text>
          <Text>
            <i className="fa-brands fa-pinterest" />
          </Text>
        </Box1>

        <Box1>
          <p>
            <strong>ADDRESS</strong>
            <br />
            WANDERON EXPERIENCES PVT LTD
            <br />
            3rd Floor, Building No-750, Phase V, Udyog Vihar, Sector-19,
            Gurugram, Haryana-122022
          </p>
        </Box1>
        <Box1 contacts>
          <p>hello@wanderon.in</p>
          <p>+91-9870301533</p>
          <p>www.wanderon.in </p>
        </Box1>
      </FootSection>
  );
};

export default Footer;
