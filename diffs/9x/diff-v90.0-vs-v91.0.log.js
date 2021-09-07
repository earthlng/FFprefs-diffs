/******************************************************************************************
 * diffs between FF prefs v90.0 and v91.0
 *
 * prefs: 4349
 *        4270 matching prefs
 *          79 diffs ( 35 new, 31 gone, 13 different )
 ******************************************************************************************/
// new in v91.0:
pref("apz.doubletapzoom.defaultzoomin", "1.2");
pref("browser.display.windows.non_native_menus", 2);
pref("browser.places.interactions.typing_timeout_ms", 3000);
pref("browser.shell.setDefaultBrowserUserChoice", true);
pref("dom.events.coalesce.touchmove", false);
pref("dom.ipc.processPrelaunch.lowmem_mb", 4096);
pref("dom.script_loader.full_parse", false);
pref("dom.security.https_only_fire_http_request_background_timer_ms", 3000);
pref("dom.serviceWorkers.mitigations.bypass_on_fault", true);
pref("dom.serviceWorkers.mitigations.navigation_fault_threshold", 3);
pref("dom.serviceWorkers.navigationPreload.enabled", false);
pref("dom.window.clientinformation.enabled", true);
pref("dom.window.sidebar.enabled", true);
pref("extensions.webidl-api.expose_mock_interface", false);
pref("gfx.webrender.low-quality-pinch-zoom", false);
pref("image.avif.apply_transforms", true);
pref("javascript.options.external_thread_pool", true);
pref("javascript.options.site_based_pretenuring", true);
pref("layout.css.d-property.enabled", false);
pref("layout.css.element-content-none.enabled", false);
pref("layout.css.fit-content-function.enabled", false);
pref("layout.css.font-size-adjust.basis.enabled", false);
pref("network.dns.copy_string_before_call", true);
pref("network.dns.force_waiting_https_rr", false);
pref("network.http.windows-sso.enabled", false);
pref("network.proxy.default_pac_script_socks_version", 4);
pref("network.proxy.failover_direct", true);
pref("network.trr.default_provider_uri", "https://mozilla.cloudflare-dns.com/dns-query");
pref("network.trr.skip-check-for-blocked-host", false);
pref("remote.active-protocols", 2);
pref("remote.prefs.recommended", true);
pref("screenshots.browser.component.enabled", false);
pref("signon.improvedPasswordRules.enabled", true);
pref("signon.usernameOnlyForm.enabled", false);
pref("widget.gtk.follow-firefox-theme", true);

// removed, renamed or hidden in v91.0:
pref("browser.enableAboutThirdParty", false);
pref("browser.messaging-system.personalized-cfr.scores", "{}");
pref("browser.messaging-system.personalized-cfr.score-threshold", 5000);
pref("browser.proton.contextmenus.enabled", true);
pref("browser.proton.doorhangers.enabled", true);
pref("browser.proton.modals.enabled", true);
pref("browser.tabs.remote.useOriginAttributesInRemoteType", true);
pref("doh-rollout.provider-steering.enabled", true);
pref("doh-rollout.provider-steering.provider-list", "[{ \"name\": \"comcast\", \"canonicalName\": \"doh-discovery.xfinity.com\", \"uri\": \"https://doh.xfinity.com/dns-query\" }]");
pref("doh-rollout.trr-selection.enabled", false);
pref("dom.select_events.enabled", true);
pref("dom.serviceWorkers.parent_intercept", true);
pref("extensions.allowPrivateBrowsingByDefault", false);
pref("extensions.blocklist.useMLBF", true);
pref("extensions.blocklist.useMLBF.stashes", true);
pref("general.smoothScroll.mouseWheel.migrationPercent", 100);
pref("intl.charset.detector.ng.in.enabled", true);
pref("intl.charset.detector.ng.jp.enabled", true);
pref("intl.charset.detector.ng.lk.enabled", true);
pref("layout.css.moz-outline-radius.enabled", false);
pref("layout.css.outline-follows-border-radius.enabled", true);
pref("marionette.prefs.recommended", true);
pref("network.trr.resolvers", "[{ \"name\": \"Cloudflare\", \"url\": \"https://mozilla.cloudflare-dns.com/dns-query\" },{ \"name\": \"NextDNS\", \"url\": \"https://firefox.dns.nextdns.io/\" }]");
pref("security.caps.allow_uri_is_ui_resource_in_checkloaduriflags", false);
pref("security.cert_pinning.hpkp.enabled", false);
pref("security.cert_pinning.max_max_age_seconds", 5184000);
pref("security.cert_pinning.process_headers_from_non_builtin_roots", false);
pref("services.blocklist.addons-mlbf.collection", "addons-bloomfilters");
pref("services.blocklist.addons-mlbf.signer", "remote-settings.content-signature.mozilla.org");
pref("services.sync.prefs.sync.browser.urlbar.resultBuckets", true);
pref("widget.system-colors-follow-theme", false);

// changed in v91.0:
pref("browser.newtabpage.activity-stream.feeds.section.topstories.options", "{\"api_key_pref\":\"extensions.pocket.oAuthConsumerKey\",\"hidden\":true,\"provider_icon\":\"chrome://global/skin/icons/pocket.svg\",\"provider_name\":\"Pocket\",\"read_more_endpoint\":\"https://getpocket.com/explore/trending?src=fx_new_tab\",\"stories_endpoint\":\"https://getpocket.cdn.mozilla.net/v3/firefox/global-recs?version=3&consumer_key=$apiKey&locale_lang=en-US&feed_variant=default_spocs_off\",\"stories_referrer\":\"https://getpocket.com/recommendations\",\"topics_endpoint\":\"https://getpocket.cdn.mozilla.net/v3/firefox/trending-topics?version=2&consumer_key=$apiKey&locale_lang=en-US\",\"show_spocs\":false}"); // prev: "{\"api_key_pref\":\"extensions.pocket.oAuthConsumerKey\",\"hidden\":true,\"provider_icon\":\"pocket\",\"provider_name\":\"Pocket\",\"read_more_endpoint\":\"https://getpocket.com/explore/trending?src=fx_new_tab\",\"stories_endpoint\":\"https://getpocket.cdn.mozilla.net/v3/firefox/global-recs?version=3&consumer_key=$apiKey&locale_lang=en-US&feed_variant=default_spocs_off\",\"stories_referrer\":\"https://getpocket.com/recommendations\",\"topics_endpoint\":\"https://getpocket.cdn.mozilla.net/v3/firefox/trending-topics?version=2&consumer_key=$apiKey&locale_lang=en-US\",\"show_spocs\":false}"
pref("browser.startup.preXulSkeletonUI", true); // prev: false
pref("dom.input_events.strict_input_vsync_alignment", true); // prev: false
pref("dom.security.https_first_pbm", true); // prev: false
pref("dom.visualviewport.enabled", true); // prev: false
pref("dom.w3c_pointer_events.implicit_capture", true); // prev: false
pref("dom.w3c_pointer_events.scroll_by_pen.enabled", true); // prev: false
pref("fission.bfcacheInParent", true); // prev: false
pref("gfx.webrender.software.unaccelerated-widget.allow", true); // prev: false
pref("layout.extra-tick.minimum-ms", 4); // prev: -1
pref("network.trr.uri", ""); // prev: "https://mozilla.cloudflare-dns.com/dns-query"
pref("places.forgetThisSite.clearByBaseDomain", true); // prev: false
pref("widget.gtk.alt-theme.dark", true); // prev: false
