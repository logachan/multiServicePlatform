import { toast } from "react-toastify"



export const SuccessToaster = (message) => {
    toast.success(message || "Success", {
        position: "top-center",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    })
}


export const FailedToaster = (message) => {
    toast.error(message || "Something went wrong"), {
        position: "top-center",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    }
}