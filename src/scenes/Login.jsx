import { useState } from "react"

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleLogin = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
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
                <button type="submit">Login</button>
            </form>
        </>
    )
}