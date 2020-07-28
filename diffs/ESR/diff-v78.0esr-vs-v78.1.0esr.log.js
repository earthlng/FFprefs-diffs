/******************************************************************************************
 * diffs between FF prefs v78.0esr and v78.1.0esr
 *
 * prefs: 4045
 *        4039 matching prefs
 *           6 diffs ( 3 new, 2 gone, 1 different )
 ******************************************************************************************/
// new in v78.1.0esr:
pref("dom.quotaManager.overrideXFullPathname", true);
pref("media.peerconnection.ice.obfuscate_host_addresses.blocklist", "");
pref("print.always_print_silent", false);

// removed, renamed or hidden in v78.1.0esr:
pref("browser.find.anonymous_content.enabled", true);
pref("media.peerconnection.ice.obfuscate_host_addresses.whitelist", "");

// changed in v78.1.0esr:
pref("security.allow_disjointed_external_uri_loads", true); // prev: false
