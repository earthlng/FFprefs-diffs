/******************************************************************************************
 * diffs between FF prefs v68.0 and v69.0
 *
 * prefs: 3663
 *        3417 matching prefs
 *         246 diffs ( 177 new, 33 gone, 36 different )
 ******************************************************************************************/
// new in v69.0:
pref("abc.def", true);
pref("apz.pinch_lock.scroll_lock_threshold", "0.03125");
pref("apz.test.fails_with_native_injection", false);
pref("browser.contentblocking.database.enabled", true);
pref("browser.display.show_focus_rings", true);
pref("browser.messaging-system.whatsNewPanel.enabled", false);
pref("browser.newtabpage.activity-stream.discoverystream.enabled", false);
pref("browser.newtabpage.activity-stream.discoverystream.endpointSpocsClear", "https://spocs.getpocket.com/user");
pref("browser.newtabpage.activity-stream.discoverystream.hardcoded-basic-layout", false);
pref("browser.newtabpage.activity-stream.discoverystream.spocs-endpoint", "");
pref("browser.tabs.remote.enforceRemoteTypeRestrictions", false);
pref("browser.tabs.remote.separatedMozillaDomains", "addons.mozilla.org,accounts.firefox.com");
pref("browser.tabs.remote.separatePrivilegedMozillaWebContentProcess", false);
pref("browser.tabs.remote.useCORP", false);
pref("browser.ui.scroll-toolbar-threshold", 10);
pref("browser.ui.zoom.force-user-scalable", false);
pref("browser.urlbar.eventTelemetry.enabled", false);
pref("browser.urlbar.openViewOnFocus", false);
pref("browser.viewport.desktopWidth", 980);
pref("devtools.markup.mutationBreakpoints.enabled", false);
pref("devtools.netmonitor.features.webSockets", false);
pref("devtools.netmonitor.ws.payload-preview-height", 450);
pref("devtools.netmonitor.ws.payload-preview-width", 550);
pref("devtools.responsive.viewport.angle", 0);
pref("devtools.webconsole.features.editor", false);
pref("dom.animations-api.autoremove.enabled", false);
pref("dom.audioworklet.enabled", false);
pref("dom.beforeunload_timeout_ms", 1000);
pref("dom.cross_origin_iframes_loaded_in_background", false);
pref("dom.element.transform-getters.enabled", false);
pref("dom.enable_memory_stats", false);
pref("dom.expose_test_interfaces", false);
pref("dom.gamepad.extensions.lightindicator", false);
pref("dom.gamepad.extensions.multitouch", false);
pref("dom.ipc.keepProcessesAlive.privilegedabout", 1);
pref("dom.ipc.processCount.privilegedabout", 1);
pref("dom.ipc.processCount.privilegedmozilla", 1);
pref("dom.ipc.processCount.webIsolated", 1);
pref("dom.ipc.processPriorityManager.enabled", true);
pref("dom.paintWorklet.enabled", false);
pref("dom.script_loader.external_scripts.utf8_parsing.enabled", false);
pref("dom.separate_event_queue_for_post_message.enabled", true);
pref("dom.testing.selection.GetRangesForInterval", false);
pref("dom.vr.process.startup_timeout_ms", 5000);
pref("dom.worker.script_loader.utf8_parsing.enabled", false);
pref("dom.worklet.enabled", false);
pref("dom.xmldocument.async.enabled", false);
pref("dom.xmldocument.load.enabled", false);
pref("full-screen-api.mouse-event-allow-left-button-only", true);
pref("gfx.allow-texture-direct-mapping", true);
pref("gfx.android.rgb16.force", false);
pref("gfx.apitrace.enabled", false);
pref("gfx.canvas.max-size", 32767);
pref("gfx.canvas.remote", false);
pref("gfx.compositor.clearstate", false);
pref("gfx.compositor.glcontext.opaque", false);
pref("gfx.content.skia-font-cache-size", 5);
pref("gfx.device-reset.limit", 10);
pref("gfx.device-reset.threshold-ms", -1);
pref("gfx.direct3d11.allow-keyed-mutex", true);
pref("gfx.direct3d11.reuse-decoder-device", -1);
pref("gfx.direct3d11.sleep-on-create-device", 0);
pref("gfx.downloadable_fonts.sanitize_omt", true);
pref("gfx.e10s.font-list.shared", false);
pref("gfx.e10s.hide-plugins-for-scroll", true);
pref("gfx.logging.crash.length", 16);
pref("gfx.logging.level", 1);
pref("gfx.max-alloc-size", 500000000);
pref("gfx.max-texture-size", 32767);
pref("gfx.partialpresent.force", 0);
pref("gfx.testing.device-fail", false);
pref("gfx.testing.device-reset", 0);
pref("gfx.use-glx-texture-from-pixmap", false);
pref("gfx.use-iosurface-textures", false);
pref("gfx.use-mutex-on-present", false);
pref("gfx.use-surfacetexture-textures", false);
pref("gfx.vsync.collect-scroll-transforms", false);
pref("gfx.vsync.compositor.unobserve-count", 10);
pref("gfx.webrender.late-scenebuild-threshold", 4);
pref("gfx.webrender.max-filter-ops-per-chain", 64);
pref("gfx.webrender.start-debug-server", false);
pref("ghi.jkl", true);
pref("intl.charset.detector.iso2022jp.allowed", true);
pref("layers.acceleration.draw-fps.print-histogram", false);
pref("layers.acceleration.draw-fps.write-to-file", false);
pref("layers.advanced.basic-layer.enabled", false);
pref("layers.d3d11.force-warp", false);
pref("layers.draw-layer-info", false);
pref("layers.dump-client-layers", false);
pref("layers.dump-host-layers", false);
pref("layers.dump-texture", false);
pref("layers.effect.contrast", "0");
pref("layers.effect.grayscale", false);
pref("layers.effect.invert", false);
pref("layers.flash-borders", false);
pref("layers.force-shmem-tiles", false);
pref("layers.force-synchronous-resize", true);
pref("layers.gpu-process.force-enabled", false);
pref("layers.gpu-process.ipc_reply_timeout_ms", 10000);
pref("layers.gpu-process.max_restarts", 1);
pref("layers.gpu-process.max_restarts_with_decoder", 0);
pref("layers.gpu-process.startup_timeout_ms", 5000);
pref("layers.low-precision-opacity", "1");
pref("layers.low-precision-resolution", "0.25");
pref("layers.mlgpu.enable-buffer-cache", true);
pref("layers.mlgpu.enable-buffer-sharing", true);
pref("layers.mlgpu.enable-clear-view", true);
pref("layers.mlgpu.enable-cpu-occlusion", true);
pref("layers.mlgpu.enable-depth-buffer", false);
pref("layers.mlgpu.enable-invalidation", true);
pref("layers.offmainthreadcomposition.force-disabled", false);
pref("layers.omtp.capture-limit", 26214400);
pref("layers.orientation.sync.timeout", 0);
pref("layers.tile-initial-pool-size", 50);
pref("layers.tile-pool-clear-timeout", 5000);
pref("layers.tile-pool-shrink-timeout", 50);
pref("layers.tile-pool-unused-size", 10);
pref("layers.tiles.fade-in.duration-ms", 250);
pref("layers.tiles.fade-in.enabled", false);
pref("layers.transaction.warning-ms", 200);
pref("layers.uniformity-info", false);
pref("layers.use-image-offscreen-surfaces", true);
pref("layout.css.backdrop-filter.enabled", false);
pref("layout.css.cached-scrollbar-styles.enabled", true);
pref("layout.css.line-height.normal-as-resolved-value.enabled", false);
pref("layout.css.marker.restricted", true);
pref("layout.css.moz-binding.content.enabled", false);
pref("layout.css.overflow-logical.enabled", true);
pref("layout.css.shadow-parts.enabled", false);
pref("layout.css.text-decoration-skip-ink.enabled", false);
pref("layout.css.text-decoration-width.enabled", false);
pref("layout.css.text-underline-offset.enabled", false);
pref("layout.css.width-and-height-map-to-aspect-ratio.enabled", false);
pref("layout.display-list.build-twice", false);
pref("layout.display-list.flatten-transform", true);
pref("layout.display-list.retain.verify", false);
pref("layout.display-list.retain.verify.order", false);
pref("layout.display-list.show-rebuild-area", false);
pref("layout.min-active-layer-size", 64);
pref("layout.paint_rects_separately", true);
pref("layout.smaller-painted-layers", false);
pref("media.eme.encrypted-media-encryption-scheme.enabled", false);
pref("media.useAudioChannelService.testing", false);
pref("media.videocontrols.picture-in-picture.video-toggle.always-show", false);
pref("media.webvtt.debug.logging", false);
pref("media.webvtt.testing.events", true);
pref("media.wmf.skip-blacklist", false);
pref("media.wmf.vp9.enabled", true);
pref("network.cookie.sameSite.laxByDefault", false);
pref("network.cookie.sameSite.noneRequiresSecure", false);
pref("network.http.spdy.bug1563538", true);
pref("network.trr.skip-AAAA-when-not-supported", true);
pref("network.trr.wait-for-A-and-AAAA", true);
pref("privacy.restrict3rdpartystorage.url_decorations", "fbclid");
pref("privacy.trackingprotection.socialtracking.annotate.enabled", false);
pref("privacy.trackingprotection.socialtracking.enabled", false);
pref("security.identitypopup.recordEventTelemetry", true);
pref("security.remote_settings.intermediates.parallel_downloads", 8);
pref("services.sync.prefs.sync.app.shield.optoutstudies.enabled", true);
pref("services.sync.prefs.sync.browser.discovery.enabled", true);
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.showSponsored", true);
pref("services.sync.prefs.sync.browser.search.widget.inNavBar", true);
pref("services.sync.prefs.sync.extensions.activeThemeID", true);
pref("signon.generation.available", false);
pref("signon.generation.enabled", false);
pref("signon.includeOtherSubdomainsInLookup", false);
pref("signon.management.page.faqURL", "https://lockwise.firefox.com/faq.html");
pref("signon.management.page.feedbackURL", "https://www.surveygizmo.com/s3/5036102/Lockwise-feedback?ver=%VERSION%");
pref("test.events.async.enabled", false);
pref("test.mousescroll", false);
pref("threads.medium_high_event_queue.enabled", true);
pref("ui.click_hold_context_menus.delay", 500);
pref("webgl.all-angle-options", false);
pref("webgl.allow-immediate-queries", false);
pref("webgl.default-antialias", true);
pref("webgl.enable-surface-texture", false);
pref("webgl.msaa-samples", 4);

