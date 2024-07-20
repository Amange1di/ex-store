import React, { useState } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { HiOutlineDeviceMobile } from 'react-icons/hi';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { BsSmartwatch } from 'react-icons/bs';
import { FiHeadphones } from 'react-icons/fi';
import { BsPhoneLandscape } from 'react-icons/bs';
import { AiOutlineCamera } from 'react-icons/ai';
import { useTranslation } from "react-i18next";
const CateSection = [
    { id: 1, name: "Phones", icon: <HiOutlineDeviceMobile /> },
    { id: 2, name: "Computers", icon: <HiOutlineDesktopComputer /> },
    { id: 3, name: "SmartWatch", icon: <BsSmartwatch /> },
    { id: 4, name: "Headphones", icon: <FiHeadphones /> },
    { id: 5, name: "Gaming", icon: <BsPhoneLandscape /> },
    { id: 6, name: "Cameras", icon: <AiOutlineCamera /> },
];

const CategoriesSection = () => {
      
const { t, i18n } = useTranslation();
    const [activeCategory, setActiveCategory] = useState(null);

    const handleCategoryClick = (categoryId) => {
        setActiveCategory(categoryId === activeCategory ? null : categoryId);
    };

    return (
        <Container maxWidth="lg" sx={{ marginTop: "100px",  display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            {CateSection.map((category) => (
                <Box
                    key={category.id}
                    onClick={() => handleCategoryClick(category.id)}
                    sx={{
                        width: "170px",
                        height: "125px",
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '24px',
                        padding: '20px',
                        marginBottom: '20px',
                        border: "2px solid black",
                        marginLeft: '20px',
                        background: activeCategory === category.id ? "#DB4444" : "#fff",
                        cursor: 'pointer',
                    }}
                >
                    <Typography variant="h5" style={{ color: activeCategory === category.id ? "#fff" : "#000", margin: "auto", fontSize: "30px" }}>
                        {category.icon}
                    </Typography>
                    <Typography variant="h5" style={{ color: activeCategory === category.id ? "#fff" : "#000", marginTop: "10px", textAlign: "center" }}>
                        {t(category.name)}
                    </Typography>
                </Box>
            ))}
        </Container>
    );
};

export default CategoriesSection;
