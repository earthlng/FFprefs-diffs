/******************************************************************************************
 * diffs between FF prefs v61.0 and v62.0
 *
 * prefs: 3248
 *        3128 matching prefs
 *         120 diffs ( 51 new, 43 gone, 26 different )
 ******************************************************************************************/
// new in v62.0:
pref("browser.history_swipe_animation.disabled", false);
pref("browser.newtabpage.activity-stream.asrouterOnboardingCohort", 0);
pref("browser.newtabpage.activity-stream.fxaccounts.endpoint", "https://accounts.firefox.com/");
pref("browser.newtabpage.activity-stream.improvesearch.noDefaultSearchTile", true);
pref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts", false);
pref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts.havePinned", "");
pref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts.searchEngines", "google");
pref("browser.newtabpage.activity-stream.section.highlights.rows", 2);
pref("browser.newtabpage.activity-stream.section.topstories.rows", 1);
pref("browser.safebrowsing.provider.mozilla.lists.base", "moz-std");
pref("browser.safebrowsing.provider.mozilla.lists.content", "moz-full");
pref("browser.security.newcerterrorpage.enabled", false);
pref("browser.sessionstore.resuming_after_os_restart", false);
pref("browser.tabs.multiselect", false);
pref("browser.tabs.remote.tabCacheSize", 0);
pref("devtools.debugger.pause-on-caught-exceptions", true);
pref("devtools.inspector.fonthighlighter.enabled", false);
pref("devtools.inspector.three-pane-first-run", true);
pref("devtools.webconsole.jsterm.codeMirror", false);
pref("dom.clearSiteData.enabled", false);
pref("dom.mutation-events.cssom.disabled", true);
pref("dom.serviceWorkers.parent_intercept", false);
pref("dom.webcomponents.shadowdom.report_usage", false);
pref("extensions.systemAddon.update.enabled", true);
pref("extensions.webextensions.ExtensionStorageIDB.enabled", false);
pref("gfx.webrender.debug.echo-driver-messages", false);
pref("gfx.webrender.debug.new-frame-indicator", false);
pref("gfx.webrender.debug.new-scene-indicator", false);
pref("gfx.webrender.program-binary-disk", true);
pref("image.animated.resume-from-last-displayed", true);
pref("io.activity.intervalMilliseconds", 0);
pref("layout.accessiblecaret.script_change_update_mode", 0);
pref("layout.css.property-append-only", false);
pref("layout.css.scrollbar-colors.enabled", false);
pref("layout.css.webkit-appearance.enabled", false);
pref("layout.css.xul-display-values.content.enabled", false);
pref("network.cookie.maxNumber", 3000);
pref("network.cookie.maxPerHost", 180);
pref("network.sts.poll_busy_wait_period", 50);
pref("network.sts.poll_busy_wait_period_timeout", 7);
pref("network.sts.pollable_event_timeout", 6);
pref("pdfjs.scrollModeOnLoad", 0);
pref("pdfjs.spreadModeOnLoad", 0);
pref("print.font-variations-as-paths", true);
pref("privacy.trackingprotection.storagerestriction.enabled", false);
pref("services.blocklist.addons.signer", "remote-settings.content-signature.mozilla.org");
pref("services.blocklist.gfx.signer", "remote-settings.content-signature.mozilla.org");
pref("services.blocklist.onecrl.signer", "onecrl.content-signature.mozilla.org");
pref("services.blocklist.pinning.signer", "pinning-preload.content-signature.mozilla.org");
pref("services.blocklist.plugins.signer", "remote-settings.content-signature.mozilla.org");
pref("toolkit.winRegisterApplicationRestart", true);

