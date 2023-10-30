const projects = document.getElementById('projects');

let repos = [];

async function get_repos() {
    await fetch('https://api.github.com/users/m-bocelli/repos')
        .then((res) => res.json())
        .then((data) => (repos = data))
        .catch((err) => console.error(`Failed to fetch repos: ${err}`));
}

get_repos().then(
    () =>
        (projects.innerHTML = repos
            .map((repo) =>
                !repo.topics.includes('school')
                    ? `
                        <a href="${repo.html_url}" target="_blank" class="project-link">
                            <div class="project-card">
                                <h3 class="project-title">
                                    ${repo.name}
                                </h3>
                                <div>${repo.description}</div>
                            </div>
                        </a>
                    `
                    : null
            )
            .join(''))
);
