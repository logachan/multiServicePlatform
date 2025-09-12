import { Box, Button, TextField, Typography } from '@mui/material'
import { borderRadius } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client';

const socket = io("http://localhost:4001"); // backend URL

const ChatBox = () => {
    const [clickChatButton, setClickChatButton] = useState(true)
    const [messages, setMessages] = useState([])
    const [inputValue, setInputValue] = useState("")


    useEffect(() => {
        socket.on("message", (msg) => {
            setMessages((prev) => [...prev, msg?.text])
        })

        return () => {
            socket.off("messsage")
        }
    },[])



    const handleSend = () => {
        if (inputValue.trim() !== "") {
            // setMessages([...messages, inputValue])
            setInputValue("")
            socket.emit("message",{text:inputValue})
        }
    }





    return (
        <>
            {!clickChatButton && (
                <Box
                    sx={{ position: "fixed" }}
                    bottom={20}
                    right={20}
                    width={360}
                    height={420}
                    border={"2px solid #ccc"}
                    borderRadius={"white"}
                    boxShadow={4}
                    display={"flex"}
                    flexDirection={"column"}
                >
                    <Box
                        sx={{
                            p: 1.2,
                            backgroundColor: "#1976d2",
                            color: "white",
                            display: "flex",
                            justifyContent: "space-between"
                        }}
                    >
                        <Typography variant="subtitle1">Chat</Typography>
                        <Button
                            size="small"
                            sx={{ color: "white", minWidth: 0 }}
                            onClick={() => setClickChatButton(true)}
                        >
                            X
                        </Button>
                    </Box>
                    <Box
                        sx={{
                            flex: 1,
                            overflowY: "auto",
                            p: 1
                        }}
                    >
                        {
                            messages.map((item, index) => {
                                return (
                                    <>
                                        <Box
                                            sx={{
                                                display:"inline-block",
                                                border: "2px solid black",
                                                borderRadius: "6px",
                                                backgroundColor:"black",
                                                color:"#fff",
                                                p: 1,
                                                mt:1
                                            }}
                                        >
                                            <span>{`${item}`}</span>
                                        </Box><br />
                                    </>
                                )
                            })
                        }
                    </Box>
                    {/* Input field */}
                    <Box sx={{ display: "flex", p: 1, borderTop: "1px solid #ddd" }}>
                        <TextField
                            size="small"
                            variant="outlined"
                            placeholder="Type a message..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            sx={{ flex: 1, mr: 1 }}
                        />
                        <Button variant="contained" onClick={handleSend}>
                            Send
                        </Button>
                    </Box>
                </Box>
            )}
            {clickChatButton && <Box
                sx={{
                    position: "fixed",  // 👈 fix position to viewport
                    bottom: 20,         // 👈 distance from bottom
                    right: 20,          // 👈 distance from right
                    height: 60,
                    width: 60,
                    border: "2px solid #1976d2",
                    borderRadius: "50%", // 👈 make it round
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#1976d2",
                    boxShadow: 3,
                    cursor: "pointer",
                }}
                onClick={() => setClickChatButton(false)}
            >
                💬
            </Box>}
        </>
    )
}

export default ChatBox
