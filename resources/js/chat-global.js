export default (user) => ({
    user: user,
    message: "",
    messages: [],
    chat_user_typing: false,
    channel: null,
    typingTimer: null,
    typingChannel: null,
    init() {
        this.channel = Echo.private(`chat.globalroom`)
            .listenForWhisper('message', (e) => {
                this.messages.push(e)
                this.$nextTick(() => this.scrollToBottom());
            })

        this.$nextTick(() => this.scrollToBottom());
    },

    sendMessage() {

        let message = {
            message: this.message,
            username: this.user.name,
            userid: this.user.id,

        }
        this.messages.push(message)
        console.log(JSON.parse(JSON.stringify(this.messages)))

        this.message = ""
        this.channel
            .whisper('message', message)
    },

    scrollToBottom() {
        const container = this.$refs.messageContainer;
        container.scrollTop = container.scrollHeight;
    },

})
