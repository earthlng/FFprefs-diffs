/******************************************************************************************
 * diffs between FF prefs v87.0 and v88.0
 *
 * prefs: 4272
 *        4174 matching prefs
 *          98 diffs ( 40 new, 41 gone, 17 different )
 ******************************************************************************************/
// new in v88.0:
pref("apz.mac.enable_double_tap_zoom_touchpad_gesture", false);
pref("apz.scrollbarbuttonrepeat.enabled", true);
pref("browser.aboutwelcome.design", "");
pref("browser.aboutwelcome.screens", "");
pref("dom.event.wheel-deltaMode-lines.always-enabled", "");
pref("dom.ipc.processPrelaunch.startupDelayMs", 1000);
pref("dom.max_script_run_time.require_critical_input", true);
pref("dom.security.https_only_mode_break_upgrade_downgrade_endless_loop", true);
pref("dom.security.https_only_mode_error_page_user_suggestions", false);
pref("dom.webidl.crosscontext_hasinstance.enabled", true);
pref("dom.window_print.fuzzing.block_while_printing", false);
pref("dom.workers.testing.enabled", false);
pref("fission.bfcacheInParent", false);
pref("gfx.webrender.software.opengl", false);
pref("gfx.webrender.software.unaccelerated-widget.allow", false);
pref("gfx.webrender.software.unaccelerated-widget.force", false);
pref("gfx.webrender.unaccelerated-widget.force", false);
pref("javascript.options.spectre.jit_to_cxx_calls", true);
pref("javascript.options.spectre.object_mitigations", true);
pref("layout.css.color-mix.enabled", false);
pref("layout.css.moz-submit-invalid.enabled", false);
pref("layout.css.ruby.position-alternate.enabled", true);
pref("media.decoder-doctor.testing", false);
pref("network.http.http3.enable_0rtt", true);
pref("network.notify.resolvers", true);
pref("network.trr.attempt-when-retrying-confirmation", false);
pref("network.trr.odoh.configs_uri", "");
pref("network.trr.odoh.min_ttl", 60);
pref("privacy.webrtc.deviceGracePeriodTimeoutMs", 50000);
pref("signon.formRemovalCapture.enabled", true);
pref("svg.context-properties.content.allowed-domains", "profile.accounts.firefox.com,profile.stage.mozaws.net");
pref("widget.non-native-theme.enabled", false);
pref("widget.non-native-theme.gtk.scrollbar.allow-buttons", false);
pref("widget.non-native-theme.gtk.scrollbar.round-thumb", true);
pref("widget.non-native-theme.gtk.scrollbar.thumb-cross-size", 40);
pref("widget.non-native-theme.gtk.scrollbar.thumb-size", "0.75");
pref("widget.non-native-theme.scrollbar.size", 17);
pref("widget.non-native-theme.use-theme-accent", false);
pref("widget.non-native-theme.webrender", true);
pref("widget.non-native-theme.win.scrollbar.use-system-size", true);

// removed, renamed or hidden in v88.0:
pref("browser.aboutwelcome.overrideContent", "");
pref("browser.slowStartup.maxSamples", 5);
pref("browser.slowStartup.notificationDisabled", false);
pref("browser.slowStartup.timeThreshold", 20000);
pref("browser.tabs.crashReporting.email", "");
pref("browser.tabs.crashReporting.emailMe", false);
pref("browser.tabs.crashReporting.requestEmail", false);
pref("dom.event.wheel-deltaMode-lines-to-pixel-scale", 30);
pref("dom.max_script_run_time_without_important_user_input", 10);
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
pref("dom.webdriver.enabled", true);
pref("gfx.prefer-x11-egl", false);
pref("identity.fxaccounts.useSessionTokensForOAuth", true);
pref("identity.sync.useOAuthForSyncToken", true);
pref("javascript.options.showInConsole", true);
pref("javascript.options.spectre.jit_to_C++_calls", true);
pref("javascript.options.spectre.object_mitigations.barriers", true);
pref("javascript.options.spectre.object_mitigations.misc", true);
pref("marionette.contentListener", false);
pref("marionette.enabled", false);
pref("reader.parse-on-load.force-enabled", false);
pref("svg.text-spacing.enabled", true);
pref("widget.disable-native-theme-for-content", false);
pref("widget.gtk.non-native.round-thumb", true);
pref("widget.gtk.non-native.scrollbar.allow-buttons", false);
pref("widget.gtk.non-native.scrollbar.normal-size", 12);
pref("widget.gtk.non-native.scrollbar.thin-size", 6);
pref("widget.gtk.non-native.scrollbar.thumb-cross-size", 40);
pref("widget.gtk.non-native.scrollbar.thumb-size", "0.75");
pref("widget.non-native.use-theme-accent", false);

