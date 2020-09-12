document.getElementById('searchUser').addEventListener('keyup', searchUser)

const github = new Github()
const ui = new UI()

function searchUser(e) {
  if (e.target.value !== '') {
    github.getUser(e.target.value).then(userData => {
      if (userData.profile.message === 'Not Found') {
        ui.clearProfile()
        ui.setAlert('Profile Not Found', 'alert alert-danger')
        setTimeout(() => {
          ui.removeAlert()
        }, 2000)
      } else {
        ui.removeAlert()
        ui.addProfile(userData.profile)
        ui.addRepos(userData.repos)
      }
    })
  } else {
    ui.clearProfile()
  }
}
