const apiURL = 'https://api.github.com/users/';
const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

// Get user API
async function getUser(username) {

    try {
    const {data} = await axios(apiURL + username);

    createUserData(data);
    getRepos(username)
    } catch (error) {
        if(error.response.status === 404){
            createErrorCard('No profile with this username');
        }
    }

};

// Get repos API
async function getRepos(username) {

    try {
    const {data} = await axios(apiURL + username + '/repos?sort=created');

    addRepostoCard(data);
    } catch (error) {
        if(error.response.status === 404){
            createErrorCard('Problem fetching repos');
        }
    }

};

const createUserData = (user) => {
    const cardHTML = `
    <div class="card">
        <div>
        <img class="avatar" src="${user.avatar_url}" alt="${user.name}">
        </div>
        <div class="user-info">
            <h2>${user.name}</h2>
            <p>${user.bio}</p>

            <ul>
                <li>${user.followers} <strong> falowers</strong></li>
                <li>${user.following} <strong>falowing</strong></li>
                <li>${user.public_repos} <strong>Repos</strong></li>
            </ul>
            
            <div id="repos"></div>
        </div>
    </div>
    `;
    main.innerHTML = cardHTML;
}

const addRepostoCard = (repos) => {
    const reposEl = document.getElementById('repos');
    repos.slice(0, 10).forEach(repo => {
        const repoEl = document.createElement('a');
        repoEl.classList.add('repo');
        repoEl.href = repo.html_url;
        repoEl.target = '_blank';
        repoEl.innerText = repo.name;

        reposEl.appendChild(repoEl);
    })
};

const createErrorCard = (message) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <h1>${message}</h1>
    `;
    main.appendChild(card);
}

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const user = search.value;

    if(user){
        getUser(user);
        search.value = '';
    }
})



