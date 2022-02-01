/******************************************************************************************
 * diffs between FF prefs v91.3.0esr and v91.4.0esr
 *
 * prefs: 4328
 *        4324 matching prefs
 *           4 diffs ( 2 new, 1 gone, 1 different )
 ******************************************************************************************/
// new in v91.4.0esr:
pref("media.decoder.skip_when_video_too_slow_ms", 2500);
pref("pdfjs.annotationMode", 2);

// removed, renamed or hidden in v91.4.0esr:
pref("pdfjs.renderInteractiveForms", true);

// changed in v91.4.0esr:
pref("pdfjs.enableXfa", true); // prev: false
