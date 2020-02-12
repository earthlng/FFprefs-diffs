/******************************************************************************************
 * diffs between FF prefs v72.0 and v73.0
 *
 * prefs: 3897
 *        3817 matching prefs
 *          80 diffs ( 42 new, 17 gone, 21 different )
 ******************************************************************************************/
// new in v73.0:
pref("app.normandy.last_seen_buildid", "");
pref("app.normandy.onsync_skew_sec", 600);
pref("browser.newtabpage.activity-stream.asrouter.providers.message-groups", "{\"id\":\"message-groups\",\"enabled\":true,\"type\":\"remote-settings\",\"bucket\":\"message-groups\",\"updateCycleInMs\":3600000}");
pref("browser.tabs.tabmanager.enabled", false);
pref("browser.xr.warning.infoURL", "https://www.mozilla.org/%LOCALE%/firefox/xr/");
pref("devtools.debugger.features.async-live-stacks", false);
pref("devtools.recordreplay.cloudServer", "");
pref("devtools.webconsole.input.eagerEvaluation", false);
pref("doh-rollout.profileCreationThreshold", "1572476400000");
pref("dom.event.default_to_passive_wheel_listeners", false);
pref("dom.forms.requestsubmit.enabled", false);
pref("dom.ipc.plugins.allow_dxgi_surface", true);
pref("dom.manifest.enabled", false);
pref("dom.security.featurePolicy.experimental.enabled", false);
pref("dom.vr.always_support_ar", false);
pref("dom.vr.always_support_vr", false);
pref("findbar.matchdiacritics", 0);
pref("gfx.webrender.compositor.surface-pool-size", 25);
pref("gfx.webrender.enable-low-priority-pool", false);
pref("gfx.webrender.quality.force-disable-sacrificing-subpixel-aa", false);
pref("intl.charset.detector.ng.enabled", true);
pref("intl.charset.detector.ng.in.enabled", false);
pref("intl.charset.detector.ng.jp.enabled", false);
pref("intl.charset.detector.ng.lk.enabled", false);
pref("javascript.options.parser_defer_allocation", false);
pref("layout.css.constructable-stylesheets.enabled", false);
pref("layout.css.text-underline-position.enabled", false);
pref("media.mediacontrol.testingevents.enabled", false);
pref("media.peerconnection.mute_on_bye_or_timeout", false);
pref("media.peerconnection.sdp.strict_success", false);
pref("network.http.network_access_on_socket_process.enabled", false);
pref("network.trr.send_user-agent_headers", false);
pref("network.url.useDefaultURI", false);
pref("permissions.default.xr", 0);
pref("permissions.delegation.enabled", true);
pref("security.allow_parent_unrestricted_js_loads", false);
pref("security.app_menu.recordEventTelemetry", true);
pref("security.pki.crlite_mode", 1);
pref("signon.userInputRequiredToCapture.enabled", true);
pref("telemetry.number_of_site_origin.min_interval", 300000);
pref("widget.content.allow-gtk-dark-theme", false);
pref("widget.content.gtk-high-contrast.enabled", true);

// removed, renamed or hidden in v73.0:
pref("browser.messaging-system.fxatoolbarbadge.enabled", true);
pref("browser.tabs.remote.useHTTPResponseProcessSelection", false);
pref("dom.audiochannel.audioCompeting", false);
pref("dom.audiochannel.audioCompeting.allAgents", false);
pref("dom.metaElement.setCookie.allowed", false);
pref("extensions.getAddons.compatOverides.url", "https://services.addons.mozilla.org/api/v3/addons/compat-override/?guid=%IDS%&lang=%LOCALE%");
pref("extensions.htmlaboutaddons.discover.enabled", true);
pref("extensions.htmlaboutaddons.enabled", true);
pref("extensions.legacy.exceptions", "testpilot@cliqz.com,@testpilot-containers,jid1-NeEaf3sAHdKHPA@jetpack,@activity-streams,pulse@mozilla.com,@testpilot-addon,@min-vid,tabcentertest1@mozilla.com,snoozetabs@mozilla.com,speaktome@mozilla.com,hoverpad@mozilla.com");
pref("full-screen-api.unprefix.enabled", true);
pref("layout.css.column-span.enabled", true);
pref("layout.css.xul-box-display-values.survive-blockification.enabled", true);
pref("permissions.delegation.enable", false);
pref("permissions.eventTelemetry.enabled", false);
pref("remote.enabled", false);
pref("remote.force-local", true);
pref("signon.storeSignons", true);

