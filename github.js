class GitHub{
    constructor(){
         this.client_id = 'e23497cc31530bad1e75';
         this.client_secret = '93421e52b5dae002e4627585b8407ba19fbf0c00';
         this.repos_count = 5;
         this.repos_sort = 'created : asc';
    }
    async getUser(user){
        var profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        var repoResponse = await fetch
        (`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return{
            profile ,
            repos
        }

    }
}