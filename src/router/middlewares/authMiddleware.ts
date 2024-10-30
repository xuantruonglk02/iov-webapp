import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

export default async (
  to: RouteLocationNormalized,
  _from: RouteLocationNormalized,
  next: NavigationGuardNext,
): Promise<void> => {
  const isPublic = to?.meta?.public || false;
  // const onlyWhenLoggedOut = to?.meta?.onlyWhenLoggedOut || false;

  // const loggedUser = authLocalStorage.getLoggedUser();
  // const loggedIn = !!loggedUser?.email;

  if (isPublic) {
    return next();
  }

  // if (!isPublic && !loggedIn) {
  //     return next({
  //         name: PageName.LOGIN_PAGE,
  //         query: { redirect: to.fullPath }, // Store the full path to redirect the user to after login
  //     });
  // }

  // if (loggedIn) {
  //     const requiredRole = to?.meta?.requiredRole as UserRole;
  //     if (loggedUser.role === requiredRole) return next();
  //     return next({ name: PageName.NOT_FOUND_PAGE });
  // }

  return next();
};