// removed, renamed or hidden in v69.0:
pref("app.update.altwindowtype", "Browser:About");
pref("app.update.doorhanger", true);
pref("app.update.idletime", 60);
pref("app.update.silent", false);
pref("browser.newtabpage.activity-stream.prerender", true);
pref("browser.privatebrowsing.searchUI", true);
pref("browser.search.reset.enabled", false);
pref("browser.search.reset.whitelist", "");
pref("devtools.browserconsole.filterContentMessages", false);
pref("devtools.debugger.event-listener-breakpoints", "[]");
pref("dom.ipc.keepProcessesAlive.privileged", 1);
pref("dom.ipc.processCount.privileged", 1);
pref("dom.vr.external.enabled", true);
pref("dom.vr.oculus.quit.timeout", 10000);
pref("dom.vr.puppet.submitframe", 0);
pref("dom.vr.service.enabled", true);
pref("dom.vr.test.enabled", false);
pref("gfx.downloadable_fonts.woff2.enabled", true);
pref("gfx.webrender.blob.invalidation", true);
pref("gl.msaa-level", 2);
pref("layout.css.prefixes.webkit", true);
pref("layout.css.simple-moz-gradient.enabled", true);
pref("media.autoplay.allow-muted", true);
pref("media.autoplay.blackList-override-default", true);
pref("media.eme.vp9-in-mp4.enabled", false);
pref("media.webaudio.audiocontextoptions-samplerate.enabled", true);
pref("medium_high_event_queue.enabled", true);
pref("plugins.click_to_play", true);
pref("print.extend_native_print_dialog", true);
pref("prio.publicKeyA", "35AC1C7576C7C6EDD7FED6BCFC337B34D48CB4EE45C86BEEFB40BD8875707733");
pref("prio.publicKeyB", "26E6674E65425B823F1F1D5F96E3BB3EF9E406EC7FBA7DEF8B08A35DD135AF50");
pref("security.identitypopup.recordEventElemetry", true);
pref("services.sync.prefs.sync.browser.sessionstore.restore_on_demand", true);

