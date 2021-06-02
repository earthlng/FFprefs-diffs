/******************************************************************************************
 * diffs between FF prefs v88.0 and v89.0
 *
 * prefs: 4305
 *        4175 matching prefs
 *         130 diffs ( 74 new, 23 gone, 33 different )
 ******************************************************************************************/
// new in v89.0:
pref("app.update.background.interval", 25200);
pref("app.update.background.loglevel", "error");
pref("app.update.background.scheduling.enabled", false);
pref("apz.overscroll.damping", "1.1");
pref("apz.overscroll.max_velocity", "10.0");
pref("apz.overscroll.spring_stiffness", "200.0");
pref("apz.overscroll.test_async_scroll_offset.enabled", false);
pref("apz.windows.check_for_pan_gesture_conversion", true);
pref("browser.compactmode.show", false);
pref("browser.ctrlTab.sortByRecentlyUsed", false);
pref("browser.menu.showViewImageInfo", false);
pref("browser.opaqueResponseBlocking", false);
pref("browser.privatebrowsing.infoBody", "");
pref("browser.privatebrowsing.infoEnabled", true);
pref("browser.privatebrowsing.infoIcon", "");
pref("browser.privatebrowsing.infoLinkText", "");
pref("browser.privatebrowsing.infoLinkUrl", "");
pref("browser.privatebrowsing.infoTitle", "");
pref("browser.privatebrowsing.promoEnabled", true);
pref("browser.privatebrowsing.promoLinkText", "");
pref("browser.privatebrowsing.promoLinkUrl", "");
pref("browser.privatebrowsing.promoTitle", "");
pref("browser.proton.contextmenus.enabled", true);
pref("browser.proton.doorhangers.enabled", true);
pref("browser.proton.modals.enabled", true);
pref("browser.proton.places-tooltip.enabled", false);
pref("browser.startup.upgradeDialog.enabled", true);
pref("browser.tabs.secondaryTextUnsupportedLocales", "ar,bn,bo,ckb,fa,gu,he,hi,ja,km,kn,ko,lo,mr,my,ne,pa,si,ta,te,th,ur,zh");
pref("browser.theme.toolbar-theme", 2);
pref("browser.urlbar.experimental.firefoxSuggestLabels.enabled", false);
pref("browser.urlbar.quicksuggest.shouldShowOnboardingDialog", true);
pref("browser.urlbar.quicksuggest.showOnboardingDialogAfterNRestarts", 2);
pref("browser.urlbar.suggest.calculator", false);
pref("devtools.target-switching.server.enabled", false);
pref("dom.forms.datetime-local", false);
pref("dom.forms.datetime-local.widget", false);
pref("dom.input_events.strict_input_vsync_alignment", false);
pref("dom.security.enforceIPCBasedPrincipalVetting", true);
pref("dom.security.https_only_mode_https_first", false);
pref("dom.security.https_only_mode_https_first_pbm", false);
pref("extensions.pocket.showHome", true);
pref("gfx.color_management.native_srgb", false);
pref("gfx.webrender.fallback.software.requires-gpu-process", true);
pref("image.mem.shared.unmap.force-enabled", false);
pref("image.mem.shared.unmap.min_expiration_ms", 60000);
pref("image.mem.shared.unmap.min_threshold_kb", 100);
pref("intl.l10n.pseudo", "");
pref("javascript.options.experimental.top_level_await", true);
pref("javascript.options.inlining_bytecode_max_length", 130);
pref("layers.gpu-process.stable.frame-threshold", 10);
pref("layers.gpu-process.stable.min-uptime-ms", 240000);
pref("layout.css.bloom-filter-attribute-names.enabled", true);
pref("layout.css.font-metrics-overrides.enabled", true);
pref("layout.css.moz-outline-radius.enabled", false);
pref("layout.css.page-size.enabled", false);
pref("layout.css.size-adjust.enabled", false);
pref("layout.use-plugin-fallback", false);
pref("network.cookie.cookieBehavior.pbmode", 5);
pref("network.http.http3.parallel_fallback_conn_limit", 32);
pref("nglayout.initialpaint.delay", 5);
pref("nglayout.initialpaint.delay_in_oopif", 5);
pref("services.sync.prefs.sync.browser.ctrlTab.sortByRecentlyUsed", true);
pref("services.sync.prefs.sync.browser.menu.showViewImageInfo", true);
pref("signon.recipes.remoteRecipes.enabled", true);
pref("signon.relatedRealms.enabled", false);
pref("ui.textHighlightBackground", "#ef0fff");
pref("ui.textHighlightForeground", "#ffffff");
pref("ui.textSelectBackgroundAttention", "#38d878");
pref("ui.textSelectBackgroundDisabled", "#b0b0b0");
pref("widget.content.allow-gtk-dark-theme.accent", true);
pref("widget.content.allow-gtk-dark-theme.scrollbar", false);
pref("widget.content.allow-gtk-dark-theme.scrollbar_active", true);
pref("widget.content.allow-gtk-dark-theme.selection", true);
pref("widget.non-native-theme.scrollbar.active-always-themed", true);

