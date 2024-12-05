//store
import axios from 'axios';
import { reactive } from 'vue';

export const store = reactive({

    showMenu: false,

    toggleMenu() {
        this.showMenu = !this.showMenu
    },

    // links
    // Links relativi alle ancore
    anchors: [
        {
            name: 'Certificates',
            link: '#certificates',  // Link per scrollare verso la sezione certificati
        },
        {
            name: 'Projects',
            link: '#projects',  // Link per scrollare verso la sezione progetti
        },
        {
            name: 'Get In Touch',
            link: '#contact',  // Link per scrollare verso la sezione contatti
        },
    ]

})
