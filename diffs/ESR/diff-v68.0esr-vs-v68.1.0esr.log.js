/******************************************************************************************
 * diffs between FF prefs v68.0esr and v68.1.0esr
 *
 * prefs: 3493
 *        3485 matching prefs
 *           8 diffs ( 7 new, 0 gone, 1 different )
 ******************************************************************************************/
// new in v68.1.0esr:
pref("dom.xmldocument.async.enabled", true);
pref("dom.xmldocument.load.enabled", true);
pref("network.http.spdy.bug1556491", true);
pref("network.http.spdy.bug1562315", true);
pref("network.http.spdy.bug1563538", true);
pref("network.http.spdy.bug1563695", true);
pref("services.sync.prefs.sync.extensions.activeThemeID", true);

// removed, renamed or hidden in v68.1.0esr:

// changed in v68.1.0esr:
pref("browser.contentblocking.maxIntroCount", 0); // prev: 5

