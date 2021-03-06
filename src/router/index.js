import Vue from 'vue'
import VueGoogleApi from 'vue-google-api'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NewProject from '../views/NewProject.vue'
import CommunityProjects from '../views/CommunityProjects.vue'
import Landing from '../views/Landing.vue'
import DisplayProject from '../views/DisplayProject.vue'
import InsertEdit from '../views/InsertEdit.vue'
import CompareEdits from '../views/CompareEdits.vue'
import Lounge from '../views/Lounge.vue'

const config = {
    apiKey: 'AIzaSyA9iK8oArKlDXyLB2KokNLya-U57Y9yZo8',
    clientId: '943909818876-vm778oed4r48lq1q3h7fuq56klg96nmg.apps.googleusercontent.com',
    scope: 'profile email'
}

Vue.use(VueGoogleApi, config)
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Landing',
        component: Landing
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/new',
        name: 'NewProject',
        component: NewProject
    },
    {
        path: '/community',
        name: 'CommunityProjects',
        component: CommunityProjects
    },
    {
        path: '/project/:projectName/:projectID',
        name: 'DisplayProject',
        component: DisplayProject
    },
    {
        path: '/project/:projectName/:projectID/edit',
        name: 'InsertEdit',
        component: InsertEdit
    },
    {
        path: '/project/:projectName/:projectID/clone',
        redirect: () => {
            return { name: 'InsertEdit', query: { clone: 1 } }
        },
    },
    {
        path: '/project/:projectName/:projectID/merge',
        name: 'CompareEdits',
        component: CompareEdits
    },
    {
        path: '/lounge',
        name: 'Lounge',
        component: Lounge
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
