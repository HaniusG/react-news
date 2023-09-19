export const setUserData = (userData) => {
    localStorage.setItem("userData", JSON.stringify(userData))
}

export const getUserData = () => {
    return JSON.parse(localStorage.getItem("userData"));
}



export const setIsRegistered = (isRegistered) => {
    localStorage.setItem("isRegistered", isRegistered)
}

export const getIsRegistered = () => {
    return localStorage.getItem("isRegistered");
}

export const setImageUrl = (imageUrl) => {
    localStorage.setItem("imageUrl", imageUrl);
}

export const getImageUrl = (imageUrl) => {
    return localStorage.getItem("imageUrl");
}