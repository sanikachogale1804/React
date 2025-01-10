import React, { useEffect, useState } from 'react'

function GithubCard() {
    let [githubData,setGithubData]= useState({});
    useEffect(()=>{

        fetch("https://api.github.com/users/sanikachogale1804")
        .then(data=>data.json())  //json again return promise ka object
        .then(data=>
            {
                console.log(data);
                setGithubData(data);
                //console.log(githubData)
             })

    },[])
    return (
        <div>
            <h1>GitHub Profile</h1>
            <div className="card github-card" >
                <img src={githubData.avatar_url} className="card-img-top" alt="..." />
                <div className="card-body">
                   
                    <p className="card-text">Name: {githubData.name}</p>
                    <p className="card-text">Login: {githubData.login}</p>
                    <a href={githubData.html_url}>Click to visit profile</a>
                </div>
            </div>
        </div>
    )
}

export default GithubCard
