/******************************************************************************************
 * diffs between FF prefs v77.0 and v78.0
 *
 * prefs: 4061
 *        3961 matching prefs
 *         100 diffs ( 63 new, 19 gone, 18 different )
 ******************************************************************************************/
// new in v78.0:
pref("apz.allow_zooming_out", false);
pref("apz.windows.use_direct_manipulation", false);
pref("browser.aboutwelcome.overrideContent", "");
pref("browser.contentblocking.report.endpoint_url", "https://monitor.firefox.com/user/breach-stats?includeResolved=true");
pref("browser.contentblocking.report.monitor.home_page_url", "https://monitor.firefox.com/user/dashboard");
pref("browser.contentblocking.report.monitor.preferences_url", "https://monitor.firefox.com/user/preferences");
pref("browser.fixup.domainsuffixwhitelist.example", true);
pref("browser.fixup.domainsuffixwhitelist.internal", true);
pref("browser.fixup.domainsuffixwhitelist.invalid", true);
pref("browser.fixup.domainsuffixwhitelist.local", true);
pref("browser.fixup.domainsuffixwhitelist.localhost", true);
pref("browser.fixup.domainsuffixwhitelist.test", true);
pref("browser.fixup.fallback-to-https", true);
pref("browser.helperApps.showOpenOptionForPdfJS", true);
pref("browser.newtabpage.activity-stream.discoverystream.recs.personalized", false);
pref("browser.newtabpage.activity-stream.discoverystream.spocs.personalized", true);
pref("browser.newtabpage.activity-stream.feeds.system.topsites", true);
pref("browser.newtabpage.activity-stream.feeds.system.topstories", false);
pref("browser.pdf.launchDefaultEdgeAsApp", true);
pref("browser.region.log", false);
pref("browser.region.network.scan", false);
pref("browser.region.network.url", "https://location.services.mozilla.com/v1/country?key=%MOZILLA_API_KEY%");
pref("browser.region.timeout", 5000);
pref("browser.urlbar.dnsResolveSingleWordsAfterSearch", 1);
pref("browser.urlbar.richSuggestions.tail", false);
pref("browser.urlbar.suggest.topsites", true);
pref("devtools.accessibility.auto-init.enabled", false);
pref("devtools.netmonitor.features.serverSentEvents", false);
pref("doh-rollout.trr-selection.enabled", false);
pref("dom.quotaManager.storageName", "storage");
pref("gfx.webrender.quality.force-subpixel-aa-where-possible", false);
pref("identity.fxaccounts.useSessionTokensForOAuth", true);
pref("image.avif.use-dav1d", true);
pref("javascript.options.source_pragmas", true);
pref("javascript.options.wasm_multi_value", true);
pref("layers.recycle-allocator-rdd", true);
pref("layout.animation.prerender.viewport-ratio-limit", "1.125");
pref("layout.css.aspect-ratio.enabled", false);
pref("layout.css.file-chooser-button.enabled", false);
pref("layout.css.font-visibility.level", 3);
pref("layout.css.moz-focus-outer.enabled", true);
pref("layout.dynamic-toolbar-max-height", 0);
pref("media.autoplay.blocking_policy", 0);
pref("media.cubeb.output_voice_routing", true);
pref("media.getusermedia.aecm_output_routing", 3);
pref("media.getusermedia.experimental_input_processing", false);
pref("media.peerconnection.video.use_rtx", false);
pref("network.dns.disabled", false);
pref("network.http.sanitize-headers-in-logs", true);
pref("network.send_ODA_to_content_directly", true);
pref("pdfjs.handleOctetStream", true);
pref("privacy.dynamic_firstparty.use_site", true);
pref("privacy.firstparty.isolate.use_site", false);
pref("privacy.partition.network_state", false);
pref("privacy.rejectForeign.allowList", "");
pref("privacy.resistFingerprinting.randomDataOnCanvasExtract", true);
pref("security.allow_disjointed_external_uri_loads", false);
pref("security.allow_unsafe_parent_loads", false);
pref("security.cancel_non_local_loads_triggered_by_systemprincipal", false);
pref("security.osreauthenticator.blank_password", false);
pref("security.osreauthenticator.password_last_changed_hi", 0);
pref("security.osreauthenticator.password_last_changed_lo", 0);
pref("webextensions.storage.sync.kinto", true);

