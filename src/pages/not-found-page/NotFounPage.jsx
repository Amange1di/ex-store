import { Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const NotFoundPage = () => {
    
const { t, i18n } = useTranslation();
  return (
    <div>
      <Container maxWidth="lg" sx={{textAlign:"center"}}>
       <h1 style={{fontSize:"110px"}}> {t('404 Not Found')} </h1>
       <p style={{marginBottom:'80px'}}>{t('Your visited page not found. You may go home page.')} </p>
       <Button className="btn-link" component={Link} to="/" style={{padding:"16px 48px", background:'#DB4444', color:"#fff", borderRadius:'4px'}}>{t('Back to home page')} </Button>
        </Container>
    </div>
  );
};

export default NotFoundPage;
