import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import Resume from './views/Resume.vue'
import Project from './views/Project.vue'
import Contact from './views/Contact.vue'
import Gracias from './views/Gracias.vue'
import PageNotFound from './views/404.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/resume', name: 'Resume', component: Resume },
        { path: '/project', name: 'Project', component: Project },
        { path: '/contact', name: 'Contact', component: Contact },
        { path: '/gracias', name: 'Gracias', component: Gracias },
        { path: '/:pathMatch(.*)*', component: PageNotFound },
    ]
})

export default router;