// removed, renamed or hidden in v78.0:
pref("browser.urlbar.openViewOnFocus", true);
pref("devtools.responsive.touchGestureSimulation.enabled", false);
pref("dom.ipc.cpows.forbid-unsafe-from-browser", true);
pref("dom.ipc.cpows.log.enabled", false);
pref("dom.ipc.cpows.log.stack", false);
pref("dom.link.disabled_attribute.enabled", true);
pref("extensions.abuseReport.openDialog", true);
pref("geo.provider-country.network.scan", false);
pref("geo.provider-country.network.url", "https://location.services.mozilla.com/v1/country?key=%MOZILLA_API_KEY%");
pref("gfx.webrender.quality.force-disable-sacrificing-subpixel-aa", false);
pref("layout.animation.prerender.viewport-ratio-limit-x", "1.125");
pref("layout.animation.prerender.viewport-ratio-limit-y", "1.125");
pref("layout.css.aspect-ratio-number.enabled", false);
pref("layout.css.moz-document.url-prefix-hack.enabled", true);
pref("media.autoplay.enabled.user-gestures-needed", true);
pref("media.navigator.audio.full_duplex", true);
pref("network.preload-experimental", false);
pref("permissions.postPrompt.animate", true);
pref("toolkit.cosmeticAnimations.enabled", true);

// changed in v78.0:
pref("app.update.url.manual", "https://www.mozilla.org/%LOCALE%/firefox/"); // prev: "https://www.mozilla.org/firefox/"
pref("apz.axis_lock.mode", 2); // prev: 0
pref("browser.newtabpage.activity-stream.asrouter.providers.messaging-experiments", "{\"id\":\"messaging-experiments\",\"enabled\":true,\"type\":\"remote-experiments\",\"messageGroups\":[\"cfr\",\"whats-new-panel\",\"moments-page\",\"snippets\",\"cfr-fxa\",\"aboutwelcome\"],\"updateCycleInMs\":3600000}"); // prev: "{\"id\":\"messaging-experiments\",\"enabled\":true,\"type\":\"remote-experiments\",\"messageGroups\":[\"cfr\",\"whats-new-panel\",\"moments-page\",\"snippets\",\"cfr-fxa\"],\"updateCycleInMs\":3600000}"
pref("browser.newtabpage.activity-stream.discoverystream.isCollectionDismissible", true); // prev: false
pref("browser.newtabpage.activity-stream.discoverystream.region-layout-config", "US,CA,GB"); // prev: "US,CA"
pref("browser.newtabpage.activity-stream.discoverystream.region-stories-config", "US,DE,CA,GB"); // prev: "US,DE,CA"
pref("browser.newtabpage.activity-stream.feeds.section.topstories", true); // prev: false
pref("browser.search.modernConfig", true); // prev: false
pref("browser.urlbar.maxHistoricalSearchSuggestions", 2); // prev: 0
pref("dom.sidebar.enabled", false); // prev: true
pref("editor.truncate_user_pastes", true); // prev: false
pref("javascript.options.shared_memory", true); // prev: false
pref("layout.css.is-where-selectors.enabled", true); // prev: false
pref("network.trr.resolvers", "[{ \"name\": \"Cloudflare\", \"url\": \"https://mozilla.cloudflare-dns.com/dns-query\" },{ \"name\": \"NextDNS\", \"url\": \"https://firefox.dns.nextdns.io/\" }]"); // prev: "[{ \"name\": \"Cloudflare\", \"url\": \"https://mozilla.cloudflare-dns.com/dns-query\" },{ \"name\": \"NextDNS\", \"url\": \"https://trr.dns.nextdns.io/\" }]"
pref("security.ssl3.dhe_rsa_aes_128_sha", false); // prev: true
pref("security.ssl3.dhe_rsa_aes_256_sha", false); // prev: true
pref("security.tls.version.min", 3); // prev: 1
pref("toolkit.asyncshutdown.report_writes_after", 40000); // prev: 20000
