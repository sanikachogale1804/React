import React, { useEffect } from 'react'

function GithubCard() {
    useEffect(()=>{

        fetch("https://api.github.com/users/sanikachogale1804")
        .

    },[])
    return (
        <div>
            <h1>GitHub Profile</h1>
            <div className="card github-card" >
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text"></p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default GithubCard
