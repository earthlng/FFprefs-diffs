/******************************************************************************************
 * diffs between FF prefs v52.5.0esr and v52.6.0esr
 *
 * prefs: 2800
 *        2795 matching prefs
 *           5 diffs ( 1 new, 1 gone, 3 different )
 ******************************************************************************************/
// new in v52.6.0esr:
pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);

// removed, renamed or hidden in v52.6.0esr:
pref("browser.crashReports.unsubmittedCheck.autoSubmit", false);

// changed in v52.6.0esr:
pref("browser.search.defaultenginename.US", "data:text/plain,browser.search.defaultenginename.US=Google"); // prev: "data:text/plain,browser.search.defaultenginename.US=Yahoo"
pref("browser.search.order.US.1", "data:text/plain,browser.search.order.US.1=Google"); // prev: "data:text/plain,browser.search.order.US.1=Yahoo"
pref("browser.search.order.US.2", "data:text/plain,browser.search.order.US.2=Yahoo"); // prev: "data:text/plain,browser.search.order.US.2=Google"
