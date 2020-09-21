/******************************************************************************************
 * diffs between FF prefs v68.12.0esr and v78.0esr
 *
 * prefs: 4256
 *        3163 matching prefs
 *        1093 diffs ( 762 new, 214 gone, 117 different )
 ******************************************************************************************/
// new in v78.0esr:
pref("accessibility.ARIAReflection.enabled", false);
pref("app.normandy.last_seen_buildid", "");
pref("app.normandy.onsync_skew_sec", 600);
pref("apz.allow_zooming_out", false);
pref("apz.pinch_lock.scroll_lock_threshold", "0.03125");
pref("apz.test.fails_with_native_injection", false);
pref("apz.touch_acceleration_factor_x", "1.0");
pref("apz.touch_acceleration_factor_y", "1.0");
pref("apz.windows.force_disable_direct_manipulation", true);
pref("apz.windows.use_direct_manipulation", false);
pref("apz.zoom-to-focused-input.enabled", true);
pref("browser.aboutwelcome.enabled", true);
pref("browser.aboutwelcome.overrideContent", "");
pref("browser.bookmarks.editDialog.maxRecentFolders", 7);
pref("browser.cache.cache_isolation", false);
pref("browser.cache.disk.content_type_media_limit", 50);
pref("browser.cache.memory.capacity", -1);
pref("browser.cache.offline.storage.enable", true);
pref("browser.contentblocking.cfr-milestone.enabled", true);
pref("browser.contentblocking.cfr-milestone.milestone-achieved", 0);
pref("browser.contentblocking.cfr-milestone.milestones", "[1000, 5000, 10000, 25000, 50000, 100000, 500000]");
pref("browser.contentblocking.customBlockList.preferences.ui.enabled", false);
pref("browser.contentblocking.database.enabled", true);
pref("browser.contentblocking.report.cookie.url", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/cross-site-tracking-report");
pref("browser.contentblocking.report.cryptominer.url", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/cryptominers-report");
pref("browser.contentblocking.report.endpoint_url", "https://monitor.firefox.com/user/breach-stats?includeResolved=true");
pref("browser.contentblocking.report.fingerprinter.url", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/fingerprinters-report");
pref("browser.contentblocking.report.lockwise.enabled", true);
pref("browser.contentblocking.report.lockwise.how_it_works.url", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/password-manager-report");
pref("browser.contentblocking.report.lockwise.mobile-android.url", "https://play.google.com/store/apps/details?id=mozilla.lockbox&referrer=utm_source%3Dprotection_report%26utm_content%3Dmobile_promotion");
pref("browser.contentblocking.report.lockwise.mobile-ios.url", "https://apps.apple.com/app/id1314000270");
pref("browser.contentblocking.report.manage_devices.url", "https://accounts.firefox.com/settings/clients");
pref("browser.contentblocking.report.mobile-android.url", "https://play.google.com/store/apps/details?id=org.mozilla.firefox&referrer=utm_source%3Dprotection_report%26utm_content%3Dmobile_promotion");
pref("browser.contentblocking.report.mobile-ios.url", "https://apps.apple.com/app/firefox-private-safe-browser/id989804926");
pref("browser.contentblocking.report.monitor.enabled", true);
pref("browser.contentblocking.report.monitor.home_page_url", "https://monitor.firefox.com/user/dashboard");
pref("browser.contentblocking.report.monitor.how_it_works.url", "https://monitor.firefox.com/about");
pref("browser.contentblocking.report.monitor.preferences_url", "https://monitor.firefox.com/user/preferences");
pref("browser.contentblocking.report.monitor.sign_in_url", "https://monitor.firefox.com/oauth/init?entrypoint=protection_report_monitor&utm_source=about-protections&email=");
pref("browser.contentblocking.report.monitor.url", "https://monitor.firefox.com/?entrypoint=protection_report_monitor&utm_source=about-protections");
pref("browser.contentblocking.report.proxy.enabled", false);
pref("browser.contentblocking.report.proxy_extension.url", "https://fpn.firefox.com/browser?utm_source=firefox-desktop&utm_medium=referral&utm_campaign=about-protections&utm_content=about-protections");
pref("browser.contentblocking.report.show_mobile_app", false);
pref("browser.contentblocking.report.social.url", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/social-media-tracking-report");
pref("browser.contentblocking.report.tracker.url", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/tracking-content-report");
pref("browser.display.permit_backplate", true);
pref("browser.display.show_focus_rings", true);
pref("browser.display.suppress_canvas_background_image_on_forced_colors", true);
pref("browser.find.anonymous_content.enabled", true);
pref("browser.fixup.domainsuffixwhitelist.example", true);
pref("browser.fixup.domainsuffixwhitelist.internal", true);
pref("browser.fixup.domainsuffixwhitelist.invalid", true);
pref("browser.fixup.domainsuffixwhitelist.local", true);
pref("browser.fixup.domainsuffixwhitelist.localhost", true);
pref("browser.fixup.domainsuffixwhitelist.test", true);
pref("browser.fixup.fallback-to-https", true);
pref("browser.helperApps.showOpenOptionForPdfJS", true);
pref("browser.messaging-system.personalized-cfr.scores", "{}");
pref("browser.messaging-system.personalized-cfr.score-threshold", 5000);
pref("browser.messaging-system.whatsNewPanel.enabled", true);
pref("browser.newtabpage.activity-stream.asrouter.providers.message-groups", "{\"id\":\"message-groups\",\"enabled\":false,\"type\":\"remote-settings\",\"bucket\":\"message-groups\",\"updateCycleInMs\":3600000}");
pref("browser.newtabpage.activity-stream.asrouter.providers.messaging-experiments", "{\"id\":\"messaging-experiments\",\"enabled\":true,\"type\":\"remote-experiments\",\"messageGroups\":[\"cfr\",\"whats-new-panel\",\"moments-page\",\"snippets\",\"cfr-fxa\",\"aboutwelcome\"],\"updateCycleInMs\":3600000}");
pref("browser.newtabpage.activity-stream.asrouter.providers.whats-new-panel", "{\"id\":\"whats-new-panel\",\"enabled\":true,\"type\":\"remote-settings\",\"bucket\":\"whats-new-panel\",\"updateCycleInMs\":3600000}");
pref("browser.newtabpage.activity-stream.asrouter.useRemoteL10n", true);
pref("browser.newtabpage.activity-stream.discoverystream.enabled", true);
pref("browser.newtabpage.activity-stream.discoverystream.endpointSpocsClear", "https://spocs.getpocket.com/user");
pref("browser.newtabpage.activity-stream.discoverystream.engagementLabelEnabled", false);
pref("browser.newtabpage.activity-stream.discoverystream.flight.blocks", "{}");
pref("browser.newtabpage.activity-stream.discoverystream.hardcoded-basic-layout", false);
pref("browser.newtabpage.activity-stream.discoverystream.isCollectionDismissible", true);
pref("browser.newtabpage.activity-stream.discoverystream.personalization.modelKeys", "nb_model_arts_and_entertainment, nb_model_autos_and_vehicles, nb_model_beauty_and_fitness, nb_model_blogging_resources_and_services, nb_model_books_and_literature, nb_model_business_and_industrial, nb_model_computers_and_electronics, nb_model_finance, nb_model_food_and_drink, nb_model_games, nb_model_health, nb_model_hobbies_and_leisure, nb_model_home_and_garden, nb_model_internet_and_telecom, nb_model_jobs_and_education, nb_model_law_and_government, nb_model_online_communities, nb_model_people_and_society, nb_model_pets_and_animals, nb_model_real_estate, nb_model_reference, nb_model_science, nb_model_shopping, nb_model_sports, nb_model_travel");
pref("browser.newtabpage.activity-stream.discoverystream.personalization.version", 1);
pref("browser.newtabpage.activity-stream.discoverystream.recs.personalized", false);
pref("browser.newtabpage.activity-stream.discoverystream.region-basic-layout", true);
pref("browser.newtabpage.activity-stream.discoverystream.region-layout-config", "US,CA,GB");
pref("browser.newtabpage.activity-stream.discoverystream.region-spocs-config", "US");
pref("browser.newtabpage.activity-stream.discoverystream.region-stories-config", "US,DE,CA,GB");
pref("browser.newtabpage.activity-stream.discoverystream.spocs.personalized", true);
pref("browser.newtabpage.activity-stream.discoverystream.spocs-endpoint", "");
pref("browser.newtabpage.activity-stream.feeds.recommendationproviderswitcher", true);
pref("browser.newtabpage.activity-stream.feeds.system.topsites", true);
pref("browser.newtabpage.activity-stream.feeds.system.topstories", false);
pref("browser.pdf.launchDefaultEdgeAsApp", true);
pref("browser.privatebrowsing.forceMediaMemoryCache", false);
pref("browser.region.log", false);
pref("browser.region.network.scan", false);
pref("browser.region.network.url", "https://location.services.mozilla.com/v1/country?key=%MOZILLA_API_KEY%");
pref("browser.region.timeout", 5000);
pref("browser.search.modernConfig", true);
pref("browser.search.separatePrivateDefault", false);
pref("browser.search.separatePrivateDefault.ui.banner.max", 0);
pref("browser.search.separatePrivateDefault.ui.enabled", false);
pref("browser.search.suggest.enabled.private", false);
pref("browser.ssb.enabled", false);
pref("browser.startup.homepage.abouthome_cache.enabled", false);
pref("browser.tabs.allowTabDetach", true);
pref("browser.tabs.documentchannel", true);
pref("browser.tabs.documentchannel.parent-initiated", true);
pref("browser.tabs.documentchannel.ppdc", true);
pref("browser.tabs.remote.dataUriInDefaultWebProcess", false);
pref("browser.tabs.remote.enforceRemoteTypeRestrictions", false);
pref("browser.tabs.remote.force-paint", true);
pref("browser.tabs.remote.separatedMozillaDomains", "addons.mozilla.org,accounts.firefox.com");
pref("browser.tabs.remote.separatePrivilegedMozillaWebContentProcess", true);
pref("browser.tabs.remote.useCrossOriginEmbedderPolicy", false);
pref("browser.tabs.tabmanager.enabled", false);
pref("browser.ui.zoom.force-user-scalable", false);
pref("browser.urlbar.dnsResolveSingleWordsAfterSearch", 1);
pref("browser.urlbar.eventTelemetry.enabled", false);
pref("browser.urlbar.restyleSearches", false);
pref("browser.urlbar.richSuggestions.tail", false);
pref("browser.urlbar.suggest.topsites", true);
pref("browser.urlbar.update1.interventions", true);
pref("browser.urlbar.update1.searchTips", true);
pref("browser.urlbar.update2.expandTextOnFocus", false);
pref("browser.viewport.desktopWidth", 980);
pref("browser.xr.warning.infoURL", "https://www.mozilla.org/%LOCALE%/firefox/xr/");
pref("canvas.mozgetasfile.enabled", false);
pref("content.cors.disable", false);
pref("content.notify.backoffcount", -1);
pref("content.notify.interval", 120000);
pref("content.notify.ontimer", true);
pref("content.sink.enable_perf_mode", 0);
pref("content.sink.event_probe_rate", 1);
pref("content.sink.initial_perf_time", 2000000);
pref("content.sink.interactive_deflect_count", 0);
pref("content.sink.interactive_parse_time", 3000);
pref("content.sink.interactive_time", 750000);
pref("content.sink.pending_event_mode", 0);
pref("content.sink.perf_deflect_count", 200);
pref("content.sink.perf_parse_time", 360000);
pref("default-browser-agent.enabled", true);
pref("device.sensors.test.events", false);
pref("devtools.accessibility.auto-init.enabled", false);
pref("devtools.browserconsole.input.editor", false);
pref("devtools.browserconsole.input.editorWidth", 0);
pref("devtools.browsertoolbox.fission", false);
pref("devtools.contenttoolbox.fission", false);
pref("devtools.contenttoolbox.webconsole.input.context", false);
pref("devtools.debugger.dom-mutation-breakpoints-visible", false);
pref("devtools.debugger.features.async-captured-stacks", false);
pref("devtools.debugger.features.async-live-stacks", true);
pref("devtools.debugger.features.command-click", false);
pref("devtools.debugger.features.dom-mutation-breakpoints", true);
pref("devtools.debugger.features.frame-step", true);
pref("devtools.debugger.features.inline-preview", true);
pref("devtools.debugger.features.overlay", true);
pref("devtools.debugger.features.watchpoints", true);
pref("devtools.debugger.features.windowless-service-workers", false);
pref("devtools.debugger.log-event-breakpoints", false);
pref("devtools.experiment.f12.shortcut_disabled", false);
pref("devtools.inspector.color-scheme-simulation.enabled", false);
pref("devtools.inspector.compatibility.enabled", false);
pref("devtools.inspector.compatibility.target-browsers", "");
pref("devtools.layout.flex-container.opened", true);
pref("devtools.layout.flex-item.opened", true);
pref("devtools.markup.mutationBreakpoints.enabled", true);
pref("devtools.netmonitor.features.requestBlocking", true);
pref("devtools.netmonitor.features.search", true);
pref("devtools.netmonitor.features.serverSentEvents", false);
pref("devtools.netmonitor.features.webSockets", true);
pref("devtools.netmonitor.panes-search-height", 450);
pref("devtools.netmonitor.panes-search-width", 550);
pref("devtools.netmonitor.ws.displayed-frames.limit", 500);
pref("devtools.netmonitor.ws.messageDataLimit", 100000);
pref("devtools.netmonitor.ws.payload-preview-height", 128);
pref("devtools.netmonitor.ws.visibleColumns", "[\"data\", \"time\"]");
pref("devtools.performance.popup.feature-flag", false);
pref("devtools.performance.popup.intro-displayed", false);
pref("devtools.performance.recording.duration", 0);
pref("devtools.performance.recording.duration.remote", 0);
pref("devtools.performance.recording.entries", 10000000);
pref("devtools.performance.recording.entries.remote", 10000000);
pref("devtools.performance.recording.features", "[\"js\",\"leaf\",\"stackwalk\",\"screenshots\"]");
pref("devtools.performance.recording.features.remote", "[\"js\",\"leaf\",\"stackwalk\",\"screenshots\",\"java\"]");
pref("devtools.performance.recording.interval", 1000);
pref("devtools.performance.recording.interval.remote", 1000);
pref("devtools.performance.recording.objdirs.remote", "[]");
pref("devtools.performance.recording.preset", "web-developer");
pref("devtools.performance.recording.preset.remote", "web-developer");
pref("devtools.performance.recording.threads", "[\"GeckoMain\",\"Compositor\",\"Renderer\"]");
pref("devtools.performance.recording.threads.remote", "[\"GeckoMain\",\"Compositor\",\"Renderer\"]");
pref("devtools.popup.disable_autohide", false);
pref("devtools.responsive.browserUI.enabled", false);
pref("devtools.responsive.viewport.angle", 0);
pref("devtools.storage.extensionStorage.enabled", true);
pref("devtools.target-switching.enabled", false);
pref("devtools.toolbox.force-chrome-prefs", true);
pref("devtools.webconsole.input.context", false);
pref("devtools.webconsole.input.eagerEvaluation", true);
pref("devtools.webconsole.input.editorOnboarding", true);
pref("devtools.webconsole.input.editorWidth", 0);
pref("devtools.whatsnew.enabled", true);
pref("devtools.whatsnew.feature-enabled", true);
pref("docshell.shistory.testing.bfevict", false);
pref("doh-rollout.profileCreationThreshold", "1572476400000");
pref("doh-rollout.trr-selection.enabled", false);
pref("dom.about_newtab_sanitization.enabled", false);
pref("dom.allow_XUL_XBL_for_file", false);
pref("dom.animations.mainthread-synchronization-with-geometric-animations", true);
pref("dom.animations-api.autoremove.enabled", true);
pref("dom.arena_allocator.enabled", false);
pref("dom.audioworklet.enabled", true);
pref("dom.beforeunload_timeout_ms", 1000);
pref("dom.block_reload_from_resize_event_handler", true);
pref("dom.capture.enabled", false);
pref("dom.confirm_repost.testing.always_accept", false);
pref("dom.cross_origin_iframes_loaded_in_background", false);
pref("dom.css_pseudo_element.enabled", false);
pref("dom.document.exec_command.nested_calls_allowed", true);
pref("dom.element.transform-getters.enabled", false);
pref("dom.enable_memory_stats", false);
pref("dom.enable_window_print", true);
pref("dom.event.default_to_passive_wheel_listeners", false);
pref("dom.events.compress.touchmove", true);
pref("dom.events.dataTransfer.protected.enabled", false);
pref("dom.events.user_interaction_interval", 5000);
pref("dom.expose_test_interfaces", false);
pref("dom.formdata.event.enabled", true);
pref("dom.forms.number.grouping", false);
pref("dom.forms.requestsubmit.enabled", true);
pref("dom.gamepad.extensions.lightindicator", false);
pref("dom.gamepad.extensions.multitouch", false);
pref("dom.image-lazy-loading.enabled", true);
pref("dom.image-lazy-loading.root-margin.bottom", "0.0");
pref("dom.image-lazy-loading.root-margin.bottom.percentage", false);
pref("dom.image-lazy-loading.root-margin.left", "0.0");
pref("dom.image-lazy-loading.root-margin.left.percentage", false);
pref("dom.image-lazy-loading.root-margin.right", "0.0");
pref("dom.image-lazy-loading.root-margin.right.percentage", false);
pref("dom.image-lazy-loading.root-margin.top", "0.0");
pref("dom.image-lazy-loading.root-margin.top.percentage", false);
pref("dom.input_events.beforeinput.enabled", false);
pref("dom.IntersectionObserverExplicitDocumentRoot.enabled", true);
pref("dom.ipc.keepProcessesAlive.privilegedabout", 1);
pref("dom.ipc.plugins.allow_dxgi_surface", true);
pref("dom.ipc.processCount.privilegedabout", 1);
pref("dom.ipc.processCount.privilegedmozilla", 1);
pref("dom.ipc.processCount.webIsolated", 1);
pref("dom.ipc.processPrelaunch.delayMs", 1000);
pref("dom.ipc.processPriorityManager.backgroundGracePeriodMS", 0);
pref("dom.ipc.processPriorityManager.backgroundPerceivableGracePeriodMS", 0);
pref("dom.ipc.processPriorityManager.enabled", true);
pref("dom.ipc.processPriorityManager.testMode", false);
pref("dom.ipc.tabs.disabled", false);
pref("dom.largeAllocation.testing.allHttpLoads", false);
pref("dom.manifest.enabled", false);
pref("dom.maxtouchpoints.testing.value", -1);
pref("dom.media.mediasession.enabled", false);
pref("dom.missing_prop_counters.enabled", true);
pref("dom.mozPaintCount.enabled", false);
pref("dom.no_unknown_protocol_error.enabled", true);
pref("dom.paintWorklet.enabled", false);
pref("dom.postMessage.sharedArrayBuffer.bypassCOOP_COEP.insecure.enabled", false);
pref("dom.postMessage.sharedArrayBuffer.withCOOP_COEP", false);
pref("dom.quotaManager.loadQuotaFromCache", true);
pref("dom.quotaManager.storageName", "storage");
pref("dom.quotaManager.temporaryStorage.chunkSize", 10240);
pref("dom.quotaManager.temporaryStorage.fixedLimit", -1);
pref("dom.quotaManager.useDOSDevicePathSyntax", true);
pref("dom.reporting.crash.enabled", false);
pref("dom.script_loader.external_scripts.utf8_parsing.enabled", true);
pref("dom.securecontext.whitelist_onions", false);
pref("dom.security.featurePolicy.experimental.enabled", false);
pref("dom.security.https_only_mode", false);
pref("dom.security.https_only_mode.upgrade_local", false);
pref("dom.security.https_only_mode.upgrade_onion", false);
pref("dom.security.https_only_mode_ever_enabled", false);
pref("dom.security.respect_document_nosniff", true);
pref("dom.security.secFetch.enabled", false);
pref("dom.security.skip_about_page_csp_allowlist_and_assert", false);
pref("dom.security.skip_about_page_has_csp_assert", false);
pref("dom.security.skip_html_fragment_assertion", false);
pref("dom.security.skip_remote_script_assertion_in_system_priv_context", false);
pref("dom.separate_event_queue_for_post_message.enabled", true);
pref("dom.storage.abort_on_sync_parent_to_child_messages", false);
pref("dom.testing.selection.GetRangesForInterval", false);
pref("dom.testing.sync-content-blocking-notifications", false);
pref("dom.textMetrics.actualBoundingBox.enabled", true);
pref("dom.textMetrics.baselines.enabled", false);
pref("dom.textMetrics.emHeight.enabled", false);
pref("dom.textMetrics.fontBoundingBox.enabled", false);
pref("dom.user_activation.transient.timeout", 5000);
pref("dom.vr.always_support_ar", false);
pref("dom.vr.always_support_vr", false);
pref("dom.vr.process.startup_timeout_ms", 5000);
pref("dom.vr.webxr.enabled", false);
pref("dom.w3c_pointer_events.multiprocess.android.enabled", true);
pref("dom.webcomponents.elementInternals.enabled", false);
pref("dom.webgpu.enabled", false);
pref("dom.webidl.test1", true);
pref("dom.webidl.test2", true);
pref("dom.webnotifications.allowcrossoriginiframe", false);
pref("dom.webshare.enabled", false);
pref("dom.webshare.requireinteraction", true);
pref("dom.window.content.untrusted.enabled", true);
pref("dom.window.history.async", true);
pref("dom.worker.console.dispatch_events_to_main_thread", true);
pref("dom.worker.script_loader.utf8_parsing.enabled", true);
pref("dom.workers.serialized-sab-access", false);
pref("dom.worklet.enabled", true);
pref("editor.password.mask_delay", -1);
pref("editor.password.testing.mask_delay", false);
pref("editor.truncate_user_pastes", true);
pref("extensions.abuseReport.amoDetailsURL", "https://services.addons.mozilla.org/api/v4/addons/addon/");
pref("extensions.abuseReport.amWebAPI.enabled", true);
pref("extensions.blocklist.addonItemURL", "https://addons.mozilla.org/%LOCALE%/%APP%/blocked-addon/%addonID%/%addonVersion%/");
pref("extensions.blocklist.useMLBF", false);
pref("extensions.blocklist.useMLBF.stashes", false);
pref("extensions.content_script_csp.enabled", false);
pref("extensions.content_script_csp.report_only", true);
pref("extensions.experiments.enabled", false);
pref("findbar.matchdiacritics", 0);
pref("first-startup.timeout", 30000);
pref("fission.sessionHistoryInParent", false);
pref("font.cjk_pref_fallback_order", "zh-cn,zh-hk,zh-tw,ja,ko");
pref("full-screen-api.exit-on.windowOpen", true);
pref("full-screen-api.exit-on.windowRaise", true);
pref("full-screen-api.mouse-event-allow-left-button-only", true);
pref("general.aboutConfig.enable", true);
pref("geo.provider.network.timeout", 60000);
pref("geo.provider.network.timeToWaitBeforeSending", 5000);
pref("geo.provider.network.url", "https://www.googleapis.com/geolocation/v1/geolocate?key=%GOOGLE_LOCATION_SERVICE_API_KEY%");
pref("geo.timeout", 6000);
pref("gfx.allow-texture-direct-mapping", true);
pref("gfx.android.rgb16.force", false);
pref("gfx.apitrace.enabled", false);
pref("gfx.blocklist.all", 0);
pref("gfx.canvas.max-size", 32767);
pref("gfx.canvas.remote", false);
pref("gfx.compositor.clearstate", false);
pref("gfx.compositor.gpu-migration", 1);
pref("gfx.content.skia-font-cache-size", 5);
pref("gfx.core-animation.tint-opaque", false);
pref("gfx.device-reset.limit", 10);
pref("gfx.device-reset.threshold-ms", -1);
pref("gfx.direct3d11.allow-keyed-mutex", true);
pref("gfx.direct3d11.reuse-decoder-device", -1);
pref("gfx.direct3d11.sleep-on-create-device", 0);
pref("gfx.downloadable_fonts.sanitize_omt", true);
pref("gfx.e10s.font-list.shared", false);
pref("gfx.e10s.hide-plugins-for-scroll", true);
pref("gfx.font_rendering.ahem_antialias_none", false);
pref("gfx.logging.crash.length", 16);
pref("gfx.logging.level", 1);
pref("gfx.max-alloc-size", 500000000);
pref("gfx.max-texture-size", 32767);
pref("gfx.partialpresent.force", 0);
pref("gfx.testing.device-fail", false);
pref("gfx.testing.device-reset", 0);
pref("gfx.text.subpixel-position.force-disabled", false);
pref("gfx.text.subpixel-position.force-enabled", false);
pref("gfx.use-glx-texture-from-pixmap", false);
pref("gfx.use-iosurface-textures", false);
pref("gfx.use-mutex-on-present", false);
pref("gfx.use-surfacetexture-textures", false);
pref("gfx.vsync.collect-scroll-transforms", false);
pref("gfx.vsync.compositor.unobserve-count", 10);
pref("gfx.vsync.force-disable-waitforvblank", false);
pref("gfx.webrender.batching.lookback", 10);
pref("gfx.webrender.compositor", true);
pref("gfx.webrender.compositor.force-enabled", false);
pref("gfx.webrender.compositor.max_update_rects", 1);
pref("gfx.webrender.compositor.surface-pool-size", 25);
pref("gfx.webrender.debug.dcomp-counter", false);
pref("gfx.webrender.debug.dcomp-redraw-regions", false);
pref("gfx.webrender.debug.disable-raster-root-scale", false);
pref("gfx.webrender.debug.glyph-flashing", false);
pref("gfx.webrender.debug.obscure-images", false);
pref("gfx.webrender.debug.smart-profiler", false);
pref("gfx.webrender.debug.tile-cache-logging", false);
pref("gfx.webrender.dl.dump-content-serialized", false);
pref("gfx.webrender.enable-capture", false);
pref("gfx.webrender.enable-gpu-markers", false);
pref("gfx.webrender.enable-item-cache", true);
pref("gfx.webrender.enable-low-priority-pool", true);
pref("gfx.webrender.enable-multithreading", true);
pref("gfx.webrender.flip-sequential", false);
pref("gfx.webrender.gl-debug-message-critical-note", false);
pref("gfx.webrender.gl-debug-message-print", false);
pref("gfx.webrender.late-scenebuild-threshold", 4);
pref("gfx.webrender.max-filter-ops-per-chain", 64);
pref("gfx.webrender.max-partial-present-rects", 1);
pref("gfx.webrender.quality.force-subpixel-aa-where-possible", false);
pref("gfx.webrender.triple-buffering.enabled", true);
pref("gfx.webrender.use-optimized-shaders", true);
pref("identity.fxaccounts.service.monitorLoginUrl", "https://monitor.firefox.com/");
pref("identity.fxaccounts.service.sendLoginUrl", "https://send.firefox.com/login/");
pref("identity.fxaccounts.useSessionTokensForOAuth", true);
pref("identity.sendtabpromo.url", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/send-tab");
pref("identity.sync.useOAuthForSyncToken", false);
pref("idle_period.cross_process_scheduling", true);
pref("idle_period.during_page_load.min", 12);
pref("idle_period.min", 3);
pref("image.avif.enabled", false);
pref("image.avif.use-dav1d", true);
pref("image.honor_orientation_metadata.natural_size", true);
pref("image.honor-orientation-metadata", true);
pref("intl.charset.detector.iso2022jp.allowed", true);
pref("intl.charset.detector.ng.enabled", true);
pref("intl.charset.detector.ng.in.enabled", false);
pref("intl.charset.detector.ng.jp.enabled", false);
pref("intl.charset.detector.ng.lk.enabled", false);
pref("javascript.options.blinterp", true);
pref("javascript.options.blinterp.threshold", 10);
pref("javascript.options.gc_delay", 4000);
pref("javascript.options.gc_delay.first", 10000);
pref("javascript.options.gc_delay.full", 60000);
pref("javascript.options.gc_delay.interslice", 100);
pref("javascript.options.main_thread_stack_quota_cap", 2097152);
pref("javascript.options.mem.gc_high_frequency_large_heap_growth", 150);
pref("javascript.options.mem.gc_high_frequency_small_heap_growth", 300);
pref("javascript.options.mem.gc_large_heap_incremental_limit", 110);
pref("javascript.options.mem.gc_large_heap_size_min_mb", 500);
pref("javascript.options.mem.gc_small_heap_incremental_limit", 140);
pref("javascript.options.mem.gc_small_heap_size_max_mb", 100);
pref("javascript.options.property_error_message_fix", false);
pref("javascript.options.source_pragmas", true);
pref("javascript.options.wasm_multi_value", true);
pref("javascript.options.wasm_reftypes", true);
pref("javascript.options.wasm_trustedprincipals", true);
pref("javascript.options.writable_streams", false);
pref("layers.acceleration.draw-fps.print-histogram", false);
pref("layers.acceleration.draw-fps.write-to-file", false);
pref("layers.advanced.basic-layer.enabled", false);
pref("layers.advanced.fission.enabled", false);
pref("layers.compositing-tiles.height", 1024);
pref("layers.compositing-tiles.width", 1024);
pref("layers.d3d11.enable-blacklist", true);
pref("layers.d3d11.force-warp", false);
pref("layers.draw-layer-info", false);
pref("layers.dump-client-layers", false);
pref("layers.dump-host-layers", false);
pref("layers.dump-texture", false);
pref("layers.effect.contrast", "0.0");
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
pref("layers.low-precision-opacity", "1.0");
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
pref("layers.recycle-allocator-rdd", true);
pref("layers.tile-initial-pool-size", 50);
pref("layers.tile-pool-clear-timeout", 5000);
pref("layers.tile-pool-shrink-timeout", 50);
pref("layers.tile-pool-unused-size", 10);
pref("layers.tiles.fade-in.duration-ms", 250);
pref("layers.tiles.fade-in.enabled", false);
pref("layers.transaction.warning-ms", 200);
pref("layers.uniformity-info", false);
pref("layers.use-image-offscreen-surfaces", true);
pref("layout.animation.prerender.viewport-ratio-limit", "1.125");
pref("layout.css.always-repaint-on-unvisited", true);
pref("layout.css.aspect-ratio.enabled", false);
pref("layout.css.backdrop-filter.enabled", false);
pref("layout.css.cached-scrollbar-styles.enabled", true);
pref("layout.css.comparison-functions.enabled", true);
pref("layout.css.conic-gradient.enabled", false);
pref("layout.css.constructable-stylesheets.enabled", false);
pref("layout.css.file-chooser-button.enabled", false);
pref("layout.css.focus-visible.enabled", false);
pref("layout.css.font-visibility.level", 3);
pref("layout.css.grid-template-masonry-value.enabled", false);
pref("layout.css.image-orientation.initial-from-image", true);
pref("layout.css.is-where-selectors.enabled", true);
pref("layout.css.line-height.normal-as-resolved-value.enabled", true);
pref("layout.css.marker.restricted", true);
pref("layout.css.motion-path-ray.enabled", false);
pref("layout.css.moz-focus-outer.enabled", true);
pref("layout.css.moz-touch-enabled.enabled", false);
pref("layout.css.notify-of-unvisited", true);
pref("layout.css.overflow-logical.enabled", true);
pref("layout.css.prefixes.columns", false);
pref("layout.css.scroll-anchoring.max-consecutive-adjustments", 10);
pref("layout.css.scroll-anchoring.min-average-adjustment-threshold", 3);
pref("layout.css.scroll-anchoring.suppressions.enabled", true);
pref("layout.css.serialize-grid-implicit-tracks", true);
pref("layout.css.shadow-parts.enabled", true);
pref("layout.css.text-decoration-skip-ink.enabled", true);
pref("layout.css.text-decoration-thickness.enabled", true);
pref("layout.css.text-underline-offset.enabled", true);
pref("layout.css.text-underline-position.enabled", true);
pref("layout.css.use-counters-unimplemented.enabled", true);
pref("layout.css.width-and-height-map-to-aspect-ratio.enabled", true);
pref("layout.css.zoom-transform-hack.enabled", false);
pref("layout.display-list.build-twice", false);
pref("layout.display-list.flatten-transform", true);
pref("layout.display-list.retain.verify", false);
pref("layout.display-list.retain.verify.order", false);
pref("layout.display-list.show-rebuild-area", false);
pref("layout.dynamic-toolbar-max-height", 0);
pref("layout.framevisibility.amountscrollbeforeupdatehorizontal", 2);
pref("layout.framevisibility.amountscrollbeforeupdatevertical", 2);
pref("layout.min-active-layer-size", 64);
pref("layout.paint_rects_separately", true);
pref("layout.reflow.synthMouseMove", true);
pref("layout.show_previous_page", true);
pref("layout.smaller-painted-layers", false);
pref("layout.viewport_contains_no_contents_area", true);
pref("mathml.deprecated_alignment_attributes.disabled", false);
pref("mathml.deprecated_menclose_notation_radical.disabled", false);
pref("mathml.deprecated_style_attributes.disabled", false);
pref("mathml.legacy_number_syntax.disabled", true);
pref("mathml.mathsize_names.disabled", false);
pref("mathml.mathspace_names.disabled", false);
pref("mathml.mfenced_element.disabled", true);
pref("mathml.mfrac_bevelled_attribute.disabled", false);
pref("mathml.mfrac_linethickness_names.disabled", false);
pref("mathml.nonzero_unitless_lengths.disabled", true);
pref("mathml.script_shift_attributes.disabled", false);
pref("mathml.xlink.disabled", false);
pref("media.audioFocus.management", false);
pref("media.autoplay.blocking_policy", 0);
pref("media.cloneElementVisually.testing", false);
pref("media.cubeb.output_voice_routing", true);
pref("media.eme.encrypted-media-encryption-scheme.enabled", false);
pref("media.eme.require-app-approval", false);
pref("media.ffvpx.mp3.enabled", true);
pref("media.geckoview.autoplay.request", false);
pref("media.geckoview.autoplay.request.testing", 0);
pref("media.getdisplaymedia.enabled", true);
pref("media.getusermedia.aecm_output_routing", 3);
pref("media.getusermedia.experimental_input_processing", false);
pref("media.getusermedia.hpf_enabled", true);
pref("media.hardwaremediakeys.enabled", false);
pref("media.mediacapabilities.drop-threshold", 95);
pref("media.mediacapabilities.from-database", false);
pref("media.mediacontrol.eligible.media.duration.s", "3.0");
pref("media.mediacontrol.stopcontrol.timer.ms", 60000);
pref("media.mediacontrol.testingevents.enabled", false);
pref("media.mediasource.vp9.enabled", true);
pref("media.navigator.video.use_transport_cc", false);
pref("media.peerconnection.dtls.version.max", 771);
pref("media.peerconnection.dtls.version.min", 770);
pref("media.peerconnection.ice.obfuscate_host_addresses", true);
pref("media.peerconnection.ice.obfuscate_host_addresses.whitelist", "");
pref("media.peerconnection.ice.proxy_only_if_behind_proxy", false);
pref("media.peerconnection.mtransport_process", false);
pref("media.peerconnection.mute_on_bye_or_timeout", false);
pref("media.peerconnection.sdp.alternate_parse_mode", "never");
pref("media.peerconnection.sdp.parser", "sipcc");
pref("media.peerconnection.sdp.strict_success", false);
pref("media.peerconnection.video.use_rtx", false);
pref("media.rdd-opus.enabled", true);
pref("media.rdd-wav.enabled", true);
pref("media.rdd-webaudio.batch.size", 100);
pref("media.testing-only-events", false);
pref("media.useAudioChannelService.testing", false);
pref("media.videocontrols.picture-in-picture.audio-toggle.enabled", false);
pref("media.videocontrols.picture-in-picture.keyboard-controls.enabled", false);
pref("media.videocontrols.picture-in-picture.video-toggle.always-show", false);
pref("media.videocontrols.picture-in-picture.video-toggle.min-video-secs", 45);
pref("media.webrtc.hw.h264.enabled", false);
pref("media.webrtc.net.force_disable_rtcp_reception", false);
pref("media.webrtc.platformencoder", false);
pref("media.webvtt.debug.logging", false);
pref("media.webvtt.testing.events", true);
pref("media.wmf.skip-blacklist", false);
pref("media.wmf.vp9.enabled", true);
pref("messaging-system.log", "warn");
pref("messaging-system.rsexperimentloader.enabled", true);
pref("mousewheel.ignore_cursor_position_in_lparam", false);
pref("network.auth.confirmAuth.enabled", true);
pref("network.cookie.rejectForeignWithExceptions.enabled", false);
pref("network.cookie.sameSite.laxByDefault", false);
pref("network.cookie.sameSite.laxByDefault.disabledHosts", "");
pref("network.cookie.sameSite.laxPlusPOST.timeout", 120);
pref("network.cookie.sameSite.noneRequiresSecure", false);
pref("network.cookieJarSettings.unblocked_for_testing", false);
pref("network.data.max-uri-length-mobile", 2097152);
pref("network.dns.disabled", false);
pref("network.dns.disablePrefetchFromHTTPS", true);
pref("network.dns.skipTRR-when-parental-control-enabled", true);
pref("network.http.altsvc.proxy_checks", true);
pref("network.http.http3.default-max-stream-blocked", 10);
pref("network.http.http3.default-qpack-table-size", 0);
pref("network.http.http3.enabled", false);
pref("network.http.http3.recvBufferSize", 1048576);
pref("network.http.network_access_on_socket_process.enabled", false);
pref("network.http.proxy.respect-be-conservative", true);
pref("network.http.referer.referrerLengthLimit", 4096);
pref("network.http.sanitize-headers-in-logs", true);
pref("network.http.stale_while_revalidate.enabled", true);
pref("network.notify.checkForNRPT", true);
pref("network.notify.checkForProxies", true);
pref("network.notify.dnsSuffixList", true);
pref("network.notify.initial_call", true);
pref("network.psl.onUpdate_notify", false);
pref("network.send_ODA_to_content_directly", true);
pref("network.socket.forcePort", "");
pref("network.trr.builtin-excluded-domains", "localhost,local");
pref("network.trr.clear-cache-on-pref-change", true);
pref("network.trr.enable_when_nrpt_detected", false);
pref("network.trr.enable_when_proxy_detected", false);
pref("network.trr.enable_when_vpn_detected", false);
pref("network.trr.fetch_off_main_thread", true);
pref("network.trr.request_timeout_mode_trronly_ms", 30000);
pref("network.trr.request_timeout_ms", 1500);
pref("network.trr.send_accept-language_headers", false);
pref("network.trr.send_empty_accept-encoding_headers", true);
pref("network.trr.send_user-agent_headers", false);
pref("network.trr.skip-AAAA-when-not-supported", true);
pref("network.trr.wait-for-A-and-AAAA", true);
pref("network.url.useDefaultURI", false);
pref("page_load.deprioritization_period", 5000);
pref("pdfjs.enablePermissions", false);
pref("pdfjs.handleOctetStream", true);
pref("pdfjs.ignoreDestinationZoom", false);
pref("permissions.default.xr", 0);
pref("permissions.delegation.enabled", true);
pref("permissions.desktop-notification.notNow.enabled", false);
pref("permissions.fullscreen.allowed", false);
pref("permissions.isolateBy.privateBrowsing", false);
pref("permissions.isolateBy.userContext", false);
pref("places.search.matchDiacritics", false);
pref("privacy.dynamic_firstparty.limitForeign", false);
pref("privacy.dynamic_firstparty.use_site", true);
pref("privacy.firstparty.isolate.block_post_message", false);
pref("privacy.firstparty.isolate.use_site", false);
pref("privacy.fuzzyfox.clockgrainus", 100);
pref("privacy.partition.network_state", false);
pref("privacy.purge_trackers.enabled", false);
pref("privacy.purge_trackers.logging.level", "Error");
pref("privacy.purge_trackers.max_purge_count", 100);
pref("privacy.reduceTimerPrecision.unconditional", true);
pref("privacy.rejectForeign.allowList", "");
pref("privacy.resistFingerprinting.randomDataOnCanvasExtract", true);
pref("privacy.resistFingerprinting.target_video_res", 480);
pref("privacy.restrict3rdpartystorage.console.lazy", true);
pref("privacy.restrict3rdpartystorage.expiration_redirect", 900);
pref("privacy.restrict3rdpartystorage.expiration_visited", 2592000);
pref("privacy.restrict3rdpartystorage.heuristic.opened_window_after_interaction", true);
pref("privacy.restrict3rdpartystorage.heuristic.recently_visited", true);
pref("privacy.restrict3rdpartystorage.heuristic.recently_visited_time", 600);
pref("privacy.restrict3rdpartystorage.heuristic.redirect", true);
pref("privacy.restrict3rdpartystorage.heuristic.window_open", true);
pref("privacy.restrict3rdpartystorage.url_decorations", "fbclid");
pref("privacy.socialtracking.block_cookies.enabled", true);
pref("privacy.trackingprotection.socialtracking.enabled", false);
pref("privacy.trackingprotection.testing.report_blocked_node", false);
pref("privacy.userContext.newTabContainerOnLeftClick.enabled", false);
pref("privacy.webrtc.allowSilencingNotifications", false);
pref("privacy.webrtc.legacyGlobalIndicator", true);
pref("privacy.webrtc.sharedTabWarning", false);
pref("prompts.defaultModalType", 3);
pref("prompts.modalType.confirmAuth", 2);
pref("prompts.modalType.insecureFormSubmit", 2);
pref("remote.log.truncate", true);
pref("security.aboutcertificate.enabled", true);
pref("security.all_resource_uri_content_accessible", false);
pref("security.allow_disjointed_external_uri_loads", false);
pref("security.allow_eval_in_parent_process", false);
pref("security.allow_eval_with_system_principal", false);
pref("security.allow_parent_unrestricted_js_loads", true);
pref("security.allow_unsafe_parent_loads", false);
pref("security.app_menu.recordEventTelemetry", true);
pref("security.block_Worker_with_wrong_mime", false);
pref("security.cancel_non_local_loads_triggered_by_systemprincipal", false);
pref("security.cert_pinning.hpkp.enabled", false);
pref("security.csp.enableNavigateTo", false);
pref("security.identitypopup.recordEventTelemetry", true);
pref("security.osclientcerts.autoload", false);
pref("security.osreauthenticator.blank_password", false);
pref("security.osreauthenticator.password_last_changed_hi", 0);
pref("security.osreauthenticator.password_last_changed_lo", 0);
pref("security.pki.crlite_mode", 1);
pref("security.protectionspopup.recordEventTelemetry", true);
pref("security.remote_settings.crlite_filters.bucket", "security-state");
pref("security.remote_settings.crlite_filters.checked", 0);
pref("security.remote_settings.crlite_filters.collection", "cert-revocations");
pref("security.remote_settings.crlite_filters.enabled", false);
pref("security.remote_settings.crlite_filters.signer", "onecrl.content-signature.mozilla.org");
pref("security.remote_settings.intermediates.parallel_downloads", 8);
pref("security.sandbox.content.win32k-disable", false);
pref("security.sandbox.socket.process.level", 0);
pref("security.sandbox.socket.win32k-disable", true);
pref("security.secure_connection_icon_color_gray", true);
pref("security.tls.enable_delegated_credentials", false);
pref("security.tls.version.enable-deprecated", false);
pref("services.blocklist.addons-mlbf.checked", 0);
pref("services.blocklist.addons-mlbf.collection", "addons-bloomfilters");
pref("services.blocklist.addons-mlbf.signer", "remote-settings.content-signature.mozilla.org");
pref("services.common.log.logger.rest.request", "Debug");
pref("services.common.log.logger.rest.response", "Debug");
pref("services.common.log.logger.tokenserverclient", "Debug");
pref("services.sync.extension-storage.skipPercentageChance", 50);
pref("services.sync.prefs.sync.app.shield.optoutstudies.enabled", true);
pref("services.sync.prefs.sync.browser.discovery.enabled", true);
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.showSponsored", true);
pref("services.sync.prefs.sync.browser.search.widget.inNavBar", true);
pref("services.sync.prefs.sync.intl.regional_prefs.use_os_locales", true);
pref("signon.generation.available", true);
pref("signon.generation.confidenceThreshold", "0.75");
pref("signon.generation.enabled", true);
pref("signon.includeOtherSubdomainsInLookup", true);
pref("signon.management.page.breach-alerts.enabled", true);
pref("signon.management.page.breachAlertUrl", "https://monitor.firefox.com/breach-details/");
pref("signon.management.page.hideMobileFooter", false);
pref("signon.management.page.mobileAndroidURL", "https://app.adjust.com/6tteyjo?redirect=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dmozilla.lockbox&utm_campaign=Desktop&utm_adgroup=InProduct&utm_creative=");
pref("signon.management.page.mobileAppleURL", "https://app.adjust.com/6tteyjo?redirect=https%3A%2F%2Fitunes.apple.com%2Fapp%2Fid1314000270%3Fmt%3D8&utm_campaign=Desktop&utm_adgroup=InProduct&utm_creative=");
pref("signon.management.page.os-auth.enabled", false);
pref("signon.management.page.showPasswordSyncNotification", true);
pref("signon.management.page.sort", "name");
pref("signon.management.page.vulnerable-passwords.enabled", true);
pref("signon.passwordEditCapture.enabled", true);
pref("signon.showAutoCompleteImport", "");
pref("signon.userInputRequiredToCapture.enabled", true);
pref("svg.text-spacing.enabled", true);
pref("telemetry.number_of_site_origin.min_interval", 300000);
pref("test.events.async.enabled", false);
pref("test.mousescroll", false);
pref("threads.medium_high_event_queue.enabled", true);
pref("toolkit.asyncshutdown.report_writes_after", 40000);
pref("toolkit.osKeyStore.loglevel", "Warn");
pref("toolkit.shutdown.fastShutdownStage", 0);
pref("toolkit.shutdown.lateWriteChecksStage", 1);
pref("toolkit.telemetry.geckoview.batchDurationMS", 5000);
pref("toolkit.telemetry.geckoview.maxBatchStalenessMS", 60000);
pref("toolkit.telemetry.geckoview.streaming", false);
pref("toolkit.telemetry.ipcBatchTimeout", 2000);
pref("toolkit.telemetry.isGeckoViewMode", false);
pref("toolkit.telemetry.testing.overrideProductsCheck", false);
pref("ui.click_hold_context_menus.delay", 500);
pref("ui.scrolling.negate_wheel_scroll", false);
pref("urlclassifier.features.cryptomining.annotate.blacklistTables", "base-cryptomining-track-digest256");
pref("urlclassifier.features.cryptomining.annotate.whitelistTables", "mozstd-trackwhite-digest256");
pref("urlclassifier.features.fingerprinting.annotate.blacklistTables", "base-fingerprinting-track-digest256");
pref("urlclassifier.features.fingerprinting.annotate.whitelistTables", "mozstd-trackwhite-digest256,google-trackwhite-digest256");
pref("urlclassifier.features.socialtracking.annotate.blacklistTables", "social-tracking-protection-facebook-digest256,social-tracking-protection-linkedin-digest256,social-tracking-protection-twitter-digest256");
pref("urlclassifier.features.socialtracking.annotate.whitelistTables", "mozstd-trackwhite-digest256,google-trackwhite-digest256");
pref("urlclassifier.features.socialtracking.blacklistTables", "social-tracking-protection-facebook-digest256,social-tracking-protection-linkedin-digest256,social-tracking-protection-twitter-digest256");
pref("urlclassifier.features.socialtracking.whitelistTables", "mozstd-trackwhite-digest256,google-trackwhite-digest256");
pref("view_source.tab_size", 4);
pref("webextensions.storage.sync.kinto", true);
pref("webgl.all-angle-options", false);
pref("webgl.allow-immediate-queries", false);
pref("webgl.cgl.multithreaded", true);
pref("webgl.default-antialias", true);
pref("webgl.enable-surface-texture", false);
pref("webgl.msaa-samples", 4);
pref("webgl.out-of-process", false);
pref("webgl.power-preference-override", 0);
pref("webgl.prototype.ipc-pcq", 0);
pref("widget.content.allow-gtk-dark-theme", false);
pref("widget.content.gtk-high-contrast.enabled", true);
pref("widget.disable-dark-scrollbar", false);
pref("widget.disable-native-theme-for-content", false);

// removed, renamed or hidden in v78.0esr:
pref("app.productInfo.baseURL", "https://www.mozilla.org/firefox/features/");
pref("app.update.altwindowtype", "Browser:About");
pref("app.update.doorhanger", true);
pref("app.update.idletime", 60);
pref("app.update.silent", false);
pref("app.update.url", "https://aus5.mozilla.org/update/6/%PRODUCT%/%VERSION%/%BUILD_ID%/%BUILD_TARGET%/%LOCALE%/%CHANNEL%/%OS_VERSION%/%SYSTEM_CAPABILITIES%/%DISTRIBUTION%/%DISTRIBUTION_VERSION%/update.xml");
pref("apz.frame_delay.enabled", true);
pref("apz.overscroll.spring_friction", "0.015");
pref("apz.overscroll.spring_stiffness", "0.0018");
pref("apz.pinch_lock.scoll_lock_threshold", "0.03125");
pref("browser.cache.compression_level", 0);
pref("browser.cache.frecency_experiment", 0);
pref("browser.cache.offline.insecure.enable", false);
pref("browser.contentblocking.allowlist.annotations.enabled", true);
pref("browser.contentblocking.allowlist.storage.enabled", true);
pref("browser.contentblocking.control-center.ui.showAllowedLabels", false);
pref("browser.contentblocking.control-center.ui.showBlockedLabels", true);
pref("browser.contentblocking.introCount", 0);
pref("browser.contentblocking.introDelaySeconds", 1800);
pref("browser.contentblocking.maxIntroCount", 0);
pref("browser.contentblocking.rejecttrackers.control-center.ui.enabled", true);
pref("browser.contentblocking.rejecttrackers.reportBreakage.enabled", true);
pref("browser.contentblocking.reportBreakage.enabled", false);
pref("browser.contentblocking.trackingprotection.control-center.ui.enabled", true);
pref("browser.fixup.dns_first_for_single_words", false);
pref("browser.in-content.dark-mode", false);
pref("browser.newtabpage.activity-stream.prerender", true);
pref("browser.newtabpage.activity-stream.telemetry.ping.endpoint", "https://tiles.services.mozilla.com/v4/links/activity-stream");
pref("browser.offline-apps.notify", true);
pref("browser.ping-centre.production.endpoint", "https://tiles.services.mozilla.com/v3/links/ping-centre");
pref("browser.ping-centre.staging.endpoint", "https://onyx_tiles.stage.mozaws.net/v3/links/ping-centre");
pref("browser.privatebrowsing.searchUI", true);
pref("browser.search.geoip.timeout", 3000);
pref("browser.search.geoip.url", "https://location.services.mozilla.com/v1/country?key=%MOZILLA_API_KEY%");
pref("browser.search.reset.enabled", false);
pref("browser.search.reset.whitelist", "");
pref("browser.security.newcerterrorpage.mitm.enabled", true);
pref("browser.stopReloadAnimation.enabled", true);
pref("browser.tabs.multiselect", true);
pref("browser.tabs.remote.allowLinkedWebInFileUriProcess", true);
pref("browser.tabs.remote.useCrossOriginPolicy", false);
pref("browser.tabs.remote.useHTTPResponseProcessSelection", false);
pref("browser.tabs.showAudioPlayingIcon", true);
pref("browser.urlbar.clickSelectsAll", true);
pref("browser.urlbar.doubleClickSelectsAll", false);
pref("browser.urlbar.oneOffSearches", true);
pref("browser.urlbar.quantumbar", true);
pref("browser.urlbar.timesBeforeHidingSuggestionsHint", 4);
pref("browser.urlbar.userMadeSearchSuggestionsChoice", false);
pref("browser.xul.error_pages.enabled", true);
pref("devtools.aboutdebugging.new-enabled", false);
pref("devtools.browserconsole.filterContentMessages", false);
pref("devtools.command-button-scratchpad.enabled", false);
pref("devtools.debugger.event-listener-breakpoints", "[]");
pref("devtools.debugger.features.windowless-workers", true);
pref("devtools.debugger.source-maps-enabled", true);
pref("devtools.inspector.showUserAgentShadowRoots", false);
pref("devtools.netmonitor.features.resizeColumns", true);
pref("devtools.onboarding.experiment", "off");
pref("devtools.onboarding.experiment.flipped", false);
pref("devtools.onboarding.telemetry.logged", false);
pref("devtools.recordreplay.allowRepaintFailures", true);
pref("devtools.recordreplay.includeSystemScripts", false);
pref("devtools.recordreplay.mvp.enabled", false);
pref("devtools.responsive.show-setting-tooltip", true);
pref("devtools.scratchpad.editorFontSize", 12);
pref("devtools.scratchpad.enableAutocompletion", true);
pref("devtools.scratchpad.enabled", false);
pref("devtools.scratchpad.lineNumbers", true);
pref("devtools.scratchpad.recentFilesMax", 10);
pref("devtools.scratchpad.showTrailingSpace", false);
pref("devtools.scratchpad.wrapText", false);
pref("devtools.webconsole.jsterm.codeMirror", true);
pref("devtools.webide.autoConnectRuntime", true);
pref("devtools.webide.autoinstallADBExtension", true);
pref("devtools.webide.busyTimeout", 10000);
pref("devtools.webide.enabled", true);
pref("devtools.webide.enableLocalRuntime", false);
pref("devtools.webide.lastConnectedRuntime", "");
pref("devtools.webide.lastSelectedProject", "");
pref("devtools.webide.restoreLastProject", true);
pref("devtools.webide.templatesURL", "https://code.cdn.mozilla.net/templates/list.json");
pref("devtools.webide.zoom", "1");
pref("dom.audiochannel.audioCompeting", false);
pref("dom.audiochannel.audioCompeting.allAgents", false);
pref("dom.disable_window_showModalDialog", true);
pref("dom.event.handling-user-input-time-limit", 1000);
pref("dom.indexedDB.enabled", true);
pref("dom.ipc.cpows.forbid-unsafe-from-browser", true);
pref("dom.ipc.keepProcessesAlive.privileged", 1);
pref("dom.ipc.processCount.privileged", 1);
pref("dom.link.disabled_attribute.enabled", true);
pref("dom.manifest.onappinstalled", false);
pref("dom.metaElement.setCookie.allowed", false);
pref("dom.min_tracking_background_timeout_value", 4);
pref("dom.min_tracking_timeout_value", 4);
pref("dom.mozBrowserFramesEnabled", true);
pref("dom.promise_rejection_events.enabled", false);
pref("dom.registerContentHandler.enabled", false);
pref("dom.registerProtocolHandler.insecure.enabled", false);
pref("dom.vr.external.enabled", true);
pref("dom.vr.oculus.quit.timeout", 10000);
pref("dom.vr.openvr.action_input", true);
pref("dom.vr.puppet.submitframe", 0);
pref("dom.vr.service.enabled", true);
pref("dom.vr.test.enabled", false);
pref("dom.webgpu.enable", false);
pref("dom.xhr.lowercase_header.enabled", true);
pref("dom.xmldocument.async.enabled", true);
pref("dom.xmldocument.load.enabled", true);
pref("extensions.blocklist.interval", 86400);
pref("extensions.blocklist.url", "https://blocklists.settings.services.mozilla.com/v1/blocklist/3/%APP_ID%/%APP_VERSION%/%PRODUCT%/%BUILD_ID%/%BUILD_TARGET%/%LOCALE%/%CHANNEL%/%OS_VERSION%/%DISTRIBUTION%/%DISTRIBUTION_VERSION%/%PING_COUNT%/%TOTAL_PING_COUNT%/%DAYS_SINCE_LAST_PING%/");
pref("extensions.cookiesBehavior.overrideOnTopLevel", false);
pref("extensions.getAddons.compatOverides.url", "https://services.addons.mozilla.org/api/v3/addons/compat-override/?guid=%IDS%&lang=%LOCALE%");
pref("extensions.htmlaboutaddons.discover.enabled", true);
pref("extensions.htmlaboutaddons.enabled", true);
pref("extensions.legacy.enabled", false);
pref("extensions.legacy.exceptions", "testpilot@cliqz.com,@testpilot-containers,jid1-NeEaf3sAHdKHPA@jetpack,@activity-streams,pulse@mozilla.com,@testpilot-addon,@min-vid,tabcentertest1@mozilla.com,snoozetabs@mozilla.com,speaktome@mozilla.com,hoverpad@mozilla.com");
pref("extensions.webservice.discoverURL", "https://discovery.addons.mozilla.org/%LOCALE%/firefox/discovery/pane/%VERSION%/%OS%/%COMPATIBILITY_MODE%");
pref("full-screen-api.unprefix.enabled", true);
pref("general.useragent.site_specific_overrides", true);
pref("general.warnOnAboutConfig", true);
pref("geo.wifi.uri", "https://www.googleapis.com/geolocation/v1/geolocate?key=%GOOGLE_LOCATION_SERVICE_API_KEY%");
pref("geo.wifi.xhr.timeout", 60000);
pref("gfx.downloadable_fonts.woff2.enabled", true);
pref("gfx.font_ahem_antialias_none", false);
pref("gfx.webrender.blob.invalidation", true);
pref("gfx.webrender.dcomp-win-triple-buffering.enabled", true);
pref("gfx.webrender.split-render-roots", false);
pref("gl.msaa-level", 2);
pref("gl.require-hardware", false);
pref("javascript.options.bigint", true);
pref("javascript.options.experimental.await_fix", false);
pref("javascript.options.experimental.fields", false);
pref("javascript.options.mem.gc_allocation_threshold_factor", 90);
pref("javascript.options.mem.gc_allocation_threshold_factor_avoid_interrupt", 90);
pref("javascript.options.mem.gc_dynamic_heap_growth", true);
pref("javascript.options.mem.gc_dynamic_mark_slice", true);
pref("javascript.options.mem.gc_high_frequency_heap_growth_max", 300);
pref("javascript.options.mem.gc_high_frequency_heap_growth_min", 150);
pref("javascript.options.mem.gc_high_frequency_high_limit_mb", 500);
pref("javascript.options.mem.gc_high_frequency_low_limit_mb", 100);
pref("javascript.options.mem.high_water_mark", 128);
pref("javascript.options.strict", false);
pref("javascript.options.unboxed_objects", false);
pref("layout.animation.prerender.viewport-ratio-limit-x", "1.125");
pref("layout.animation.prerender.viewport-ratio-limit-y", "1.125");
pref("layout.css.column-span.enabled", false);
pref("layout.css.contain.enabled", false);
pref("layout.css.moz-binding.content.enabled", false);
pref("layout.css.moz-document.url-prefix-hack.enabled", true);
pref("layout.css.paint-order.enabled", true);
pref("layout.css.parsing.parallel", true);
pref("layout.css.prefixes.device-pixel-ratio-webkit", true);
pref("layout.css.prefixes.webkit", true);
pref("layout.css.scroll-snap.enabled", false);
pref("layout.css.scroll-snap-v1.enabled", true);
pref("layout.css.simple-moz-gradient.enabled", true);
pref("layout.css.webkit-appearance.enabled", true);
pref("layout.float-fragments-inside-column.enabled", true);
pref("layout.scroll.root-frame-containers", false);
pref("media.autoplay.allow-muted", true);
pref("media.autoplay.blackList-override-default", true);
pref("media.autoplay.enabled.user-gestures-needed", true);
pref("media.eme.vp9-in-mp4.enabled", false);
pref("media.navigator.audio.full_duplex", true);
pref("media.peerconnection.sdp.rust.compare", false);
pref("media.peerconnection.sdp.rust.enabled", false);
pref("media.videocontrols.picture-in-picture.video-toggle.flyout-enabled", false);
pref("media.videocontrols.picture-in-picture.video-toggle.flyout-wait-ms", 5000);
pref("media.webaudio.audiocontextoptions-samplerate.enabled", true);
pref("medium_high_event_queue.enabled", true);
pref("network.cookieSettings.unblocked_for_testing", false);
pref("network.delay.tracking.load", 0);
pref("network.disable.ipc.security", true);
pref("network.http.spdy.bug1562315", true);
pref("network.predictor.cleaned-up", false);
pref("network.trr.request-timeout", 1500);
pref("network.warnOnAboutNetworking", true);
pref("offline-apps.allow_by_default", true);
pref("offline-apps.quota.warn", 51200);
pref("pdfjs.eventBusDispatchToDOM", false);
pref("permissions.eventTelemetry.enabled", false);
pref("permissions.postPrompt.animate", true);
pref("plugin.defaultXpi.state", 2);
pref("plugin.persistentPermissionAlways.intervalInDays", 90);
pref("plugin.sessionPermissionNow.intervalInMinutes", 60);
pref("plugins.click_to_play", true);
pref("plugins.load_appdir_plugins", false);
pref("print.extend_native_print_dialog", true);
pref("print.use_global_printsettings", true);
pref("prio.publicKeyA", "35AC1C7576C7C6EDD7FED6BCFC337B34D48CB4EE45C86BEEFB40BD8875707733");
pref("prio.publicKeyB", "26E6674E65425B823F1F1D5F96E3BB3EF9E406EC7FBA7DEF8B08A35DD135AF50");
pref("privacy.trackingprotection.cryptomining.annotate.enabled", true);
pref("privacy.trackingprotection.fingerprinting.annotate.enabled", true);
pref("privacy.trackingprotection.introURL", "https://www.mozilla.org/%LOCALE%/firefox/%VERSION%/content-blocking/start/");
pref("privacy.userContext.longPressBehavior", 0);
pref("remote.enabled", false);
pref("remote.force-local", true);
pref("security.block_ftp_subresources", true);
pref("security.identitypopup.recordEventElemetry", true);
pref("security.insecure_password.ui.enabled", true);
pref("security.strict_security_checks.enabled", false);
pref("services.sync.fxa.privacyURL", "https://accounts.firefox.com/legal/privacy");
pref("services.sync.fxa.termsURL", "https://accounts.firefox.com/legal/terms");
pref("services.sync.prefs.sync.browser.contentblocking.introCount", true);
pref("services.sync.prefs.sync.browser.sessionstore.restore_on_demand", true);
pref("services.sync.prefs.sync.privacy.trackingprotection.cryptomining.annotate.enabled", true);
pref("services.sync.prefs.sync.privacy.trackingprotection.fingerprinting.annotate.enabled", true);
pref("signon.management.page.enabled", false);
pref("toolkit.cosmeticAnimations.enabled", true);
pref("toolkit.telemetry.hybridContent.enabled", true);
pref("webgl.default-low-power", false);
pref("webgl.disable-extensions", false);

// changed in v78.0esr:
pref("app.update.url.manual", "https://www.mozilla.org/%LOCALE%/firefox/"); // prev: "https://www.mozilla.org/firefox/"
pref("apz.allow_immediate_handoff", false); // prev: true
pref("apz.axis_lock.breakout_angle", "0.392699"); // prev: "0.3926991"
pref("apz.axis_lock.direct_pan_angle", "1.0472"); // prev: "1.047197"
pref("apz.axis_lock.lock_angle", "0.523599"); // prev: "0.5235987"
pref("apz.axis_lock.mode", 2); // prev: 0
pref("apz.pinch_lock.buffer_max_age", 50); // prev: "50"
pref("browser.contentblocking.features.strict", "tp,tpPrivate,cookieBehavior4,cm,fp,stp"); // prev: "tp,tpPrivate,cookieBehavior4,cm,fp"
pref("browser.hiddenWindowChromeURL", "chrome://browser/content/hiddenWindowMac.xhtml"); // prev: "chrome://browser/content/hiddenWindow.xul"
pref("browser.newtabpage.activity-stream.asrouter.providers.cfr-fxa", "{\"id\":\"cfr-fxa\",\"enabled\":true,\"type\":\"remote-settings\",\"bucket\":\"cfr-fxa\",\"frequency\":{\"custom\":[{\"period\":\"daily\",\"cap\":1}]},\"updateCycleInMs\":3600000}"); // prev: "{\"id\":\"cfr-fxa\",\"enabled\":true,\"type\":\"remote-settings\",\"bucket\":\"cfr-fxa\",\"frequency\":{\"custom\":[{\"period\":\"daily\",\"cap\":1}]}}"
pref("browser.newtabpage.activity-stream.discoverystream.config", "{\"api_key_pref\":\"extensions.pocket.oAuthConsumerKey\",\"collapsible\":true,\"enabled\":true,\"show_spocs\":false,\"hardcoded_layout\":true,\"personalized\":true,\"layout_endpoint\":\"https://getpocket.cdn.mozilla.net/v3/newtab/layout?version=1&consumer_key=$apiKey&layout_variant=basic\"}"); // prev: "{\"api_key_pref\":\"extensions.pocket.oAuthConsumerKey\",\"collapsible\":true,\"enabled\":false,\"show_spocs\":false,\"hardcoded_layout\":true,\"personalized\":false,\"layout_endpoint\":\"https://getpocket.cdn.mozilla.net/v3/newtab/layout?version=1&consumer_key=$apiKey&layout_variant=basic\"}"
pref("browser.newtabpage.activity-stream.discoverystream.endpoints", "https://getpocket.cdn.mozilla.net/,https://spocs.getpocket.com/"); // prev: "https://getpocket.cdn.mozilla.net/"
pref("browser.newtabpage.activity-stream.feeds.section.topstories", true); // prev: false
pref("browser.newtabpage.activity-stream.section.highlights.rows", 1); // prev: 2
pref("browser.newtabpage.activity-stream.telemetry.structuredIngestion.endpoint", "https://incoming.telemetry.mozilla.org/submit"); // prev: "https://incoming.telemetry.mozilla.org/submit/activity-stream"
pref("browser.safebrowsing.provider.google.reportMalwareMistakeURL", "https://%LOCALE%.malware-error.mozilla.com/?url="); // prev: "https://%LOCALE%.malware-error.mozilla.com/?hl=%LOCALE%&url="
pref("browser.safebrowsing.provider.google.reportPhishMistakeURL", "https://%LOCALE%.phish-error.mozilla.com/?url="); // prev: "https://%LOCALE%.phish-error.mozilla.com/?hl=%LOCALE%&url="
pref("browser.safebrowsing.provider.google.reportURL", "https://safebrowsing.google.com/safebrowsing/diagnostic?site="); // prev: "https://safebrowsing.google.com/safebrowsing/diagnostic?client=%NAME%&hl=%LOCALE%&site="
pref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", "https://%LOCALE%.malware-error.mozilla.com/?url="); // prev: "https://%LOCALE%.malware-error.mozilla.com/?hl=%LOCALE%&url="
pref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", "https://%LOCALE%.phish-error.mozilla.com/?url="); // prev: "https://%LOCALE%.phish-error.mozilla.com/?hl=%LOCALE%&url="
pref("browser.safebrowsing.provider.google4.reportURL", "https://safebrowsing.google.com/safebrowsing/diagnostic?site="); // prev: "https://safebrowsing.google.com/safebrowsing/diagnostic?client=%NAME%&hl=%LOCALE%&site="
pref("browser.safebrowsing.provider.mozilla.lists", "base-track-digest256,mozstd-trackwhite-digest256,google-trackwhite-digest256,content-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256,block-flash-digest256,except-flash-digest256,allow-flashallow-digest256,except-flashallow-digest256,block-flashsubdoc-digest256,except-flashsubdoc-digest256,ads-track-digest256,social-track-digest256,analytics-track-digest256,base-fingerprinting-track-digest256,content-fingerprinting-track-digest256,base-cryptomining-track-digest256,content-cryptomining-track-digest256,fanboyannoyance-ads-digest256,fanboysocial-ads-digest256,easylist-ads-digest256,easyprivacy-ads-digest256,adguard-ads-digest256,social-tracking-protection-digest256,social-tracking-protection-facebook-digest256,social-tracking-protection-linkedin-digest256,social-tracking-protection-twitter-digest256"); // prev: "base-track-digest256,mozstd-trackwhite-digest256,content-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256,block-flash-digest256,except-flash-digest256,allow-flashallow-digest256,except-flashallow-digest256,block-flashsubdoc-digest256,except-flashsubdoc-digest256,ads-track-digest256,social-track-digest256,analytics-track-digest256,base-fingerprinting-track-digest256,content-fingerprinting-track-digest256,base-cryptomining-track-digest256,content-cryptomining-track-digest256,fanboyannoyance-ads-digest256,fanboysocial-ads-digest256,easylist-ads-digest256,easyprivacy-ads-digest256,adguard-ads-digest256"
pref("browser.safebrowsing.reportPhishURL", "https://%LOCALE%.phish-report.mozilla.com/?url="); // prev: "https://%LOCALE%.phish-report.mozilla.com/?hl=%LOCALE%&url="
pref("browser.tabs.remote.separatePrivilegedContentProcess", true); // prev: false
pref("browser.urlbar.maxCharsForSearchSuggestions", 100); // prev: 20
pref("browser.urlbar.maxHistoricalSearchSuggestions", 2); // prev: 0
pref("corroborator.enabled", true); // prev: false
pref("devtools.debugger.component-visible", false); // prev: true
pref("devtools.debugger.expressions-visible", false); // prev: true
pref("devtools.debugger.features.async-stepping", false); // prev: true
pref("devtools.debugger.features.event-listeners-breakpoints", true); // prev: false
pref("devtools.debugger.prefs-schema-version", 0); // prev: "1.0.9"
pref("devtools.debugger.workers-visible", false); // prev: true
pref("devtools.debugger.xhr-breakpoints-visible", false); // prev: true
pref("devtools.inspector.inactive.css.enabled", true); // prev: false
pref("devtools.netmonitor.columnsData", "[{\"name\":\"status\",\"minWidth\":30,\"width\":5}, {\"name\":\"method\",\"minWidth\":30,\"width\":5}, {\"name\":\"domain\",\"minWidth\":30,\"width\":10}, {\"name\":\"file\",\"minWidth\":30,\"width\":25}, {\"name\":\"url\",\"minWidth\":30,\"width\":25},{\"name\":\"initiator\",\"minWidth\":30,\"width\":10},{\"name\":\"type\",\"minWidth\":30,\"width\":5},{\"name\":\"transferred\",\"minWidth\":30,\"width\":10},{\"name\":\"contentSize\",\"minWidth\":30,\"width\":5},{\"name\":\"waterfall\",\"minWidth\":150,\"width\":15}]"); // prev: "[{\"name\":\"status\",\"minWidth\":30,\"width\":5}, {\"name\":\"method\",\"minWidth\":30,\"width\":5}, {\"name\":\"domain\",\"minWidth\":30,\"width\":10}, {\"name\":\"file\",\"minWidth\":30,\"width\":25}, {\"name\":\"cause\",\"minWidth\":30,\"width\":10},{\"name\":\"type\",\"minWidth\":30,\"width\":5},{\"name\":\"transferred\",\"minWidth\":30,\"width\":10},{\"name\":\"contentSize\",\"minWidth\":30,\"width\":5},{\"name\":\"waterfall\",\"minWidth\":150,\"width\":25}]"
pref("devtools.netmonitor.visibleColumns", "[\"status\",\"method\",\"domain\",\"file\",\"initiator\",\"type\",\"transferred\",\"contentSize\",\"waterfall\"]"); // prev: "[\"status\",\"method\",\"domain\",\"file\",\"cause\",\"type\",\"transferred\",\"contentSize\",\"waterfall\"]"
pref("devtools.responsive.metaViewport.enabled", true); // prev: false
pref("devtools.webconsole.groupWarningMessages", true); // prev: false
pref("dom.animations-api.getAnimations.enabled", true); // prev: false
pref("dom.animations-api.implicit-keyframes.enabled", true); // prev: false
pref("dom.animations-api.timelines.enabled", true); // prev: false
pref("dom.datatransfer.mozAtAPIs", false); // prev: true
pref("dom.ipc.cancel_content_js_when_navigating", true); // prev: false
pref("dom.push.enabled", true); // prev: false
pref("dom.security.featurePolicy.enabled", true); // prev: false
pref("dom.serviceWorkers.enabled", true); // prev: false
pref("dom.serviceWorkers.idle_extended_timeout", 30000); // prev: 300000
pref("dom.serviceWorkers.parent_intercept", true); // prev: false
pref("dom.sidebar.enabled", false); // prev: true
pref("dom.webnotifications.requireuserinteraction", true); // prev: false
pref("extensions.abuseReport.url", "https://services.addons.mozilla.org/api/v4/abuse/report/addon/"); // prev: "https://addons.mozilla.org/api/v4/abuse/report/addon/"
pref("extensions.getAddons.discovery.api_url", "https://services.addons.mozilla.org/api/v4/discovery/?lang=%LOCALE%&edition=%DISTRIBUTION%"); // prev: "https://services.addons.mozilla.org/api/v4/discovery/?lang=%LOCALE%"
pref("fission.rebuild_frameloaders_on_remoteness_change", true); // prev: false
pref("font.name-list.monospace.zh-HK", "MingLiU_HKSCS, Ming(for ISO10646), MingLiU, MingLiU_HKSCS-ExtB, Microsoft JhengHei"); // prev: "MingLiU_HKSCS, Ming(for ISO10646), MingLiU, MingLiU_HKSCS-ExtB"
pref("font.name-list.sans-serif.zh-HK", "Arial, MingLiU_HKSCS, Ming(for ISO10646), MingLiU, MingLiU_HKSCS-ExtB, Microsoft JhengHei"); // prev: "Arial, MingLiU_HKSCS, Ming(for ISO10646), MingLiU, MingLiU_HKSCS-ExtB"
pref("font.name-list.serif.zh-HK", "Times New Roman, MingLiu_HKSCS, Ming(for ISO10646), MingLiU, MingLiU_HKSCS-ExtB, Microsoft JhengHei"); // prev: "Times New Roman, MingLiu_HKSCS, Ming(for ISO10646), MingLiU, MingLiU_HKSCS-ExtB"
pref("gfx.canvas.azure.backends", "direct2d1.1,skia"); // prev: "direct2d1.1,skia,cairo"
pref("gfx.content.azure.backends", "direct2d1.1,skia"); // prev: "direct2d1.1,skia,cairo"
pref("gfx.omta.background-color", true); // prev: false
pref("image.mem.surfacecache.max_size_kb", 2072576); // prev: 1048576
pref("javascript.options.baselinejit.threshold", 100); // prev: 10
pref("javascript.options.mem.gc_allocation_threshold_mb", 27); // prev: 30
pref("javascript.options.shared_memory", true); // prev: false
pref("layout.accessiblecaret.height", "36.0"); // prev: "36"
pref("layout.accessiblecaret.width", "34.0"); // prev: "34"
pref("layout.css.clip-path-path.enabled", true); // prev: false
pref("layout.css.grid-template-subgrid-value.enabled", true); // prev: false
pref("layout.css.individual-transform.enabled", true); // prev: false
pref("layout.css.motion-path.enabled", true); // prev: false
pref("layout.css.outline-style-auto.enabled", true); // prev: false
pref("layout.css.resizeobserver.enabled", true); // prev: false
pref("layout.css.scroll-snap.prediction-sensitivity", "0.75"); // prev: "0.750"
pref("layout.css.shared-memory-ua-sheets.enabled", true); // prev: false
pref("layout.css.supports-selector.enabled", true); // prev: false
pref("layout.css.use-counters.enabled", true); // prev: false
pref("layout.display-list.retain.chrome", true); // prev: false
pref("media.audiograph.single_thread.enabled", true); // prev: false
pref("media.cubeb.sandbox", true); // prev: false
pref("media.devices.insecure.enabled", false); // prev: true
pref("media.mediasource.webm.enabled", true); // prev: false
pref("media.rdd-vorbis.enabled", true); // prev: false
pref("media.videocontrols.picture-in-picture.enabled", true); // prev: false
pref("media.videocontrols.picture-in-picture.video-toggle.enabled", true); // prev: false
pref("network.cookie.cookieBehavior", 4); // prev: 0
pref("network.http.referer.defaultPolicy.trackers", 2); // prev: 3
pref("network.http.sendOriginHeader", 2); // prev: 0
pref("network.notify.IPv6", true); // prev: false
pref("network.trr.excluded-domains", ""); // prev: "localhost,local"
pref("network.trr.resolvers", "[{ \"name\": \"Cloudflare\", \"url\": \"https://mozilla.cloudflare-dns.com/dns-query\" },{ \"name\": \"NextDNS\", \"url\": \"https://firefox.dns.nextdns.io/\" }]"); // prev: "[{ \"name\": \"Cloudflare\", \"url\": \"https://mozilla.cloudflare-dns.com/dns-query\" }]"
pref("permissions.desktop-notification.postPrompt.enabled", true); // prev: false
pref("privacy.trackingprotection.cryptomining.enabled", true); // prev: false
pref("privacy.trackingprotection.fingerprinting.enabled", true); // prev: false
pref("security.certerrors.mitm.auto_enable_enterprise_roots", true); // prev: false
pref("security.enterprise_roots.enabled", false); // prev: true
pref("security.insecure_connection_icon.enabled", true); // prev: false
pref("security.insecure_connection_icon.pbmode.enabled", true); // prev: false
pref("security.remote_settings.intermediates.enabled", true); // prev: false
pref("security.ssl3.dhe_rsa_aes_128_sha", false); // prev: true
pref("security.ssl3.dhe_rsa_aes_256_sha", false); // prev: true
pref("security.tls.hello_downgrade_check", true); // prev: false
pref("security.tls.version.min", 3); // prev: 1
pref("services.sync.engine.bookmarks.buffer", true); // prev: false
pref("services.sync.maxResyncs", 1); // prev: 5
pref("signon.showAutoCompleteOrigins", true); // prev: false
pref("trailhead.firstrun.branches", "join-dynamic"); // prev: "join-privacy"
pref("urlclassifier.blockedTable", "moztest-block-simple,mozplugin-block-digest256"); // prev: "test-block-simple,mozplugin-block-digest256"
pref("urlclassifier.disallow_completions", "goog-downloadwhite-digest256,base-track-digest256,mozstd-trackwhite-digest256,content-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256,block-flash-digest256,except-flash-digest256,allow-flashallow-digest256,except-flashallow-digest256,block-flashsubdoc-digest256,except-flashsubdoc-digest256,goog-passwordwhite-proto,ads-track-digest256,social-track-digest256,analytics-track-digest256,base-fingerprinting-track-digest256,content-fingerprinting-track-digest256,base-cryptomining-track-digest256,content-cryptomining-track-digest256,fanboyannoyance-ads-digest256,fanboysocial-ads-digest256,easylist-ads-digest256,easyprivacy-ads-digest256,adguard-ads-digest256,social-tracking-protection-digest256,social-tracking-protection-facebook-digest256,social-tracking-protection-linkedin-digest256,social-tracking-protection-twitter-digest256"); // prev: "goog-downloadwhite-digest256,base-track-digest256,mozstd-trackwhite-digest256,content-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256,block-flash-digest256,except-flash-digest256,allow-flashallow-digest256,except-flashallow-digest256,block-flashsubdoc-digest256,except-flashsubdoc-digest256,goog-passwordwhite-proto,ads-track-digest256,social-track-digest256,analytics-track-digest256,base-fingerprinting-track-digest256,content-fingerprinting-track-digest256,base-cryptomining-track-digest256,content-cryptomining-track-digest256,fanboyannoyance-ads-digest256,fanboysocial-ads-digest256,easylist-ads-digest256,easyprivacy-ads-digest256,adguard-ads-digest256"
pref("urlclassifier.features.fingerprinting.whitelistTables", "mozstd-trackwhite-digest256,google-trackwhite-digest256"); // prev: "mozstd-trackwhite-digest256"
pref("urlclassifier.malwareTable", "goog-malware-proto,goog-unwanted-proto,moztest-harmful-simple,moztest-malware-simple,moztest-unwanted-simple"); // prev: "goog-malware-proto,goog-unwanted-proto,test-harmful-simple,test-malware-simple,test-unwanted-simple"
pref("urlclassifier.phishTable", "goog-phish-proto,moztest-phish-simple"); // prev: "goog-phish-proto,test-phish-simple"
pref("urlclassifier.trackingAnnotationTable", "moztest-track-simple,ads-track-digest256,social-track-digest256,analytics-track-digest256,content-track-digest256"); // prev: "test-track-simple,ads-track-digest256,social-track-digest256,analytics-track-digest256,content-track-digest256"
pref("urlclassifier.trackingAnnotationWhitelistTable", "moztest-trackwhite-simple,mozstd-trackwhite-digest256,google-trackwhite-digest256"); // prev: "test-trackwhite-simple,mozstd-trackwhite-digest256"
pref("urlclassifier.trackingTable", "moztest-track-simple,ads-track-digest256,social-track-digest256,analytics-track-digest256"); // prev: "test-track-simple,base-track-digest256"
pref("urlclassifier.trackingWhitelistTable", "moztest-trackwhite-simple,mozstd-trackwhite-digest256,google-trackwhite-digest256"); // prev: "test-trackwhite-simple,mozstd-trackwhite-digest256"
pref("webgl.max-contexts", 1000); // prev: 32
pref("webgl.max-contexts-per-principal", 300); // prev: 16