// removed, renamed or hidden in v89.0:
pref("browser.aboutwelcome.design", "");
pref("browser.ctrlTab.recentlyUsedOrder", true);
pref("browser.defaultbrowser.notificationbar", false);
pref("browser.defaultbrowser.notificationbar.checkcount", 0);
pref("browser.defaultbrowser.notificationbar.checklimit", 10000);
pref("browser.tabs.extraDragSpace", false);
pref("extensions.screenshots.upload-disabled", false);
pref("gfx.webrender.software.unaccelerated-widget.force", false);
pref("image.honor_orientation_metadata.natural_size", true);
pref("image.honor-orientation-metadata", true);
pref("javascript.options.wasm_gc", false);
pref("javascript.options.wasm_multi_value", true);
pref("javascript.options.wasm_reftypes", true);
pref("layout.css.image-orientation.initial-from-image", true);
pref("layout.css.prefers-color-scheme-no-preference.enabled", false);
pref("layout.css.width-and-height-map-to-aspect-ratio.enabled", true);
pref("network.data.max-uri-length-mobile", 2097152);
pref("network.trr.bootstrapAddress", "");
pref("services.sync.prefs.sync.browser.ctrlTab.recentlyUsedOrder", true);
pref("signon.management.page.showPasswordSyncNotification", true);
pref("signon.recipes.remoteRecipesEnabled", true);
pref("toolkit.telemetry.ecosystemtelemetry.enabled", false);
pref("widget.remote-look-and-feel", true);

// changed in v89.0:
pref("app.feedback.baseURL", "https://ideas.mozilla.org/"); // prev: "https://input.mozilla.org/%LOCALE%/feedback/%APP%/%VERSION%/"
pref("apz.mac.enable_double_tap_zoom_touchpad_gesture", true); // prev: false
pref("apz.zoom_animation_duration_ms", 350); // prev: 250
pref("browser.aboutwelcome.skipFocus", true); // prev: false
pref("browser.contentblocking.features.strict", "tp,tpPrivate,cookieBehavior5,cookieBehaviorPBM5,cm,fp,stp,lvl2"); // prev: "tp,tpPrivate,cookieBehavior5,cm,fp,stp,lvl2"
pref("browser.contentblocking.report.vpn_platforms", "win,mac,linux"); // prev: "win"
pref("browser.contentblocking.report.vpn_regions", "us,ca,nz,sg,my,gb,de,fr"); // prev: "us,ca,nz,sg,my,gb"
pref("browser.newtabpage.activity-stream.asrouter.providers.messaging-experiments", "{\"id\":\"messaging-experiments\",\"enabled\":true,\"type\":\"remote-experiments\",\"messageGroups\":[\"cfr\",\"whats-new-panel\",\"moments-page\",\"cfr-fxa\",\"aboutwelcome\",\"infobar\"],\"updateCycleInMs\":3600000}"); // prev: "{\"id\":\"messaging-experiments\",\"enabled\":true,\"type\":\"remote-experiments\",\"messageGroups\":[\"cfr\",\"whats-new-panel\",\"moments-page\",\"snippets\",\"cfr-fxa\",\"aboutwelcome\",\"infobar\"],\"updateCycleInMs\":3600000}"
pref("browser.newtabpage.activity-stream.asrouter.providers.snippets", "{\"id\":\"snippets\",\"enabled\":false,\"type\":\"remote\",\"url\":\"https://snippets.cdn.mozilla.net/%STARTPAGE_VERSION%/%NAME%/%VERSION%/%APPBUILDID%/%BUILD_TARGET%/%LOCALE%/%CHANNEL%/%OS_VERSION%/%DISTRIBUTION%/%DISTRIBUTION_VERSION%/\",\"updateCycleInMs\":14400000}"); // prev: "{\"id\":\"snippets\",\"enabled\":true,\"type\":\"remote\",\"url\":\"https://snippets.cdn.mozilla.net/%STARTPAGE_VERSION%/%NAME%/%VERSION%/%APPBUILDID%/%BUILD_TARGET%/%LOCALE%/%CHANNEL%/%OS_VERSION%/%DISTRIBUTION%/%DISTRIBUTION_VERSION%/\",\"updateCycleInMs\":14400000}"
pref("browser.newtabpage.activity-stream.feeds.section.highlights", false); // prev: true
pref("browser.newtabpage.activity-stream.feeds.snippets", false); // prev: true
pref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", true); // prev: false
pref("browser.newtabpage.activity-stream.logowordmark.alwaysVisible", true); // prev: false
pref("browser.newtabpage.activity-stream.newNewtabExperience.enabled", true); // prev: false
pref("browser.proton.enabled", true); // prev: false
pref("browser.startup.preXulSkeletonUI", true); // prev: false
pref("captivedetect.canonicalContent", "<meta http-equiv=\"refresh\" content=\"0;url=https://support.mozilla.org/kb/captive-portal\"/>"); // prev: "success\n"
pref("captivedetect.canonicalURL", "http://detectportal.firefox.com/canonical.html"); // prev: "http://detectportal.firefox.com/success.txt"
pref("doh-rollout.provider-steering.enabled", true); // prev: false
pref("dom.enable_event_timing", true); // prev: false
pref("gfx.e10s.font-list.shared", true); // prev: false
pref("gfx.webrender.fallback.software", true); // prev: false
pref("javascript.options.large_arraybuffers", true); // prev: false
pref("javascript.options.wasm_simd", true); // prev: false
pref("layers.gpu-process.max_restarts", 3); // prev: 1
pref("layout.css.aspect-ratio.enabled", true); // prev: false
pref("layout.css.forced-colors.enabled", true); // prev: false
pref("pdfjs.enablePrintAutoRotate", true); // prev: false
pref("privacy.webrtc.deviceGracePeriodTimeoutMs", 3600000); // prev: 50000
pref("prompts.contentPromptSubDialog", true); // prev: false
pref("prompts.windowPromptSubDialog", true); // prev: false
pref("security.tls.enable_delegated_credentials", true); // prev: false
pref("widget.non-native-theme.enabled", true); // prev: false
