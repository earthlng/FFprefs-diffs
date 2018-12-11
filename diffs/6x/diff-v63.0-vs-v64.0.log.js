/******************************************************************************************
 * diffs between FF prefs v63.0 and v64.0
 *
 * prefs: 3334
 *        3194 matching prefs
 *         140 diffs ( 63 new, 45 gone, 32 different )
 ******************************************************************************************/
// new in v64.0:
pref("browser.contentblocking.originlog.length", 32);
pref("browser.fission.simulate", false);
pref("browser.newtabpage.activity-stream.asrouter.providers.cfr", "{\"id\":\"cfr\",\"enabled\":false,\"type\":\"local\",\"localProvider\":\"CFRMessageProvider\",\"frequency\":{\"custom\":[{\"period\":\"daily\",\"cap\":1}]}}");
pref("browser.newtabpage.activity-stream.asrouter.providers.onboarding", "{\"id\":\"onboarding\",\"type\":\"local\",\"localProvider\":\"OnboardingMessageProvider\",\"enabled\":true}");
pref("browser.newtabpage.activity-stream.asrouter.providers.snippets", "{\"id\":\"snippets\",\"enabled\":false,\"type\":\"remote\",\"url\":\"https://snippets.cdn.mozilla.net/%STARTPAGE_VERSION%/%NAME%/%VERSION%/%APPBUILDID%/%BUILD_TARGET%/%LOCALE%/%CHANNEL%/%OS_VERSION%/%DISTRIBUTION%/%DISTRIBUTION_VERSION%/\",\"updateCycleInMs\":14400000}");
pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr", true);
pref("browser.urlbar.ctrlCanonizesURLs", true);
pref("browser.urlbar.quantumbar", false);
pref("devtools.gridinspector.maxHighlighters", 3);
pref("devtools.inspector.changes.enabled", false);
pref("devtools.performance.recording.ui-base-url", "https://perf-html.io");
pref("devtools.recordreplay.mvp.enabled", false);
pref("devtools.remote.adb.extensionURL", "https://ftp.mozilla.org/pub/mozilla.org/labs/devtools/adb-extension/#OS#/adb-extension-latest-#OS#.xpi");
pref("devtools.responsive.showUserAgentInput", false);
pref("devtools.responsive.touchSimulation.enabled", false);
pref("devtools.responsive.userAgent", "");
pref("devtools.responsive.viewport.height", 480);
pref("devtools.responsive.viewport.pixelRatio", 0);
pref("devtools.responsive.viewport.width", 320);
pref("devtools.webconsole.jsterm.reverse-search", false);
pref("devtools.webide.autoinstallADBExtension", true);
pref("dom.caches.testing.enabled", false);
pref("dom.event.returnValue.enabled", false);
pref("dom.fetchObserver.enabled", false);
pref("dom.keyboardevent.keypress.set_keycode_and_charcode_to_same_value", false);
pref("dom.payments.request.user_interaction_required", true);
pref("dom.performance.children_results_ipc_timeout", 1000);
pref("dom.performance.time_to_first_interactive.enabled", false);
pref("dom.security.featurePolicy.enabled", false);
pref("dom.serviceWorkers.testing.enabled", false);
pref("dom.testing.structuredclonetester.enabled", false);
pref("dom.vr.external.notdetected.timeout", 60000);
pref("dom.vr.external.quit.timeout", 10000);
pref("dom.worker.canceling.timeoutMilliseconds", 30000);
pref("dom.xhr.standard_content_type_normalization", false);
pref("extensions.webextensions.performanceCountersMaxAge", 1000);
pref("extensions.webextensions.userScripts.enabled", false);
pref("gfx.font_ahem_antialias_none", false);
pref("gfx.webrender.blob.paint-flashing", false);
pref("identity.fxaccounts.commands.missed.fetch_interval", 86400);
pref("image.animated.generate-full-frames", false);
pref("image.cache.max-rasterized-svg-threshold-kb", 92160);
pref("image.mem.debug-reporting", false);
pref("intl.multilingual.downloadEnabled", true);
pref("javascript.options.baselinejit.threshold", 10);
pref("javascript.options.ion.frequent_bailout_threshold", 10);
pref("javascript.options.ion.threshold", 1000);
pref("layout.css.clip-path-path.enabled", false);
pref("layout.css.scrollbar-color.enabled", true);
pref("layout.css.supports-selector.enabled", false);
pref("media.navigator.mediadatadecoder_h264_enabled", false);
pref("media.wmf.force.allow-p010-format", false);
pref("network.security.esni.enabled", false);
pref("pdfjs.eventBusDispatchToDOM", false);
pref("privacy.userInteraction.document.interval", 1800);
pref("privacy.userInteraction.expiration", 2592000);
pref("security.certerrors.recordEventTelemetry", true);
pref("security.identitypopup.recordEventElemetry", true);
pref("security.sandbox.plugin.tempDirSuffix", "");
pref("security.tls.hello_downgrade_check", false);
pref("toolkit.aboutPerformance.showInternals", false);
pref("toolkit.coverage.enabled", false);
pref("toolkit.coverage.endpoint.base", "https://coverage.mozilla.org");

