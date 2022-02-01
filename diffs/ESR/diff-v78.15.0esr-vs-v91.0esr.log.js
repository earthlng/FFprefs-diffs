/******************************************************************************************
 * diffs between FF prefs v78.15.0esr and v91.0esr
 *
 * prefs: 4569
 *        3671 matching prefs
 *         898 diffs ( 520 new, 251 gone, 127 different )
 ******************************************************************************************/
// new in v91.0esr:
pref("accessibility.cache.enabled", false);
pref("app.releaseNotesURL.aboutDialog", "https://www.mozilla.org/%LOCALE%/firefox/%VERSION%/releasenotes/?utm_source=firefox-browser&utm_medium=firefox-desktop&utm_campaign=about-dialog");
pref("app.update.background.interval", 25200);
pref("app.update.background.loglevel", "error");
pref("app.update.background.scheduling.enabled", false);
pref("app.update.background.timeoutSec", 600);
pref("app.update.langpack.enabled", true);
pref("app.update.notifyDuringDownload", false);
pref("apz.doubletapzoom.defaultzoomin", "1.2");
pref("apz.fling_accel_max_pause_interval_ms", 50);
pref("apz.fling_accel_min_fling_velocity", "1.5");
pref("apz.fling_accel_min_pan_velocity", "0.8");
pref("apz.force_disable_desktop_zooming_scrollbars", false);
pref("apz.mac.enable_double_tap_zoom_touchpad_gesture", true);
pref("apz.mvm.force-enabled", true);
pref("apz.nonwr.activate_all_scroll_frames", false);
pref("apz.nonwr.activate_all_scroll_frames_when_fission", false);
pref("apz.overscroll.damping", "1.1");
pref("apz.overscroll.max_velocity", "10.0");
pref("apz.overscroll.spring_stiffness", "200.0");
pref("apz.overscroll.test_async_scroll_offset.enabled", false);
pref("apz.prefer_jank_minimal_displayports", true);
pref("apz.scrollbarbuttonrepeat.enabled", true);
pref("apz.windows.check_for_pan_gesture_conversion", true);
pref("apz.wr.activate_all_scroll_frames", false);
pref("apz.wr.activate_all_scroll_frames_when_fission", true);
pref("browser.aboutwelcome.protonDesign", true);
pref("browser.aboutwelcome.screens", "");
pref("browser.aboutwelcome.skipFocus", true);
pref("browser.bookmarks.defaultLocation", "toolbar");
pref("browser.compactmode.show", false);
pref("browser.contentblocking.reject-and-isolate-cookies.preferences.ui.enabled", true);
pref("browser.contentblocking.report.hide_vpn_banner", false);
pref("browser.contentblocking.report.vpn.enabled", true);
pref("browser.contentblocking.report.vpn.url", "https://vpn.mozilla.org/?utm_source=firefox-browser&utm_medium=firefox-browser&utm_campaign=about-protections-card");
pref("browser.contentblocking.report.vpn_platforms", "win,mac,linux");
pref("browser.contentblocking.report.vpn_regions", "us,ca,nz,sg,my,gb,de,fr");
pref("browser.contentblocking.report.vpn_sub_id", "sub_HrfCZF7VPHzZkA");
pref("browser.contentblocking.report.vpn-android.url", "https://play.google.com/store/apps/details?id=org.mozilla.firefox.vpn&referrer=utm_source%3Dfirefox-browser%26utm_medium%3Dfirefox-browser%26utm_campaign%3Dabout-protections-mobile-vpn%26anid%3D--");
pref("browser.contentblocking.report.vpn-ios.url", "https://apps.apple.com/us/app/firefox-private-network-vpn/id1489407738");
pref("browser.contentblocking.report.vpn-promo.url", "https://vpn.mozilla.org/?utm_source=firefox-browser&utm_medium=firefox-browser&utm_campaign=about-protections-top-promo");
pref("browser.contentblocking.state-partitioning.mvp.ui.enabled", true);
pref("browser.ctrlTab.sortByRecentlyUsed", false);
pref("browser.display.always_show_rings_after_key_focus", false);
pref("browser.display.windows.non_native_menus", 2);
pref("browser.download.alwaysOpenInSystemViewerContextMenuItem", true);
pref("browser.download.improvements_to_download_panel", false);
pref("browser.download.openInSystemViewerContextMenuItem", true);
pref("browser.download.sanitize_non_media_extensions", true);
pref("browser.download.viewableInternally.enabledTypes", "xml,svg,webp,avif,jxl");
pref("browser.engagement.ctrlTab.has-used", false);
pref("browser.engagement.downloads-button.has-used", false);
pref("browser.engagement.fxa-toolbar-menu-button.has-used", false);
pref("browser.engagement.home-button.has-used", false);
pref("browser.engagement.library-button.has-used", false);
pref("browser.engagement.sidebar-button.has-used", false);
pref("browser.fixup.alternate.protocol", "https");
pref("browser.fixup.dns_first_for_single_words", false);
pref("browser.helperApps.showOpenOptionForViewableInternally", true);
pref("browser.history.maxUrlLength", 2000);
pref("browser.low_commit_space_threshold_mb", 200);
pref("browser.menu.showViewImageInfo", false);
pref("browser.migrate.showBookmarksToolbarAfterMigration", true);
pref("browser.navigation.requireUserInteraction", false);
pref("browser.newtabpage.activity-stream.customizationMenu.enabled", false);
pref("browser.newtabpage.activity-stream.discoverystream.locale-list-config", "");
pref("browser.newtabpage.activity-stream.discoverystream.region-basic-config", "");
pref("browser.newtabpage.activity-stream.discoverystream.region-stories-block", "FR");
pref("browser.newtabpage.activity-stream.discoverystream.spocs-endpoint-query", "");
pref("browser.newtabpage.activity-stream.hideTopSitesTitle", false);
pref("browser.newtabpage.activity-stream.logowordmark.alwaysVisible", true);
pref("browser.newtabpage.activity-stream.newNewtabExperience.colors", "#0090ED,#FF4F5F,#2AC3A2,#FF7139,#A172FF,#FFA437,#FF2A8A");
pref("browser.newtabpage.activity-stream.newNewtabExperience.enabled", true);
pref("browser.newtabpage.activity-stream.showSponsoredTopSites", true);
pref("browser.opaqueResponseBlocking", false);
pref("browser.partnerlink.attributionURL", "https://topsites.services.mozilla.com/cid/");
pref("browser.partnerlink.campaign.topsites", "amzn_2020_a1");
pref("browser.places.interactions.typing_timeout_ms", 3000);
pref("browser.preferences.experimental", false);
pref("browser.preferences.experimental.hidden", false);
pref("browser.privatebrowsing.infoBody", "");
pref("browser.privatebrowsing.infoEnabled", true);
pref("browser.privatebrowsing.infoIcon", "");
pref("browser.privatebrowsing.infoLinkText", "");
pref("browser.privatebrowsing.infoLinkUrl", "");
pref("browser.privatebrowsing.infoTitle", "");
pref("browser.privatebrowsing.infoTitleEnabled", true);
pref("browser.privatebrowsing.promoEnabled", true);
pref("browser.privatebrowsing.promoLinkText", "");
pref("browser.privatebrowsing.promoLinkUrl", "");
pref("browser.privatebrowsing.promoTitle", "");
pref("browser.privatebrowsing.promoTitleEnabled", true);
pref("browser.privatebrowsing.vpnpromourl", "https://vpn.mozilla.org/?utm_source=firefox-browser&utm_medium=firefox-%CHANNEL%-browser&utm_campaign=private-browsing-vpn-link");
pref("browser.proton.enabled", true);
pref("browser.proton.places-tooltip.enabled", false);
pref("browser.proton.toolbar.version", 0);
pref("browser.quitShortcut.disabled", false);
pref("browser.region.update.enabled", true);
pref("browser.shell.setDefaultBrowserUserChoice", true);
pref("browser.startup.homepage.abouthome_cache.loglevel", "Warn");
pref("browser.startup.preXulSkeletonUI", true);
pref("browser.startup.upgradeDialog.enabled", true);
pref("browser.tabs.documentchannel.parent-controlled", false);
pref("browser.tabs.secondaryTextUnsupportedLocales", "ar,bn,bo,ckb,fa,gu,he,hi,ja,km,kn,ko,lo,mr,my,ne,pa,si,ta,te,th,ur,zh");
pref("browser.tabs.tooltipsShowPidAndActiveness", false);
pref("browser.theme.toolbar-theme", 2);
pref("browser.toolbars.bookmarks.2h2020", true);
pref("browser.toolbars.bookmarks.showOtherBookmarks", true);
pref("browser.toolbars.bookmarks.visibility", "newtab");
pref("browser.topsites.contile.enabled", false);
pref("browser.topsites.contile.endpoint", "https://contile.services.mozilla.com/v1/tiles");
pref("browser.topsites.useRemoteSetting", true);
pref("browser.urlbar.accessibility.tabToSearch.announceResults", true);
pref("browser.urlbar.experimental.firefoxSuggestLabels.enabled", false);
pref("browser.urlbar.extension.timeout", 400);
pref("browser.urlbar.keepPanelOpenDuringImeComposition", false);
pref("browser.urlbar.loglevel", "Error");
pref("browser.urlbar.quicksuggest.enabled", false);
pref("browser.urlbar.quicksuggest.nonSponsoredIndex", -1);
pref("browser.urlbar.quicksuggest.shouldShowOnboardingDialog", true);
pref("browser.urlbar.quicksuggest.showOnboardingDialogAfterNRestarts", 2);
pref("browser.urlbar.quicksuggest.sponsoredIndex", -1);
pref("browser.urlbar.shortcuts.bookmarks", true);
pref("browser.urlbar.shortcuts.history", true);
pref("browser.urlbar.shortcuts.tabs", true);
pref("browser.urlbar.showSearchSuggestionsFirst", true);
pref("browser.urlbar.sponsoredTopSites", false);
pref("browser.urlbar.suggest.calculator", false);
pref("browser.urlbar.suggest.engines", true);
pref("browser.urlbar.suggest.quicksuggest", true);
pref("browser.urlbar.unitConversion.enabled", false);
pref("browser.urlbar.update2.emptySearchBehavior", 0);
pref("canvas.createConicGradient.enabled", true);
pref("devtools.command-button-errorcount.enabled", true);
pref("devtools.inspector.ruleview.inline-compatibility-warning.enabled", false);
pref("devtools.netmonitor.audits.slow", 500);
pref("devtools.netmonitor.msg.displayed-messages.limit", 500);
pref("devtools.netmonitor.msg.messageDataLimit", 100000);
pref("devtools.netmonitor.msg.payload-preview-height", 128);
pref("devtools.netmonitor.msg.visibleColumns", "[\"data\", \"time\"]");
pref("devtools.overflow.debugging.enabled", true);
pref("devtools.performance.recording.child.timeout_s", 0);
pref("devtools.storage.test.forceLegacyActors", false);
pref("devtools.target-switching.server.enabled", false);
pref("docshell.shistory.bfcache.allow_unload_listeners", false);
pref("docshell.shistory.bfcache.require_no_opener", false);
pref("doh-rollout.clearModeOnShutdown", false);
pref("dom.block_download_in_sandboxed_iframes", true);
pref("dom.block_download_insecure", false);
pref("dom.delay.block_external_protocol_in_iframes.enabled", true);
pref("dom.enable_event_timing", true);
pref("dom.event.wheelDelta.enabled", true);
pref("dom.event.wheel-deltaMode-lines.always-disabled", false);
pref("dom.event.wheel-deltaMode-lines.always-enabled", "");
pref("dom.event.wheel-deltaMode-lines.disabled", true);
pref("dom.events.asyncClipboard.clipboardItem", false);
pref("dom.events.asyncClipboard.read", false);
pref("dom.events.coalesce.touchmove", false);
pref("dom.events.offset-in-svg-relative-to-svg-root", true);
pref("dom.forms.autocapitalize", false);
pref("dom.forms.datetime-local", false);
pref("dom.forms.datetime-local.widget", false);
pref("dom.forms.enterkeyhint", false);
pref("dom.forms.submit.trusted_event_only", false);
pref("dom.indexedDB.privateBrowsing.enabled", false);
pref("dom.innerSize.rounded", true);
pref("dom.input_event.allow_to_cancel_set_user_input", false);
pref("dom.input_events.canSuspendInBCG.enabled", false);
pref("dom.input_events.strict_input_vsync_alignment", true);
pref("dom.ipc.processPrelaunch.fission.number", 3);
pref("dom.ipc.processPrelaunch.lowmem_mb", 4096);
pref("dom.ipc.processPrelaunch.startupDelayMs", 1000);
pref("dom.max_script_run_time.require_critical_input", true);
pref("dom.media.silence_duration_for_audibility", "2.0");
pref("dom.menuitem.enabled", false);
pref("dom.min_background_timeout_value_without_budget_throttling", 1000);
pref("dom.mouse_capture.enabled", true);
pref("dom.navigation.locationChangeRateLimit.count", 200);
pref("dom.navigation.locationChangeRateLimit.timespan", 10);
pref("dom.quotaManager.caching.checkBuildId", true);
pref("dom.quotaManager.directoryRemovalOrRenaming.delayMs", 200);
pref("dom.quotaManager.directoryRemovalOrRenaming.maxRetries", 10);
pref("dom.script_loader.external_scripts.speculate_async.enabled", false);
pref("dom.script_loader.external_scripts.speculate_link_preload.enabled", false);
pref("dom.script_loader.external_scripts.speculate_non_parser_inserted.enabled", false);
pref("dom.script_loader.external_scripts.speculative_omt_parse.enabled", true);
pref("dom.script_loader.full_parse", false);
pref("dom.security.enforceIPCBasedPrincipalVetting", true);
pref("dom.security.https_first", false);
pref("dom.security.https_first_pbm", true);
pref("dom.security.https_only_fire_http_request_background_timer_ms", 3000);
pref("dom.security.https_only_mode_break_upgrade_downgrade_endless_loop", true);
pref("dom.security.https_only_mode_error_page_user_suggestions", false);
pref("dom.security.https_only_mode_ever_enabled_pbm", false);
pref("dom.security.https_only_mode_pbm", false);
pref("dom.security.https_only_mode_send_http_background_request", true);
pref("dom.security.sanitizer.enabled", false);
pref("dom.security.unexpected_system_load_telemetry_enabled", true);
pref("dom.serviceWorkers.mitigations.bypass_on_fault", true);
pref("dom.serviceWorkers.mitigations.navigation_fault_threshold", 3);
pref("dom.serviceWorkers.navigationPreload.enabled", false);
pref("dom.storage.default_site_quota", 25600);
pref("dom.suspend_inactive.enabled", false);
pref("dom.w3c_pointer_events.scroll_by_pen.enabled", true);
pref("dom.webcomponents.formAssociatedCustomElement.enabled", false);
pref("dom.webidl.crosscontext_hasinstance.enabled", true);
pref("dom.webnotifications.silent.enabled", false);
pref("dom.webnotifications.vibrate.enabled", false);
pref("dom.window.clientinformation.enabled", true);
pref("dom.window.sidebar.enabled", true);
pref("dom.window_print.fuzzing.block_while_printing", false);
pref("dom.workers.testing.enabled", false);
pref("editor.hr_element.allow_to_delete_from_following_line", false);
pref("editor.white_space_normalization.blink_compatible", false);
pref("extensions.backgroundServiceWorker.enabled", false);
pref("extensions.formautofill.addresses.capture.enabled", false);
pref("extensions.formautofill.creditCards.hideui", false);
pref("extensions.pocket.loggedOutVariant", "control");
pref("extensions.pocket.onSaveRecs", true);
pref("extensions.pocket.onSaveRecs.locales", "en-US,en-GB,en-CA");
pref("extensions.pocket.showHome", true);
pref("extensions.postDownloadThirdPartyPrompt", true);
pref("extensions.serviceWorkerRegister.allowed", false);
pref("extensions.webextensions.base-content-security-policy.v3", "script-src 'self' http://localhost:* http://127.0.0.1:*; object-src 'self';");
pref("extensions.webidl-api.expose_mock_interface", false);
pref("fission.autostart.session", false);
pref("fission.bfcacheInParent", true);
pref("fission.experiment.enrollmentStatus", 0);
pref("fission.experiment.startupEnrollmentStatus", 0);
pref("fission.openNonFissionWindowOption", false);
pref("fission.processOriginNames", false);
pref("fission.remoteObjectEmbed", true);
pref("formhelper.autozoom.force-disable.test-only", false);
pref("gfx.bundled-fonts.activate", -1);
pref("gfx.color_management.force_srgb", false);
pref("gfx.color_management.native_srgb", false);
pref("gfx.font_rendering.fallback.async", true);
pref("gfx.font-list-omt.enabled", false);
pref("gfx.use-ahardwarebuffer-content", false);
pref("gfx.webrender.allow-partial-present-buffer-age", true);
pref("gfx.webrender.debug.batched-texture-uploads", true);
pref("gfx.webrender.debug.capture-profiler", false);
pref("gfx.webrender.debug.draw-calls-for-texture-copy", true);
pref("gfx.webrender.debug.force-picture-invalidation", false);
pref("gfx.webrender.debug.profiler-ui", "Default");
pref("gfx.webrender.enabled-no-gpu-process-with-angle-win", true);
pref("gfx.webrender.fallback.basic", true);
pref("gfx.webrender.fallback.software", true);
pref("gfx.webrender.fallback.software.requires-gpu-process", false);
pref("gfx.webrender.fallback.software-d3d11", true);
pref("gfx.webrender.low-quality-pinch-zoom", false);
pref("gfx.webrender.picture-tile-height", 512);
pref("gfx.webrender.picture-tile-width", 1024);
pref("gfx.webrender.precache-shaders", false);
pref("gfx.webrender.prefer-robustness", true);
pref("gfx.webrender.software", false);
pref("gfx.webrender.software.d3d11", true);
pref("gfx.webrender.software.d3d11.upload-mode", 4);
pref("gfx.webrender.software.opengl", false);
pref("gfx.webrender.software.unaccelerated-widget.allow", true);
pref("gfx.webrender.svg-images", false);
pref("gfx.webrender.unaccelerated-widget.force", false);
pref("gfx.windows-font-substitutes.always", false);
pref("html5.inert.enabled", false);
pref("image.avif.apply_transforms", true);
pref("image.avif.compliance_strictness", 1);
pref("image.exif-density-correction.enabled", true);
pref("image.exif-density-correction.sanity-check.enabled", true);
pref("image.jxl.enabled", false);
pref("image.mem.shared.unmap.force-enabled", false);
pref("image.mem.shared.unmap.min_expiration_ms", 60000);
pref("image.mem.shared.unmap.min_threshold_kb", 100);
pref("image.svg.blob-image", false);
pref("intl.l10n.pseudo", "");
pref("intl.tsf.hack.extend_setting_selection_range_to_cluster_boundaries", true);
pref("javascript.options.asyncstack_capture_debuggee_only", true);
pref("javascript.options.concurrent_multiprocess_gcs.cpu_divisor", 4);
pref("javascript.options.concurrent_multiprocess_gcs.max", 0);
pref("javascript.options.experimental.ergonomic_brand_checks", true);
pref("javascript.options.experimental.private_fields", true);
pref("javascript.options.experimental.private_methods", true);
pref("javascript.options.experimental.top_level_await", true);
pref("javascript.options.experimental.weakrefs.expose_cleanupSome", false);
pref("javascript.options.external_thread_pool", true);
pref("javascript.options.inlining_bytecode_max_length", 130);
pref("javascript.options.large_arraybuffers", true);
pref("javascript.options.mem.gc_helper_thread_ratio", 50);
pref("javascript.options.mem.gc_max_helper_threads", 8);
pref("javascript.options.self_hosted.use_shared_memory", true);
pref("javascript.options.site_based_pretenuring", true);
pref("javascript.options.spectre.jit_to_cxx_calls", true);
pref("javascript.options.spectre.object_mitigations", true);
pref("javascript.options.wasm_optimizingjit", true);
pref("javascript.options.wasm_simd", true);
pref("javascript.options.weakrefs", true);
pref("layers.gpu-process.crash-also-crashes-browser", false);
pref("layers.gpu-process.stable.frame-threshold", 10);
pref("layers.gpu-process.stable.min-uptime-ms", 240000);
pref("layers.iosurfaceimage.recycle-limit", 15);
pref("layout.accessiblecaret.transition-duration", "250.0");
pref("layout.animation.prerender.partial.jank", false);
pref("layout.css.accent-color.enabled", false);
pref("layout.css.autofill.enabled", true);
pref("layout.css.bloom-filter-attribute-names.enabled", true);
pref("layout.css.caption-side-non-standard.enabled", false);
pref("layout.css.color-mix.enabled", false);
pref("layout.css.counter-ancestor-scope.enabled", true);
pref("layout.css.cross-fade.enabled", false);
pref("layout.css.d-property.enabled", false);
pref("layout.css.element-content-none.enabled", false);
pref("layout.css.fit-content-function.enabled", false);
pref("layout.css.font-metrics-overrides.enabled", true);
pref("layout.css.font-size-adjust.basis.enabled", false);
pref("layout.css.forced-colors.enabled", true);
pref("layout.css.image-set.enabled", true);
pref("layout.css.is-and-where-better-error-recovery.enabled", true);
pref("layout.css.math-depth.enabled", false);
pref("layout.css.math-style.enabled", false);
pref("layout.css.moz-control-character-visibility.enabled", false);
pref("layout.css.moz-submit-invalid.enabled", false);
pref("layout.css.page-size.enabled", false);
pref("layout.css.prefers-contrast.enabled", false);
pref("layout.css.size-adjust.enabled", false);
pref("layout.display-list.improve-fragmentation", true);
pref("layout.extra-tick.minimum-ms", 4);
pref("layout.forms.input-type-search.enabled", false);
pref("layout.keep_ticking_after_load_ms", 1000);
pref("layout.use-plugin-fallback", false);
pref("mathml.scriptminsize_attribute.disabled", false);
pref("mathml.scriptsizemultiplier_attribute.disabled", false);
pref("mathml.stixgeneral_operator_stretching.disabled", true);
pref("media.clockdrift.buffering", 50);
pref("media.cubeb.wasapi-raw", 0);
pref("media.decoder-doctor.testing", false);
pref("media.getusermedia.camera.background.mute.enabled", false);
pref("media.mediacontrol.stopcontrol.aftermediaends", true);
pref("media.mediacontrol.stopcontrol.timer", true);
pref("media.navigator.video.offer_rtcp_rsize", true);
pref("media.peerconnection.video.use_rtx.blocklist", "doxy.me,*.doxy.me");
pref("media.rdd-ffvpx.enabled", true);
pref("media.rdd-retryonfailure.enabled", true);
pref("media.rdd-theora.enabled", true);
pref("media.rdd-vpx.enabled", true);
pref("media.rdd-wmf.enabled", true);
pref("media.sanity-test.disabled", false);
pref("media.videocontrols.keyboard-tab-to-all-controls", true);
pref("media.videocontrols.picture-in-picture.allow-multiple", true);
pref("media.videocontrols.picture-in-picture.video-toggle.has-used", false);
pref("media.videocontrols.picture-in-picture.video-toggle.position", "right");
pref("messaging-system.rsexperimentloader.collection_id", "nimbus-desktop-experiments");
pref("mousewheel.system_scroll_override.enabled", true);
pref("mousewheel.system_scroll_override.horizontal.factor", 200);
pref("mousewheel.system_scroll_override.vertical.factor", 200);
pref("network.cache.frecency_array_check_enabled", false);
pref("network.connectivity-service.nat64-check", true);
pref("network.connectivity-service.nat64-prefix", "");
pref("network.cookie.cookieBehavior.pbmode", 5);
pref("network.cookie.sameSite.schemeful", false);
pref("network.cors_preflight.allow_client_cert", false);
pref("network.dns.echconfig.enabled", false);
pref("network.dns.echconfig.fallback_to_origin_when_all_failed", true);
pref("network.dns.force_waiting_https_rr", false);
pref("network.dns.httpssvc.http3_fast_fallback_timeout", 50);
pref("network.dns.httpssvc.reset_exclustion_list", true);
pref("network.dns.limit_253_chars", true);
pref("network.dns.negative_ttl_for_type_record", 300);
pref("network.dns.upgrade_with_https_rr", false);
pref("network.dns.use_https_rr_as_altsvc", false);
pref("network.dns.use_https_rr_for_speculative_connection", false);
pref("network.http.accept", "");
pref("network.http.http3.alt-svc-mapping-for-testing", "");
pref("network.http.http3.backup_timer_delay", 100);
pref("network.http.http3.enable_0rtt", true);
pref("network.http.http3.enable_qlog", false);
pref("network.http.http3.parallel_fallback_conn_limit", 32);
pref("network.http.http3.support_version1", true);
pref("network.http.windows-sso.enabled", false);
pref("network.jar.record_failure_reason", false);
pref("network.notify.resolvers", true);
pref("network.proxy.default_pac_script_socks_version", 4);
pref("network.proxy.failover_direct", true);
pref("network.proxy.reload_pac_delay", 2000);
pref("network.trr.attempt-when-retrying-confirmation", false);
pref("network.trr.blocklist_cleanup_done", false);
pref("network.trr.confirmation_telemetry_enabled", true);
pref("network.trr.confirmation_timeout_ms", 6000);
pref("network.trr.default_provider_uri", "https://mozilla.cloudflare-dns.com/dns-query");
pref("network.trr.exclude-etc-hosts", true);
pref("network.trr.fallback-on-zero-response", false);
pref("network.trr.odoh.configs_uri", "");
pref("network.trr.odoh.enabled", false);
pref("network.trr.odoh.min_ttl", 60);
pref("network.trr.odoh.proxy_uri", "");
pref("network.trr.odoh.target_host", "");
pref("network.trr.odoh.target_path", "");
pref("network.trr.retry-timeout-ms", 125);
pref("network.trr.skip-check-for-blocked-host", false);
pref("network.trr.split_horizon_mitigations", true);
pref("network.trr.wait-for-confirmation", false);
pref("nglayout.initialpaint.delay", 5);
pref("nglayout.initialpaint.delay_in_oopif", 5);
pref("nimbus.debug", false);
pref("pdfjs.enableScripting", true);
pref("pdfjs.enableXfa", false);
pref("pdfjs.viewerCssTheme", 0);
pref("places.forgetThisSite.clearByBaseDomain", true);
pref("print.cups.monochrome.enabled", true);
pref("print.cups.monochrome.extra_settings", "");
pref("print.default_dpi", "144.0");
pref("print.more-settings.open", false);
pref("print.pages_per_sheet.enabled", true);
pref("print.save_as_pdf.links.enabled", true);
pref("print.tab_modal.enabled", true);
pref("privacy.antitracking.testing", false);
pref("privacy.partition.bloburl_per_agent_cluster", false);
pref("privacy.partition.network_state.connection_with_proxy", false);
pref("privacy.purge_trackers.consider_entity_list", false);
pref("privacy.query_stripping.allow_list", "");
pref("privacy.query_stripping.enabled", false);
pref("privacy.query_stripping.redirect", true);
pref("privacy.query_stripping.strip_list", "");
pref("privacy.resistFingerprinting.exemptedDomains", "*.example.invalid");
pref("privacy.resistFingerprinting.testGranularityMask", 0);
pref("privacy.webrtc.deviceGracePeriodTimeoutMs", 3600000);
pref("privacy.webrtc.globalMuteToggles", false);
pref("privacy.webrtc.hideGlobalIndicator", false);
pref("privacy.window.name.update.enabled", true);
pref("prompts.contentPromptSubDialog", true);
pref("prompts.modalType.httpAuth", 2);
pref("prompts.tabChromePromptSubDialog", true);
pref("prompts.windowPromptSubDialog", true);
pref("remote.active-protocols", 2);
pref("remote.force-local", true);
pref("remote.prefs.recommended", true);
pref("screenshots.browser.component.enabled", false);
pref("security.bad_cert_domain_error.url_fix_enabled", true);
pref("security.external_protocol_requires_permission", true);
pref("security.intermediate_preloading_healer.enabled", false);
pref("security.intermediate_preloading_healer.timer_interval_ms", 300000);
pref("security.pki.crlite_ct_merge_delay_seconds", 100800);
pref("security.sandbox.content.shadow-stacks-strict", false);
pref("security.sandbox.gmp.shadow-stacks-strict", false);
pref("security.sandbox.gpu.shadow-stacks-strict", false);
pref("security.sandbox.rdd.shadow-stacks-strict", false);
pref("security.sandbox.socket.shadow-stacks-strict", false);
pref("security.ssl3.rsa_aes_128_gcm_sha256", true);
pref("security.ssl3.rsa_aes_256_gcm_sha384", true);
pref("security.xfocsp.errorReporting.automatic", false);
pref("security.xfocsp.errorReporting.enabled", true);
pref("services.sync.prefs.sync.browser.ctrlTab.sortByRecentlyUsed", true);
pref("services.sync.prefs.sync.browser.menu.showViewImageInfo", true);
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", true);
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", true);
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.showSponsoredTopSites", true);
pref("services.sync.prefs.sync.browser.safebrowsing.downloads.enabled", true);
pref("services.sync.prefs.sync.browser.safebrowsing.downloads.remote.block_potentially_unwanted", true);
pref("services.sync.prefs.sync.browser.safebrowsing.malware.enabled", true);
pref("services.sync.prefs.sync.browser.safebrowsing.phishing.enabled", true);
pref("services.sync.prefs.sync.browser.sessionstore.warnOnQuit", true);
pref("services.sync.prefs.sync.browser.urlbar.showSearchSuggestionsFirst", true);
pref("services.sync.prefs.sync.browser.urlbar.suggest.engines", true);
pref("services.sync.prefs.sync.browser.urlbar.suggest.topsites", true);
pref("services.sync.prefs.sync.dom.security.https_only_mode", true);
pref("services.sync.prefs.sync.dom.security.https_only_mode_ever_enabled", true);
pref("services.sync.prefs.sync.dom.security.https_only_mode_ever_enabled_pbm", true);
pref("services.sync.prefs.sync.dom.security.https_only_mode_pbm", true);
pref("services.sync.prefs.sync.general.autoScroll", true);
pref("services.sync.prefs.sync.general.smoothScroll", true);
pref("services.sync.prefs.sync.media.videocontrols.picture-in-picture.video-toggle.enabled", true);
pref("services.sync.prefs.sync.privacy.userContext.enabled", true);
pref("services.sync.prefs.sync.privacy.userContext.newTabContainerOnLeftClick.enabled", true);
pref("services.sync.prefs.sync.signon.autofillForms", true);
pref("services.sync.prefs.sync.signon.generation.enabled", true);
pref("services.sync.prefs.sync.signon.management.page.breach-alerts.enabled", true);
pref("services.sync.prefs.sync.ui.osk.enabled", true);
pref("signon.backup.enabled", true);
pref("signon.capture.inputChanges.enabled", true);
pref("signon.formRemovalCapture.enabled", true);
pref("signon.improvedPasswordRules.enabled", true);
pref("signon.management.page.fileImport.enabled", false);
pref("signon.recipes.remoteRecipes.enabled", true);
pref("signon.relatedRealms.enabled", false);
pref("signon.suggestImportCount", 3);
pref("signon.usernameOnlyForm.enabled", false);
pref("storage.sqlite.exclusiveLock.enabled", true);
pref("telemetry.fog.test.activity_limit", 120);
pref("telemetry.fog.test.inactivity_limit", 1200);
pref("telemetry.fog.test.localhost_port", 0);
pref("threads.control_event_queue.enabled", true);
pref("timer.ignore_sleep_wake_notifications", false);
pref("toolkit.aboutProcesses.showAllSubframes", false);
pref("toolkit.aboutProcesses.showThreads", false);
pref("toolkit.backgroundtasks.defaultTimeoutSec", 600);
pref("trailhead.firstrun.newtab.triplets", "");
pref("ui.mouse.radius.reposition", false);
pref("ui.textHighlightBackground", "#ef0fff");
pref("ui.textHighlightForeground", "#ffffff");
pref("ui.textSelectBackgroundAttention", "#38d878");
pref("ui.textSelectBackgroundDisabled", "#b0b0b0");
pref("webgl.debug.incomplete-tex-color", 0);
pref("webgl.enable-ahardwarebuffer", false);
pref("webgl.out-of-process.force", false);
pref("webgl.out-of-process.shmem-size", 100000);
pref("widget.gtk.alt-theme.accent", true);
pref("widget.gtk.alt-theme.dark", true);
pref("widget.gtk.alt-theme.scrollbar", false);
pref("widget.gtk.alt-theme.scrollbar_active", true);
pref("widget.gtk.alt-theme.selection", true);
pref("widget.gtk.follow-firefox-theme", true);
pref("widget.non-native-theme.enabled", true);
pref("widget.non-native-theme.gtk.scrollbar.allow-buttons", false);
pref("widget.non-native-theme.gtk.scrollbar.round-thumb", true);
pref("widget.non-native-theme.gtk.scrollbar.thumb-cross-size", 40);
pref("widget.non-native-theme.gtk.scrollbar.thumb-size", "0.75");
pref("widget.non-native-theme.scrollbar.active-always-themed", true);
pref("widget.non-native-theme.scrollbar.size", 17);
pref("widget.non-native-theme.use-theme-accent", false);
pref("widget.non-native-theme.webrender", true);
pref("widget.non-native-theme.win.scrollbar.use-system-size", true);
pref("widget.pause-compositor-when-minimized", true);

