/******************************************************************************************
 * diffs between FF prefs v100.0 and v101.0
 *
 * prefs: 4529
 *        4464 matching prefs
 *          65 diffs ( 37 new, 13 gone, 15 different )
 ******************************************************************************************/
// new in v101.0:
pref("browser.download.always_ask_before_handling_new_types", false);
pref("browser.newtabpage.activity-stream.hideTopSitesWithSearchParam", "mfadid=adm");
pref("browser.places.snapshots.expiration.days", 210);
pref("browser.places.snapshots.expiration.userManaged.days", 420);
pref("browser.snapshots.source.CommonReferrer", 3);
pref("browser.snapshots.source.Overlapping", 3);
pref("browser.theme.colorway-closet", false);
pref("browser.urlbar.quicksuggest.blockingEnabled", false);
pref("browser.urlbar.quicksuggest.impressionCaps.nonSponsoredEnabled", false);
pref("browser.urlbar.quicksuggest.impressionCaps.sponsoredEnabled", false);
pref("devtools.inspector.draggable_properties", true);
pref("dom.block_external_protocol_navigation_from_sandbox", false);
pref("dom.enable_web_task_scheduling", false);
pref("dom.input.showPicker", true);
pref("dom.origin-trials.test-trial.state", 0);
pref("extensions.eventPages.enabled", false);
pref("extensions.manifestV3.enabled", false);
pref("fission.enforceBlocklistedPrefsInSubprocesses", false);
pref("fission.omitBlocklistedPrefsInSubprocesses", false);
pref("gfx.canvas.accelerated.profile-cache-miss-ratio", "0.66");
pref("gfx.canvas.accelerated.profile-fallback-ratio", "0.3");
pref("gfx.canvas.accelerated.profile-frames", 10);
pref("layout.accessiblecaret.magnifier.enabled", false);
pref("media.gmp-manager.checkContentSignature", true);
pref("media.utility-ffvpx.enabled", true);
pref("media.utility-opus.enabled", true);
pref("media.utility-process.enabled", false);
pref("media.utility-vorbis.enabled", true);
pref("media.utility-wav.enabled", true);
pref("media.utility-wmf.enabled", true);
pref("media.video.dropped_frame_stats.enabled", true);
pref("media.videocontrols.picture-in-picture.display-text-tracks.size", "medium");
pref("media.wmf.no-copy-nv12-textures-force-enabled", false);
pref("mozilla.widget.raise-on-setfocus", true);
pref("print.prefer_system_dialog", false);
pref("widget.swipe.whole-page-pixel-size", "1100.0");
pref("widget.transparent-windows", true);

// removed, renamed or hidden in v101.0:
pref("browser.flash-protected-mode-flip.done", false);
pref("browser.flash-protected-mode-flip.enable", false);
pref("browser.snapshots.score.InNavigation", 3);
pref("browser.snapshots.score.IsOverlappingVisit", 3);
pref("canvas.mozgetasfile.enabled", false);
pref("devtools.debugger.features.skip-pausing", true);
pref("dom.forms.datetime-local", true);
pref("dom.forms.datetime-local.widget", true);
pref("dom.input.dirpicker", false);
pref("dom.ipc.plugins.flash.disable-protected-mode", false);
pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", true);
pref("remote.force-local", true);
pref("security.pki.name_matching_mode", 3);

// changed in v101.0:
pref("browser.startup.upgradeDialog.enabled", false); // prev: true
pref("dom.window.content.untrusted.enabled", false); // prev: true
pref("javascript.options.wasm_simd_avx", true); // prev: false
pref("layout.css.constructable-stylesheets.enabled", true); // prev: false
pref("layout.css.prefers-contrast.enabled", true); // prev: false
pref("media.videocontrols.picture-in-picture.audio-toggle.enabled", true); // prev: false
pref("media.videocontrols.picture-in-picture.display-text-tracks.enabled", true); // prev: false
pref("media.webrtc.platformencoder", false); // prev: true
pref("media.wmf.no-copy-nv12-textures", true); // prev: false
pref("network.http.http2.websockets", false); // prev: true
pref("privacy.restrict3rdpartystorage.expiration_redirect", 2592000); // prev: 900
pref("remote.active-protocols", 3); // prev: 2
pref("security.sandbox.content.win32k-disable", true); // prev: false
pref("widget.swipe.success-threshold", "0.25"); // prev: "0.5"
pref("widget.windows.hide_cursor_when_typing", true); // prev: false