// removed, renamed or hidden in v62.0:
pref("browser.EULA.version", 3);
pref("browser.rights.3.shown", false);
pref("browser.rights.version", 3);
pref("browser.safebrowsing.provider.mozilla.lists.base.description", "mozstdDesc");
pref("browser.safebrowsing.provider.mozilla.lists.base.name", "mozstdName");
pref("browser.safebrowsing.provider.mozilla.lists.content.description", "mozfullDesc2");
pref("browser.safebrowsing.provider.mozilla.lists.content.name", "mozfullName");
pref("browser.search.defaultenginename", "chrome://browser-region/locale/region.properties");
pref("browser.search.defaultenginename.US", "data:text/plain,browser.search.defaultenginename.US=Google");
pref("browser.search.order.1", "chrome://browser-region/locale/region.properties");
pref("browser.search.order.2", "chrome://browser-region/locale/region.properties");
pref("browser.search.order.3", "chrome://browser-region/locale/region.properties");
pref("browser.search.order.US.1", "data:text/plain,browser.search.order.US.1=Google");
pref("browser.search.order.US.2", "data:text/plain,browser.search.order.US.2=Bing");
pref("browser.snapshots.limit", 0);
pref("browser.urlbar.autoFill.typed", true);
pref("devtools.devedition.promo.enabled", false);
pref("devtools.devedition.promo.shown", false);
pref("devtools.devedition.promo.url", "https://www.mozilla.org/firefox/developer/?utm_source=firefox-dev-tools&utm_medium=firefox-browser&utm_content=betadoorhanger");
pref("devtools.inspector.three-pane-toggle", false);
pref("devtools.telemetry.tools.opened.version", "{}");
pref("devtools.toolbar.enabled", true);
pref("devtools.toolbar.visible", false);
pref("devtools.webconsole.autoMultiline", true);
pref("extensions.geckoProfiler.symbols.url", "http://symbols.mozilla.org/");
pref("extensions.minCompatibleAppVersion", "4.0");
pref("extensions.minCompatiblePlatformVersion", "2.0");
pref("gfx.webrender.all", false);
pref("gfx.webrender.enabled", false);
pref("gfx.webrender.hit-test", true);
pref("hangmonitor.timeout", 0);
pref("image.mem.max_decoded_image_kb", 256000);
pref("javascript.options.array_prototype_values", true);
pref("layout.accessiblecaret.allow_script_change_updates", false);
pref("layout.css.getPropertyCSSValue.enabled", false);
pref("layout.css.text-combine-upright-digits.enabled", false);
pref("layout.event-regions.enabled", false);
pref("network.activity.intervalMilliseconds", 0);
pref("network.dir.format", 2);
pref("plugin.java.mime", "application/x-java-vm");
pref("plugin.state.java", 1);
pref("security.allow_chrome_frames_inside_content", false);
pref("security.OCSP.GET.enabled", false);

// changed in v62.0:
pref("apz.android.chrome_fling_physics.enabled", true); // prev: false
pref("browser.cache.disk.max_chunks_memory_usage", 40960); // prev: 10240
pref("browser.cache.disk.max_priority_chunks_memory_usage", 40960); // prev: 10240
pref("browser.cache.offline.insecure.enable", false); // prev: true
pref("browser.startup.blankWindow", true); // prev: false
pref("device.sensors.ambientLight.enabled", false); // prev: true
pref("device.sensors.proximity.enabled", false); // prev: true
pref("devtools.debugger.ignore-caught-exceptions", true); // prev: false
pref("devtools.inspector.show-three-pane-tooltip", true); // prev: false
pref("devtools.inspector.three-pane-enabled", true); // prev: false
pref("devtools.new-animationinspector.enabled", true); // prev: false
pref("devtools.toolbox.previousHost", "right"); // prev: "side"
pref("dom.ipc.plugins.sandbox-level.flash", 3); // prev: 2
pref("dom.registerContentHandler.enabled", false); // prev: true
pref("dom.registerProtocolHandler.insecure.enabled", false); // prev: true
pref("extensions.geckoProfiler.getSymbolRules", "localBreakpad,dump_syms.exe"); // prev: "localBreakpad,remoteBreakpad,dump_syms.exe"
pref("gfx.webrender.async-scene-build", true); // prev: 2
pref("image.animated.decode-on-demand.threshold-kb", 20480); // prev: 4194303
pref("layers.enable-tiles-if-skia-pomtp", true); // prev: false
pref("layout.css.shape-outside.enabled", true); // prev: false
pref("layout.display-list.retain", true); // prev: false
pref("network.http.throttle.version", 1); // prev: 2
pref("network.trr.blacklist-duration", 60); // prev: 1200
pref("security.pki.name_matching_mode", 3); // prev: 1
pref("security.tls.version.fallback-limit", 4); // prev: 3
pref("startup.homepage_welcome_url", "about:welcome"); // prev: "https://www.mozilla.org/%LOCALE%/firefox/%VERSION%/firstrun/"

