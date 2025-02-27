import MainLayout from 'src/view/layouts/MainLayout.vue'
import CardsPage from 'src/view/pages/components/CardsPage.vue'
import DrawerPage from 'src/view/pages/components/DrawerPage.vue'
import TablePage from 'src/view/pages/components/TablePage.vue'
import DashboardPage from 'src/view/pages/installation-dashboard/DashboardPage.vue'
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
                name: 'DashboardPage',
                component: DashboardPage,
                meta: {
                    public: true,
                },
            },
        ],
    },
    {
        path: '/components',
        component: MainLayout,
        children: [
            {
                path: 'card',
                name: 'CardsPage',
                component: CardsPage,
                meta: {},
            },
            {
                path: 'table',
                name: 'TablePage',
                component: TablePage,
                meta: {},
            },
            {
                path: 'drawer',
                name: 'DrawerPage',
                component: DrawerPage,
                meta: {},
            },
        ],
    },
]
