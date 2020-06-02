/******************************************************************************************
 * diffs between FF prefs v76.0 and v77.0
 *
 * prefs: 4031
 *        3922 matching prefs
 *         109 diffs ( 58 new, 33 gone, 18 different )
 ******************************************************************************************/
// new in v77.0:
pref("accessibility.ARIAReflection.enabled", false);
pref("apz.windows.force_disable_direct_manipulation", true);
pref("browser.find.anonymous_content.enabled", true);
pref("browser.newtabpage.activity-stream.asrouter.providers.messaging-experiments", "{\"id\":\"messaging-experiments\",\"enabled\":true,\"type\":\"remote-experiments\",\"messageGroups\":[\"cfr\",\"whats-new-panel\",\"moments-page\",\"snippets\",\"cfr-fxa\"],\"updateCycleInMs\":3600000}");
pref("browser.tabs.documentchannel.parent-initiated", true);
pref("browser.tabs.documentchannel.ppdc", true);
pref("browser.urlbar.restyleSearches", false);
pref("devtools.contenttoolbox.webconsole.input.context", false);
pref("devtools.debugger.features.frame-step", true);
pref("devtools.experiment.f12.shortcut_disabled", false);
pref("devtools.inspector.compatibility.target-browsers", "");
pref("dom.security.https_only_mode.upgrade_local", false);
pref("dom.security.https_only_mode.upgrade_onion", false);
pref("dom.security.https_only_mode_ever_enabled", false);
pref("dom.window.content.untrusted.enabled", true);
pref("editor.truncate_user_pastes", false);
pref("extensions.blocklist.addonItemURL", "https://addons.mozilla.org/%LOCALE%/%APP%/blocked-addon/%addonID%/%addonVersion%/");
pref("extensions.blocklist.useMLBF", false);
pref("extensions.blocklist.useMLBF.stashes", false);
pref("gfx.vsync.force-disable-waitforvblank", false);
pref("gfx.webrender.gl-debug-message-critical-note", false);
pref("gfx.webrender.gl-debug-message-print", false);
pref("gfx.webrender.use-optimized-shaders", true);
pref("identity.sync.useOAuthForSyncToken", false);
pref("image.avif.enabled", false);
pref("image.honor_orientation_metadata.natural_size", true);
pref("image.honor-orientation-metadata", true);
pref("javascript.options.mem.gc_high_frequency_large_heap_growth", 150);
pref("javascript.options.mem.gc_high_frequency_small_heap_growth", 300);
pref("javascript.options.mem.gc_large_heap_incremental_limit", 110);
pref("javascript.options.mem.gc_large_heap_size_min_mb", 500);
pref("javascript.options.mem.gc_small_heap_incremental_limit", 140);
pref("javascript.options.mem.gc_small_heap_size_max_mb", 100);
pref("javascript.options.wasm_reftypes", true);
pref("layout.css.grid-template-masonry-value.enabled", false);
pref("layout.css.is-where-selectors.enabled", false);
pref("media.getdisplaymedia.enabled", true);
pref("media.testing-only-events", false);
pref("network.data.max-uri-length-mobile", 2097152);
pref("pdfjs.enablePermissions", false);
pref("privacy.restrict3rdpartystorage.expiration_visited", 2592000);
pref("privacy.restrict3rdpartystorage.heuristic.recently_visited", true);
pref("privacy.restrict3rdpartystorage.heuristic.recently_visited_time", 600);
pref("privacy.trackingprotection.testing.report_blocked_node", false);
pref("privacy.webrtc.allowSilencingNotifications", false);
pref("privacy.webrtc.legacyGlobalIndicator", true);
pref("privacy.webrtc.sharedTabWarning", false);
pref("prompts.defaultModalType", 3);
pref("prompts.modalType.confirmAuth", 2);
pref("prompts.modalType.insecureFormSubmit", 2);
pref("services.blocklist.addons-mlbf.checked", 0);
pref("services.blocklist.addons-mlbf.collection", "addons-bloomfilters");
pref("services.blocklist.addons-mlbf.signer", "remote-settings.content-signature.mozilla.org");
pref("services.sync.prefs.sync.intl.regional_prefs.use_os_locales", true);
pref("signon.showAutoCompleteImport", "");
pref("toolkit.asyncshutdown.report_writes_after", 20000);
pref("toolkit.osKeyStore.loglevel", "Warn");
pref("webgl.prototype.ipc-pcq", 0);

