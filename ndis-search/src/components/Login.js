import React, { useEffect, useState } from 'react';

export function Login() {
    const [loginState, setLoginState] = useState(false);
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [userProfile, setUserProfile] = useState(null);

    useEffect(() => {
        queryUserStatus({}, '/api/hello');
    }, []);


    const queryUserStatus = (headers, url) => {
        fetch(url,
            {
                credentials: "same-origin",
                headers: headers
            })
            .then(async data => {
                if (data.status === 200) {
                    const profile = await data.json();
                    console.log(profile);
                    setUserProfile(profile);
                    setLoginState(true);

                }

                if (data.status === 404) {
                    console.log('user not found');
                }
            })
            .catch(e => {
                console.log(e.status);
            })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("You clicked submit");

        queryUserStatus({
            'Authorization': 'Basic ' + btoa(user + ':' + password)
        }, 'http://localhost:4000/api/auth/login')
    }

    const renderForm = () => {
        return (
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" value={user} onChange={(event) => setUser(event.target.value)} />
                </label>

                <label>
                    Password:
                    <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                </label>

                <input type="submit" value="Submit" />
            </form>
        )
    }

    const handleLogOut = () => {
        fetch('/auth/logout').then((res) => {
            setLoginState(false);
         })
        };
        
    const renderLoggedIn = () => {
        return <div>
            <p>You are logged in {userProfile.profile.name}</p>

            <button type="submit" onClick={() => handleLogOut()}>Logout</button>
        </div>
    }

    return (
        <div>
            {!loginState && renderForm()}
            {loginState && renderLoggedIn()}
            <p>Auth comp works</p>
        </div>
    )
}


export default Login;