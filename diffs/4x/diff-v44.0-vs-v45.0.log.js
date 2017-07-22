/******************************************************************************************
 * diffs between FF prefs v44.0 and v45.0
 *
 * prefs: 2688
 *        2589 matching prefs
 *          99 diffs ( 37 new, 52 gone, 10 different )
 ******************************************************************************************/
// new in v45.0:
pref("accessibility.loadedInLastSession", false);
pref("apz.touch_move_tolerance", "0.03");
pref("apz.x_skate_highmem_adjust", "0.0");
pref("apz.y_skate_highmem_adjust", "0.0");
pref("browser.cache.max_shutdown_io_lag", 2);
pref("browser.esedbreader.loglevel", "Error");
pref("browser.safebrowsing.allowOverride", true);
pref("browser.safebrowsing.forbiddenURIs.enabled", false);
pref("browser.sessionstore.debug.no_auto_updates", false);
pref("devtools.markup.collapseAttributeLength", 120);
pref("dom.ipc.plugins.asyncdrawing.enabled", false);
pref("dom.push.loglevel", "off");
pref("extensions.interposition.enabled", true);
pref("extensions.interposition.prefetching", true);
pref("extensions.webExtensionsMinPlatformVersion", "42.0a1");
pref("identity.mobilepromo.android", "https://www.mozilla.org/firefox/android/?utm_source=firefox-browser&utm_medium=firefox-browser&utm_campaign=");
pref("identity.mobilepromo.ios", "https://www.mozilla.org/firefox/ios/?utm_source=firefox-browser&utm_medium=firefox-browser&utm_campaign=");
pref("layout.accessiblecaret.extendedvisibility", false);
pref("layout.accessiblecaret.hapticfeedback", false);
pref("layout.css.float-logical-values.enabled", false);
pref("layout.css.grid-template-subgrid-value.enabled", false);
pref("layout.css.text-emphasis.enabled", false);
pref("media.getusermedia.aec_delay_agnostic", true);
pref("media.getusermedia.aec_extended_filter", true);
pref("mousewheel.system_settings_cache.enabled", true);
pref("mousewheel.system_settings_cache.force_enabled", false);
pref("network.dns.blockDotOnion", true);
pref("network.dns.localDomains", "");
pref("security.pki.cert_short_lifetime_in_days", 10);
pref("security.ssl.enable_ocsp_must_staple", true);
pref("services.sync.prefs.sync.network.cookie.lifetime.days", true);
pref("services.sync.prefs.sync.network.cookie.thirdparty.sessionOnly", true);
pref("services.sync.syncedTabsUIRefresh", false);
pref("urlclassifier.forbiddenTable", "test-forbid-simple");
pref("webgl.disable-DOM-blit-uploads", false);
pref("webgl.dxgl.enabled", false);
pref("webgl.webgl2-compat-mode", false);

