export const setUserDat = (userData) => {
    localStorage.setItem("userData", JSON.stringify(userData))
}

export const getUserData = () => {
    return JSON.parse(localStorage.getItem("userData"));
}



export const setIsRegister = (isRegistered) => {
    localStorage.setItem("isRegistered", isRegistered)
}

export const getIsRegistered = () => {
    return localStorage.getItem("isRegistered");
}