// removed, renamed or hidden in v64.0:
pref("browser.audioFeeds.handler", "ask");
pref("browser.feeds.handler", "ask");
pref("browser.migrate.automigrate.daysToOfferUndo", 4);
pref("browser.migrate.automigrate.enabled", false);
pref("browser.migrate.automigrate.inpage.ui.enabled", false);
pref("browser.migrate.automigrate.ui.enabled", true);
pref("browser.newtabpage.activity-stream.asrouter.messageProviders", "[{\"id\":\"onboarding\",\"type\":\"local\",\"localProvider\":\"OnboardingMessageProvider\",\"enabled\":false,\"cohort\":0},{\"id\":\"snippets\",\"type\":\"remote\",\"url\":\"https://snippets.cdn.mozilla.net/us-west/bundles/bundle_d6d90fb9098ce8b45e60acf601bcb91b68322309.json\",\"updateCycleInMs\":14400000,\"enabled\":false},{\"id\":\"cfr\",\"type\":\"local\",\"localProvider\":\"CFRMessageProvider\",\"enabled\":false,\"cohort\":\"\"}]");
pref("browser.onboarding.enabled", true);
pref("browser.onboarding.newtour", "performance,private,screenshots,addons,customize,default");
pref("browser.onboarding.notification.finished", false);
pref("browser.onboarding.notification.max-life-time-all-tours-ms", 1209600000);
pref("browser.onboarding.notification.max-life-time-per-tour-ms", 432000000);
pref("browser.onboarding.notification.max-prompt-count-per-tour", 8);
pref("browser.onboarding.notification.mute-duration-on-first-session-ms", 300000);
pref("browser.onboarding.state", "default");
pref("browser.onboarding.tourset-version", 2);
pref("browser.onboarding.updatetour", "performance,library,screenshots,singlesearch,customize,sync");
pref("browser.videoFeeds.handler", "ask");
pref("devtools.commands.dir", "");
pref("devtools.debugger.features.replay", false);
pref("devtools.gcli.eagerHelper", 2);
pref("devtools.gcli.hideIntro", false);
pref("devtools.gcli.imgurClientID", "0df414e888d7240");
pref("devtools.gcli.imgurUploadURL", "https://api.imgur.com/3/image");
pref("devtools.gcli.jquerySrc", "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.1/jquery.min.js");
pref("devtools.gcli.lodashSrc", "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.6.1/lodash.min.js");
pref("devtools.gcli.underscoreSrc", "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js");
pref("devtools.inspector.show-three-pane-tooltip", true);
pref("devtools.inspector.three-pane-first-run", true);
pref("devtools.new-animationinspector.enabled", true);
pref("devtools.promote.accessibility", 1);
pref("devtools.webide.adbAddonID", "adbhelper@mozilla.org");
pref("devtools.webide.adbAddonURL", "https://ftp.mozilla.org/pub/mozilla.org/labs/fxos-simulator/adb-helper/#OS#/adbhelper-#OS#-latest.xpi");
pref("devtools.webide.autoinstallADBHelper", true);
pref("dom.streams.enabled", false);
pref("extensions.getAddons.themes.browseURL", "https://addons.mozilla.org/%LOCALE%/firefox/themes/?src=firefox");
pref("extensions.webcompat.perform_injections", true);
pref("extensions.webcompat.perform_ua_overrides", true);
pref("layout.css.filters.enabled", true);
pref("layout.css.scrollbar-colors.enabled", false);
pref("network.cookie.ipc.sync", false);
pref("plugins.remember_infobar_dismissal", true);
pref("security.csp.enable_violation_events", true);
pref("webgl.restore-context-when-visible", true);
pref("xpinstall.customConfirmationUI", true);

