export default defineNuxtRouteMiddleware((to, from) => {
    const isHasAuth = false; // 是否有页面权限，是否已登录
    if (isHasAuth) {
        return isHasAuth;
    } else {
        return navigateTo("/middlewareDemo2");
    }
});
