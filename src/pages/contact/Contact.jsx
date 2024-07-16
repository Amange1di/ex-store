import { Box, Container, Typography } from "@mui/material";

import { BsTelephone } from "react-icons/bs";
import { RxEnvelopeClosed } from "react-icons/rx";
import { useTranslation } from "react-i18next";
const Contact = () => {
    
const { t, i18n } = useTranslation();
  return (
    <div>
      <Container maxWidth="lg" sx={{display:"flex", gap:"30px", marginTop:"80px"}}>
        <Box
          sx={{
            width: "340px",
            height: "457px",
            padding: "40px 35px 51px 35px",
            boxShadow: "0px 1px 13px 0px #0000000D",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "#DB4444",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                }}
              >
                <BsTelephone />
              </div>
              <p style={{ fontWeight: "500" }}>{t('Call To Us')}</p>
            </div>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "21px",
                paddingBottom: "16px",
              }}
              component={"p"}
            >
             {t('We are available 24/7, 7 days a week.')} 
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "21px",
                paddingBottom: "32px",
                borderBottom: "1px solid #909090",
              }}
              component={"p"}
            >
             {t('Phone: +8801611112222')} 
            </Typography>
          </div>

          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                margin: "32px 0 24px 0",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "#DB4444",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                }}
              >
                <RxEnvelopeClosed />
              </div>
              <p style={{ fontWeight: "500" }}>{t('Write To US')}</p>
            </div>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "21px",
                paddingBottom: "16px",
              }}
              component={"p"}
            >
             {t(' Fill out our form and we will contact you within 24 hours.')}
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "21px",
                paddingBottom: "16px",
              }}
              component={"p"}
            >
            {t('Emails: customer@exclusive.com')}   
            </Typography>
            <Typography
              sx={{ fontSize: "14px", fontWeight: "400", lineHeight: "21px" }}
              component={"p"}
            >
            {t('Emails: support@exclusive.com')}   
            </Typography>
          </div>
        </Box>

        <Box sx={{width:"800px", height:"457px", padding:"40px 32px 40px 31px", boxShadow: "0px 1px 13px 0px #0000000D"}}>
         <Box sx={{display:"flex", gap:"16px", marginBottom:"32px"}}>
         <div
            style={{
              width: "235px",
              height: "50px",
              borderRadius: "4px",
              background: "#F5F5F5",
              padding:"13px 3px 13px 16px"
            }}
          >
            <input
              style={{ outline: "none", width: "100%", background: "#F5F5F5", }}
              type="text"
              placeholder=" Your Name *"
            />
          </div>

          <div
            style={{
              width: "235px",
              height: "50px",
              borderRadius: "4px",
              background: "#F5F5F5",
              padding:"13px 3px 13px 16px"
            }}
          >
            <input
              style={{ outline: "none", width: "100%", background: "#F5F5F5", }}
              type="email"
              placeholder=" Your Email *"
            />
          </div>

          <div
            style={{
              width: "235px",
              height: "50px",
              borderRadius: "4px",
              background: "#F5F5F5",
              padding:"13px 3px 13px 16px"
            }}
          >
            <input
              style={{ outline: "none", width: "100%", background: "#F5F5F5", }}
              type="text"
              placeholder=" Your Phone *"
            />
          </div>
         </Box>
         <textarea
  style={{
    width: "737px", height: "207px", background: "#F5F5F5", border: "none", padding: "10px", fontSize: "16px",color: "#333",resize: "none",  outline: "none", marginBottom:"32px"
  }}
  placeholder="Your message"
/>

<div style={{display:"flex", justifyContent:"end"}}>
<button style={{padding:"16px 48px", background:"#DB4444", color:"#fff", borderRadius:"4px", textAlign:"right"}}>{t('Send Massage')} </button>
</div>

        </Box>
      </Container>
    </div>
  );
};

export default Contact;
