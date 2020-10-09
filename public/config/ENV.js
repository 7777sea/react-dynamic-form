/**
 * 配置文件
 * @type {{apiDomain}}
 */
var ENV = (function () {
    var rootPath = "/";
    return {
        rootPath: rootPath,                                 // 根路由前缀
        login:{
            isStartLoginCheck: false,
            defaultRedirectUrl: rootPath + "formPanel",     // 登录成功后默认跳转页面
        }
    }
})();
