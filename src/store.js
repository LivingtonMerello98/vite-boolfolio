//store
import axios from 'axios';
import { reactive } from 'vue';

export const store = reactive({

    showMenu: false,

    toggleMenu() {
        this.showMenu = !this.showMenu
    },

    // links
    anchors: [
        {
            name: 'Certificates',
            link: '/'
        },
        {
            name: 'Projects',
            link: '/'
        },
        {
            name: 'Get In Touch',
            link: '/'
        },
    ]

})