// removed, renamed or hidden in v91.0esr:
pref("advanced.mailftp", false);
pref("apz.android.chrome_fling_physics.enabled", true);
pref("apz.fling_accel_interval_ms", 500);
pref("apz.fling_accel_min_velocity", "1.5");
pref("apz.relative-update.enabled", true);
pref("browser.aboutwelcome.overrideContent", "");
pref("browser.cache.cache_isolation", false);
pref("browser.cache.offline.storage.enable", true);
pref("browser.contentblocking.report.lockwise.mobile-android.url", "https://play.google.com/store/apps/details?id=mozilla.lockbox&referrer=utm_source%3Dprotection_report%26utm_content%3Dmobile_promotion");
pref("browser.contentblocking.report.lockwise.mobile-ios.url", "https://apps.apple.com/app/id1314000270");
pref("browser.ctrlTab.recentlyUsedOrder", true);
pref("browser.defaultbrowser.notificationbar", false);
pref("browser.download.hide_plugins_without_extensions", true);
pref("browser.download.show_plugins_in_list", true);
pref("browser.library.activity-stream.enabled", true);
pref("browser.messaging-system.personalized-cfr.scores", "{}");
pref("browser.messaging-system.personalized-cfr.score-threshold", 5000);
pref("browser.newtabpage.activity-stream.discoverystream.region-layout-config", "US,CA,GB");
pref("browser.newtabpage.activity-stream.feeds.asrouterfeed", true);
pref("browser.newtabpage.activity-stream.telemetry.structuredIngestion", true);
pref("browser.search.geoSpecificDefaults", true);
pref("browser.search.geoSpecificDefaults.url", "https://search.services.mozilla.com/1/%APP%/%VERSION%/%CHANNEL%/%LOCALE%/%REGION%/%DISTRIBUTION%/%DISTRIBUTION_VERSION%");
pref("browser.search.modernConfig", true);
pref("browser.slowStartup.maxSamples", 5);
pref("browser.slowStartup.notificationDisabled", false);
pref("browser.slowStartup.timeThreshold", 20000);
pref("browser.ssb.enabled", false);
pref("browser.tabs.crashReporting.email", "");
pref("browser.tabs.crashReporting.emailMe", false);
pref("browser.tabs.crashReporting.requestEmail", false);
pref("browser.tabs.documentchannel", true);
pref("browser.tabs.documentchannel.parent-initiated", true);
pref("browser.tabs.documentchannel.ppdc", true);
pref("browser.tabs.extraDragSpace", false);
pref("browser.urlbar.delay", 50);
pref("browser.urlbar.formatting.enabled", true);
pref("browser.urlbar.restyleSearches", false);
pref("browser.urlbar.update1.interventions", true);
pref("browser.urlbar.update1.searchTips", true);
pref("browser.urlbar.update2.expandTextOnFocus", false);
pref("browser.urlbar.usepreloadedtopurls.enabled", false);
pref("browser.urlbar.usepreloadedtopurls.expire_days", 14);
pref("devtools.accessibility.auto-init.enabled", false);
pref("devtools.contenttoolbox.fission", false);
pref("devtools.debugger.features.watchpoints", true);
pref("devtools.inspector.new-rulesview.enabled", false);
pref("devtools.netmonitor.ws.displayed-frames.limit", 500);
pref("devtools.netmonitor.ws.messageDataLimit", 100000);
pref("devtools.netmonitor.ws.payload-preview-height", 128);
pref("devtools.netmonitor.ws.visibleColumns", "[\"data\", \"time\"]");
pref("devtools.responsive.browserUI.enabled", false);
pref("devtools.target-switching.enabled", false);
pref("devtools.whatsnew.enabled", true);
pref("devtools.whatsnew.feature-enabled", true);
pref("doh-rollout.profileCreationThreshold", "1572476400000");
pref("doh-rollout.trr-selection.enabled", false);
pref("dom.compositionevent.text.dispatch_only_system_group_in_content", true);
pref("dom.datatransfer.mozAtAPIs", false);
pref("dom.disable_window_open_feature.close", false);
pref("dom.disable_window_open_feature.location", true);
pref("dom.disable_window_open_feature.menubar", false);
pref("dom.disable_window_open_feature.minimizable", false);
pref("dom.disable_window_open_feature.personalbar", false);
pref("dom.disable_window_open_feature.resizable", true);
pref("dom.disable_window_open_feature.status", true);
pref("dom.disable_window_open_feature.titlebar", false);
pref("dom.disable_window_open_feature.toolbar", false);
pref("dom.events.asyncClipboard.dataTransfer", false);
pref("dom.experimental_forms", false);
pref("dom.formdata.event.enabled", true);
pref("dom.forms.color", true);
pref("dom.forms.datetime", true);
pref("dom.forms.requestsubmit.enabled", true);
pref("dom.inputevent.data.enabled", true);
pref("dom.inputevent.datatransfer.enabled", true);
pref("dom.inputevent.inputtype.enabled", true);
pref("dom.largeAllocation.testing.allHttpLoads", false);
pref("dom.placeholder.show_on_focus", true);
pref("dom.presentation.controller.enabled", false);
pref("dom.presentation.discoverable", false);
pref("dom.presentation.discoverable.encrypted", true);
pref("dom.presentation.discoverable.retry_ms", 5000);
pref("dom.presentation.discovery.enabled", false);
pref("dom.presentation.discovery.timeout_ms", 10000);
pref("dom.presentation.enabled", false);
pref("dom.presentation.receiver.enabled", false);
pref("dom.presentation.session_transport.data_channel.enable", false);
pref("dom.presentation.tcp_server.debug", false);
pref("dom.presentation.testing.simulate-receiver", false);
pref("dom.security.featurePolicy.enabled", true);
pref("dom.security.respect_document_nosniff", true);
pref("dom.select_events.enabled", true);
pref("dom.serviceWorkers.parent_intercept", true);
pref("dom.sidebar.enabled", false);
pref("dom.w3c_pointer_events.enabled", true);
pref("dom.w3c_pointer_events.multiprocess.android.enabled", true);
pref("dom.webcomponents.elementInternals.enabled", false);
pref("dom.webdriver.enabled", true);
pref("extensions.allowPrivateBrowsingByDefault", false);
pref("extensions.blocklist.useMLBF", true);
pref("extensions.blocklist.useMLBF.stashes", true);
pref("extensions.content_script_csp.enabled", false);
pref("extensions.content_script_csp.report_only", true);
pref("extensions.screenshots.upload-disabled", false);
pref("extensions.webextensions.tabhide.enabled", true);
pref("fission.rebuild_frameloaders_on_remoteness_change", true);
pref("gfx.font_loader.interval", 1000);
pref("gfx.webrender.debug.compact-profiler", false);
pref("gfx.webrender.debug.disable-raster-root-scale", false);
pref("gfx.webrender.debug.new-frame-indicator", false);
pref("gfx.webrender.debug.new-scene-indicator", false);
pref("gfx.webrender.debug.smart-profiler", false);
pref("gfx.webrender.picture-caching", true);
pref("identity.fxaccounts.service.sendLoginUrl", "https://send.firefox.com/login/");
pref("identity.fxaccounts.useSessionTokensForOAuth", true);
pref("identity.sync.useOAuthForSyncToken", false);
pref("image.honor_orientation_metadata.natural_size", true);
pref("image.honor-orientation-metadata", true);
pref("intl.charset.detector", "chrome://global/locale/intl.properties");
pref("intl.charset.detector.iso2022jp.allowed", true);
pref("intl.charset.detector.ng.enabled", true);
pref("intl.charset.detector.ng.in.enabled", false);
pref("intl.charset.detector.ng.jp.enabled", false);
pref("intl.charset.detector.ng.lk.enabled", false);
pref("intl.charset.fallback.override", "");
pref("intl.charset.fallback.tld", true);
pref("javascript.options.ion.full.threshold", 100000);
pref("javascript.options.showInConsole", true);
pref("javascript.options.spectre.jit_to_C++_calls", true);
pref("javascript.options.spectre.object_mitigations.barriers", true);
pref("javascript.options.spectre.object_mitigations.misc", true);
pref("javascript.options.wasm_ionjit", true);
pref("javascript.options.wasm_multi_value", true);
pref("javascript.options.wasm_reftypes", true);
pref("jsloader.shareGlobal", true);
pref("layers.advanced.basic-layer.enabled", false);
pref("layers.advanced.fission.enabled", false);
pref("layers.mlgpu.enable-buffer-cache", true);
pref("layers.mlgpu.enable-buffer-sharing", true);
pref("layers.mlgpu.enable-clear-view", true);
pref("layers.mlgpu.enable-cpu-occlusion", true);
pref("layers.mlgpu.enabled", true);
pref("layers.mlgpu.enable-depth-buffer", false);
pref("layers.mlgpu.enable-invalidation", true);
pref("layers.mlgpu.enable-on-windows7", true);
pref("layout.css.comparison-functions.enabled", true);
pref("layout.css.conic-gradient.enabled", false);
pref("layout.css.file-chooser-button.enabled", false);
pref("layout.css.focus-visible.enabled", false);
pref("layout.css.image-orientation.initial-from-image", true);
pref("layout.css.is-where-selectors.enabled", true);
pref("layout.css.moz-focus-outer.enabled", true);
pref("layout.css.moz-touch-enabled.enabled", false);
pref("layout.css.offset-logical-properties.enabled", false);
pref("layout.css.scrollbar-color.enabled", true);
pref("layout.css.scrollbar-width.enabled", true);
pref("layout.css.shadow-parts.enabled", true);
pref("layout.css.text-decoration-skip-ink.enabled", true);
pref("layout.css.text-decoration-thickness.enabled", true);
pref("layout.css.text-justify.enabled", true);
pref("layout.css.text-underline-offset.enabled", true);
pref("layout.css.text-underline-position.enabled", true);
pref("layout.css.unknown-webkit-pseudo-element", true);
pref("layout.css.width-and-height-map-to-aspect-ratio.enabled", true);
pref("layout.css.xul-tree-pseudos.content.enabled", false);
pref("layout.display-list.retain.verify", false);
pref("layout.display-list.retain.verify.order", false);
pref("layout.viewport_contains_no_contents_area", true);
pref("marionette.contentListener", false);
pref("marionette.enabled", false);
pref("marionette.prefs.recommended", true);
pref("mathml.legacy_number_syntax.disabled", true);
pref("mathml.mfenced_element.disabled", true);
pref("mathml.nonzero_unitless_lengths.disabled", true);
pref("media.ffmpeg.low-latency.enabled", false);
pref("media.getusermedia.experimental_input_processing", false);
pref("media.useAudioChannelAPI", false);
pref("media.wmf.deblacklisting-for-telemetry-in-gpu-process", true);
pref("media.wmf.disable-d3d11-for-dlls", "igd11dxva64.dll: 20.19.15.4463, 20.19.15.4454, 20.19.15.4444, 20.19.15.4416, 20.19.15.4404, 20.19.15.4390, 20.19.15.4380, 20.19.15.4377, 20.19.15.4364, 20.19.15.4360, 20.19.15.4352, 20.19.15.4331, 20.19.15.4326, 20.19.15.4300; igd10iumd32.dll: 20.19.15.4444, 20.19.15.4424, 20.19.15.4409, 20.19.15.4390, 20.19.15.4380, 20.19.15.4360, 10.18.10.4358, 20.19.15.4331, 20.19.15.4312, 20.19.15.4300, 10.18.15.4281, 10.18.15.4279, 10.18.10.4276, 10.18.15.4268, 10.18.15.4256, 10.18.10.4252, 10.18.15.4248, 10.18.14.4112, 10.18.10.3958, 10.18.10.3496, 10.18.10.3431, 10.18.10.3412, 10.18.10.3355, 9.18.10.3234, 9.18.10.3071, 9.18.10.3055, 9.18.10.3006; igd10umd32.dll: 9.17.10.4229, 9.17.10.3040, 9.17.10.2884, 9.17.10.2857, 8.15.10.2274, 8.15.10.2272, 8.15.10.2246, 8.15.10.1840, 8.15.10.1808; igd10umd64.dll: 9.17.10.4229, 9.17.10.2884, 9.17.10.2857, 10.18.10.3496; isonyvideoprocessor.dll: 4.1.2247.8090, 4.1.2153.6200; tosqep.dll: 1.2.15.526, 1.1.12.201, 1.0.11.318, 1.0.11.215, 1.0.10.1224; tosqep64.dll: 1.1.12.201, 1.0.11.215; nvwgf2um.dll: 22.21.13.8253, 22.21.13.8233, 22.21.13.8205, 22.21.13.8189, 22.21.13.8178, 22.21.13.8165, 21.21.13.7892, 21.21.13.7878, 21.21.13.7866, 21.21.13.7849, 21.21.13.7654, 21.21.13.7653, 21.21.13.7633, 21.21.13.7619, 21.21.13.7563, 21.21.13.7306, 21.21.13.7290, 21.21.13.7270, 21.21.13.7254, 21.21.13.6939, 21.21.13.6926, 21.21.13.6909, 21.21.13.4201, 21.21.13.4200, 10.18.13.6881, 10.18.13.6839, 10.18.13.6510, 10.18.13.6472, 10.18.13.6143, 10.18.13.5946, 10.18.13.5923, 10.18.13.5921, 10.18.13.5891, 10.18.13.5887, 10.18.13.5582, 10.18.13.5445, 10.18.13.5382, 10.18.13.5362, 9.18.13.4788, 9.18.13.4752, 9.18.13.4725, 9.18.13.4709, 9.18.13.4195, 9.18.13.4192, 9.18.13.4144, 9.18.13.4052, 9.18.13.3788, 9.18.13.3523, 9.18.13.3235, 9.18.13.3165, 9.18.13.2723, 9.18.13.2702, 9.18.13.1422, 9.18.13.1407, 9.18.13.1106, 9.18.13.546; atidxx32.dll: 21.19.151.3, 21.19.142.257, 21.19.137.514, 21.19.137.1, 21.19.134.1, 21.19.128.7, 21.19.128.4, 20.19.0.32837, 20.19.0.32832, 8.17.10.682, 8.17.10.671, 8.17.10.661, 8.17.10.648, 8.17.10.644, 8.17.10.625, 8.17.10.605, 8.17.10.581, 8.17.10.569, 8.17.10.560, 8.17.10.545, 8.17.10.539, 8.17.10.531, 8.17.10.525, 8.17.10.520, 8.17.10.519, 8.17.10.514, 8.17.10.511, 8.17.10.494, 8.17.10.489, 8.17.10.483, 8.17.10.453, 8.17.10.451, 8.17.10.441, 8.17.10.436, 8.17.10.432, 8.17.10.425, 8.17.10.418, 8.17.10.414, 8.17.10.401, 8.17.10.395, 8.17.10.385, 8.17.10.378, 8.17.10.362, 8.17.10.355, 8.17.10.342, 8.17.10.331, 8.17.10.318, 8.17.10.310, 8.17.10.286, 8.17.10.269, 8.17.10.261, 8.17.10.247, 8.17.10.240, 8.15.10.212; atidxx64.dll: 21.19.151.3, 21.19.142.257, 21.19.137.514, 21.19.137.1, 21.19.134.1, 21.19.128.7, 21.19.128.4, 20.19.0.32832, 8.17.10.682, 8.17.10.661, 8.17.10.644, 8.17.10.625; nvumdshim.dll: 10.18.13.6822");
pref("media.wmf.disable-d3d9-for-dlls", "igdumd64.dll: 8.15.10.2189, 8.15.10.2119, 8.15.10.2104, 8.15.10.2102, 8.771.1.0; atiumd64.dll: 7.14.10.833, 7.14.10.867, 7.14.10.885, 7.14.10.903, 7.14.10.911, 8.14.10.768, 9.14.10.1001, 9.14.10.1017, 9.14.10.1080, 9.14.10.1128, 9.14.10.1162, 9.14.10.1171, 9.14.10.1183, 9.14.10.1197, 9.14.10.945, 9.14.10.972, 9.14.10.984, 9.14.10.996");
pref("mousewheel.system_scroll_override_on_root_content.enabled", true);
pref("mousewheel.system_scroll_override_on_root_content.horizontal.factor", 200);
pref("mousewheel.system_scroll_override_on_root_content.vertical.factor", 200);
pref("network.data.max-uri-length-mobile", 2097152);
pref("network.ftp.control.qos", 0);
pref("network.ftp.data.qos", 0);
pref("network.ftp.enabled", true);
pref("network.ftp.idleConnectionTimeout", 300);
pref("network.http.spdy.bug1556491", true);
pref("network.http.spdy.bug1563695", true);
pref("network.protocol-handler.external.mk", false);
pref("network.proxy.ftp", "");
pref("network.proxy.ftp_port", 0);
pref("network.security.esni.enabled", false);
pref("network.standard-url.punycode-host", true);
pref("network.tcp.tcp_fastopen_consecutive_failure_limit", 5);
pref("network.tcp.tcp_fastopen_enable", false);
pref("network.tcp.tcp_fastopen_http_check_for_stalls_only_if_idle_for", 10);
pref("network.tcp.tcp_fastopen_http_stalls_limit", 3);
pref("network.tcp.tcp_fastopen_http_stalls_timeout", 20);
pref("network.trr.bootstrapAddress", "");
pref("network.trr.early-AAAA", false);
pref("network.trr.enable_when_nrpt_detected", false);
pref("network.trr.enable_when_proxy_detected", false);
pref("network.trr.enable_when_vpn_detected", false);
pref("network.trr.resolvers", "[{ \"name\": \"Cloudflare\", \"url\": \"https://mozilla.cloudflare-dns.com/dns-query\" },{ \"name\": \"NextDNS\", \"url\": \"https://firefox.dns.nextdns.io/\" }]");
pref("network.trr.wait-for-A-and-AAAA", true);
pref("pdfjs.enableWebGL", false);
pref("pdfjs.renderer", "canvas");
pref("plugin.mousewheel.enabled", true);
pref("prompts.tab_modal.enabled", true);
pref("reader.parse-on-load.force-enabled", false);
pref("security.aboutcertificate.enabled", true);
pref("security.block_importScripts_with_wrong_mime", true);
pref("security.block_script_with_wrong_mime", true);
pref("security.cert_pinning.hpkp.enabled", false);
pref("security.cert_pinning.max_max_age_seconds", 5184000);
pref("security.cert_pinning.process_headers_from_non_builtin_roots", false);
pref("security.csp.enableStrictDynamic", true);
pref("security.data_uri.unique_opaque_origin", true);
pref("security.pki.distrust_ca_policy", 2);
pref("security.sandbox.rdd.win32k-disable", true);
pref("security.sri.enable", true);
pref("security.ssl.errorReporting.automatic", false);
pref("security.ssl.errorReporting.enabled", false);
pref("security.ssl.errorReporting.url", "https://incoming.telemetry.mozilla.org/submit/sslreports/");
pref("security.view-source.reachable-from-inner-protocol", false);
pref("services.blocklist.addons-mlbf.collection", "addons-bloomfilters");
pref("services.blocklist.addons-mlbf.signer", "remote-settings.content-signature.mozilla.org");
pref("services.blocklist.pinning.bucket", "pinning");
pref("services.blocklist.pinning.checked", 0);
pref("services.blocklist.pinning.collection", "pins");
pref("services.blocklist.pinning.enabled", true);
pref("services.blocklist.pinning.signer", "pinning-preload.content-signature.mozilla.org");
pref("services.sync.engine.bookmarks.buffer", true);
pref("services.sync.prefs.sync.browser.ctrlTab.recentlyUsedOrder", true);
pref("services.sync.prefs.sync.browser.urlbar.matchBuckets", true);
pref("signon.management.page.hideMobileFooter", false);
pref("signon.management.page.mobileAndroidURL", "https://app.adjust.com/6tteyjo?redirect=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dmozilla.lockbox&utm_campaign=Desktop&utm_adgroup=InProduct&utm_creative=");
pref("signon.management.page.mobileAppleURL", "https://app.adjust.com/6tteyjo?redirect=https%3A%2F%2Fitunes.apple.com%2Fapp%2Fid1314000270%3Fmt%3D8&utm_campaign=Desktop&utm_adgroup=InProduct&utm_creative=");
pref("signon.management.page.showPasswordSyncNotification", true);
pref("svg.text-spacing.enabled", true);
pref("svg.transform-box.enabled", true);
pref("toolkit.asyncshutdown.report_writes_after", 40000);
pref("toolkit.telemetry.ecosystemtelemetry.enabled", false);
pref("toolkit.telemetry.isGeckoViewMode", false);
pref("trailhead.firstrun.branches", "join-dynamic");
pref("ui.android.mouse_as_touch", 1);
pref("ui.use_native_colors", true);
pref("webgl.prototype.ipc-pcq", 0);
pref("widget.disable-native-theme-for-content", false);

