import { IconButton, InputBase, Paper } from '@mui/material'
import React from 'react'
import { FiSearch } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const Search = () => {
    
  const { t, i18n } = useTranslation();
  return (
    <Paper
    component="form"
    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 , bgcolor:"#F5F5F5", maxWidth:"160px"}}
    elevation={0}
  >
    <InputBase
      sx={{ ml: 1, flex: 1,fontSize:"14px" ,}}
      placeholder={t('Search')}
      inputProps={{ 'aria-label': 'What are you looking for?' }}
    />
    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
      <FiSearch />
    </IconButton>

  </Paper>

  )
}

export default Search