import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import Resume from './views/Resume.vue'
import Project from './views/Project.vue'
import Contact from './views/Contact.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/resume', name: 'Resume', component: Resume },
        { path: '/project', name: 'Project', component: Project },
        { path: '/contact', name: 'Contact', component: Contact },
    ]
})

export default router;