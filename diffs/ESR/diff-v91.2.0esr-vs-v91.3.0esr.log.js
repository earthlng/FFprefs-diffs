/******************************************************************************************
 * diffs between FF prefs v91.2.0esr and v91.3.0esr
 *
 * prefs: 4326
 *        4321 matching prefs
 *           5 diffs ( 1 new, 0 gone, 4 different )
 ******************************************************************************************/
// new in v91.3.0esr:
pref("clipboard.copyPrivateDataToClipboardCloudOrHistory", false);

// removed, renamed or hidden in v91.3.0esr:

// changed in v91.3.0esr:
pref("content.sink.pending_event_mode", 1); // prev: 0
pref("gfx.e10s.font-list.shared", false); // prev: true
pref("network.http.altsvc.oe", false); // prev: true
pref("network.notify.IPv6", false); // prev: true
