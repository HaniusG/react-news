class LocalStorageService {
    static USER_DATA_KEY = 'userData';


    static saveUserData(userData) {
        localStorage.setItem(this.USER_DATA_KEY, JSON.stringify(userData))
    }

    static getUserData() {
        const storageData = localStorage.getItem(this.USER_DATA_KEY);

        if(storageData) {
            return JSON.parse(storageData)
        }

        return null
    }

    static cleaarUserData() {
        localStorage.removeItem(this.USER_DATA_KEY)
    }

    
}

export default LocalStorageService;

// export const setUserDat = (userData) => {
//     localStorage.setItem("userData", JSON.stringify(userData))
// }

// export const getUserData = () => {
//     return JSON.parse(localStorage.getItem("userData"));
// }



// export const setIsRegister = (isRegistered) => {
//     localStorage.setItem("isRegistered", isRegistered)
// }

// export const getIsRegistered = () => {
//     return localStorage.getItem("isRegistered");
// }