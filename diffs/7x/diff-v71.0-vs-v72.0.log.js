/******************************************************************************************
 * diffs between FF prefs v71.0 and v72.0
 *
 * prefs: 3884
 *        3755 matching prefs
 *         129 diffs ( 77 new, 29 gone, 23 different )
 ******************************************************************************************/
// new in v72.0:
pref("browser.bookmarks.editDialog.maxRecentFolders", 7);
pref("browser.messaging-system.personalized-cfr.scores", "{}");
pref("browser.messaging-system.personalized-cfr.score-threshold", 5000);
pref("browser.newtabpage.activity-stream.discoverystream.flight.blocks", "{}");
pref("browser.newtabpage.activity-stream.discoverystream.lang-layout-config", "en");
pref("browser.search.modernConfig", false);
pref("browser.tabs.remote.dataUriInDefaultWebProcess", false);
pref("browser.urlbar.update1", false);
pref("browser.urlbar.update1.expandTextOnFocus", false);
pref("browser.urlbar.update1.view.stripHttps", false);
pref("devtools.debugger.features.windowless-service-workers", false);
pref("devtools.inspector.color-scheme-simulation.enabled", false);
pref("devtools.performance.recording.duration", 0);
pref("devtools.performance.recording.entries", 10000000);
pref("devtools.performance.recording.features", "[\"js\",\"leaf\",\"stackwalk\"]");
pref("devtools.performance.recording.interval", 1000);
pref("devtools.performance.recording.threads", "[\"GeckoMain\",\"Compositor\",\"Renderer\"]");
pref("devtools.recordreplay.enabled", false);
pref("devtools.recordreplay.fastLogpoints", false);
pref("docshell.shistory.testing.bfevict", false);
pref("dom.mozPaintCount.enabled", false);
pref("dom.postMessage.sharedArrayBuffer.bypassCOOP_COEP.insecure.enabled", false);
pref("dom.vr.webxr.enabled", false);
pref("dom.webcomponents.elementInternals.enabled", false);
pref("dom.webgpu.enabled", false);
pref("dom.webshare.requireinteraction", true);
pref("extensions.blocklist.useXML", true);
pref("extensions.content_script_csp.enabled", false);
pref("extensions.content_script_csp.report_only", true);
pref("extensions.contentblocker.enabled", false);
pref("fission.sessionHistoryInParent", false);
pref("font.cjk_pref_fallback_order", "zh-cn,zh-hk,zh-tw,ja,ko");
pref("gfx.compositor.gpu-migration", 1);
pref("gfx.core-animation.tint-opaque", false);
pref("gfx.webrender.compositor", false);
pref("gfx.webrender.compositor.max_update_rects", 1);
pref("gfx.webrender.debug.glyph-flashing", false);
pref("gfx.webrender.enable-gpu-markers", false);
pref("gfx.webrender.max-partial-present-rects", 0);
pref("javascript.options.writable_streams", false);
pref("layers.advanced.fission.enabled", false);
pref("layout.css.always-repaint-on-unvisited", false);
pref("layout.css.motion-path-ray.enabled", false);
pref("layout.css.notify-of-unvisited", false);
pref("layout.css.scroll-anchoring.max-consecutive-adjustments", 10);
pref("layout.css.scroll-anchoring.min-average-adjustment-threshold", 3);
pref("layout.css.zoom-transform-hack.enabled", false);
pref("media.geckoview.autoplay.request", false);
pref("media.geckoview.autoplay.request.testing", 0);
pref("media.peerconnection.ice.obfuscate_host_addresses.whitelist", "");
pref("media.peerconnection.sdp.alternate_parse_mode", "never");
pref("media.peerconnection.sdp.parser", "sipcc");
pref("media.rdd-webaudio.batch.size", 100);
pref("media.videocontrols.picture-in-picture.audio-toggle.enabled", false);
pref("mousewheel.ignore_cursor_position_in_lparam", false);
pref("network.http.http3.default-max-stream-blocked", 10);
pref("network.http.http3.default-qpack-table-size", 65536);
pref("network.http.http3.enabled", false);
pref("network.notify.checkForNRPT", true);
pref("network.notify.checkForProxies", true);
pref("network.notify.initial_call", true);
pref("network.preload-experimental", false);
pref("network.trr.enable_when_nrpt_detected", false);
pref("network.trr.enable_when_proxy_detected", false);
pref("network.trr.enable_when_vpn_detected", false);
pref("network.trr.send_accept-language_headers", false);
pref("permissions.isolateBy.privateBrowsing", false);
pref("permissions.isolateBy.userContext", false);
pref("privacy.restrict3rdpartystorage.heuristic.opened_window_after_interaction", true);
pref("privacy.restrict3rdpartystorage.heuristic.window_open", true);
pref("security.cert_pinning.hpkp.enabled", false);
pref("security.osclientcerts.autoload", false);
pref("signon.management.page.showPasswordSyncNotification", true);
pref("signon.storeSignons", true);
pref("svg.text-spacing.enabled", false);
pref("webgl.cgl.multithreaded", true);
pref("widget.disable-dark-scrollbar", false);

