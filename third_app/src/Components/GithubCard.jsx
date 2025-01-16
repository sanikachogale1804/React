import React, { useEffect, useState } from 'react'

function GithubCard() {
    let [githubData, setGithubData] = useState({});
    let [repositories, setrepositories] = useState([])
    let [searchQuery,setSearchQuery] = useState("")

    const handleChange=(event)=>{
        setSearchQuery(event.target.value);
    }
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

             {/* Search  */}
            <input type="text" onChange={handleChange}/>

            

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
                
                    { repositories.filter((repoobj)=>{
                        // icludes returns true and false and filter also returns true and false
                        // pehle filter hoga and then mapping hoga
                        // includes check karega letter present hai ki nahi
                        return repoobj.name.toLowerCase()
                        .includes(searchQuery.toLowerCase());
                    })
                    .map((repoobj)=>{
                        return (
                            <tr>
                            <th scope="row">{repoobj.name}</th>
                            <td><a href={repoobj.html_url}>Visit Repo</a></td>  
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
