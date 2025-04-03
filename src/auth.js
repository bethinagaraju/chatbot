import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile} from "firebase/auth";


/////////////////////////////////////
export const signUp = async (email, password, displayName) => {
  try {

    if(password.length < 8){
      alert("Password must be at least 8 characters long.");
      return;
    }


    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Update display name
    await updateProfile(user, {
      displayName: displayName,
    });

    console.log(user);
    

    return true;
  } catch (error) {

    if (error.code === "auth/invalid-email") {
      alert("Invalid Email Address. Please enter a valid email.");
    }
    
    else if (error.code === "auth/email-already-in-use") {
      alert("Your already existing user please Login.");
    }
    
    return false;
  }
};




const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log(userCredential);
     return userCredential;

  } catch (error) {
    if (error.code === "auth/invalid-email") {
      alert("Invalid Email Address. Please enter a valid email.");
    }
    
    else if (error.code === "auth/user-not-found") {
      alert("User not found. Please SignUp.");
    }
    
    else if (error.code === "auth/wrong-password") {
      alert("Wrong password. Please try again.");
    }
    else{
      alert(error.message);
    }
  }
};

export { signIn };