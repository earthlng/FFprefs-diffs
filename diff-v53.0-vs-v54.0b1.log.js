/******************************************************************************************
 * diffs between FF prefs v53.0 and v54.0b1
 *
 * prefs: 2882
 *        2761 matching prefs
 *         121 diffs ( 52 new, 55 gone, 14 different )
 ******************************************************************************************/
// new in v54.0b1:
pref("apz.allow_with_webrender", false);
pref("browser.formautofill.enabled", false);
pref("browser.formautofill.loglevel", "Warn");
pref("browser.newtabpage.activity-stream.enabled", false);
pref("browser.safebrowsing.provider.google.reportMalwareMistakeURL", "https://%LOCALE%.malware-error.mozilla.com/?hl=%LOCALE%&url=");
pref("browser.safebrowsing.provider.google.reportPhishMistakeURL", "https://%LOCALE%.phish-error.mozilla.com/?hl=%LOCALE%&url=");
pref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", "https://%LOCALE%.malware-error.mozilla.com/?hl=%LOCALE%&url=");
pref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", "https://%LOCALE%.phish-error.mozilla.com/?hl=%LOCALE%&url=");
pref("browser.storageManager.pressureNotification.minIntervalMS", 1200000);
pref("browser.storageManager.pressureNotification.usageThresholdGB", 5);
pref("browser.urlbar.usepreloadedtopurls.enabled", false);
pref("browser.urlbar.usepreloadedtopurls.expire_days", 14);
pref("devtools.gridinspector.showGridOutline", false);
pref("devtools.source-map.locations.enabled", false);
pref("dom.forms.select.customstyling", true);
pref("dom.ipc.plugins.forcedirect.enabled", true);
pref("dom.ipc.processCount.extension", 1);
pref("dom.moduleScripts.enabled", false);
pref("dom.timeout.max_consecutive_callbacks", 5);
pref("dom.vr.puppet.enabled", false);
pref("dom.vr.test.enabled", false);
pref("extensions.e10sMultiBlocksEnabling", true);
pref("geo.security.allowinsecure", true);
pref("gfx.downloadable_fonts.keep_variation_tables", false);
pref("gfx.downloadable_fonts.otl_validation", false);
pref("gfx.webrender.enabled", true);
pref("image.mem.animated.discardable", false);
pref("image.mem.shared", false);
pref("intl.uidirection", -1);
pref("layers.advanced.border-layers", false);
pref("layers.advanced.caret-layers", false);
pref("layout.css.appearance.enabled", true);
pref("layout.css.moz-appearance.enabled", true);
pref("layout.css.text-justify.enabled", false);
pref("layout.scrollbars.always-layerize-track", false);
pref("marionette.enabled", false);
pref("marionette.forcelocal", true);
pref("marionette.log.level", "info");
pref("marionette.port", 2828);
pref("marionette.prefs.recommended", true);
pref("media.eme.vp9-in-mp4.enabled", false);
pref("media.ffmpeg.low-latency.enabled", false);
pref("network.http.referer.hideOnionSource", false);
pref("network.throttle.enable", true);
pref("network.throttle.resume-for", 2000);
pref("network.throttle.suspend-for", 2000);
pref("privacy.firstparty.isolate.restrict_opener_access", true);
pref("security.data_uri.inherit_security_context", true);
pref("security.sandbox.logging.enabled", false);
pref("services.sync.engine.bookmarks.validation.interval", 86400);
pref("services.sync.engine.bookmarks.validation.maxRecords", 1000);
pref("services.sync.engine.bookmarks.validation.percentageChance", 10);

