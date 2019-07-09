/******************************************************************************************
 * diffs between FF prefs v67.0 and v68.0
 *
 * prefs: 3562
 *        3325 matching prefs
 *         237 diffs ( 133 new, 76 gone, 28 different )
 ******************************************************************************************/
// new in v68.0:
pref("app.update.BITS.enabled", true);
pref("apz.fixed-margin-override.bottom", 0);
pref("apz.fixed-margin-override.enabled", false);
pref("apz.fixed-margin-override.top", 0);
pref("browser.contentblocking.features.strict", "tp,tpPrivate,cookieBehavior4,cm,fp");
pref("browser.contentblocking.maxIntroCount", 5);
pref("browser.in-content.dark-mode", false);
pref("browser.newtabpage.activity-stream.asrouter.providers.cfr-fxa", "{\"id\":\"cfr-fxa\",\"enabled\":true,\"type\":\"remote-settings\",\"bucket\":\"cfr-fxa\",\"frequency\":{\"custom\":[{\"period\":\"daily\",\"cap\":1}]}}");
pref("browser.safebrowsing.prefixset_max_array_size", 524288);
pref("corroborator.enabled", false);
pref("devtools.aboutdebugging.local-tab-debugging", false);
pref("devtools.aboutdebugging.process-debugging", true);
pref("devtools.aboutdebugging.showHiddenAddons", false);
pref("devtools.browserconsole.contentMessages", false);
pref("devtools.browserconsole.filterContentMessages", false);
pref("devtools.debugger.log-actions", false);
pref("devtools.inspector.inactive.css.enabled", false);
pref("devtools.netmonitor.requestBodyLimit", 1048576);
pref("devtools.webconsole.input.autocomplete", true);
pref("dom.allow_cut_copy", true);
pref("dom.file.createInChild", false);
pref("dom.ipc.cancel_content_js_when_navigating", false);
pref("dom.keyboardevent.keypress.hack.dispatch_non_printable_keys.addl", "");
pref("dom.keyboardevent.keypress.hack.use_legacy_keycode_and_charcode.addl", "");
pref("dom.largeAllocation.forceEnable", false);
pref("dom.link.disabled_attribute.enabled", true);
pref("dom.metaElement.setCookie.allowed", false);
pref("dom.mouseevent.click.hack.use_legacy_non-primary_dispatch", "");
pref("dom.presentation.testing.simulate-receiver", false);
pref("dom.storage.snapshot_gradual_prefill", 4096);
pref("dom.vr.process.enabled", true);
pref("dom.window.open.noreferrer.enabled", true);
pref("extensions.abuseReport.enabled", true);
pref("extensions.abuseReport.url", "https://addons.mozilla.org/api/v4/abuse/report/addon/");
pref("extensions.cookiesBehavior.overrideOnTopLevel", false);
pref("extensions.getAddons.discovery.api_url", "https://services.addons.mozilla.org/api/v4/discovery/?lang=%LOCALE%");
pref("extensions.htmlaboutaddons.discover.enabled", true);
pref("extensions.htmlaboutaddons.inline-options.enabled", true);
pref("extensions.htmlaboutaddons.recommendations.enabled", true);
pref("extensions.recommendations.privacyPolicyUrl", "https://www.mozilla.org/privacy/firefox/?utm_source=firefox-browser&utm_medium=firefox-browser&utm_content=privacy-policy-link#addons");
pref("extensions.recommendations.themeRecommendationUrl", "https://color.firefox.com/?utm_source=firefox-browser&utm_medium=firefox-browser&utm_content=theme-footer-link");
pref("fission.autostart", false);
pref("fission.preserve_browsing_contexts", false);
pref("fission.rebuild_frameloaders_on_remoteness_change", false);
pref("font.size.monospace.ar", 13);
pref("font.size.monospace.el", 13);
pref("font.size.monospace.he", 13);
pref("font.size.monospace.ja", 16);
pref("font.size.monospace.ko", 16);
pref("font.size.monospace.th", 13);
pref("font.size.monospace.x-armn", 13);
pref("font.size.monospace.x-beng", 13);
pref("font.size.monospace.x-cans", 13);
pref("font.size.monospace.x-cyrillic", 13);
pref("font.size.monospace.x-devanagari", 13);
pref("font.size.monospace.x-ethi", 13);
pref("font.size.monospace.x-geor", 13);
pref("font.size.monospace.x-gujr", 13);
pref("font.size.monospace.x-guru", 13);
pref("font.size.monospace.x-khmr", 13);
pref("font.size.monospace.x-knda", 13);
pref("font.size.monospace.x-math", 13);
pref("font.size.monospace.x-mlym", 13);
pref("font.size.monospace.x-orya", 13);
pref("font.size.monospace.x-sinh", 13);
pref("font.size.monospace.x-tamil", 13);
pref("font.size.monospace.x-telu", 13);
pref("font.size.monospace.x-tibt", 13);
pref("font.size.monospace.x-unicode", 13);
pref("font.size.monospace.x-western", 13);
pref("font.size.monospace.zh-CN", 16);
pref("font.size.monospace.zh-HK", 16);
pref("font.size.monospace.zh-TW", 16);
pref("gfx.direct3d11.use-double-buffering", false);
pref("gfx.logging.slow-frames.enabled", false);
pref("gfx.webrender.split-render-roots", false);
pref("intl.hyphenate-capitalized.de-1901", true);
pref("intl.hyphenate-capitalized.de-1996", true);
pref("intl.hyphenate-capitalized.de-CH", true);
pref("javascript.options.experimental.await_fix", false);
pref("javascript.options.mem.nursery.min_kb", 256);
pref("layout.css.line-height-moz-block-height.content.enabled", false);
pref("layout.css.resizeobserver.enabled", false);
pref("layout.css.shared-memory-ua-sheets.enabled", false);
pref("layout.css.simple-moz-gradient.enabled", true);
pref("layout.css.webkit-line-clamp.enabled", true);
pref("media.audiograph.single_thread.enabled", false);
pref("media.cache_readahead_limit.cellular", 30);
pref("media.cache_resume_threshold.cellular", 10);
pref("media.cache_size.cellular", 32768);
pref("media.devices.insecure.enabled", true);
pref("media.getusermedia.insecure.enabled", false);
pref("media.videocontrols.picture-in-picture.enabled", false);
pref("media.videocontrols.picture-in-picture.video-toggle.enabled", false);
pref("media.videocontrols.picture-in-picture.video-toggle.flyout-enabled", false);
pref("media.videocontrols.picture-in-picture.video-toggle.flyout-wait-ms", 5000);
pref("network.cookie.staleThreshold", 60);
pref("network.delay.tracking.load", 0);
pref("network.dns.resolver_shutdown_timeout_ms", 2000);
pref("network.http.enforce-framing.strict_chunked_encoding", true);
pref("network.protocol-handler.external.ie.http", false);
pref("network.protocol-handler.external.iehistory", false);
pref("network.protocol-handler.external.ierss", false);
pref("network.ssl_tokens_cache_capacity", 2048);
pref("network.ssl_tokens_cache_enabled", false);
pref("network.traffic_analyzer.enabled", true);
pref("network.trr.excluded-domains", "localhost,local");
pref("network.trr.resolvers", "[{ \"name\": \"Cloudflare\", \"url\": \"https://mozilla.cloudflare-dns.com/dns-query\" }]");
pref("privacy.annotate_channels.strict_list.enabled", false);
pref("privacy.file_unique_origin", true);
pref("privacy.storagePrincipal.enabledForTrackers", false);
pref("privacy.trackingprotection.origin_telemetry.enabled", false);
pref("privacy.window.maxInnerHeight", 1000);
pref("privacy.window.maxInnerWidth", 1000);
pref("remote.enabled", false);
pref("remote.force-local", true);
pref("remote.log.level", "Info");
pref("security.tls.enable_post_handshake_auth", false);
pref("services.settings.security.onecrl.bucket", "security-state");
pref("services.settings.security.onecrl.checked", 0);
pref("services.settings.security.onecrl.collection", "onecrl");
pref("services.settings.security.onecrl.signer", "onecrl.content-signature.mozilla.org");
pref("services.sync.prefs.dangerously_allow_arbitrary", false);
pref("services.sync.prefs.sync.browser.contentblocking.features.strict", true);
pref("signon.management.page.enabled", false);
pref("signon.showAutoCompleteOrigins", false);
pref("telemetry.origin_telemetry_test_mode.enabled", false);
pref("toolkit.content-background-hang-monitor.disabled", false);
pref("toolkit.legacyUserProfileCustomizations.stylesheets", false);
pref("toolkit.telemetry.ecosystemtelemetry.enabled", false);
pref("ui.android.mouse_as_touch", 1);
pref("view_source.tab", true);
pref("xul.panel-animations.enabled", true);