// removed, renamed or hidden in v45.0:
pref("apz.asyncscroll.throttle", 100);
pref("apz.asyncscroll.timeout", 300);
pref("apz.cross_slide.enabled", false);
pref("apz.fling_snap_friction", "0.015");
pref("browser.sessionstore.privacy_level_deferred", 1);
pref("caret.manages-android-actionbar", false);
pref("devtools.appmanager.enabled", true);
pref("devtools.appmanager.lastTab", "help");
pref("devtools.appmanager.manifestEditor.enabled", true);
pref("dom.push.debug", false);
pref("image.onload.decode.limit", 0);
pref("layers.offmainthreadcomposition.force-basic", false);
pref("layout.css.ruby.enabled", true);
pref("loop.browserSharing.showInfoBar", true);
pref("loop.contextInConversations.enabled", true);
pref("loop.CSP", "default-src 'self' about: file: chrome:; img-src * data:; font-src 'none'; connect-src wss://*.tokbox.com https://*.opentok.com https://*.tokbox.com wss://*.mozilla.com https://*.mozilla.org wss://*.mozaws.net; media-src blob:");
pref("loop.debug.dispatcher", false);
pref("loop.debug.loglevel", "Error");
pref("loop.debug.sdk", false);
pref("loop.debug.twoWayMediaTelemetry", false);
pref("loop.do_not_disturb", false);
pref("loop.enabled", true);
pref("loop.feedback.baseUrl", "https://input.mozilla.org/api/v1/feedback");
pref("loop.feedback.dateLastSeenSec", 0);
pref("loop.feedback.formURL", "https://www.mozilla.org/firefox/hello/npssurvey/");
pref("loop.feedback.manualFormURL", "https://www.mozilla.org/firefox/hello/feedbacksurvey/");
pref("loop.feedback.periodSec", 15770000);
pref("loop.feedback.product", "Loop");
pref("loop.fxa_oauth.profile", "");
pref("loop.fxa_oauth.tokendata", "");
pref("loop.gettingStarted.resumeOnFirstJoin", false);
pref("loop.gettingStarted.seen", false);
pref("loop.gettingStarted.url", "https://www.mozilla.org/%LOCALE%/firefox/%VERSION%/hello/start/");
pref("loop.learnMoreUrl", "https://www.firefox.com/hello/");
pref("loop.legal.privacy_url", "https://www.mozilla.org/privacy/firefox-hello/");
pref("loop.legal.ToS_url", "https://www.mozilla.org/about/legal/terms/firefox-hello/");
pref("loop.linkClicker.url", "https://hello.firefox.com/");
pref("loop.oauth.google.redirect_uri", "urn:ietf:wg:oauth:2.0:oob:auto");
pref("loop.oauth.google.scope", "https://www.google.com/m8/feeds");
pref("loop.ping.interval", 1800000);
pref("loop.ping.timeout", 10000);
pref("loop.retry_delay.limit", 300000);
pref("loop.retry_delay.start", 60000);
pref("loop.ringtone", "chrome://browser/content/loop/shared/sounds/ringtone.ogg");
pref("loop.server", "https://loop.services.mozilla.com/v0");
pref("loop.support_url", "https://support.mozilla.org/kb/group-conversations-firefox-hello-webrtc");
pref("loop.textChat.enabled", true);
pref("plugin.allow.asyncdrawing", false);
pref("selectioncaret.detects.longtap", true);
pref("selectioncaret.observes.compositions", false);
pref("selectioncaret.visibility.affectscaret", false);
pref("touchcaret.extendedvisibility", false);

// changed in v45.0:
pref("apz.overscroll.spring_stiffness", "0.0018"); // prev: "0.001"
pref("apz.overscroll.stretch_factor", "0.35"); // prev: "0.5"
pref("apz.touch_start_tolerance", "0.1"); // prev: "0.2222222"
pref("dom.compartment_per_addon", true); // prev: false
pref("identity.fxaccounts.remote.force_auth.uri", "https://accounts.firefox.com/force_auth?service=sync&context=fx_desktop_v2"); // prev: "https://accounts.firefox.com/force_auth?service=sync&context=fx_desktop_v1"
pref("identity.fxaccounts.remote.signin.uri", "https://accounts.firefox.com/signin?service=sync&context=fx_desktop_v2"); // prev: "https://accounts.firefox.com/signin?service=sync&context=fx_desktop_v1"
pref("identity.fxaccounts.remote.signup.uri", "https://accounts.firefox.com/signup?service=sync&context=fx_desktop_v2"); // prev: "https://accounts.firefox.com/signup?service=sync&context=fx_desktop_v1"
pref("network.jar.block-remote-files", true); // prev: false
pref("network.offline-mirrors-connectivity", false); // prev: true
pref("urlclassifier.disallow_completions", "test-malware-simple,test-phish-simple,test-unwanted-simple,test-track-simple,test-trackwhite-simple,test-forbid-simple,goog-downloadwhite-digest256,mozstd-track-digest256,mozstd-trackwhite-digest256,mozfull-track-digest256"); // prev: "test-malware-simple,test-phish-simple,test-unwanted-simple,test-track-simple,test-trackwhite-simple,goog-downloadwhite-digest256,mozstd-track-digest256,mozstd-trackwhite-digest256,mozfull-track-digest256"