// removed, renamed or hidden in v54.0b1:
pref("browser.newtabpage.remote", false);
pref("browser.newtabpage.remote.content-signing-test", false);
pref("browser.newtabpage.remote.keys", "");
pref("browser.newtabpage.remote.mode", "production");
pref("browser.newtabpage.remote.version", "1");
pref("browser.safebrowsing.reportMalwareMistakeURL", "https://%LOCALE%.malware-error.mozilla.com/?hl=%LOCALE%&url=");
pref("browser.safebrowsing.reportPhishMistakeURL", "https://%LOCALE%.phish-error.mozilla.com/?hl=%LOCALE%&url=");
pref("devtools.sourcemap.locations.enabled", false);
pref("devtools.toolbox.toolbarSpec", '["splitconsole", "paintflashing toggle","scratchpad","resize toggle","screenshot --fullpage --file", "rulers", "measure"]');
pref("dom.archivereader.enabled", false);
pref("gfx.font_rendering.cleartype.always_use_for_content", false);
pref("gfx.font_rendering.cleartype.use_for_downloadable_fonts", true);
pref("intl.uidirection.ar", "rtl");
pref("intl.uidirection.fa", "rtl");
pref("intl.uidirection.he", "rtl");
pref("intl.uidirection.ug", "rtl");
pref("intl.uidirection.ur", "rtl");
pref("layers.allow-d3d9-fallback", false);
pref("layers.prefer-d3d9", false);
pref("layout.css.object-fit-and-position.enabled", true);
pref("layout.css.unprefixing-service.enabled", true);
pref("media.eme.apiVisible", true);
pref("network.http.pipelining", false);
pref("network.http.pipelining.abtest", false);
pref("network.http.pipelining.aggressive", false);
pref("network.http.pipelining.max-optimistic-requests", 4);
pref("network.http.pipelining.maxrequests", 32);
pref("network.http.pipelining.maxsize", 300000);
pref("network.http.pipelining.read-timeout", 30000);
pref("network.http.pipelining.reschedule-on-timeout", true);
pref("network.http.pipelining.reschedule-timeout", 1500);
pref("network.http.pipelining.ssl", false);
pref("network.http.proxy.pipelining", false);
pref("pointer-lock-api.prefixed.enabled", false);
pref("security.sandbox.windows.log", false);
pref("services.sync.jpake.firstMsgMaxTries", 300);
pref("services.sync.jpake.lastMsgMaxTries", 300);
pref("services.sync.jpake.maxTries", 10);
pref("services.sync.jpake.pollInterval", 1000);
pref("services.sync.jpake.serverURL", "https://setup.services.mozilla.com/");
pref("services.sync.log.logger.service.jpakeclient", "Debug");
pref("services.sync.log.logger.userapi", "Debug");
pref("services.sync.miscURL", "misc/");
pref("services.sync.privacyURL", "https://services.mozilla.com/privacy-policy/");
pref("services.sync.scheduler.sync11.singleDeviceInterval", 86400);
pref("services.sync.serverURL", "https://auth.services.mozilla.com/");
pref("services.sync.statusURL", "https://services.mozilla.com/status/");
pref("services.sync.syncKeyHelpURL", "https://services.mozilla.com/help/synckey");
pref("services.sync.termsURL", "https://services.mozilla.com/tos/");
pref("services.sync.userURL", "user/");
pref("services.sync.validation.interval", 86400);
pref("services.sync.validation.maxRecords", 100);
pref("services.sync.validation.percentageChance", 10);
pref("toolkit.identity.debug", false);
pref("toolkit.identity.enabled", false);

// changed in v54.0b1:
pref("browser.crashReports.unsubmittedCheck.enabled", true); // prev: false
pref("browser.migrate.automigrate.enabled", true); // prev: false
pref("browser.safebrowsing.provider.google4.lists", "goog-badbinurl-proto,goog-downloadwhite-proto,goog-phish-proto,googpub-phish-proto,goog-malware-proto,goog-unwanted-proto"); // prev: "goog-phish-proto,googpub-phish-proto,goog-malware-proto,goog-unwanted-proto"
pref("devtools.devedition.promo.enabled", true); // prev: false
pref("dom.event.highrestimestamp.enabled", true); // prev: false
pref("dom.ipc.plugins.asyncdrawing.enabled", true); // prev: false
pref("extensions.blocklist.detailsURL", "https://blocked.cdn.mozilla.net/"); // prev: "https://www.mozilla.com/%LOCALE%/blocklist/"
pref("extensions.blocklist.itemURL", "https://blocked.cdn.mozilla.net/%blockID%.html"); // prev: "https://blocklist.addons.mozilla.org/%LOCALE%/%APP%/blocked/%blockID%"
pref("extensions.blocklist.url", "https://blocklists.settings.services.mozilla.com/v1/blocklist/3/%APP_ID%/%APP_VERSION%/%PRODUCT%/%BUILD_ID%/%BUILD_TARGET%/%LOCALE%/%CHANNEL%/%OS_VERSION%/%DISTRIBUTION%/%DISTRIBUTION_VERSION%/%PING_COUNT%/%TOTAL_PING_COUNT%/%DAYS_SINCE_LAST_PING%/"); // prev: "https://blocklist.addons.mozilla.org/blocklist/3/%APP_ID%/%APP_VERSION%/%PRODUCT%/%BUILD_ID%/%BUILD_TARGET%/%LOCALE%/%CHANNEL%/%OS_VERSION%/%DISTRIBUTION%/%DISTRIBUTION_VERSION%/%PING_COUNT%/%TOTAL_PING_COUNT%/%DAYS_SINCE_LAST_PING%/"
pref("javascript.options.shared_memory", true); // prev: false
pref("layout.css.clip-path-shapes.enabled", true); // prev: false
pref("media.peerconnection.ice.tcp", true); // prev: false
pref("print.use_simplify_page", true); // prev: false
pref("security.tls.version.max", 4); // prev: 3
