/******************************************************************************************
 * diffs between FF prefs v68.0 and v68.0esr
 *
 * prefs: 3486
 *        3481 matching prefs
 *           5 diffs ( 0 new, 0 gone, 5 different )
 ******************************************************************************************/
// new in v68.0esr:

// removed, renamed or hidden in v68.0esr:

// changed in v68.0esr:
pref("app.update.channel", "esr"); // prev: "release"
pref("dom.push.enabled", false); // prev: true
pref("dom.serviceWorkers.enabled", false); // prev: true
pref("security.certerrors.mitm.auto_enable_enterprise_roots", false); // prev: true
pref("security.enterprise_roots.enabled", true); // prev: false

