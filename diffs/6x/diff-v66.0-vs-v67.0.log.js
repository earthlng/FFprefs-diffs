/******************************************************************************************
 * diffs between FF prefs v66.0 and v67.0
 *
 * prefs: 3466
 *        3311 matching prefs
 *         155 diffs ( 94 new, 37 gone, 24 different )
 ******************************************************************************************/
// new in v67.0:
pref("app.update.log.file", false);
pref("apz.pinch_lock.buffer_max_age", "50");
pref("browser.aboutConfig.showWarning", true);
pref("browser.contentblocking.cryptomining.preferences.ui.enabled", true);
pref("browser.contentblocking.fingerprinting.preferences.ui.enabled", true);
pref("browser.contentblocking.introDelaySeconds", 1800);
pref("browser.measurement.render_anims_and_video_solid", false);
pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", true);
pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", true);
pref("browser.newtabpage.activity-stream.darkModeMessage", false);
pref("browser.newtabpage.activity-stream.discoverystream.endpoints", "https://getpocket.cdn.mozilla.net/");
pref("browser.newtabpage.activity-stream.discoverystream.optOut.0", false);
pref("browser.newtabpage.activity-stream.discoverystream.rec.impressions", "{}");
pref("browser.newtabpage.activity-stream.discoverystream.spoc.impressions", "{}");
pref("browser.newtabpage.activity-stream.telemetry.structuredIngestion", false);
pref("browser.newtabpage.activity-stream.telemetry.structuredIngestion.endpoint", "https://incoming.telemetry.mozilla.org/submit/activity-stream");
pref("browser.tabs.remote.useCrossOriginOpenerPolicy", false);
pref("browser.tabs.remote.useCrossOriginPolicy", false);
pref("browser.tabs.remote.useHTTPResponseProcessSelection", false);
pref("browser.tabs.unloadOnLowMemory", true);
pref("browser.toolbars.keyboard_navigation", true);
pref("devtools.debugger.map-scopes-enabled", false);
pref("devtools.debugger.ui.editor-wrapping", false);
pref("devtools.layout.boxmodel.highlightProperty", false);
pref("devtools.markup.beautifyOnCopy", false);
pref("devtools.netmonitor.columnsData", "[{\"name\":\"status\",\"minWidth\":30,\"width\":5}, {\"name\":\"method\",\"minWidth\":30,\"width\":5}, {\"name\":\"domain\",\"minWidth\":30,\"width\":10}, {\"name\":\"file\",\"minWidth\":30,\"width\":25}, {\"name\":\"cause\",\"minWidth\":30,\"width\":10},{\"name\":\"type\",\"minWidth\":30,\"width\":5},{\"name\":\"transferred\",\"minWidth\":30,\"width\":10},{\"name\":\"contentSize\",\"minWidth\":30,\"width\":5},{\"name\":\"waterfall\",\"minWidth\":150,\"width\":25}]");
pref("devtools.netmonitor.features.resizeColumns", true);
pref("devtools.netmonitor.response.ui.limit", 10240);
pref("devtools.performance.recording.objdirs", "[]");
pref("devtools.webconsole.groupWarningMessages", false);
pref("dom.inputevent.data.enabled", true);
pref("dom.inputevent.datatransfer.enabled", true);
pref("dom.prototype_document_cache.enabled", true);
pref("dom.storage.client_validation", true);
pref("dom.storage_access.auto_grants.delayed", true);
pref("dom.w3c_touch_events.legacy_apis.enabled", false);
pref("dom.webnotifications.allowinsecure", false);
pref("dom.webnotifications.requireuserinteraction", false);
pref("dom.worker.use_medium_high_event_queue", true);
pref("extensions.allowPrivateBrowsingByDefault", false);
pref("extensions.htmlaboutaddons.enabled", false);
pref("features.normandy-remote-settings.enabled", false);
pref("fission.frontend.simulate-events", false);
pref("fission.frontend.simulate-messages", false);
pref("gfx.webrender.debug.small-screen", false);
pref("gl.allow-high-power", true);
pref("identity.fxaccounts.pairing.enabled", true);
pref("identity.fxaccounts.remote.pairing.uri", "wss://channelserver.services.mozilla.com");
pref("identity.fxaccounts.toolbar.accessed", false);
pref("identity.fxaccounts.toolbar.enabled", true);
pref("javascript.options.experimental.fields", false);
pref("javascript.options.ion.full.threshold", 100000);
pref("layout.css.scroll-snap-v1.enabled", false);
pref("layout.cursor.block.enabled", true);
pref("layout.cursor.block.max-size", 32);
pref("layout.lower_priority_refresh_driver_during_load", true);
pref("media.gmp-gmpopenh264.enabled", true);
pref("media.gmp-gmpopenh264.visible", true);
pref("media.rdd-vorbis.enabled", false);
pref("media.wmf.low-latency.force-disabled", false);
pref("medium_high_event_queue.enabled", true);
pref("network.cookieSettings.unblocked_for_testing", false);
pref("network.http.referer.defaultPolicy.trackers", 3);
pref("network.http.referer.defaultPolicy.trackers.pbmode", 2);
pref("network.protocol-handler.external.res", false);
pref("network.proxy.allow_hijacking_localhost", false);
pref("pdfjs.viewOnLoad", 0);
pref("permissions.desktop-notification.postPrompt.enabled", false);
pref("permissions.eventTelemetry.enabled", false);
pref("permissions.postPrompt.animate", true);
pref("prio.enabled", false);
pref("privacy.documentCookies.maxage", 0);
pref("privacy.resistFingerprinting.jsmloglevel", "Warn");
pref("privacy.trackingprotection.cryptomining.annotate.enabled", false);
pref("privacy.trackingprotection.fingerprinting.annotate.enabled", false);
pref("security.block_importScripts_with_wrong_mime", true);
pref("security.certerrors.mitm.auto_enable_enterprise_roots", false);
pref("security.certerrors.mitm.priming.enabled", true);
pref("security.certerrors.mitm.priming.endpoint", "https://mitmdetection.services.mozilla.com/");
pref("security.remote_settings.intermediates.downloads_per_poll", 100);
pref("security.sandbox.rdd.win32k-disable", true);
pref("services.common.uptake.sampleRate", 1);
pref("services.sync.prefs.sync.media.autoplay.default", true);
pref("services.sync.prefs.sync.privacy.trackingprotection.cryptomining.annotate.enabled", true);
pref("services.sync.prefs.sync.privacy.trackingprotection.cryptomining.enabled", true);
pref("services.sync.prefs.sync.privacy.trackingprotection.fingerprinting.annotate.enabled", true);
pref("services.sync.prefs.sync.privacy.trackingprotection.fingerprinting.enabled", true);
pref("signon.autofillForms.autocompleteOff", true);
pref("signon.privateBrowsingCapture.enabled", true);
pref("signon.showAutoCompleteFooter", true);
pref("toolkit.lazyHiddenWindow", true);
pref("trailhead.firstrun.branches", "control");
pref("ui.use_standins_for_native_colors", false);
pref("webgl.default-low-power", false);

