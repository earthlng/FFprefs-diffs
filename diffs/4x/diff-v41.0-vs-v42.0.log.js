/******************************************************************************************
 * diffs between FF prefs v41.0 and v42.0
 *
 * prefs: 2635
 *        2518 matching prefs
 *         117 diffs ( 75 new, 26 gone, 16 different )
 ******************************************************************************************/
// new in v42.0:
pref("apz.allow_zooming", false);
pref("apz.minimap.enabled", false);
pref("browser.display.show_loading_image_placeholder", false);
pref("browser.newtabpage.enhanced", true);
pref("browser.tabs.showAudioPlayingIcon", true);
pref("browser.urlbar.maxCharsForSearchSuggestions", 20);
pref("browser.urlbar.userMadeSearchSuggestionsChoice", false);
pref("captivedetect.canonicalContent", "success\n");
pref("captivedetect.canonicalURL", "http://detectportal.firefox.com/success.txt");
pref("captivedetect.maxRetryCount", 5);
pref("captivedetect.maxWaitingTime", 5000);
pref("captivedetect.pollingTime", 3000);
pref("datareporting.policy.dataSubmissionEnabled.v2", true);
pref("devtools.debugger.promise", false);
pref("dom.audiochannel.mutedByDefault", false);
pref("dom.performance.enable_notify_performance_timing", false);
pref("dom.permissions.enabled", false);
pref("dom.presentation.discoverable", false);
pref("dom.presentation.discovery.enabled", true);
pref("dom.push.maxQuotaPerSubscription", 16);
pref("dom.requestcache.enabled", false);
pref("dom.requestcontext.enabled", false);
pref("dom.serviceWorkers.interception.enabled", false);
pref("dom.serviceWorkers.interception.opaque.enabled", false);
pref("dom.system_update.debug", false);
pref("dom.system_update.enabled", false);
pref("dom.vr.cardboard.enabled", false);
pref("dom.vr.oculus.enabled", true);
pref("dom.vr.oculus050.enabled", true);
pref("full-screen-api.transition-duration.enter", "200 200");
pref("full-screen-api.transition-duration.leave", "200 200");
pref("geo.wifi.xhr.timeout", 60000);
pref("gfx.vr.mirror-textures", false);
pref("identity.sync.tokenserver.uri", "https://token.services.mozilla.com/1.0/sync/1.5");
pref("image.infer-src-animation.threshold-ms", 2000);
pref("intl.tsf.hack.ms_simplified_chinese.do_not_return_no_layout_error", true);
pref("intl.tsf.hack.ms_traditional_chinese.do_not_return_no_layout_error", true);
pref("layout.css.prefixes.gradients", true);
pref("loop.feedback.dateLastSeenSec", 0);
pref("loop.feedback.formURL", "https://www.mozilla.org/firefox/hello/npssurvey/");
pref("loop.feedback.periodSec", 15770000);
pref("media.block-play-until-visible", false);
pref("media.format-reader.webm", true);
pref("media.getusermedia.audiocapture.enabled", false);
pref("media.mediasource.format-reader.webm", false);
pref("media.peerconnection.ice.default_address_only", false);
pref("media.peerconnection.ice.link_local", false);
pref("media.peerconnection.ice.relay_only", false);
pref("media.useAudioChannelAPI", false);
pref("media.useAudioChannelService", true);
pref("media.video-queue.send-to-compositor-size", 9999);
pref("media.wmf.decoder.thread-count", -1);
pref("media.wmf.low-latency.enabled", false);
pref("network.captive-portal-service.backoffFactor", "5.0");
pref("network.captive-portal-service.enabled", false);
pref("network.captive-portal-service.maxInterval", 1500000);
pref("network.captive-portal-service.minInterval", 60000);
pref("network.generic-ntlm-auth.workstation", "WORKSTATION");
pref("network.http.enablePerElementReferrer", false);
pref("network.jar.block-remote-files", false);
pref("network.predictor.max-uri-length", 500);
pref("nglayout.debug.invalidation", false);
pref("privacy.sanitize.migrateClearSavedPwdsOnExit", false);
pref("privacy.trackingprotection.introCount", 0);
pref("privacy.trackingprotection.introURL", "https://www.mozilla.org/%LOCALE%/firefox/%VERSION%/tracking-protection/start/");
pref("reader.errors.includeURLs", true);
pref("signon.recipes.path", "chrome://passwordmgr/content/recipes.json");
pref("startup.homepage_welcome_url.additional", "https://www.mozilla.org/%LOCALE%/firefox/%VERSION%/firstrun/learnmore/");
pref("ui.osk.detect_physical_keyboard", true);
pref("ui.osk.enabled", false);
pref("ui.osk.on_screen_keyboard_path", "");
pref("ui.osk.require_tablet_mode", true);
pref("urlclassifier.trackingWhitelistTable", "test-trackwhite-simple,mozstd-trackwhite-digest256");
pref("webgl.angle.force-warp", false);
pref("webgl.enable-debug-renderer-info", false);

// removed, renamed or hidden in v42.0:
pref("browser.preferences.inContent", true);
pref("browser.readinglist.enabled", false);
pref("browser.readinglist.sidebarEverOpened", false);
pref("devtools.debugger.tracer", false);
pref("devtools.webide.enableRuntimeConfiguration", false);
pref("dom.broadcastChannel.enabled", true);
pref("dom.ipc.plugins.java.enabled", false);
pref("full-screen-api.approval-required", true);
pref("image.decode-only-on-draw.enabled", true);
pref("layers.async-video.enabled", true);
pref("layers.async-video-oop.enabled", true);
pref("layout.frames.force_resizability", false);
pref("loop.seenToS", "unseen");
pref("loop.showPartnerLogo", true);
pref("media.format-reader.mp4", true);
pref("media.mediasource.format-reader.mp4", true);
pref("media.mediasource.whitelist", true);
pref("media.windows-media-foundation.enabled", true);
pref("privacy.clearOnShutdown.passwords", false);
pref("readinglist.scheduler.enabled", false);
pref("readinglist.server", "https://readinglist.services.mozilla.com/v1");
pref("services.sync.prefs.sync.privacy.clearOnShutdown.passwords", true);
pref("services.sync.tokenServerURI", "https://token.services.mozilla.com/1.0/sync/1.5");
pref("toolkit.telemetry.optoutSample", true);
pref("toolkit.telemetry.unifiedIsOptIn", true);
pref("webgl.disable-debug-renderer-info", false);

