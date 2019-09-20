define([
  "ojs/ojcore",
  "knockout",
  "ojs/ojrouter",
  "ojs/ojknockout",
  "ojs/ojarraytabledatasource",
  "ojs/ojoffcanvas"
], function(e, a) {
  function o() {
    var o = this,
      r = e.ResponsiveUtils.getFrameworkQuery(
        e.ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY
      );
    o.smScreen = e.ResponsiveKnockoutUtils.createMediaQueryObservable(r);
    var s = e.ResponsiveUtils.getFrameworkQuery(
      e.ResponsiveUtils.FRAMEWORK_QUERY_KEY.MD_UP
    );
    (o.mdScreen = e.ResponsiveKnockoutUtils.createMediaQueryObservable(s)),
      (o.isLoggedIn = a.observable(!1)),
      (o.globalFullname = a.observable()),
      (o.globalUserid = a.observable()),
      (o.globalUsername = a.observable()),
      (o.globalPhone = a.observable()),
      (o.globalStack = a.observable()),
      (o.globalLocation = a.observable()),
      (o.globalEmail = a.observable()),
      (o.progressMessage = a.observable()),
      (o.router = e.Router.rootInstance),
      o.router.configure({
        signupPage: { label: "Signup", isDefault: !0 },
        loginPage: { label: "Login" },
        dashboard: { label: "Dashboard" }
      }),
      (e.Router.defaults.urlAdapter = new e.Router.urlParamAdapter());
    var n = [
      {
        name: "Dashboard",
        id: "dashboard",
        iconClass:
          "oj-navigationlist-item-icon demo-icon-font-24 demo-chart-icon-24"
      }
    ];
    (o.navDataSource = new e.ArrayTableDataSource(n, { idAttribute: "id" })),
      o.mdScreen.subscribe(function() {
        e.OffcanvasUtils.close(o.drawerParams);
      }),
      (o.drawerParams = {
        displayMode: "push",
        selector: "#navDrawer",
        content: "#pageContent"
      }),
      (o.toggleDrawer = function() {
        return e.OffcanvasUtils.toggle(o.drawerParams);
      }),
      $("#navDrawer").on("ojclose", function() {
        $("#drawerToggleButton").focus();
      }),
      (o.appName = a.observable("OJET TEAM 7")),
      (o.userLogin = a.observable());
  }
  return new o();
});