// removed, renamed or hidden in v67.0:
pref("app.normandy.remotesettings.enabled", false);
pref("browser.cache.disk.smart_size.first_run", true);
pref("browser.cache.disk.smart_size.use_old_max", true);
pref("browser.fission.simulate", false);
pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr", true);
pref("browser.newtabpage.activity-stream.feeds.migration", true);
pref("browser.newtabpage.activity-stream.migrationExpired", false);
pref("browser.newtabpage.activity-stream.migrationLastShownDate", 0);
pref("browser.newtabpage.activity-stream.migrationRemainingDays", 4);
pref("devtools.browserconsole.ui.filterbar", false);
pref("devtools.canvasdebugger.enabled", false);
pref("devtools.debugger.features.pause-points", true);
pref("devtools.flexboxinspector.enabled", true);
pref("devtools.inspector.changes.enabled", true);
pref("devtools.inspector.flexboxHighlighter.enabled", true);
pref("devtools.inspector.fonthighlighter.enabled", true);
pref("devtools.inspector.scrollable-badges.enabled", false);
pref("devtools.inspector.shapesHighlighter.enabled", true);
pref("devtools.shadereditor.enabled", false);
pref("devtools.webaudioeditor.enabled", false);
pref("devtools.webaudioeditor.inspectorWidth", 300);
pref("devtools.webconsole.ui.filterbar", false);
pref("dom.clearSiteData.enabled", true);
pref("dom.event.highrestimestamp.enabled", true);
pref("dom.idle-observers-api.fuzz_time.disabled", true);
pref("dom.performance.enable_scheduler_timing", true);
pref("dom.push.alwaysConnect", false);
pref("dom.select_popup_in_content.enabled", false);
pref("dom.ua_widget.enabled", true);
pref("extensions.geckoProfiler.getSymbolRules", "localBreakpad,dump_syms.exe");
pref("gfx.canvas.skiagl.dynamic-cache", true);
pref("media.wmf.vp9.enabled", true);
pref("network.cookie.leave-secure-alone", true);
pref("pdfjs.disableOpenActionDestination", true);
pref("pdfjs.disablePageMode", false);
pref("pdfjs.showPreviousViewOnLoad", true);
pref("privacy.permissionPrompts.showCloseButton", false);