// changed in v88.0:
pref("accessibility.mouse_focuses_formcontrol", 1); // prev: false
pref("browser.display.show_focus_rings", false); // prev: true
pref("browser.newtabpage.activity-stream.feeds.section.topstories.options", "{\"api_key_pref\":\"extensions.pocket.oAuthConsumerKey\",\"hidden\":true,\"provider_icon\":\"pocket\",\"provider_name\":\"Pocket\",\"read_more_endpoint\":\"https://getpocket.com/explore/trending?src=fx_new_tab\",\"stories_endpoint\":\"https://getpocket.cdn.mozilla.net/v3/firefox/global-recs?version=3&consumer_key=$apiKey&locale_lang=en-US&feed_variant=default_spocs_off\",\"stories_referrer\":\"https://getpocket.com/recommendations\",\"topics_endpoint\":\"https://getpocket.cdn.mozilla.net/v3/firefox/trending-topics?version=2&consumer_key=$apiKey&locale_lang=en-US\",\"show_spocs\":false}"); // prev: "{\"api_key_pref\":\"extensions.pocket.oAuthConsumerKey\",\"hidden\":true,\"provider_icon\":\"pocket\",\"provider_name\":\"Pocket\",\"read_more_endpoint\":\"https://getpocket.com/explore/trending?src=fx_new_tab\",\"stories_endpoint\":\"https://getpocket.cdn.mozilla.net/v3/firefox/global-recs?version=3&consumer_key=$apiKey&locale_lang=en-US&feed_variant=default_spocs_off\",\"stories_referrer\":\"https://getpocket.com/recommendations\",\"topics_endpoint\":\"https://getpocket.cdn.mozilla.net/v3/firefox/trending-topics?version=2&consumer_key=$apiKey&locale_lang=en-US\",\"model_keys\":[\"nmf_model_animals\",\"nmf_model_business\",\"nmf_model_career\",\"nmf_model_datascience\",\"nmf_model_design\",\"nmf_model_education\",\"nmf_model_entertainment\",\"nmf_model_environment\",\"nmf_model_fashion\",\"nmf_model_finance\",\"nmf_model_food\",\"nmf_model_health\",\"nmf_model_home\",\"nmf_model_life\",\"nmf_model_marketing\",\"nmf_model_politics\",\"nmf_model_programming\",\"nmf_model_science\",\"nmf_model_shopping\",\"nmf_model_sports\",\"nmf_model_tech\",\"nmf_model_travel\",\"nb_model_animals\",\"nb_model_books\",\"nb_model_business\",\"nb_model_career\",\"nb_model_datascience\",\"nb_model_design\",\"nb_model_economics\",\"nb_model_education\",\"nb_model_entertainment\",\"nb_model_environment\",\"nb_model_fashion\",\"nb_model_finance\",\"nb_model_food\",\"nb_model_game\",\"nb_model_health\",\"nb_model_history\",\"nb_model_home\",\"nb_model_life\",\"nb_model_marketing\",\"nb_model_military\",\"nb_model_philosophy\",\"nb_model_photography\",\"nb_model_politics\",\"nb_model_productivity\",\"nb_model_programming\",\"nb_model_psychology\",\"nb_model_science\",\"nb_model_shopping\",\"nb_model_society\",\"nb_model_space\",\"nb_model_sports\",\"nb_model_tech\",\"nb_model_travel\",\"nb_model_writing\"],\"show_spocs\":false,\"personalized\":true,\"version\":1}"
pref("browser.tabs.remote.useOriginAttributesInRemoteType", true); // prev: false
pref("devtools.performance.recording.features", "[\"js\",\"leaf\",\"stackwalk\",\"cpu\",\"screenshots\"]"); // prev: "[\"js\",\"leaf\",\"stackwalk\",\"screenshots\"]"
pref("devtools.performance.recording.features.remote", "[\"js\",\"leaf\",\"stackwalk\",\"cpu\",\"screenshots\",\"java\"]"); // prev: "[\"js\",\"leaf\",\"stackwalk\",\"screenshots\",\"java\"]"
pref("dom.event.wheel-deltaMode-lines.disabled", true); // prev: false
pref("gfx.webrender.software.d3d11.upload-mode", 4); // prev: 2
pref("layers.omtp.enabled", false); // prev: true
pref("layout.css.image-set.enabled", true); // prev: false
pref("layout.css.outline-follows-border-radius.enabled", true); // prev: false
pref("media.decoder-doctor.notifications-allowed", "MediaWMFNeeded,MediaWidevineNoWMF,MediaCannotInitializePulseAudio,MediaCannotPlayNoDecoders,MediaUnsupportedLibavcodec,MediaPlatformDecoderNotFound"); // prev: "MediaWMFNeeded,MediaWidevineNoWMF,MediaCannotInitializePulseAudio,MediaCannotPlayNoDecoders,MediaUnsupportedLibavcodec"
pref("network.ftp.enabled", false); // prev: true
pref("network.jar.record_failure_reason", false); // prev: true
pref("network.trr.wait-for-confirmation", false); // prev: true
pref("pdfjs.enableScripting", true); // prev: false
pref("widget.remote-look-and-feel", true); // prev: false
