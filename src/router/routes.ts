import MainLayout from 'src/view/layouts/MainLayout.vue';
import LoginPage from 'src/view/pages/auth/LoginPage.vue';
import ExamSessionsListPage from 'src/view/pages/exam-session/ExamSessionsListPage.vue';
import DoingExamPage from 'src/view/pages/exam/DoingExamPage.vue';
import { RouteRecordRaw } from 'vue-router';

export enum PageName {
  LOGIN_PAGE = 'LoginPage',

  DASHBOARD_PAGE = 'DASHBOARD_PAGE',

  EXAMS_LIST_PAGE = 'ExamsListPage',
  EXAM_DETAIL_PAGE = 'ExamDetailPage',
  DOING_EXAM_PAGE = 'DoingExamPage',

  EXAM_SESSIONS_LIST_PAGE = 'ExamSessionsListPage',
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
    children: [{
      path: '/dashboard',
      name: PageName.DASHBOARD_PAGE,
      component: DoingExamPage,
      meta: {
        public: true,
      },
    },
      {
        path: '/exams/id',
        name: PageName.EXAM_DETAIL_PAGE,
        component: DoingExamPage,
        meta: {
          public: true,
        },
      },
      {
        path: '/exams/id/test',
        name: PageName.DOING_EXAM_PAGE,
        component: DoingExamPage,
        meta: {
          public: true,
        },
      },
      {
        path: '/exam-sessions',
        name: PageName.EXAM_SESSIONS_LIST_PAGE,
        component: ExamSessionsListPage,
        meta: {
          public: true,
        },
      },
    ],
  },
];