// changed in v67.0:
pref("browser.dictionaries.download.url", "https://addons.mozilla.org/%LOCALE%/firefox/language-tools/"); // prev: "https://addons.mozilla.org/%LOCALE%/firefox/dictionaries/"
pref("browser.newtabpage.activity-stream.asrouter.providers.cfr", "{\"id\":\"cfr\",\"enabled\":true,\"type\":\"local\",\"localProvider\":\"CFRMessageProvider\",\"frequency\":{\"custom\":[{\"period\":\"daily\",\"cap\":1}]},\"categories\":[\"cfrAddons\",\"cfrFeatures\"]}"); // prev: "{\"id\":\"cfr\",\"enabled\":true,\"type\":\"local\",\"localProvider\":\"CFRMessageProvider\",\"frequency\":{\"custom\":[{\"period\":\"daily\",\"cap\":1}]}}"
pref("browser.newtabpage.activity-stream.discoverystream.config", "{\"api_key_pref\":\"extensions.pocket.oAuthConsumerKey\",\"enabled\":false,\"show_spocs\":false,\"layout_endpoint\":\"https://getpocket.cdn.mozilla.net/v3/newtab/layout?version=1&consumer_key=$apiKey&layout_variant=basic\"}"); // prev: "{\"api_key_pref\":\"extensions.pocket.oAuthConsumerKey\",\"enabled\":false,\"show_spocs\":true,\"layout_endpoint\":\"https://getpocket.com/v3/newtab/layout?version=1&consumer_key=$apiKey&layout_variant=basic\"}"
pref("browser.sessionstore.max_tabs_undo", 25); // prev: 10
pref("devtools.debugger.features.column-breakpoints", true); // prev: false
pref("devtools.debugger.features.log-points", true); // prev: false
pref("devtools.debugger.features.windowless-workers", true); // prev: false
pref("devtools.performance.recording.ui-base-url", "https://profiler.firefox.com"); // prev: "https://perf-html.io"
pref("dom.block_external_protocol_in_iframes", true); // prev: false
pref("dom.keyboardevent.keypress.hack.dispatch_non_printable_keys", "www.icloud.com"); // prev: ""
pref("dom.keyboardevent.keypress.hack.use_legacy_keycode_and_charcode", "*.collabserv.com,*.gov.online.office365.us,*.officeapps-df.live.com,*.officeapps.live.com,*.online.office.de,*.partner.officewebapps.cn,*.scniris.com"); // prev: ""
pref("dom.popup_allowed_events", "change click dblclick mouseup pointerup notificationclick reset submit touchend contextmenu"); // prev: "change click dblclick mouseup pointerup notificationclick reset submit touchend"
pref("extensions.webextensions.restrictedDomains", "accounts-static.cdn.mozilla.net,accounts.firefox.com,addons.cdn.mozilla.net,addons.mozilla.org,api.accounts.firefox.com,content.cdn.mozilla.net,discovery.addons.mozilla.org,input.mozilla.org,install.mozilla.org,oauth.accounts.firefox.com,profile.accounts.firefox.com,support.mozilla.org,sync.services.mozilla.com"); // prev: "accounts-static.cdn.mozilla.net,accounts.firefox.com,addons.cdn.mozilla.net,addons.mozilla.org,api.accounts.firefox.com,content.cdn.mozilla.net,discovery.addons.mozilla.org,input.mozilla.org,install.mozilla.org,oauth.accounts.firefox.com,profile.accounts.firefox.com,support.mozilla.org,sync.services.mozilla.com,testpilot.firefox.com"
pref("image.cache.max-rasterized-svg-threshold-kb", 204800); // prev: 92160
pref("javascript.options.dynamicImport", true); // prev: false
pref("layers.shared-buffer-provider.enabled", true); // prev: false
pref("media.autoplay.default", 1); // prev: 0
pref("media.av1.use-dav1d", true); // prev: false
pref("network.proxy.no_proxies_on", ""); // prev: "localhost, 127.0.0.1"
pref("pdfjs.scrollModeOnLoad", -1); // prev: 0
pref("pdfjs.sidebarViewOnLoad", -1); // prev: 0
pref("pdfjs.spreadModeOnLoad", -1); // prev: 0
pref("security.webauth.u2f", true); // prev: false
pref("urlclassifier.disallow_completions", "goog-downloadwhite-digest256,base-track-digest256,mozstd-trackwhite-digest256,content-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256,block-flash-digest256,except-flash-digest256,allow-flashallow-digest256,except-flashallow-digest256,block-flashsubdoc-digest256,except-flashsubdoc-digest256,goog-passwordwhite-proto,ads-track-digest256,social-track-digest256,analytics-track-digest256,base-fingerprinting-track-digest256,content-fingerprinting-track-digest256,base-cryptomining-track-digest256,content-cryptomining-track-digest256,fanboyannoyance-ads-digest256,fanboysocial-ads-digest256,easylist-ads-digest256,easyprivacy-ads-digest256,adguard-ads-digest256"); // prev: "test-malware-simple,test-harmful-simple,test-phish-simple,test-unwanted-simple,test-track-simple,test-trackwhite-simple,test-block-simple,goog-downloadwhite-digest256,base-track-digest256,mozstd-trackwhite-digest256,content-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256,block-flash-digest256,except-flash-digest256,allow-flashallow-digest256,except-flashallow-digest256,block-flashsubdoc-digest256,except-flashsubdoc-digest256,goog-passwordwhite-proto,ads-track-digest256,social-track-digest256,analytics-track-digest256,base-fingerprinting-track-digest256,content-fingerprinting-track-digest256,base-cryptomining-track-digest256,content-cryptomining-track-digest256,fanboyannoyance-ads-digest256,fanboysocial-ads-digest256,easylist-ads-digest256,easyprivacy-ads-digest256,adguard-ads-digest256"
