/******************************************************************************************
 * diffs between FF prefs v78.0 and v79.0
 *
 * prefs: 4084
 *        3991 matching prefs
 *          93 diffs ( 42 new, 27 gone, 24 different )
 ******************************************************************************************/
// new in v79.0:
pref("app.update.notifyDuringDownload", false);
pref("apz.mvm.force-enabled", false);
pref("browser.download.alwaysOpenInSystemViewerContextMenuItem", true);
pref("browser.download.openInSystemViewerContextMenuItem", true);
pref("browser.fixup.dns_first_for_single_words", false);
pref("browser.navigation.requireUserInteraction", false);
pref("browser.preferences.experimental", false);
pref("devtools.netmonitor.msg.displayed-messages.limit", 500);
pref("devtools.netmonitor.msg.messageDataLimit", 100000);
pref("devtools.netmonitor.msg.payload-preview-height", 128);
pref("devtools.netmonitor.msg.visibleColumns", "[\"data\", \"time\"]");
pref("devtools.overflow.debugging.enabled", false);
pref("doh-rollout.provider-steering.enabled", false);
pref("doh-rollout.provider-steering.provider-list", "[{ \"name\": \"comcast\", \"canonicalName\": \"doh-discovery.xfinity.com\", \"uri\": \"https://doh.xfinity.com/dns-query\" }]");
pref("dom.forms.enterkeyhint", false);
pref("dom.ipc.processPrelaunch.fission.number", 3);
pref("dom.quotaManager.overrideXFullPathname", true);
pref("dom.script_loader.external_scripts.speculate_async.enabled", false);
pref("dom.script_loader.external_scripts.speculate_link_preload.enabled", false);
pref("dom.script_loader.external_scripts.speculate_non_parser_inserted.enabled", false);
pref("dom.script_loader.external_scripts.speculative_omt_parse.enabled", false);
pref("editor.white_space_normalization.blink_compatible", false);
pref("gfx.webrender.precache-shaders", false);
pref("javascript.options.asyncstack_capture_debuggee_only", true);
pref("javascript.options.experimental.weakrefs.expose_cleanupSome", false);
pref("javascript.options.wasm_gc", false);
pref("javascript.options.weakrefs", true);
pref("layout.css.prefers-color-scheme-no-preference.enabled", false);
pref("mathml.stixgeneral_operator_stretching.disabled", false);
pref("media.clockdrift.buffering", 5);
pref("media.peerconnection.ice.obfuscate_host_addresses.blocklist", "");
pref("media.peerconnection.video.use_rtx.blocklist", "*.google.com");
pref("network.cookie.sameSite.schemeful", false);
pref("print.always_print_silent", false);
pref("privacy.partition.network_state.connection_with_proxy", false);
pref("privacy.purge_trackers.consider_entity_list", false);
pref("security.intermediate_preloading_healer.enabled", false);
pref("security.intermediate_preloading_healer.timer_interval_ms", 300000);
pref("signon.backup.enabled", false);
pref("signon.capture.inputChanges.enabled", true);
pref("telemetry.fog.test.localhost_port", 0);
pref("ui.mouse.radius.reposition", false);

// removed, renamed or hidden in v79.0:
pref("browser.find.anonymous_content.enabled", true);
pref("browser.newtabpage.activity-stream.telemetry.structuredIngestion", true);
pref("browser.urlbar.delay", 50);
pref("browser.urlbar.formatting.enabled", true);
pref("browser.urlbar.restyleSearches", false);
pref("browser.urlbar.update1.interventions", true);
pref("browser.urlbar.update1.searchTips", true);
pref("browser.urlbar.usepreloadedtopurls.enabled", false);
pref("browser.urlbar.usepreloadedtopurls.expire_days", 14);
pref("devtools.netmonitor.ws.displayed-frames.limit", 500);
pref("devtools.netmonitor.ws.messageDataLimit", 100000);
pref("devtools.netmonitor.ws.payload-preview-height", 128);
pref("devtools.netmonitor.ws.visibleColumns", "[\"data\", \"time\"]");
pref("dom.largeAllocation.testing.allHttpLoads", false);
pref("fission.rebuild_frameloaders_on_remoteness_change", true);
pref("intl.charset.detector", "chrome://global/locale/intl.properties");
pref("intl.charset.detector.iso2022jp.allowed", true);
pref("intl.charset.detector.ng.enabled", true);
pref("intl.charset.fallback.override", "");
pref("intl.charset.fallback.tld", true);
pref("jsloader.shareGlobal", true);
pref("layout.css.scrollbar-color.enabled", true);
pref("layout.css.scrollbar-width.enabled", true);
pref("media.peerconnection.ice.obfuscate_host_addresses.whitelist", "");
pref("security.aboutcertificate.enabled", true);
pref("toolkit.asyncshutdown.report_writes_after", 40000);
pref("toolkit.telemetry.isGeckoViewMode", false);

// changed in v79.0:
pref("apz.windows.force_disable_direct_manipulation", false); // prev: true
pref("browser.newtabpage.activity-stream.asrouter.providers.message-groups", "{\"id\":\"message-groups\",\"enabled\":true,\"type\":\"remote-settings\",\"bucket\":\"message-groups\",\"updateCycleInMs\":3600000}"); // prev: "{\"id\":\"message-groups\",\"enabled\":false,\"type\":\"remote-settings\",\"bucket\":\"message-groups\",\"updateCycleInMs\":3600000}"
pref("browser.newtabpage.activity-stream.discoverystream.region-layout-config", "US,CA,GB,DE"); // prev: "US,CA,GB"
pref("browser.newtabpage.activity-stream.discoverystream.region-spocs-config", "US,CA"); // prev: "US"
pref("browser.tabs.remote.useCrossOriginEmbedderPolicy", true); // prev: false
pref("browser.tabs.remote.useCrossOriginOpenerPolicy", true); // prev: false
pref("browser.urlbar.richSuggestions.tail", true); // prev: false
pref("devtools.accessibility.auto-init.enabled", true); // prev: false
pref("devtools.application.enabled", true); // prev: false
pref("devtools.contenttoolbox.fission", true); // prev: false
pref("devtools.debugger.features.async-captured-stacks", true); // prev: false
pref("devtools.debugger.features.async-live-stacks", false); // prev: true
pref("devtools.responsive.browserUI.enabled", true); // prev: false
pref("dom.ipc.tabs.shutdownTimeoutSecs", 20); // prev: 5
pref("dom.manifest.enabled", true); // prev: false
pref("dom.postMessage.sharedArrayBuffer.withCOOP_COEP", true); // prev: false
pref("dom.targetBlankNoOpener.enabled", true); // prev: false
pref("image.http.accept", ""); // prev: "image/webp,*/*"
pref("javascript.options.asyncstack", true); // prev: false
pref("network.send_ODA_to_content_directly", false); // prev: true
pref("privacy.userInteraction.expiration", 3888000); // prev: 2592000
pref("security.allow_disjointed_external_uri_loads", true); // prev: false
pref("toolkit.shutdown.fastShutdownStage", 1); // prev: 0
pref("webextensions.storage.sync.kinto", false); // prev: true
