export const isUserLoggedIn = () => {

    const username = localStorage.getItem("username");
    console.log(username);

    if(username == null) {
        return false;
    }    
    else {
        return true;
    }   
}