// changed in v42.0:
pref("app.update.url", "https://aus5.mozilla.org/update/3/%PRODUCT%/%VERSION%/%BUILD_ID%/%BUILD_TARGET%/%LOCALE%/%CHANNEL%/%OS_VERSION%/%DISTRIBUTION%/%DISTRIBUTION_VERSION%/update.xml"); // prev: "https://aus4.mozilla.org/update/3/%PRODUCT%/%VERSION%/%BUILD_ID%/%BUILD_TARGET%/%LOCALE%/%CHANNEL%/%OS_VERSION%/%DISTRIBUTION%/%DISTRIBUTION_VERSION%/update.xml"
pref("browser.trackingprotection.gethashURL", "https://shavar.services.mozilla.com/gethash?client=SAFEBROWSING_ID&appver=%VERSION%&pver=2.2"); // prev: "https://tracking.services.mozilla.com/gethash?client=SAFEBROWSING_ID&appver=%VERSION%&pver=2.2"
pref("browser.trackingprotection.updateURL", "https://shavar.services.mozilla.com/downloads?client=SAFEBROWSING_ID&appver=%VERSION%&pver=2.2"); // prev: "https://tracking.services.mozilla.com/downloads?client=SAFEBROWSING_ID&appver=%VERSION%&pver=2.2"
pref("dom.ipc.plugins.sandbox-level.flash", 2); // prev: 0
pref("dom.popup_allowed_events", "change click dblclick mouseup notificationclick reset submit touchend"); // prev: "change click dblclick mouseup reset submit touchend"
pref("media.getusermedia.screensharing.allowed_domains", "webex.com,*.webex.com,ciscospark.com,*.ciscospark.com,projectsquared.com,*.projectsquared.com,*.room.co,room.co,beta.talky.io,talky.io,*.clearslide.com,appear.in,*.appear.in,tokbox.com,*.tokbox.com,*.sso.francetelecom.fr,*.si.francetelecom.fr,*.sso.infra.ftgroup,*.multimedia-conference.orange-business.com,*.espacecollaboration.orange-business.com,free.gotomeeting.com,g2m.me,*.g2m.me,example.com,*.mypurecloud.com,*.mypurecloud.com.au,spreed.me,*.spreed.me,*.spreed.com,air.mozilla.org"); // prev: "webex.com,*.webex.com,ciscospark.com,*.ciscospark.com,projectsquared.com,*.projectsquared.com,*.room.co,room.co,beta.talky.io,talky.io,*.clearslide.com,appear.in,*.appear.in,tokbox.com,*.tokbox.com,*.sso.francetelecom.fr,*.si.francetelecom.fr,*.sso.infra.ftgroup,*.multimedia-conference.orange-business.com,*.espacecollaboration.orange-business.com,free.gotomeeting.com,g2m.me,*.g2m.me,example.com,*.mypurecloud.com,*.mypurecloud.com.au,spreed.me,*.spreed.me,*.spreed.com"
pref("media.gmp-manager.certs.1.commonName", "aus5.mozilla.org"); // prev: "aus4.mozilla.org"
pref("media.gmp-manager.certs.1.issuerName", "CN=DigiCert SHA2 Secure Server CA,O=DigiCert Inc,C=US"); // prev: "CN=DigiCert Secure Server CA,O=DigiCert Inc,C=US"
pref("media.gmp-manager.certs.2.commonName", "aus5.mozilla.org"); // prev: "aus4.mozilla.org"
pref("media.gmp-manager.certs.2.issuerName", "CN=thawte SSL CA - G2,O=\"thawte, Inc.\",C=US"); // prev: "CN=Thawte SSL CA,O=\"Thawte, Inc.\",C=US"
pref("media.gmp-manager.url", "https://aus5.mozilla.org/update/3/GMP/%VERSION%/%BUILD_ID%/%BUILD_TARGET%/%LOCALE%/%CHANNEL%/%OS_VERSION%/%DISTRIBUTION%/%DISTRIBUTION_VERSION%/update.xml"); // prev: "https://aus4.mozilla.org/update/3/GMP/%VERSION%/%BUILD_ID%/%BUILD_TARGET%/%LOCALE%/%CHANNEL%/%OS_VERSION%/%DISTRIBUTION%/%DISTRIBUTION_VERSION%/update.xml"
pref("media.mediasource.format-reader", true); // prev: false
pref("privacy.trackingprotection.pbmode.enabled", true); // prev: false
pref("urlclassifier.disallow_completions", "test-malware-simple,test-phish-simple,test-unwanted-simple,test-track-simple,test-trackwhite-simple,goog-downloadwhite-digest256,mozstd-track-digest256,mozstd-trackwhite-digest256"); // prev: "test-malware-simple,test-phish-simple,test-unwanted-simple,goog-downloadwhite-digest256,mozpub-track-digest256"
pref("urlclassifier.trackingTable", "test-track-simple,mozstd-track-digest256"); // prev: "mozpub-track-digest256"
pref("view_source.tab", true); // prev: false

