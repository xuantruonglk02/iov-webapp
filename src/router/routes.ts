import MainLayout from 'src/view/layouts/MainLayout.vue';
import CardsPage from 'src/view/pages/components/CardsPage.vue';
import DrawerPage from 'src/view/pages/components/DrawerPage.vue';
import TablePage from 'src/view/pages/components/TablePage.vue';
import DashboardPage from 'src/view/pages/home/DashboardPage.vue';
import LoginPage from 'src/view/pages/login/LoginPage.vue';
import { RouteRecordRaw } from 'vue-router';

export enum PageName {
    LOGIN_PAGE = 'LOGIN_PAGE',

    DASHBOARD_PAGE = 'DASHBOARD_PAGE',

    CARDS_PAGE = 'CARDS_PAGE',
    TABLE_PAGE = 'TABLE_PAGE',
    DRAWER_PAGE = 'DRAWER_PAGE',
}

export const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        children: [
            {
                path: '/login',
                name: PageName.LOGIN_PAGE,
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
                name: PageName.DASHBOARD_PAGE,
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
                name: PageName.CARDS_PAGE,
                component: CardsPage,
                meta: {
                    public: true,
                },
            },
            {
                path: 'table',
                name: PageName.TABLE_PAGE,
                component: TablePage,
                meta: {
                    public: true,
                },
            },
            {
                path: 'drawer',
                name: PageName.DRAWER_PAGE,
                component: DrawerPage,
                meta: {
                    public: true,
                },
            },
        ],
    },
];
