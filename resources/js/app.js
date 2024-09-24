import './bootstrap';

import Alpine from 'alpinejs';
import Chat from './chat.js';
import ChatGlobal from './chat-global.js';
import PresenceList from './presence-list.js';
import Notification from './notification.js';

Alpine.data('chat', Chat)
Alpine.data('chat_global', ChatGlobal)
Alpine.data('presence_list', PresenceList)
Alpine.data('notification', Notification)

window.Alpine = Alpine;

Alpine.start();
