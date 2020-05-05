/******************************************************************************************
 * diffs between FF prefs v75.0 and v76.0
 *
 * prefs: 3990
 *        3915 matching prefs
 *          75 diffs ( 36 new, 17 gone, 22 different )
 ******************************************************************************************/
// new in v76.0:
pref("apz.zoom-to-focused-input.enabled", true);
pref("browser.osKeyStore.loglevel", "Warn");
pref("browser.ssb.enabled", false);
pref("devtools.performance.popup.feature-flag", false);
pref("devtools.performance.recording.duration.remote", 0);
pref("devtools.performance.recording.entries.remote", 10000000);
pref("devtools.performance.recording.features.remote", "[\"js\",\"leaf\",\"stackwalk\",\"screenshots\",\"java\"]");
pref("devtools.performance.recording.interval.remote", 1000);
pref("devtools.performance.recording.objdirs.remote", "[]");
pref("devtools.performance.recording.preset.remote", "web-developer");
pref("devtools.performance.recording.threads.remote", "[\"GeckoMain\",\"Compositor\",\"Renderer\"]");
pref("devtools.responsive.touchGestureSimulation.enabled", false);
pref("dom.animations.mainthread-synchronization-with-geometric-animations", true);
pref("dom.arena_allocator.enabled", false);
pref("dom.events.compress.touchmove", true);
pref("dom.no_unknown_protocol_error.enabled", true);
pref("dom.quotaManager.useDOSDevicePathSyntax", false);
pref("dom.security.https_only_mode", false);
pref("dom.security.secFetch.enabled", false);
pref("dom.workers.serialized-sab-access", false);
pref("gfx.vsync.use-waitforvblank", false);
pref("gfx.webrender.compositor.force-enabled", false);
pref("layout.css.image-orientation.initial-from-image", false);
pref("media.getusermedia.hpf_enabled", true);
pref("media.navigator.video.use_transport_cc", false);
pref("media.videocontrols.picture-in-picture.video-toggle.min-video-secs", 45);
pref("messaging-system.log", "warn");
pref("messaging-system.rsexperimentloader.enabled", true);
pref("network.cookie.rejectForeignWithExceptions.enabled", false);
pref("network.cookie.sameSite.laxByDefault.disabledHosts", "");
pref("network.http.http3.recvBufferSize", 1048576);
pref("privacy.purge_trackers.logging.level", "Warn");
pref("security.sandbox.socket.process.level", 0);
pref("signon.generation.confidenceThreshold", "0.75");
pref("signon.management.page.os-auth.enabled", true);
pref("signon.management.page.vulnerable-passwords.enabled", true);

// removed, renamed or hidden in v76.0:
pref("app.update.url", "https://aus5.mozilla.org/update/6/%PRODUCT%/%VERSION%/%BUILD_ID%/%BUILD_TARGET%/%LOCALE%/%CHANNEL%/%OS_VERSION%/%SYSTEM_CAPABILITIES%/%DISTRIBUTION%/%DISTRIBUTION_VERSION%/update.xml");
pref("browser.in-content.dark-mode", true);
pref("browser.tabs.remote.useCORP", true);
pref("dom.manifest.onappinstalled", false);
pref("dom.registerContentHandler.enabled", false);
pref("extensions.blocklist.interval", 86400);
pref("extensions.blocklist.url", "https://blocklists.settings.services.mozilla.com/v1/blocklist/3/%APP_ID%/%APP_VERSION%/%PRODUCT%/%BUILD_ID%/%BUILD_TARGET%/%LOCALE%/%CHANNEL%/%OS_VERSION%/%DISTRIBUTION%/%DISTRIBUTION_VERSION%/%PING_COUNT%/%TOTAL_PING_COUNT%/%DAYS_SINCE_LAST_PING%/");
pref("extensions.blocklist.useXML", false);
pref("gfx.webrender.split-render-roots", false);
pref("javascript.options.experimental.await_fix", true);
pref("javascript.options.experimental.fields", true);
pref("javascript.options.strict", false);
pref("media.videocontrols.picture-in-picture.video-toggle.flyout-enabled", false);
pref("media.videocontrols.picture-in-picture.video-toggle.flyout-wait-ms", 5000);
pref("network.predictor.cleaned-up", false);
pref("pdfjs.eventBusDispatchToDOM", false);
pref("security.insecure_password.ui.enabled", true);

// changed in v76.0:
pref("browser.aboutwelcome.enabled", true); // prev: false
pref("browser.safebrowsing.provider.google.reportMalwareMistakeURL", "https://%LOCALE%.malware-error.mozilla.com/?url="); // prev: "https://%LOCALE%.malware-error.mozilla.com/?hl=%LOCALE%&url="
pref("browser.safebrowsing.provider.google.reportPhishMistakeURL", "https://%LOCALE%.phish-error.mozilla.com/?url="); // prev: "https://%LOCALE%.phish-error.mozilla.com/?hl=%LOCALE%&url="
pref("browser.safebrowsing.provider.google.reportURL", "https://safebrowsing.google.com/safebrowsing/diagnostic?client=%NAME%&site="); // prev: "https://safebrowsing.google.com/safebrowsing/diagnostic?client=%NAME%&hl=%LOCALE%&site="
pref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", "https://%LOCALE%.malware-error.mozilla.com/?url="); // prev: "https://%LOCALE%.malware-error.mozilla.com/?hl=%LOCALE%&url="
pref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", "https://%LOCALE%.phish-error.mozilla.com/?url="); // prev: "https://%LOCALE%.phish-error.mozilla.com/?hl=%LOCALE%&url="
pref("browser.safebrowsing.provider.google4.reportURL", "https://safebrowsing.google.com/safebrowsing/diagnostic?client=%NAME%&site="); // prev: "https://safebrowsing.google.com/safebrowsing/diagnostic?client=%NAME%&hl=%LOCALE%&site="
pref("browser.safebrowsing.reportPhishURL", "https://%LOCALE%.phish-report.mozilla.com/?url="); // prev: "https://%LOCALE%.phish-report.mozilla.com/?hl=%LOCALE%&url="
pref("browser.tabs.remote.allowLinkedWebInFileUriProcess", false); // prev: true
pref("devtools.performance.recording.features", "[\"js\",\"leaf\",\"stackwalk\",\"screenshots\"]"); // prev: "[\"js\",\"leaf\",\"stackwalk\"]"
pref("dom.audioworklet.enabled", true); // prev: false
pref("dom.IntersectionObserverExplicitDocumentRoot.enabled", true); // prev: false
pref("dom.worklet.enabled", true); // prev: false
pref("gfx.webrender.max-partial-present-rects", 1); // prev: 0
pref("layout.css.serialize-grid-implicit-tracks", true); // prev: false
pref("media.cubeb.sandbox", true); // prev: false
pref("security.sandbox.content.level", 6); // prev: 5
pref("services.sync.extension-storage.skipPercentageChance", 50); // prev: 20
pref("signon.passwordEditCapture.enabled", true); // prev: false
pref("trailhead.firstrun.branches", "join-dynamic"); // prev: ""
pref("webgl.max-contexts", 1000); // prev: 32
pref("webgl.max-contexts-per-principal", 300); // prev: 16

