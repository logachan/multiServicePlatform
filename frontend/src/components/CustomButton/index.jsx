


import { Button, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useCallback } from 'react';

const CustomButtonTrigger = () => {

    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    // Child component that receives a function prop
    const CSButton = React.memo(({ onClick, text }) => {
        console.log(`${text} button rendered`);
        return <Button onClick={onClick}>{text}</Button>;
    });



    const handleClick1 = useCallback(() => {
        setCount1((prev) => prev + 1)
    }, [count1])

    const handleClick2 = useCallback(() => {
        setCount2((a) => a + 1)
    }, [count2])

    const ResetCount = () => {
        setCount1(0)
        setCount2(0)
    }


    console.log("Parent rendered");
    return (
        <>
            <Typography variant='overline'>
                count 1 : {count1}
            </Typography>
            <Typography variant='overline' sx={{ ml: 2 }}>
                count 2 : {count2}
            </Typography><br />
            <CSButton onClick={handleClick1} text="Button 1" />
            <CSButton onClick={handleClick2} text="Button 2" />
            <CSButton onClick={ResetCount} text="reset" />
        </>
    )
}

export default CustomButtonTrigger
