import { Box, Typography } from '@mui/material'
import React from 'react'
import BreadCrumbs from './BreadCrumbs/BreadCrumbs';

const Blog = () => {


    return (
        <>
            <Box>
                <Typography variant='h3' sx={{ textAlign: "center", mt: 4, border: "2px solid black", color: "white", backgroundColor: "black" }}>
                    {"Blog"}
                </Typography>
            </Box>


            <>
                <BreadCrumbs />
            </>

        </>
    )
}

export default Blog
