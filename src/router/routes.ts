import MainLayout from 'src/view/layouts/MainLayout.vue'
import InstallationDashboardPage from 'src/view/pages/installation-dashboard/InstallationDashboardPage.vue'
import LoginPage from 'src/view/pages/login/LoginPage.vue'
import { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        children: [
            {
                path: '/login',
                name: 'LoginPage',
                component: LoginPage,
                meta: {
                    public: true,
                },
            },
        ],
    },
    {
        path: '/',
        component: MainLayout,
        children: [
            {
                path: 'dashboard',
                name: 'InstallationDashboardPage',
                component: InstallationDashboardPage,
                meta: {
                    public: true,
                },
            },
        ],
    },
]
