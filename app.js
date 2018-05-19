const github = new GitHub;
const ui = new UI;

var searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
    var userText = e.target.value;
    if(userText !== ''){
            github.getUser(userText)
                .then(data => {
                if(data.profile.message === 'Not Found'){
                    ui.showAlert('User Not Found', 'alert alert-danger');
                }else{
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
                })
    }
    else{ 
        ui.clearProfile();
    }
});