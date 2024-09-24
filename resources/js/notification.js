export default (user_id = null) => ({
    user_id: user_id,
    open: false,
    notifications: [],
    init() {
        Echo.private('App.Models.User.' + user_id)
            .notification((notification) => {
                if (!route().current('chat.user', { user: notification.user.id }))
                    this.notifications.push(notification)
            });
    },
})