// removed, renamed or hidden in v68.0:
pref("browser.aboutHomeSnippets.updateUrl", "https://snippets.cdn.mozilla.net/%STARTPAGE_VERSION%/%NAME%/%VERSION%/%APPBUILDID%/%BUILD_TARGET%/%LOCALE%/%CHANNEL%/%OS_VERSION%/%DISTRIBUTION%/%DISTRIBUTION_VERSION%/");
pref("browser.newtabpage.activity-stream.darkModeMessage", false);
pref("browser.newtabpage.activity-stream.disableSnippets", false);
pref("browser.newtabpage.activity-stream.discoverystream.optOut.0", false);
pref("browser.security.newcerterrorpage.enabled", true);
pref("devtools.aboutdebugging.network", false);
pref("devtools.aboutdebugging.showSystemAddons", false);
pref("devtools.aboutdebugging.wifi", false);
pref("devtools.inspector.flexboxHighlighter.combine", false);
pref("devtools.recordreplay.timeline.enabled", false);
pref("extensions.webextensions.themes.icons.buttons", "back,forward,reload,stop,bookmark_star,bookmark_menu,downloads,home,app_menu,cut,copy,paste,new_window,new_private_window,save_page,print,history,full_screen,find,options,addons,developer,synced_tabs,open_file,sidebars,share_page,subscribe,text_encoding,email_link,forget,pocket");
pref("extensions.webextensions.themes.icons.enabled", false);
pref("features.normandy-remote-settings.enabled", false);
pref("font.size.fixed.ar", 13);
pref("font.size.fixed.el", 13);
pref("font.size.fixed.he", 13);
pref("font.size.fixed.ja", 16);
pref("font.size.fixed.ko", 16);
pref("font.size.fixed.th", 13);
pref("font.size.fixed.x-armn", 13);
pref("font.size.fixed.x-beng", 13);
pref("font.size.fixed.x-cans", 13);
pref("font.size.fixed.x-cyrillic", 13);
pref("font.size.fixed.x-devanagari", 13);
pref("font.size.fixed.x-ethi", 13);
pref("font.size.fixed.x-geor", 13);
pref("font.size.fixed.x-gujr", 13);
pref("font.size.fixed.x-guru", 13);
pref("font.size.fixed.x-khmr", 13);
pref("font.size.fixed.x-knda", 13);
pref("font.size.fixed.x-math", 13);
pref("font.size.fixed.x-mlym", 13);
pref("font.size.fixed.x-orya", 13);
pref("font.size.fixed.x-sinh", 13);
pref("font.size.fixed.x-tamil", 13);
pref("font.size.fixed.x-telu", 13);
pref("font.size.fixed.x-tibt", 13);
pref("font.size.fixed.x-unicode", 13);
pref("font.size.fixed.x-western", 13);
pref("font.size.fixed.zh-CN", 16);
pref("font.size.fixed.zh-HK", 16);
pref("font.size.fixed.zh-TW", 16);
pref("gfx.webrender.debug.texture-cache.disable-shrink", false);
pref("gfx.webrender.program-binary", true);
pref("image.animated.generate-full-frames", true);
pref("layout.css.prefixes.gradients", true);
pref("lightweightThemes.recommendedThemes", "[{\"id\":\"recommended-1\",\"homepageURL\":\"https://addons.mozilla.org/firefox/addon/a-web-browser-renaissance/\",\"headerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/1.header.jpg\",\"textcolor\":\"#000000\",\"accentcolor\":\"#834d29\",\"iconURL\":\"resource:///chrome/browser/content/browser/defaultthemes/1.icon.jpg\",\"previewURL\":\"resource:///chrome/browser/content/browser/defaultthemes/1.preview.jpg\",\"author\":\"Sean.Martell\",\"version\":\"0\"},{\"id\":\"recommended-2\",\"homepageURL\":\"https://addons.mozilla.org/firefox/addon/space-fantasy/\",\"headerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/2.header.jpg\",\"textcolor\":\"#ffffff\",\"accentcolor\":\"#d9d9d9\",\"iconURL\":\"resource:///chrome/browser/content/browser/defaultthemes/2.icon.jpg\",\"previewURL\":\"resource:///chrome/browser/content/browser/defaultthemes/2.preview.jpg\",\"author\":\"fx5800p\",\"version\":\"1.0\"},{\"id\":\"recommended-4\",\"homepageURL\":\"https://addons.mozilla.org/firefox/addon/pastel-gradient/\",\"headerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/4.header.png\",\"textcolor\":\"#000000\",\"accentcolor\":\"#000000\",\"iconURL\":\"resource:///chrome/browser/content/browser/defaultthemes/4.icon.png\",\"previewURL\":\"resource:///chrome/browser/content/browser/defaultthemes/4.preview.png\",\"author\":\"darrinhenein\",\"version\":\"1.0\"}]");
pref("lightweightThemes.selectedThemeID", "default-theme@mozilla.org");
pref("lightweightThemes.update.enabled", true);
pref("media.peerconnection.capture_delay", 50);
pref("network.cookie.same-site.enabled", true);
pref("performance.adjust_to_machine", false);
pref("performance.low_end_machine", false);
pref("prio.enabled", false);
pref("security.csp.experimentalEnabled", false);
pref("security.signed_content.CSP.default", "script-src 'self'; style-src 'self'");
pref("services.blocklist.onecrl.checked", 0);
pref("services.blocklist.onecrl.collection", "certificates");
pref("services.blocklist.onecrl.signer", "onecrl.content-signature.mozilla.org");
pref("services.settings.changes.path", "/buckets/monitor/collections/changes/records");
pref("services.settings.default_signer", "remote-settings.content-signature.mozilla.org");
pref("services.sync.prefs.sync.browser.safebrowsing.downloads.enabled", true);
pref("services.sync.prefs.sync.browser.safebrowsing.malware.enabled", true);
pref("services.sync.prefs.sync.browser.safebrowsing.passwords.enabled", true);
pref("services.sync.prefs.sync.browser.safebrowsing.phishing.enabled", true);
pref("services.sync.prefs.sync.extensions.personas.current", true);
pref("services.sync.prefs.sync.lightweightThemes.selectedThemeID", true);
pref("services.sync.prefs.sync.lightweightThemes.usedThemes", true);
pref("services.sync.prefs.sync.pref.advanced.images.disable_button.view_image", true);
pref("services.sync.prefs.sync.pref.advanced.javascript.disable_button.advanced", true);
pref("services.sync.prefs.sync.security.OCSP.enabled", true);
pref("services.sync.prefs.sync.security.OCSP.require", true);
pref("services.sync.prefs.sync.security.tls.version.max", true);
pref("services.sync.prefs.sync.security.tls.version.min", true);
pref("services.sync.prefs.sync.xpinstall.whitelist.required", true);
pref("webgl.bypass-shader-validation", false);

