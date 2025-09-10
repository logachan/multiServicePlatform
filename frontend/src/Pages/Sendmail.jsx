import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Box, Button, FormHelperText, Grid, IconButton, TextField, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'; // ✅ Must import CSS
import { commonService } from '../helpers/common.service';
import { toast, ToastContainer } from 'react-toastify';
import { FailedToaster, SuccessToaster } from '../helpers/toaster.herper';



const Sendmail = () => {

    const quillRef = useRef(null) // Reference to the Quill instance
    const [content, setContent] = useState("<p>Hello Hiring&nbsp;Team,</p><p><br></p><p>&nbsp;&nbsp;I hope this message finds you well.</p><p><br></p><p>My name is Logachander B and I am a software Engineer with 1.6 years of experience specializing in React, Node.js, MySQL with Typeorm as MERN stack . I am currently seeking new opportunities to contribute to a dynamic team and continue growing professionally in the development field.</p><p><br></p><p>During my time at Agira Technologies, I have worked with Insurance based Project and handle dynamic payment calculations with UI and payment redirected successfully&nbsp;</p><p><br></p><p>I have attached my resume for your consideration. I would be grateful if you could let me know of any suitable openings that match my profile or keep me in mind for future opportunities.</p><p><br></p><p>Thank you for your time, and I look forward to hearing from you.</p><p><br></p><p>Best regards,</p><p>Logachander B&nbsp;</p><p>9150541812</p>")
    const [emails, setEmails] = useState(["logachan08@gmail.com", "logachan08@gmail.com"])
    const [errors, setErrors] = useState(['', ''])


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const modules = {
        toolbar: [
            ["bold", "italic", "underline"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link"],
            ["clean"],
        ],
    };
    const formats = ["bold", "italic", "underline", "list", "bullet", "link"];

    const AddEmail = () => {
        setEmails([...emails, ""])
        // here to update and handle errors for the each of the array in the specific JSON
        setErrors([...errors, "Email is required"])
    }

    const handleEmailChange = (index, value) => {
        const updatedEmails = [...emails]
        updatedEmails[index] = value
        setEmails(updatedEmails)

        // check if the email value is valid or not 
        const updatedErrors = [...errors]

        if (!value.trim()) {
            updatedErrors[index] = "Email is required"
        } else if (!emailRegex.test(value)) {
            updatedErrors[index] = "Invalid email format"
        } else {
            console.log("f3");
            updatedErrors[index] = ""; // No error
        }

        setErrors(updatedErrors)

    }



    console.log("emails", emails, errors);

    const removeEmailInput = (indx) => {
        const filteredEmails = emails.filter((__i, index) => index !== indx)
        setEmails(filteredEmails)
    }

    const handleSubmitMail = () => {
        commonService.PostService(`/bulk-email/sendAll`, { emails: emails, content: content })
            .then((res) => {
                SuccessToaster(res?.data?.message)
            }).catch((err) => {
                FailedToaster("Please check the server")
            })
    }


    return (
        <>
            <Box sx={{ textAlign: "center", py: 2, color: "white", backgroundColor: "red" }}>
                <Typography variant='h4'>Send Bulk Mail</Typography>
            </Box>

            <Grid container columns={12} spacing={2} pt={2}>
                <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                    <Box sx={{ px: 5 }}>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "flex-end",
                                mb: 2, // space below button
                            }}
                        >
                            <Button
                                variant="contained"
                                sx={{ textTransform: "none" }}
                                onClick={AddEmail}
                            >
                                Add Email
                            </Button>
                        </Box>

                        {emails.map((email, index) => (
                            <>

                                <TextField
                                    key={index}
                                    variant="outlined"
                                    aria-label="email"
                                    placeholder="Enter Email Here"
                                    defaultValue={email}
                                    error={errors[index] !== "" ? true : false}
                                    sx={{ my: 1, width: "95%" }} // Add margin between fields
                                    onChange={(e) => handleEmailChange(index, e.target.value)}
                                />


                                <>
                                    <IconButton color='error' sx={{ mt: 1.7 }} onClick={() => removeEmailInput(index)}>
                                        <DeleteOutlineIcon />
                                    </IconButton>
                                </>

                                {errors.length &&
                                    (<FormHelperText
                                        error
                                        id="standard-weight-helper-text-email-login"
                                        sx={{ mt: 0.1, p: 0 }}
                                    >
                                        {errors[index]}
                                    </FormHelperText>)
                                }
                            </>

                        ))}

                    </Box>
                </Grid>

                <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                    <Box sx={{ px: 6, mt: 6 }}>
                        <ReactQuill
                            ref={quillRef}
                            value={content}
                            onChange={(value) => setContent(`${value}`)}
                            theme="snow"
                            formats={formats}
                            modules={modules}
                        />
                    </Box>
                    <Box sx={{ mt: 2, px: 6, display: "flex", justifyContent: "flex-end" }}>
                        <Button variant='contained'
                            disabled={!emails.every((e, i) => e.trim() && !errors[i])}
                            onClick={handleSubmitMail}
                        >
                            Submit
                        </Button>
                    </Box>
                </Grid>
            </Grid>

        </>
    )
}

export default Sendmail
