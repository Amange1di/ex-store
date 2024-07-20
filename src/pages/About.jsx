import { Box, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { CiShop } from "react-icons/ci";
import SideImage from '../assets/Side-Image.png';
import Servises from "../assets/Services.svg"
import Servises1 from "../assets/Services (1).svg"
import Servises2 from "../assets/Services (2).svg"
import Servises3 from "../assets/Services (3).svg"
import "./About.css"

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const About = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const { t } = useTranslation();
  return (
    <div>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', gap: '69px', alignItems: 'center', marginTop: '140px' }}>
          <div style={{ width: '653px', height: '336px' }}>
            <Typography variant="h2" sx={{ fontSize: '54px', fontWeight: '600', marginBottom: '40px' }}>
              {t('Our story')}
            </Typography>
            <Typography sx={{ paddingBottom: '24px', fontWeight: '400', fontSize: '16px' }}>
              {t('Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.')}
            </Typography>
            <Typography>
              {t('Exclusive offers more than 1 million products, growing rapidly. It provides a diverse assortment in categories ranging from consumer goods to electronics.')}
            </Typography>
          </div>

          <div style={{display: isMobile ? 'none' : 'block'}}>
            <img src={SideImage} alt="Side Image" style={{ width: '100%', height: 'auto' }} />
          </div>


        </Box>
        <Container style={{ paddingTop: "140px" }}>
          <div className='card-about' style={{ display: "flex", gap: "30px" }}>

            <div className='blocke' style={{
              width: 270,
              height: 230,
              borderRadius: "4px",
              border: "1px solid #0000004D",
              padding: "30px 45px 30px 35px",
              
            }}>
              <div style={{
                width: 200,
                height: 170,
                textAlign: "center",
                display: "grid",
                gap: "10px",
                justifyContent: "center",
              }}>
                <img src={Servises} style={{ margin: "0px 45px 0px 55px" }} alt="" />
                <h4 style={{ fontSize: "32px", fontWeight: "700" }}>10.5k</h4>
                {t('Sallers active our site')}
              </div>
            </div>
            <div className='blocke' style={{
              width: 270,
              height: 230,
              borderRadius: "4px",
              border: "1px solid #0000004D",
              padding: "30px 45px 30px 35px",

            }}>
              <div style={{
                width: 200,
                height: 170,
                textAlign: "center",
                display: "grid",
                gap: "10px",
                justifyContent: "center",
              }}>
                <img src={Servises1} style={{ margin: "0px 45px 0px 55px" }} alt="" />
                <h4 style={{ fontSize: "32px", fontWeight: "700" }}>33k</h4>
                {t('Mopnthly Produduct Sale')}
              </div>
            </div>
            <div className='blocke' style={{
              width: 270,
              height: 230,
              borderRadius: "4px",
              border: "1px solid #0000004D",
              padding: "30px 45px 30px 0px",
            }}>
              <div style={{
                width: 270,
                height: 170,
                textAlign: "center",
                display: "grid",
                gap: "10px",
                justifyContent: "center"
              }}>
                <img src={Servises2} style={{ margin: "0px 44px 0px 65px" }} alt="" />
                <h4 style={{ fontSize: "32px", fontWeight: "700" }}>45.5k</h4>
                {t('Customer active in our site')}
              </div>
            </div>
            <div className='blocke' style={{
              width: 270,
              height: 230,
              borderRadius: "4px",
              border: "1px solid #0000004D",
              padding: "30px 29px 30px 28px",
            }}>
              <div style={{
                width: 215,
                height: 170,
                textAlign: "center",
                display: "grid",
                gap: "10px",
                justifyContent: "center"
              }}>
                <img src={Servises3} style={{ margin: "0px 44px 0px 60px" }} alt="" />
                <h4 style={{ fontSize: "32px", fontWeight: "700" }}>25k</h4>
                {t('Anual gross sale in our site')}
              </div>
            </div>
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default About;