// removed, renamed or hidden in v72.0:
pref("accessibility.heading-element-level-changes.enabled", false);
pref("browser.newtabpage.activity-stream.discoverystream.campaign.blocks", "{}");
pref("browser.newtabpage.activity-stream.telemetry.ping.endpoint", "https://tiles.services.mozilla.com/v4/links/activity-stream");
pref("browser.ping-centre.production.endpoint", "https://tiles.services.mozilla.com/v3/links/ping-centre");
pref("browser.ping-centre.staging.endpoint", "https://onyx_tiles.stage.mozaws.net/v3/links/ping-centre");
pref("browser.urlbar.megabar", false);
pref("browser.urlbar.timesBeforeHidingSuggestionsHint", 4);
pref("browser.urlbar.userMadeSearchSuggestionsChoice", false);
pref("devtools.command-button-scratchpad.enabled", false);
pref("devtools.scratchpad.editorFontSize", 12);
pref("devtools.scratchpad.enableAutocompletion", true);
pref("devtools.scratchpad.enabled", false);
pref("devtools.scratchpad.lineNumbers", true);
pref("devtools.scratchpad.recentFilesMax", 10);
pref("devtools.scratchpad.showTrailingSpace", false);
pref("devtools.scratchpad.wrapText", false);
pref("dom.indexedDB.enabled", true);
pref("dom.promise_rejection_events.enabled", true);
pref("dom.webgpu.enable", false);
pref("gfx.compositor.glcontext.opaque", false);
pref("gfx.core-animation.enabled", false);
pref("gl.require-hardware", false);
pref("layout.css.moz-binding.content.enabled", false);
pref("media.peerconnection.sdp.rust.compare", false);
pref("media.peerconnection.sdp.rust.enabled", false);
pref("network.netlink.route.check.IPv4", "23.219.91.27");
pref("network.netlink.route.check.IPv6", "2a02:26f0:40::17db:5b1b");
pref("plugin.defaultXpi.state", 2);
pref("toolkit.telemetry.hybridContent.enabled", true);

// changed in v72.0:
pref("app.update.staging.enabled", true); // prev: false
pref("browser.newtabpage.activity-stream.asrouter.providers.whats-new-panel", "{\"id\":\"whats-new-panel\",\"enabled\":true,\"type\":\"remote-settings\",\"bucket\":\"whats-new-panel\",\"updateCycleInMs\":3600000}"); // prev: "{\"id\":\"whats-new-panel\",\"enabled\":true,\"type\":\"remote-settings\",\"bucket\":\"whats-new-panel\",\"updateCycleInMs\":3600000,\"exclude\":[\"EXTENDED_TRIPLETS_PRETRAILHEAD\"]}"
pref("browser.newtabpage.activity-stream.telemetry.structuredIngestion.endpoint", "https://incoming.telemetry.mozilla.org/submit"); // prev: "https://incoming.telemetry.mozilla.org/submit/activity-stream"
pref("devtools.debugger.features.watchpoints", true); // prev: false
pref("dom.formdata.event.enabled", true); // prev: false
pref("dom.security.respect_document_nosniff", true); // prev: false
pref("dom.webnotifications.requireuserinteraction", true); // prev: false
pref("gfx.direct3d11.use-double-buffering", true); // prev: false
pref("layout.css.individual-transform.enabled", true); // prev: false
pref("layout.css.motion-path.enabled", true); // prev: false
pref("layout.css.shadow-parts.enabled", true); // prev: false
pref("layout.viewport_contains_no_contents_area", true); // prev: false
pref("media.rdd-opus.enabled", true); // prev: false
pref("media.rdd-vorbis.enabled", true); // prev: false
pref("media.rdd-wav.enabled", true); // prev: false
pref("permissions.desktop-notification.postPrompt.enabled", true); // prev: false
pref("privacy.trackingprotection.fingerprinting.enabled", true); // prev: false
pref("security.tls.hello_downgrade_check", true); // prev: false
pref("services.sync.engine.bookmarks.buffer", true); // prev: false
pref("urlclassifier.features.socialtracking.annotate.blacklistTables", "social-tracking-protection-facebook-digest256,social-tracking-protection-linkedin-digest256,social-tracking-protection-twitter-digest256"); // prev: "social-tracking-protection-digest256,social-tracking-protection-facebook-digest256,social-tracking-protection-linkedin-digest256,social-tracking-protection-twitter-digest256"
pref("urlclassifier.features.socialtracking.blacklistTables", "social-tracking-protection-facebook-digest256,social-tracking-protection-linkedin-digest256,social-tracking-protection-twitter-digest256"); // prev: "social-tracking-protection-digest256,social-tracking-protection-facebook-digest256,social-tracking-protection-linkedin-digest256,social-tracking-protection-twitter-digest256"
pref("urlclassifier.trackingTable", "moztest-track-simple,ads-track-digest256,social-track-digest256,analytics-track-digest256"); // prev: "moztest-track-simple,base-track-digest256"
pref("webgl.dxgl.enabled", true); // prev: false
