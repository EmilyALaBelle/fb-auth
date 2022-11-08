import { useState } from "react"
import { initializeApp } from "firebase/app"
import { createUserWithEmailAndPassword, getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCBn2IAmey6kZyb-_khAuiV6dW5I3POl_Y",
    authDomain: "fb-auth-el.firebaseapp.com",
    projectId: "fb-auth-el",
    storageBucket: "fb-auth-el.appspot.com",
    messagingSenderId: "256142708678",
    appId: "1:256142708678:web:eca44052a9f92a128dacc7"
};

export default function Signup({ setUser }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSignin = async (e) => {
        e.preventDefault()
        const app = initializeApp(firebaseConfig) //connects to firebase
        const auth = getAuth(app) //connects us to Firebase Auth
        const response = await createUserWithEmailAndPassword(auth, email, password)
            .catch(alert)
        setUser(response.user)
    }
    return (
        <>
            <h1>Signin</h1>
            <form onSubmit={handleSignin}>
                <label htmlFor="email">Email:{' '}
                    <input type="email" name="email" id=""
                        value={email} onChange={e => setEmail(e.target.value)}
                        placeHolder="yourname@domain.com" />
                </label><br />
                <label htmlFor="password">Password:{' '}
                    <input type="password" name="password"
                        value={password} onChange={e => setPassword(e.target.value)}
                        placeholder="....." />
                </label><br />
                <button type="submit">Signin</button>
            </form>
        </>
    )
}