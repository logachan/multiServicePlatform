import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';


const BreadCrumbs = () => {



    const handleClick = () => {
        alert("checked")
    }


    const listOfBreadCrumbs = () => {
        let no_of_list = [...Array(5).keys()]

        let finalReturnElement = no_of_list.map((val, index) => {
            return (
                <>
                    <Link
                        underline="hover"
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="inherit"
                        href="/"
                    >
                        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        MUI - {val}
                    </Link>
                    
                    
            
                </>
            )
        })

        return finalReturnElement;



    }



    return (
        <>
            <Box role="presentation" onClick={handleClick}
                sx={{
                    mt: 4, px: 4
                }}
            >
                <Breadcrumbs aria-label="breadcrumb">
                    {listOfBreadCrumbs()}
                </Breadcrumbs>
            </Box>
        </>
    )
}

export default BreadCrumbs