// changed in v68.0:
pref("browser.history.maxStateObjectSize", 2097152); // prev: 655360
pref("browser.newtabpage.activity-stream.asrouter.providers.cfr", "{\"id\":\"cfr\",\"enabled\":true,\"type\":\"remote-settings\",\"bucket\":\"cfr\",\"frequency\":{\"custom\":[{\"period\":\"daily\",\"cap\":1}]},\"categories\":[\"cfrAddons\",\"cfrFeatures\"],\"updateCycleInMs\":3600000}"); // prev: "{\"id\":\"cfr\",\"enabled\":true,\"type\":\"local\",\"localProvider\":\"CFRMessageProvider\",\"frequency\":{\"custom\":[{\"period\":\"daily\",\"cap\":1}]},\"categories\":[\"cfrAddons\",\"cfrFeatures\"]}"
pref("browser.newtabpage.activity-stream.discoverystream.config", "{\"api_key_pref\":\"extensions.pocket.oAuthConsumerKey\",\"collapsible\":true,\"enabled\":false,\"show_spocs\":false,\"hardcoded_layout\":true,\"personalized\":false,\"layout_endpoint\":\"https://getpocket.cdn.mozilla.net/v3/newtab/layout?version=1&consumer_key=$apiKey&layout_variant=basic\"}"); // prev: "{\"api_key_pref\":\"extensions.pocket.oAuthConsumerKey\",\"enabled\":false,\"show_spocs\":false,\"layout_endpoint\":\"https://getpocket.cdn.mozilla.net/v3/newtab/layout?version=1&consumer_key=$apiKey&layout_variant=basic\"}"
pref("browser.newtabpage.activity-stream.telemetry.structuredIngestion", true); // prev: false
pref("browser.tabs.unloadOnLowMemory", false); // prev: true
pref("browser.urlbar.quantumbar", true); // prev: false
pref("devtools.debugger.prefs-schema-version", "1.0.9"); // prev: "1.0.0"
pref("devtools.netmonitor.har.defaultFileName", "%hostname_Archive [%date]"); // prev: "Archive %date"
pref("dom.popup_allowed_events", "change click dblclick auxclick mouseup pointerup notificationclick reset submit touchend contextmenu"); // prev: "change click dblclick mouseup pointerup notificationclick reset submit touchend contextmenu"
pref("dom.vr.external.enabled", true); // prev: false
pref("dom.vr.openvr.action_input", true); // prev: false
pref("dom.xhr.standard_content_type_normalization", true); // prev: false
pref("extensions.htmlaboutaddons.enabled", true); // prev: false
pref("extensions.webextensions.performanceCountersMaxAge", 5000); // prev: 1000
pref("extensions.webextensions.restrictedDomains", "accounts-static.cdn.mozilla.net,accounts.firefox.com,addons.cdn.mozilla.net,addons.mozilla.org,api.accounts.firefox.com,content.cdn.mozilla.net,discovery.addons.mozilla.org,install.mozilla.org,oauth.accounts.firefox.com,profile.accounts.firefox.com,support.mozilla.org,sync.services.mozilla.com"); // prev: "accounts-static.cdn.mozilla.net,accounts.firefox.com,addons.cdn.mozilla.net,addons.mozilla.org,api.accounts.firefox.com,content.cdn.mozilla.net,discovery.addons.mozilla.org,input.mozilla.org,install.mozilla.org,oauth.accounts.firefox.com,profile.accounts.firefox.com,support.mozilla.org,sync.services.mozilla.com"
pref("extensions.webextensions.userScripts.enabled", true); // prev: false
pref("javascript.options.bigint", true); // prev: false
pref("layout.css.scroll-snap.enabled", false); // prev: true
pref("layout.css.scroll-snap-v1.enabled", true); // prev: false
pref("layout.scroll.root-frame-containers", false); // prev: 0
pref("network.trr.wait-for-portal", false); // prev: true
pref("privacy.trackingprotection.cryptomining.annotate.enabled", true); // prev: false
pref("privacy.trackingprotection.fingerprinting.annotate.enabled", true); // prev: false
pref("prompts.authentication_dialog_abuse_limit", 2); // prev: 3
pref("security.certerrors.mitm.auto_enable_enterprise_roots", true); // prev: false
pref("trailhead.firstrun.branches", "join-privacy"); // prev: "control"
pref("urlclassifier.trackingAnnotationTable", "test-track-simple,ads-track-digest256,social-track-digest256,analytics-track-digest256,content-track-digest256"); // prev: "test-track-simple,base-track-digest256"
pref("webchannel.allowObject.urlWhitelist", "https://content.cdn.mozilla.net https://support.mozilla.org https://install.mozilla.org"); // prev: "https://content.cdn.mozilla.net https://input.mozilla.org https://support.mozilla.org https://install.mozilla.org"