// changed in v91.0esr:
pref("accessibility.mouse_focuses_formcontrol", 1); // prev: false
pref("app.feedback.baseURL", "https://ideas.mozilla.org/"); // prev: "https://input.mozilla.org/%LOCALE%/feedback/%APP%/%VERSION%/"
pref("apz.allow_zooming", true); // prev: false
pref("apz.one_touch_pinch.enabled", false); // prev: true
pref("apz.popups.enabled", true); // prev: false
pref("apz.velocity_relevance_time_ms", 100); // prev: 150
pref("apz.windows.force_disable_direct_manipulation", false); // prev: true
pref("apz.windows.use_direct_manipulation", true); // prev: false
pref("apz.zoom_animation_duration_ms", 350); // prev: 250
pref("browser.backspace_action", 2); // prev: 0
pref("browser.contentblocking.cfr-milestone.milestones", "[1000, 5000, 10000, 25000, 50000, 100000, 250000, 314159, 500000, 750000, 1000000, 1250000, 1500000, 1750000, 2000000, 2250000, 2500000, 8675309]"); // prev: "[1000, 5000, 10000, 25000, 50000, 100000, 500000]"
pref("browser.contentblocking.features.strict", "tp,tpPrivate,cookieBehavior5,cookieBehaviorPBM5,cm,fp,stp,lvl2"); // prev: "tp,tpPrivate,cookieBehavior4,cm,fp,stp"
pref("browser.contentblocking.report.show_mobile_app", true); // prev: false
pref("browser.display.show_focus_rings", false); // prev: true
pref("browser.newtabpage.activity-stream.asrouter.providers.cfr", "{\"id\":\"cfr\",\"enabled\":true,\"type\":\"remote-settings\",\"bucket\":\"cfr\",\"updateCycleInMs\":3600000}"); // prev: "{\"id\":\"cfr\",\"enabled\":true,\"type\":\"remote-settings\",\"bucket\":\"cfr\",\"frequency\":{\"custom\":[{\"period\":\"daily\",\"cap\":1}]},\"categories\":[\"cfrAddons\",\"cfrFeatures\"],\"updateCycleInMs\":3600000}"
pref("browser.newtabpage.activity-stream.asrouter.providers.cfr-fxa", "{\"id\":\"cfr-fxa\",\"enabled\":true,\"type\":\"remote-settings\",\"bucket\":\"cfr-fxa\",\"updateCycleInMs\":3600000}"); // prev: "{\"id\":\"cfr-fxa\",\"enabled\":true,\"type\":\"remote-settings\",\"bucket\":\"cfr-fxa\",\"frequency\":{\"custom\":[{\"period\":\"daily\",\"cap\":1}]},\"updateCycleInMs\":3600000}"
pref("browser.newtabpage.activity-stream.asrouter.providers.message-groups", "{\"id\":\"message-groups\",\"enabled\":true,\"type\":\"remote-settings\",\"bucket\":\"message-groups\",\"updateCycleInMs\":3600000}"); // prev: "{\"id\":\"message-groups\",\"enabled\":false,\"type\":\"remote-settings\",\"bucket\":\"message-groups\",\"updateCycleInMs\":3600000}"
pref("browser.newtabpage.activity-stream.asrouter.providers.messaging-experiments", "{\"id\":\"messaging-experiments\",\"enabled\":true,\"type\":\"remote-experiments\",\"messageGroups\":[\"cfr\",\"whats-new-panel\",\"moments-page\",\"cfr-fxa\",\"aboutwelcome\",\"infobar\"],\"updateCycleInMs\":3600000}"); // prev: "{\"id\":\"messaging-experiments\",\"enabled\":true,\"type\":\"remote-experiments\",\"messageGroups\":[\"cfr\",\"whats-new-panel\",\"moments-page\",\"snippets\",\"cfr-fxa\",\"aboutwelcome\"],\"updateCycleInMs\":3600000}"
pref("browser.newtabpage.activity-stream.asrouter.providers.snippets", "{\"id\":\"snippets\",\"enabled\":false,\"type\":\"remote\",\"url\":\"https://snippets.cdn.mozilla.net/%STARTPAGE_VERSION%/%NAME%/%VERSION%/%APPBUILDID%/%BUILD_TARGET%/%LOCALE%/%CHANNEL%/%OS_VERSION%/%DISTRIBUTION%/%DISTRIBUTION_VERSION%/\",\"updateCycleInMs\":14400000}"); // prev: "{\"id\":\"snippets\",\"enabled\":true,\"type\":\"remote\",\"url\":\"https://snippets.cdn.mozilla.net/%STARTPAGE_VERSION%/%NAME%/%VERSION%/%APPBUILDID%/%BUILD_TARGET%/%LOCALE%/%CHANNEL%/%OS_VERSION%/%DISTRIBUTION%/%DISTRIBUTION_VERSION%/\",\"updateCycleInMs\":14400000}"
pref("browser.newtabpage.activity-stream.discoverystream.personalization.version", 2); // prev: 1
pref("browser.newtabpage.activity-stream.discoverystream.region-basic-layout", false); // prev: true
pref("browser.newtabpage.activity-stream.discoverystream.region-spocs-config", "US,CA,DE,GB"); // prev: "US"
pref("browser.newtabpage.activity-stream.discoverystream.region-stories-config", "US,DE,CA,GB,IE,CH,AT,BE,IN"); // prev: "US,DE,CA,GB"
pref("browser.newtabpage.activity-stream.feeds.section.highlights", false); // prev: true
pref("browser.newtabpage.activity-stream.feeds.section.topstories.options", "{\"api_key_pref\":\"extensions.pocket.oAuthConsumerKey\",\"hidden\":true,\"provider_icon\":\"chrome://global/skin/icons/pocket.svg\",\"provider_name\":\"Pocket\",\"read_more_endpoint\":\"https://getpocket.com/explore/trending?src=fx_new_tab\",\"stories_endpoint\":\"https://getpocket.cdn.mozilla.net/v3/firefox/global-recs?version=3&consumer_key=$apiKey&locale_lang=en-US&feed_variant=default_spocs_off\",\"stories_referrer\":\"https://getpocket.com/recommendations\",\"topics_endpoint\":\"https://getpocket.cdn.mozilla.net/v3/firefox/trending-topics?version=2&consumer_key=$apiKey&locale_lang=en-US\",\"show_spocs\":false}"); // prev: "{\"api_key_pref\":\"extensions.pocket.oAuthConsumerKey\",\"hidden\":true,\"provider_icon\":\"pocket\",\"provider_name\":\"Pocket\",\"read_more_endpoint\":\"https://getpocket.com/explore/trending?src=fx_new_tab\",\"stories_endpoint\":\"https://getpocket.cdn.mozilla.net/v3/firefox/global-recs?version=3&consumer_key=$apiKey&locale_lang=en-US&feed_variant=default_spocs_off\",\"stories_referrer\":\"https://getpocket.com/recommendations\",\"topics_endpoint\":\"https://getpocket.cdn.mozilla.net/v3/firefox/trending-topics?version=2&consumer_key=$apiKey&locale_lang=en-US\",\"model_keys\":[\"nmf_model_animals\",\"nmf_model_business\",\"nmf_model_career\",\"nmf_model_datascience\",\"nmf_model_design\",\"nmf_model_education\",\"nmf_model_entertainment\",\"nmf_model_environment\",\"nmf_model_fashion\",\"nmf_model_finance\",\"nmf_model_food\",\"nmf_model_health\",\"nmf_model_home\",\"nmf_model_life\",\"nmf_model_marketing\",\"nmf_model_politics\",\"nmf_model_programming\",\"nmf_model_science\",\"nmf_model_shopping\",\"nmf_model_sports\",\"nmf_model_tech\",\"nmf_model_travel\",\"nb_model_animals\",\"nb_model_books\",\"nb_model_business\",\"nb_model_career\",\"nb_model_datascience\",\"nb_model_design\",\"nb_model_economics\",\"nb_model_education\",\"nb_model_entertainment\",\"nb_model_environment\",\"nb_model_fashion\",\"nb_model_finance\",\"nb_model_food\",\"nb_model_game\",\"nb_model_health\",\"nb_model_history\",\"nb_model_home\",\"nb_model_life\",\"nb_model_marketing\",\"nb_model_military\",\"nb_model_philosophy\",\"nb_model_photography\",\"nb_model_politics\",\"nb_model_productivity\",\"nb_model_programming\",\"nb_model_psychology\",\"nb_model_science\",\"nb_model_shopping\",\"nb_model_society\",\"nb_model_space\",\"nb_model_sports\",\"nb_model_tech\",\"nb_model_travel\",\"nb_model_writing\"],\"show_spocs\":false,\"personalized\":true,\"version\":1}"
pref("browser.newtabpage.activity-stream.feeds.snippets", false); // prev: true
pref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", true); // prev: false
pref("browser.tabs.remote.useCrossOriginEmbedderPolicy", true); // prev: false
pref("browser.tabs.remote.useCrossOriginOpenerPolicy", true); // prev: false
pref("browser.urlbar.richSuggestions.tail", true); // prev: false
pref("captivedetect.canonicalContent", "<meta http-equiv=\"refresh\" content=\"0;url=https://support.mozilla.org/kb/captive-portal\"/>"); // prev: "success\n"
pref("captivedetect.canonicalURL", "http://detectportal.firefox.com/canonical.html"); // prev: "http://detectportal.firefox.com/success.txt"
pref("devtools.application.enabled", true); // prev: false
pref("devtools.debugger.features.async-captured-stacks", true); // prev: false
pref("devtools.debugger.features.async-live-stacks", false); // prev: true
pref("devtools.inspector.color-scheme-simulation.enabled", true); // prev: false
pref("devtools.netmonitor.features.serverSentEvents", true); // prev: false
pref("devtools.performance.recording.features", "[\"js\",\"leaf\",\"stackwalk\",\"cpu\",\"screenshots\"]"); // prev: "[\"js\",\"leaf\",\"stackwalk\",\"screenshots\"]"
pref("devtools.performance.recording.features.remote", "[\"js\",\"leaf\",\"stackwalk\",\"cpu\",\"screenshots\",\"java\"]"); // prev: "[\"js\",\"leaf\",\"stackwalk\",\"screenshots\",\"java\"]"
pref("dom.animations-api.compositing.enabled", true); // prev: false
pref("dom.arena_allocator.enabled", true); // prev: false
pref("dom.document.exec_command.nested_calls_allowed", false); // prev: true
pref("dom.event.default_to_passive_wheel_listeners", true); // prev: false
pref("dom.image-lazy-loading.enabled", true); // prev: false
pref("dom.image-lazy-loading.root-margin.bottom", "300.0"); // prev: "0.0"
pref("dom.image-lazy-loading.root-margin.left", "300.0"); // prev: "0.0"
pref("dom.image-lazy-loading.root-margin.right", "300.0"); // prev: "0.0"
pref("dom.image-lazy-loading.root-margin.top", "300.0"); // prev: "0.0"
pref("dom.input_events.beforeinput.enabled", true); // prev: false
pref("dom.ipc.tabs.shutdownTimeoutSecs", 20); // prev: 5
pref("dom.manifest.enabled", true); // prev: false
pref("dom.max_chrome_script_run_time", 0); // prev: 20
pref("dom.media.mediasession.enabled", true); // prev: false
pref("dom.popup_allowed_events", "change click dblclick auxclick mousedown mouseup pointerdown pointerup notificationclick reset submit touchend contextmenu"); // prev: "change click dblclick auxclick mouseup pointerup notificationclick reset submit touchend contextmenu"
pref("dom.postMessage.sharedArrayBuffer.withCOOP_COEP", true); // prev: false
pref("dom.security.secFetch.enabled", true); // prev: false
pref("dom.targetBlankNoOpener.enabled", true); // prev: false
pref("dom.visualviewport.enabled", true); // prev: false
pref("dom.w3c_pointer_events.implicit_capture", true); // prev: false
pref("extensions.formautofill.creditCards.available", true); // prev: false
pref("extensions.formautofill.supportedCountries", "US,CA"); // prev: "US"
pref("extensions.webextensions.base-content-security-policy", "script-src 'self' https://* http://localhost:* http://127.0.0.1:* moz-extension: blob: filesystem: 'unsafe-eval' 'unsafe-inline'; object-src 'self' moz-extension: blob: filesystem:;"); // prev: "script-src 'self' https://* moz-extension: blob: filesystem: 'unsafe-eval' 'unsafe-inline'; object-src 'self' https://* moz-extension: blob: filesystem:;"
pref("fission.preserve_browsing_contexts", true); // prev: false
pref("general.smoothScroll.mouseWheel.durationMaxMS", 200); // prev: 400
pref("general.smoothScroll.mouseWheel.durationMinMS", 50); // prev: 200
pref("gfx.canvas.remote", true); // prev: false
pref("gfx.e10s.font-list.shared", true); // prev: false
pref("gfx.font_loader.delay", 60000); // prev: 120000
pref("image.http.accept", ""); // prev: "image/webp,*/*"
pref("javascript.options.asyncstack", true); // prev: false
pref("javascript.options.ion.threshold", 1500); // prev: 1000
pref("layers.gpu-process.max_restarts", 3); // prev: 1
pref("layers.omtp.enabled", false); // prev: true
pref("layout.css.aspect-ratio.enabled", true); // prev: false
pref("mathml.deprecated_alignment_attributes.disabled", true); // prev: false
pref("mathml.deprecated_menclose_notation_radical.disabled", true); // prev: false
pref("mathml.deprecated_style_attributes.disabled", true); // prev: false
pref("mathml.mathsize_names.disabled", true); // prev: false
pref("mathml.mfrac_bevelled_attribute.disabled", true); // prev: false
pref("mathml.mfrac_linethickness_names.disabled", true); // prev: false
pref("mathml.script_shift_attributes.disabled", true); // prev: false
pref("mathml.xlink.disabled", true); // prev: false
pref("media.decoder-doctor.notifications-allowed", "MediaWMFNeeded,MediaWidevineNoWMF,MediaCannotInitializePulseAudio,MediaCannotPlayNoDecoders,MediaUnsupportedLibavcodec,MediaPlatformDecoderNotFound"); // prev: "MediaWMFNeeded,MediaWidevineNoWMF,MediaCannotInitializePulseAudio,MediaCannotPlayNoDecoders,MediaUnsupportedLibavcodec"
pref("media.getusermedia.microphone.off_while_disabled.enabled", false); // prev: true
pref("media.hardwaremediakeys.enabled", true); // prev: false
pref("media.mediacontrol.stopcontrol.timer.ms", 86400000); // prev: 60000
pref("media.navigator.video.use_transport_cc", true); // prev: false
pref("media.peerconnection.dtls.version.min", 771); // prev: 770
pref("media.peerconnection.video.use_rtx", true); // prev: false
pref("media.videocontrols.picture-in-picture.keyboard-controls.enabled", true); // prev: false
pref("network.connectivity-service.DNSv4.domain", "example.org"); // prev: "mozilla.org"
pref("network.connectivity-service.DNSv6.domain", "example.org"); // prev: "mozilla.org"
pref("network.http.http3.default-max-stream-blocked", 20); // prev: 10
pref("network.http.http3.default-qpack-table-size", 65536); // prev: 0
pref("network.http.http3.enabled", true); // prev: false
pref("network.http.referer.defaultPolicy", 2); // prev: 3
pref("network.preload", true); // prev: false
pref("network.send_ODA_to_content_directly", false); // prev: true
pref("network.trr.max-fails", 15); // prev: 5
pref("network.trr.uri", ""); // prev: "https://mozilla.cloudflare-dns.com/dns-query"
pref("pdfjs.enablePrintAutoRotate", true); // prev: false
pref("pdfjs.renderInteractiveForms", true); // prev: false
pref("permissions.isolateBy.privateBrowsing", true); // prev: false
pref("privacy.partition.network_state", true); // prev: false
pref("privacy.purge_trackers.enabled", true); // prev: false
pref("privacy.restrict3rdpartystorage.partitionedHosts", "accounts.google.com/o/oauth2/,d35nw2lg0ahg0v.cloudfront.net/,datastudio.google.com/embed/reporting/,d3qlaywcwingl6.cloudfront.net/"); // prev: "accounts.google.com/o/oauth2/"
pref("privacy.userInteraction.expiration", 3888000); // prev: 2592000
pref("privacy.webrtc.allowSilencingNotifications", true); // prev: false
pref("privacy.webrtc.legacyGlobalIndicator", false); // prev: true
pref("security.allow_disjointed_external_uri_loads", false); // prev: true
pref("security.allow_parent_unrestricted_js_loads", false); // prev: true
pref("security.block_Worker_with_wrong_mime", true); // prev: false
pref("security.osclientcerts.autoload", true); // prev: false
pref("security.remote_settings.intermediates.downloads_per_poll", 5000); // prev: 100
pref("security.tls.enable_delegated_credentials", true); // prev: false
pref("services.sync.engine.creditcards.available", true); // prev: false
pref("services.sync.engine.tabs.filteredUrls", "^(about:.*|resource:.*|chrome:.*|file:.*|blob:.*|moz-extension:.*)$"); // prev: "^(about:.*|resource:.*|chrome:.*|wyciwyg:.*|file:.*|blob:.*|moz-extension:.*)$"
pref("signon.recipes.path", "resource://app/defaults/settings/main/password-recipes.json"); // prev: "chrome://passwordmgr/content/recipes.json"
pref("signon.showAutoCompleteImport", "import"); // prev: ""
pref("toolkit.shutdown.fastShutdownStage", 1); // prev: 0
pref("toolkit.shutdown.lateWriteChecksStage", 3); // prev: 1
pref("toolkit.zoomManager.zoomValues", ".3,.5,.67,.8,.9,1,1.1,1.2,1.33,1.5,1.7,2,2.4,3,4,5"); // prev: ".3,.5,.67,.8,.9,1,1.1,1.2,1.33,1.5,1.7,2,2.4,3"
pref("webextensions.storage.sync.kinto", false); // prev: true
pref("webgl.disable-fail-if-major-performance-caveat", true); // prev: false
pref("webgl.enable-surface-texture", true); // prev: false
pref("webgl.out-of-process", true); // prev: false
pref("zoom.maxPercent", 500); // prev: 300
