class Github {
  constructor() {
    this.client_id = 'b181026d09616cc5d78c'
    this.client_secret = '48fc3aac515367480cb98af21fa81f3fc9b22e72'
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    )
    const profile = await profileResponse.json()

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}&per_page=10`
    )

    const repos = await repoResponse.json()

    return {
      profile,
      repos
    }
  }
}
