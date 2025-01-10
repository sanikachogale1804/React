import React, { useEffect, useState } from 'react'

function GithubCard() {
    let [githubData, setGithubData] = useState({});
    let [repositories, setrepositories] = useState([])
    useEffect(() => {

        fetch("https://api.github.com/users/sanikachogale1804")
            .then(data => data.json())  //json again return promise ka object
            .then(data => {
                console.log(data);
                setGithubData(data);
                //Repositories
                fetch(data.repos_url)
                    .then(repos => repos.json())
                    .then(repos => {
                        //console.log("Repos "+repos)
                        setrepositories(repos)//whatever repos i fetched that saved setrepositories 

                    })
            })

    }, [])
    return (
        <div>
            {/* Profile Start */}
            <h1>GitHub Profile</h1>
            <div className="card github-card" >
                <img src={githubData.avatar_url} className="card-img-top" alt="..." />
                <div className="card-body">

                    <p className="card-text">Name: {githubData.name}</p>
                    <p className="card-text">Login: {githubData.login}</p>
                    <a href={githubData.html_url}>Click to visit gitHub profile</a>
                </div>
            </div>
            {/* Profile:end */}

            {/* Repositories:start */}

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Repository Name</th>
                        <th scope="col">Repository Link</th>
                    </tr>
                </thead>
                <tbody>
                {/* we are gonna write js code */}
                    { repositories.map((repoobj)=>{
                        return (
                            <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>  
                        </tr>
                        )
                    })};

                   
                    
                </tbody>
            </table>

            {/* Repositories:end */}
        </div>
    )
}

export default GithubCard
