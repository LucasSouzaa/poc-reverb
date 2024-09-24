export default (user_id = null) => ({
    open: false,
    users: [],
    user_id: user_id,
    init() {
        Echo.join(`chat.globalroom`)
            .here((users) => {
                this.users = users;
            })
            .joining((user) => {
                this.users.push(user)
            })
            .leaving((user) => {
                this.users = this.users.filter((userInPresenceList) => { userInPresenceList.id != user.id})
            })
            .error((error) => {
                console.error(error);
            });
    },


    toggle() {
        this.open = ! this.open
    }
})
