import MainLayout from 'src/view/layouts/MainLayout.vue';
import LoginPage from 'src/view/pages/auth/LoginPage.vue';
import { RouteRecordRaw } from 'vue-router';
import DashboardPage from 'src/view/pages/home/DashboardPage.vue';
import CardsPage from 'src/view/pages/components/CardsPage.vue';
import TablePage from 'src/view/pages/components/TablePage.vue';

export enum PageName {
  LOGIN_PAGE = 'LoginPage',

  DASHBOARD_PAGE = 'DASHBOARD_PAGE',

  CARDS_PAGE = 'CARDS_PAGE',
  TABLE_PAGE = 'TABLE_PAGE',
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
    ],
  },
];