// changed in v64.0:
pref("alerts.useSystemBackend", false); // prev: true
pref("app.update.url", "https://aus5.mozilla.org/update/6/%PRODUCT%/%VERSION%/%BUILD_ID%/%BUILD_TARGET%/%LOCALE%/%CHANNEL%/%OS_VERSION%/%SYSTEM_CAPABILITIES%/%DISTRIBUTION%/%DISTRIBUTION_VERSION%/update.xml"); // prev: "https://aus5.mozilla.org/update/6/%PRODUCT%/%VERSION%/%BUILD_ID%/%BUILD_TARGET%/%LOCALE%/%CHANNEL%/%OS_VERSION%(noBug1296630v1)(nowebsense)/%SYSTEM_CAPABILITIES%/%DISTRIBUTION%/%DISTRIBUTION_VERSION%/update.xml"
pref("browser.fastblock.limit", 20000); // prev: 0
pref("browser.newtabpage.activity-stream.feeds.section.topstories.options", "{\"api_key_pref\":\"extensions.pocket.oAuthConsumerKey\",\"hidden\":true,\"provider_icon\":\"pocket\",\"provider_name\":\"Pocket\",\"read_more_endpoint\":\"https://getpocket.com/explore/trending?src=fx_new_tab\",\"stories_endpoint\":\"https://getpocket.cdn.mozilla.net/v3/firefox/global-recs?version=3&consumer_key=$apiKey&locale_lang=en-US&feed_variant=default_spocs_off\",\"stories_referrer\":\"https://getpocket.com/recommendations\",\"topics_endpoint\":\"https://getpocket.cdn.mozilla.net/v3/firefox/trending-topics?version=2&consumer_key=$apiKey&locale_lang=en-US\",\"model_keys\":[\"nmf_model_animals\",\"nmf_model_business\",\"nmf_model_career\",\"nmf_model_datascience\",\"nmf_model_design\",\"nmf_model_education\",\"nmf_model_entertainment\",\"nmf_model_environment\",\"nmf_model_fashion\",\"nmf_model_finance\",\"nmf_model_food\",\"nmf_model_health\",\"nmf_model_home\",\"nmf_model_life\",\"nmf_model_marketing\",\"nmf_model_politics\",\"nmf_model_programming\",\"nmf_model_science\",\"nmf_model_shopping\",\"nmf_model_sports\",\"nmf_model_tech\",\"nmf_model_travel\",\"nb_model_animals\",\"nb_model_books\",\"nb_model_business\",\"nb_model_career\",\"nb_model_datascience\",\"nb_model_design\",\"nb_model_economics\",\"nb_model_education\",\"nb_model_entertainment\",\"nb_model_environment\",\"nb_model_fashion\",\"nb_model_finance\",\"nb_model_food\",\"nb_model_game\",\"nb_model_health\",\"nb_model_history\",\"nb_model_home\",\"nb_model_life\",\"nb_model_marketing\",\"nb_model_military\",\"nb_model_philosophy\",\"nb_model_photography\",\"nb_model_politics\",\"nb_model_productivity\",\"nb_model_programming\",\"nb_model_psychology\",\"nb_model_science\",\"nb_model_shopping\",\"nb_model_society\",\"nb_model_space\",\"nb_model_sports\",\"nb_model_tech\",\"nb_model_travel\",\"nb_model_writing\"],\"show_spocs\":false,\"personalized\":true,\"version\":1}"); // prev: "{\"api_key_pref\":\"extensions.pocket.oAuthConsumerKey\",\"hidden\":true,\"provider_icon\":\"pocket\",\"provider_name\":\"Pocket\",\"read_more_endpoint\":\"https://getpocket.com/explore/trending?src=fx_new_tab\",\"stories_endpoint\":\"https://getpocket.cdn.mozilla.net/v3/firefox/global-recs?version=3&consumer_key=$apiKey&locale_lang=en-US&feed_variant=default_spocs_off\",\"stories_referrer\":\"https://getpocket.com/recommendations\",\"topics_endpoint\":\"https://getpocket.cdn.mozilla.net/v3/firefox/trending-topics?version=2&consumer_key=$apiKey&locale_lang=en-US\",\"show_spocs\":false,\"personalized\":true}"
pref("browser.safebrowsing.downloads.remote.timeout_ms", 15000); // prev: 10000
pref("browser.tabs.multiselect", true); // prev: false
pref("devtools.debugger.features.map-await-expression", true); // prev: false
pref("devtools.inspector.activeSidebar", "layoutview"); // prev: "ruleview"
pref("devtools.webconsole.inputHistoryCount", 300); // prev: 50
pref("devtools.webconsole.jsterm.codeMirror", true); // prev: false
pref("dom.performance.enable_scheduler_timing", true); // prev: false
pref("dom.vr.service.enabled", true); // prev: false
pref("dom.xhr.lowercase_header.enabled", true); // prev: false
pref("editor.inline_table_editing.enabled_by_default", false); // prev: true
pref("editor.positioning.enabled_by_default", false); // prev: true
pref("editor.resizing.enabled_by_default", false); // prev: true
pref("extensions.geckoProfiler.acceptedExtensionIds", "geckoprofiler@mozilla.com,quantum-foxfooding@mozilla.com,raptor@mozilla.org"); // prev: "geckoprofiler@mozilla.com,quantum-foxfooding@mozilla.com"
pref("extensions.webextensions.enablePerformanceCounters", true); // prev: false
pref("extensions.webextensions.restrictedDomains", "accounts-static.cdn.mozilla.net,accounts.firefox.com,addons.cdn.mozilla.net,addons.mozilla.org,api.accounts.firefox.com,content.cdn.mozilla.net,discovery.addons.mozilla.org,input.mozilla.org,install.mozilla.org,oauth.accounts.firefox.com,profile.accounts.firefox.com,support.mozilla.org,sync.services.mozilla.com,testpilot.firefox.com"); // prev: "accounts-static.cdn.mozilla.net,accounts.firefox.com,addons.cdn.mozilla.net,addons.mozilla.org,api.accounts.firefox.com,content.cdn.mozilla.net,content.cdn.mozilla.net,discovery.addons.mozilla.org,input.mozilla.org,install.mozilla.org,oauth.accounts.firefox.com,profile.accounts.firefox.com,support.mozilla.org,sync.services.mozilla.com,testpilot.firefox.com"
pref("font.name-list.sans-serif.zh-TW", "Arial, Microsoft JhengHei, PMingLiU, MingLiU, MingLiU-ExtB"); // prev: "Arial, PMingLiU, MingLiU, MingLiU-ExtB"
pref("full-screen-api.unprefix.enabled", true); // prev: false
pref("identity.fxaccounts.commands.enabled", true); // prev: false
pref("layout.accessiblecaret.height", "36"); // prev: "36.0"
pref("layout.accessiblecaret.width", "34"); // prev: "34.0"
pref("layout.css.scrollbar-width.enabled", true); // prev: false
pref("layout.css.unknown-webkit-pseudo-element", true); // prev: false
pref("layout.css.xul-box-display-values.content.enabled", false); // prev: true
pref("layout.css.xul-tree-pseudos.content.enabled", false); // prev: true
pref("layout.scroll.root-frame-containers", 0); // prev: false
pref("media.getusermedia.agc_enabled", true); // prev: false
pref("network.http.throttle.enable", false); // prev: true
pref("security.pki.distrust_ca_policy", 2); // prev: 1
