class UI {
  constructor() {
    this.profileUI = document.getElementById('profile')
  }
  addProfile(user) {
    console.log(user.html_url)
    const newProfile = `
    <div class="card card-body mb-3">
          <div class="row">
            <div class="col-mid-3">
                <img class="img-fluid mb-2" src="${user.avatar_url}">
                <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-3">View Profile</a>
            </div>
            <div class="col-mid-9">
                <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                <span class="badge badge-success">Followers: ${user.followers}</span>
                <span class="badge badge-info">Following: ${user.following}</span>
                <br><br>
                <ul class="list-group">
                    <li class="list-group-item">Company: ${user.company}</li>
                    <li class="list-group-item">Website/Blog: ${user.blog}</li>
                    <li class="list-group-item">Location: ${user.location}</li>
                    <li class="list-group-item">Member Since: ${user.created_at}</li>
                </ul>
            </div>
          </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
    `
    this.profileUI.innerHTML = newProfile
  }

  addRepos(repos) {
    const reposUI = document.getElementById('repos')
    let display = ''

    repos.forEach(repo => {
      display += `
          <div class="card card-body mb-2">
            <div class="row">
              <div class="col-md-6">
                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
              </div>
                <div class="col-md-6">
                  <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                  <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                  <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                </div>
            </div>
          </div>
          `
    })
    reposUI.innerHTML = display
  }

  clearProfile() {
    this.profileUI.innerHTML = ''
  }

  setAlert(alertMessage, className) {
    this.removeAlert()
    const div = document.createElement('div')
    div.className = className
    div.appendChild(document.createTextNode(alertMessage))

    const container = document.querySelector('.searchContainer')
    const profile = document.getElementById('profile')

    container.insertBefore(div, profile)
  }

  removeAlert() {
    const currentAlert = document.querySelector('.alert')
    if (currentAlert) {
      currentAlert.remove()
    }
  }
}