// changed in v73.0:
pref("browser.display.permit_backplate", true); // prev: false
pref("browser.newtabpage.activity-stream.asrouter.providers.cfr-fxa", "{\"id\":\"cfr-fxa\",\"enabled\":true,\"type\":\"remote-settings\",\"bucket\":\"cfr-fxa\",\"frequency\":{\"custom\":[{\"period\":\"daily\",\"cap\":1}]},\"updateCycleInMs\":3600000}"); // prev: "{\"id\":\"cfr-fxa\",\"enabled\":true,\"type\":\"remote-settings\",\"bucket\":\"cfr-fxa\",\"frequency\":{\"custom\":[{\"period\":\"daily\",\"cap\":1}]}}"
pref("browser.newtabpage.activity-stream.discoverystream.config", "{\"api_key_pref\":\"extensions.pocket.oAuthConsumerKey\",\"collapsible\":true,\"enabled\":true,\"show_spocs\":false,\"hardcoded_layout\":true,\"personalized\":true,\"layout_endpoint\":\"https://getpocket.cdn.mozilla.net/v3/newtab/layout?version=1&consumer_key=$apiKey&layout_variant=basic\"}"); // prev: "{\"api_key_pref\":\"extensions.pocket.oAuthConsumerKey\",\"collapsible\":true,\"enabled\":false,\"show_spocs\":false,\"hardcoded_layout\":true,\"personalized\":true,\"layout_endpoint\":\"https://getpocket.cdn.mozilla.net/v3/newtab/layout?version=1&consumer_key=$apiKey&layout_variant=basic\"}"
pref("browser.safebrowsing.provider.mozilla.lists", "base-track-digest256,mozstd-trackwhite-digest256,google-trackwhite-digest256,content-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256,block-flash-digest256,except-flash-digest256,allow-flashallow-digest256,except-flashallow-digest256,block-flashsubdoc-digest256,except-flashsubdoc-digest256,ads-track-digest256,social-track-digest256,analytics-track-digest256,base-fingerprinting-track-digest256,content-fingerprinting-track-digest256,base-cryptomining-track-digest256,content-cryptomining-track-digest256,fanboyannoyance-ads-digest256,fanboysocial-ads-digest256,easylist-ads-digest256,easyprivacy-ads-digest256,adguard-ads-digest256,social-tracking-protection-digest256,social-tracking-protection-facebook-digest256,social-tracking-protection-linkedin-digest256,social-tracking-protection-twitter-digest256"); // prev: "base-track-digest256,mozstd-trackwhite-digest256,content-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256,block-flash-digest256,except-flash-digest256,allow-flashallow-digest256,except-flashallow-digest256,block-flashsubdoc-digest256,except-flashsubdoc-digest256,ads-track-digest256,social-track-digest256,analytics-track-digest256,base-fingerprinting-track-digest256,content-fingerprinting-track-digest256,base-cryptomining-track-digest256,content-cryptomining-track-digest256,fanboyannoyance-ads-digest256,fanboysocial-ads-digest256,easylist-ads-digest256,easyprivacy-ads-digest256,adguard-ads-digest256,social-tracking-protection-digest256,social-tracking-protection-facebook-digest256,social-tracking-protection-linkedin-digest256,social-tracking-protection-twitter-digest256"
pref("devtools.responsive.metaViewport.enabled", true); // prev: false
pref("dom.serviceWorkers.idle_extended_timeout", 30000); // prev: 300000
pref("extensions.abuseReport.openDialog", true); // prev: false
pref("extensions.blocklist.useXML", false); // prev: true
pref("fission.rebuild_frameloaders_on_remoteness_change", true); // prev: false
pref("gfx.direct3d11.use-double-buffering", false); // prev: true
pref("layout.css.moz-touch-enabled.enabled", false); // prev: true
pref("mathml.mfenced_element.disabled", true); // prev: false
pref("media.audiograph.single_thread.enabled", true); // prev: false
pref("network.trr.resolvers", "[{ \"name\": \"Cloudflare\", \"url\": \"https://mozilla.cloudflare-dns.com/dns-query\" },{ \"name\": \"NextDNS\", \"url\": \"https://trr.dns.nextdns.io/\" }]"); // prev: "[{ \"name\": \"Cloudflare\", \"url\": \"https://mozilla.cloudflare-dns.com/dns-query\" }]"
pref("svg.text-spacing.enabled", true); // prev: false
pref("urlclassifier.features.fingerprinting.annotate.whitelistTables", "mozstd-trackwhite-digest256,google-trackwhite-digest256"); // prev: "mozstd-trackwhite-digest256"
pref("urlclassifier.features.fingerprinting.whitelistTables", "mozstd-trackwhite-digest256,google-trackwhite-digest256"); // prev: "mozstd-trackwhite-digest256"
pref("urlclassifier.features.socialtracking.annotate.whitelistTables", "mozstd-trackwhite-digest256,google-trackwhite-digest256"); // prev: "mozstd-trackwhite-digest256"
pref("urlclassifier.features.socialtracking.whitelistTables", "mozstd-trackwhite-digest256,google-trackwhite-digest256"); // prev: "mozstd-trackwhite-digest256"
pref("urlclassifier.trackingAnnotationWhitelistTable", "moztest-trackwhite-simple,mozstd-trackwhite-digest256,google-trackwhite-digest256"); // prev: "moztest-trackwhite-simple,mozstd-trackwhite-digest256"
pref("urlclassifier.trackingWhitelistTable", "moztest-trackwhite-simple,mozstd-trackwhite-digest256,google-trackwhite-digest256"); // prev: "moztest-trackwhite-simple,mozstd-trackwhite-digest256"