// removed, renamed or hidden in v77.0:
pref("apz.frame_delay.enabled", true);
pref("browser.aboutwelcome.log", "warn");
pref("browser.fixup.dns_first_for_single_words", false);
pref("browser.fixup.typo.scheme", true);
pref("browser.osKeyStore.loglevel", "Warn");
pref("browser.stopReloadAnimation.enabled", true);
pref("browser.tabs.multiselect", true);
pref("browser.tabs.remote.allowLinkedWebInFileUriProcess", false);
pref("browser.tabs.showAudioPlayingIcon", true);
pref("browser.ui.scroll-toolbar-threshold", 10);
pref("browser.urlbar.oneOffSearches", true);
pref("browser.urlbar.update1", true);
pref("browser.urlbar.update1.view.stripHttps", true);
pref("browser.xul.error_pages.enabled", true);
pref("devtools.debugger.source-maps-enabled", true);
pref("devtools.inspector.use-new-box-model-highlighter", false);
pref("dom.mozBrowserFramesEnabled", true);
pref("dom.registerProtocolHandler.insecure.enabled", false);
pref("extensions.webservice.discoverURL", "https://discovery.addons.mozilla.org/%LOCALE%/firefox/discovery/pane/%VERSION%/%OS%/%COMPATIBILITY_MODE%");
pref("gfx.vsync.use-waitforvblank", false);
pref("javascript.options.mem.gc_avoid_interrupt_factor", 100);
pref("javascript.options.mem.gc_dynamic_heap_growth", true);
pref("javascript.options.mem.gc_dynamic_mark_slice", true);
pref("javascript.options.mem.gc_high_frequency_heap_growth_max", 300);
pref("javascript.options.mem.gc_high_frequency_heap_growth_min", 150);
pref("javascript.options.mem.gc_high_frequency_high_limit_mb", 500);
pref("javascript.options.mem.gc_high_frequency_low_limit_mb", 100);
pref("javascript.options.mem.gc_non_incremental_factor", 112);
pref("layout.css.contain.enabled", true);
pref("network.disable.ipc.security", true);
pref("privacy.purge_trackers.logging.enabled", false);
pref("security.identityblock.show_extended_validation", false);
pref("signon.management.overrideURI", "about:logins?filter=%DOMAIN%");

// changed in v77.0:
pref("browser.contentblocking.report.monitor.how_it_works.url", "https://monitor.firefox.com/about"); // prev: "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/monitor-faq"
pref("browser.newtabpage.activity-stream.asrouter.providers.message-groups", "{\"id\":\"message-groups\",\"enabled\":false,\"type\":\"remote-settings\",\"bucket\":\"message-groups\",\"updateCycleInMs\":3600000}"); // prev: "{\"id\":\"message-groups\",\"enabled\":true,\"type\":\"remote-settings\",\"bucket\":\"message-groups\",\"updateCycleInMs\":3600000}"
pref("browser.safebrowsing.provider.google.reportURL", "https://safebrowsing.google.com/safebrowsing/diagnostic?site="); // prev: "https://safebrowsing.google.com/safebrowsing/diagnostic?client=%NAME%&site="
pref("browser.safebrowsing.provider.google4.reportURL", "https://safebrowsing.google.com/safebrowsing/diagnostic?site="); // prev: "https://safebrowsing.google.com/safebrowsing/diagnostic?client=%NAME%&site="
pref("browser.tabs.remote.separatePrivilegedContentProcess", true); // prev: false
pref("browser.urlbar.maxCharsForSearchSuggestions", 100); // prev: 20
pref("devtools.netmonitor.columnsData", "[{\"name\":\"status\",\"minWidth\":30,\"width\":5}, {\"name\":\"method\",\"minWidth\":30,\"width\":5}, {\"name\":\"domain\",\"minWidth\":30,\"width\":10}, {\"name\":\"file\",\"minWidth\":30,\"width\":25}, {\"name\":\"url\",\"minWidth\":30,\"width\":25},{\"name\":\"initiator\",\"minWidth\":30,\"width\":10},{\"name\":\"type\",\"minWidth\":30,\"width\":5},{\"name\":\"transferred\",\"minWidth\":30,\"width\":10},{\"name\":\"contentSize\",\"minWidth\":30,\"width\":5},{\"name\":\"waterfall\",\"minWidth\":150,\"width\":15}]"); // prev: "[{\"name\":\"status\",\"minWidth\":30,\"width\":5}, {\"name\":\"method\",\"minWidth\":30,\"width\":5}, {\"name\":\"domain\",\"minWidth\":30,\"width\":10}, {\"name\":\"file\",\"minWidth\":30,\"width\":25}, {\"name\":\"url\",\"minWidth\":30,\"width\":25}, {\"name\":\"cause\",\"minWidth\":30,\"width\":10},{\"name\":\"initiator\",\"minWidth\":30,\"width\":10},{\"name\":\"type\",\"minWidth\":30,\"width\":5},{\"name\":\"transferred\",\"minWidth\":30,\"width\":10},{\"name\":\"contentSize\",\"minWidth\":30,\"width\":5},{\"name\":\"waterfall\",\"minWidth\":150,\"width\":15}]"
pref("devtools.netmonitor.visibleColumns", "[\"status\",\"method\",\"domain\",\"file\",\"initiator\",\"type\",\"transferred\",\"contentSize\",\"waterfall\"]"); // prev: "[\"status\",\"method\",\"domain\",\"file\",\"cause\",\"type\",\"transferred\",\"contentSize\",\"waterfall\"]"
pref("dom.quotaManager.useDOSDevicePathSyntax", true); // prev: false
pref("gfx.omta.background-color", true); // prev: false
pref("gfx.webrender.enable-item-cache", true); // prev: false
pref("layout.css.always-repaint-on-unvisited", true); // prev: false
pref("layout.css.image-orientation.initial-from-image", true); // prev: false
pref("layout.css.notify-of-unvisited", true); // prev: false
pref("network.auth.confirmAuth.enabled", true); // prev: false
pref("network.http.http3.default-qpack-table-size", 0); // prev: 65536
pref("privacy.purge_trackers.logging.level", "Error"); // prev: "Warn"
pref("signon.management.page.os-auth.enabled", false); // prev: true

