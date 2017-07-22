/******************************************************************************************
 * diffs between FF prefs v43.0 and v44.0
 *
 * prefs: 2669
 *        2588 matching prefs
 *          81 diffs ( 46 new, 18 gone, 17 different )
 ******************************************************************************************/
// new in v44.0:
pref("apz.drag.enabled", false);
pref("apz.fling_snap_friction", "0.015");
pref("browser.safebrowsing.appRepURL", "https://sb-ssl.google.com/safebrowsing/clientreport/download?key=%GOOGLE_API_KEY%");
pref("browser.safebrowsing.provider.mozilla.nextupdatetime", "1");
pref("browser.tabs.crashReporting.email", "");
pref("browser.tabs.crashReporting.emailMe", false);
pref("browser.tabs.crashReporting.includeURL", false);
pref("browser.tabs.crashReporting.sendReport", true);
pref("browser.tabs.dontfocusfordialogs", true);
pref("clipboard.plainTextOnly", false);
pref("devtools.command-button-measure.enabled", false);
pref("devtools.jsonview.enabled", false);
pref("devtools.memory.custom-breakdowns", "{}");
pref("devtools.migration.warnings", false);
pref("devtools.webide.autosaveFiles", true);
pref("dom.push.quotaUpdateDelay", 3000);
pref("dom.require_user_interaction_for_beforeunload", true);
pref("dom.serviceWorkers.idle_extended_timeout", 300000);
pref("dom.serviceWorkers.idle_timeout", 30000);
pref("dom.serviceWorkers.openWindow.enabled", true);
pref("dom.serviceWorkers.testUpdateOverOneDay", false);
pref("dom.webnotifications.serviceworker.enabled", true);
pref("extensions.systemAddon.update.url", "https://aus5.mozilla.org/update/3/SystemAddons/%VERSION%/%BUILD_ID%/%BUILD_TARGET%/%LOCALE%/%CHANNEL%/%OS_VERSION%/%DISTRIBUTION%/%DISTRIBUTION_VERSION%/update.xml");
pref("gfx.font_rendering.directwrite.force-enabled", false);
pref("gfx.offscreencanvas.enabled", false);
pref("javascript.options.throw_on_asmjs_validation_failure", false);
pref("layers.amd-switchable-gfx.enabled", true);
pref("layout.accessiblecaret.use_long_tap_injector", true);
pref("layout.css.prefixes.webkit", false);
pref("loop.feedback.manualFormURL", "https://www.mozilla.org/firefox/hello/feedbacksurvey/");
pref("media.gmp.decoder.aac", 2);
pref("media.gmp.decoder.enabled", false);
pref("media.gmp.decoder.h264", 2);
pref("media.mediasource.webm.audio.enabled", true);
pref("media.mp4.enabled", true);
pref("media.navigator.audio.fake_frequency", 1000);
pref("media.use-blank-decoder", false);
pref("media.wmf.enabled", true);
pref("network.http.accept-encoding.secure", "gzip, deflate, br");
pref("network.http.signed-packages.enabled", false);
pref("network.http.spdy.pull-allowance", 12582912);
pref("privacy.userContext.enabled", false);
pref("security.insecure_password.ui.enabled", false);
pref("toolkit.pageThumbs.minHeight", 190);
pref("toolkit.pageThumbs.minWidth", 280);
pref("toolkit.pageThumbs.screenSizeDivisor", 7);

// removed, renamed or hidden in v44.0:
pref("browser.push.warning.infoURL", "https://www.mozilla.org/%LOCALE%/firefox/push/");
pref("browser.safebrowsing.provider.google.appRepURL", "https://sb-ssl.google.com/safebrowsing/clientreport/download?key=%GOOGLE_API_KEY%");
pref("devtools.inspector.markupPreview", false);
pref("devtools.webide.sidebars", true);
pref("dom.disable_image_src_set", false);
pref("dom.mouseEvent.offsetXY.enabled", true);
pref("dom.workers.sharedWorkers.enabled", true);
pref("layout.css.unicode-range.enabled", false);
pref("layout.imagevisibility.enabled_for_browser_elements_only", false);
pref("loop.contacts.gravatars.promo", true);
pref("loop.contacts.gravatars.show", false);
pref("loop.debug.websocket", false);
pref("media.fragmented-mp4.enabled", true);
pref("media.fragmented-mp4.ffmpeg.enabled", true);
pref("media.fragmented-mp4.gmp.enabled", false);
pref("media.fragmented-mp4.use-blank-decoder", false);
pref("network.http.packaged-apps-developer-mode", false);
pref("security.tls.insecure_fallback_hosts.use_static_list", true);

// changed in v44.0:
pref("devtools.defaultColorUnit", "authored"); // prev: "hex"
pref("devtools.toolbox.toolbarSpec", '["splitconsole", "paintflashing toggle","tilt toggle","scratchpad","resize toggle","eyedropper","screenshot --fullpage", "rulers", "measure"]'); // prev: '["splitconsole", "paintflashing toggle","tilt toggle","scratchpad","resize toggle","eyedropper","screenshot --fullpage", "rulers"]'
pref("devtools.webconsole.filter.serviceworkers", true); // prev: false
pref("dom.presentation.discovery.enabled", false); // prev: true
pref("dom.push.enabled", true); // prev: false
pref("dom.serviceWorkers.enabled", true); // prev: false
pref("dom.serviceWorkers.interception.enabled", true); // prev: false
pref("dom.serviceWorkers.interception.opaque.enabled", true); // prev: false
pref("layout.accessiblecaret.height", "36.0"); // prev: "47.0"
pref("layout.accessiblecaret.margin-left", "-18.5"); // prev: "-23.5"
pref("layout.accessiblecaret.width", "34.0"); // prev: "44.0"
pref("network.http.pacing.requests.burst", 10); // prev: 32
pref("network.http.pacing.requests.hz", 80); // prev: 100
pref("security.pki.sha1_enforcement_level", 0); // prev: 2
pref("security.tls.unrestricted_rc4_fallback", false); // prev: true
pref("signon.rememberSignons.visibilityToggle", false); // prev: true
pref("ui.osk.require_win10", true); // prev: false