// changed in v69.0:
pref("apz.fling_curve_function_x1", "0"); // prev: "0.0"
pref("apz.fling_curve_function_x2", "1"); // prev: "1.0"
pref("apz.fling_curve_function_y1", "0"); // prev: "0.0"
pref("apz.fling_curve_function_y2", "1"); // prev: "1.0"
pref("apz.pinch_lock.buffer_max_age", 50); // prev: "50"
pref("browser.contentblocking.maxIntroCount", 0); // prev: 5
pref("browser.hiddenWindowChromeURL", "chrome://browser/content/hiddenWindowMac.xhtml"); // prev: "chrome://browser/content/hiddenWindow.xul"
pref("browser.newtabpage.activity-stream.discoverystream.endpoints", "https://getpocket.cdn.mozilla.net/,https://spocs.getpocket.com/"); // prev: "https://getpocket.cdn.mozilla.net/"
pref("browser.newtabpage.activity-stream.section.highlights.rows", 1); // prev: 2
pref("devtools.aboutdebugging.new-enabled", true); // prev: false
pref("devtools.debugger.event-listeners-visible", true); // prev: false
pref("devtools.debugger.features.event-listeners-breakpoints", true); // prev: false
pref("devtools.debugger.prefs-schema-version", 0); // prev: "1.0.9"
pref("devtools.netmonitor.columnsData", "[{\"name\":\"status\",\"minWidth\":30,\"width\":5}, {\"name\":\"method\",\"minWidth\":30,\"width\":5}, {\"name\":\"domain\",\"minWidth\":30,\"width\":10}, {\"name\":\"file\",\"minWidth\":30,\"width\":25}, {\"name\":\"url\",\"minWidth\":30,\"width\":25}, {\"name\":\"cause\",\"minWidth\":30,\"width\":10},{\"name\":\"type\",\"minWidth\":30,\"width\":5},{\"name\":\"transferred\",\"minWidth\":30,\"width\":10},{\"name\":\"contentSize\",\"minWidth\":30,\"width\":5},{\"name\":\"waterfall\",\"minWidth\":150,\"width\":25}]"); // prev: "[{\"name\":\"status\",\"minWidth\":30,\"width\":5}, {\"name\":\"method\",\"minWidth\":30,\"width\":5}, {\"name\":\"domain\",\"minWidth\":30,\"width\":10}, {\"name\":\"file\",\"minWidth\":30,\"width\":25}, {\"name\":\"cause\",\"minWidth\":30,\"width\":10},{\"name\":\"type\",\"minWidth\":30,\"width\":5},{\"name\":\"transferred\",\"minWidth\":30,\"width\":10},{\"name\":\"contentSize\",\"minWidth\":30,\"width\":5},{\"name\":\"waterfall\",\"minWidth\":150,\"width\":25}]"
pref("devtools.webconsole.groupWarningMessages", true); // prev: false
pref("dom.promise_rejection_events.enabled", true); // prev: false
pref("gfx.canvas.azure.backends", "direct2d1.1,skia"); // prev: "direct2d1.1,skia,cairo"
pref("gfx.content.azure.backends", "direct2d1.1,skia"); // prev: "direct2d1.1,skia,cairo"
pref("javascript.options.experimental.await_fix", true); // prev: false
pref("javascript.options.experimental.fields", true); // prev: false
pref("layout.css.contain.enabled", true); // prev: false
pref("layout.css.resizeobserver.enabled", true); // prev: false
pref("layout.css.supports-selector.enabled", true); // prev: false
pref("layout.display-list.retain.chrome", true); // prev: false
pref("media.devices.insecure.enabled", false); // prev: true
pref("network.cookie.cookieBehavior", 4); // prev: 0
pref("network.warnOnAboutNetworking", false); // prev: true
pref("privacy.trackingprotection.cryptomining.enabled", true); // prev: false
pref("trailhead.firstrun.branches", "join-supercharge"); // prev: "join-privacy"
pref("urlclassifier.blockedTable", "moztest-block-simple,mozplugin-block-digest256"); // prev: "test-block-simple,mozplugin-block-digest256"
pref("urlclassifier.malwareTable", "goog-malware-proto,goog-unwanted-proto,moztest-harmful-simple,moztest-malware-simple,moztest-unwanted-simple"); // prev: "goog-malware-proto,goog-unwanted-proto,test-harmful-simple,test-malware-simple,test-unwanted-simple"
pref("urlclassifier.phishTable", "goog-phish-proto,moztest-phish-simple"); // prev: "goog-phish-proto,test-phish-simple"
pref("urlclassifier.trackingAnnotationTable", "moztest-track-simple,ads-track-digest256,social-track-digest256,analytics-track-digest256,content-track-digest256"); // prev: "test-track-simple,ads-track-digest256,social-track-digest256,analytics-track-digest256,content-track-digest256"
pref("urlclassifier.trackingAnnotationWhitelistTable", "moztest-trackwhite-simple,mozstd-trackwhite-digest256"); // prev: "test-trackwhite-simple,mozstd-trackwhite-digest256"
pref("urlclassifier.trackingTable", "moztest-track-simple,base-track-digest256"); // prev: "test-track-simple,base-track-digest256"
pref("urlclassifier.trackingWhitelistTable", "moztest-trackwhite-simple,mozstd-trackwhite-digest256"); // prev: "test-trackwhite-simple,mozstd-trackwhite-digest256"
