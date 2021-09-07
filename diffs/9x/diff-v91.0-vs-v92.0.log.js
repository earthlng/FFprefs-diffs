/******************************************************************************************
 * diffs between FF prefs v91.0 and v92.0
 *
 * prefs: 4358
 *        4284 matching prefs
 *          74 diffs ( 40 new, 23 gone, 11 different )
 ******************************************************************************************/
// new in v92.0:
pref("browser.newtabpage.activity-stream.discoverystream.personalization.enabled", true);
pref("browser.newtabpage.activity-stream.discoverystream.spoc-positions", "2,4,11,20");
pref("browser.newtabpage.activity-stream.discoverystream.sponsored-collections.enabled", false);
pref("browser.newtabpage.activity-stream.feeds.recommendationprovider", true);
pref("browser.urlbar.groupLabels.enabled", true);
pref("dom.event.dragexit.enabled", true);
pref("dom.select_events.textcontrols.selectionchange.enabled", true);
pref("dom.select_events.textcontrols.selectstart.enabled", false);
pref("dom.serviceWorkers.testing.persistTemporarilyInstalledAddons", false);
pref("dom.shadowdom.slot.assign.enabled", true);
pref("dom.webcomponents.disabledFeatures.enabled", true);
pref("general.autoscroll.prevent_to_collapse_selection_by_middle_mouse_down", false);
pref("general.autoscroll.prevent_to_start.altKey", false);
pref("general.autoscroll.prevent_to_start.ctrlKey", false);
pref("general.autoscroll.prevent_to_start.metaKey", false);
pref("general.autoscroll.prevent_to_start.osKey", false);
pref("general.autoscroll.prevent_to_start.shiftKey", true);
pref("gfx.basic_layer_manager.force_enabled", false);
pref("gfx.webrender.force-legacy-layers", false);
pref("layout.css.accent-color.darkening-target-contrast-ratio", "6.0");
pref("layout.css.accent-color.min-contrast-ratio", "3.0");
pref("layout.css.color-scheme.enabled", false);
pref("layout.css.computed-style.throw-on-invalid-pseudo", false);
pref("layout.css.system-ui.enabled", true);
pref("network.http.largeKeepaliveFactor", 10);
pref("network.http.referer.disallowCrossSiteRelaxingDefault", false);
pref("network.protocol-handler.external.mk", false);
pref("print.save_as_pdf.internal_destinations.enabled", false);
pref("privacy.partition.network_state.ws_connection_queue", true);
pref("reader.pocket.ctaVersion", "");
pref("security.sandbox.content.shadow-stack.enabled", false);
pref("security.sandbox.gmp.shadow-stack.enabled", false);
pref("security.sandbox.gpu.shadow-stack.enabled", false);
pref("security.sandbox.rdd.shadow-stack.enabled", false);
pref("security.sandbox.socket.shadow-stack.enabled", false);
pref("webgl.enable-renderer-query", true);
pref("webgl.override-unmasked-renderer", "");
pref("webgl.override-unmasked-vendor", "");
pref("webgl.sanitize-unmasked-renderer", true);
pref("widget.windows.share.wait_action.enabled", false);

// removed, renamed or hidden in v92.0:
pref("browser.aboutwelcome.protonDesign", true);
pref("browser.newtabpage.activity-stream.discoverystream.personalization.version", 2);
pref("browser.newtabpage.activity-stream.feeds.recommendationproviderswitcher", true);
pref("browser.urlbar.experimental.firefoxSuggestLabels.enabled", false);
pref("devtools.inspector.color-scheme-simulation.enabled", true);
pref("devtools.performance.recording.objdirs.remote", "[]");
pref("devtools.responsive.metaViewport.enabled", true);
pref("dom.select_events.textcontrols.enabled", false);
pref("extensions.webextPermissionPrompts", true);
pref("gfx.webrender.force-disabled", false);
pref("layout.css.clip-path-path.enabled", true);
pref("layout.css.image-set.enabled", true);
pref("layout.css.prefixes.columns", false);
pref("marionette.log.level", "Info");
pref("marionette.log.truncate", true);
pref("network.http.spdy.bug1563538", true);
pref("security.sandbox.content.shadow-stacks-strict", false);
pref("security.sandbox.gmp.shadow-stacks-strict", false);
pref("security.sandbox.gpu.shadow-stacks-strict", false);
pref("security.sandbox.rdd.shadow-stacks-strict", false);
pref("security.sandbox.socket.shadow-stacks-strict", false);
pref("services.sync.prefs.sync.privacy.fuzzyfox.clockgrainus", false);
pref("services.sync.prefs.sync.privacy.fuzzyfox.enabled", false);

// changed in v92.0:
pref("browser.newtabpage.activity-stream.discoverystream.config", "{\"api_key_pref\":\"extensions.pocket.oAuthConsumerKey\",\"collapsible\":true,\"enabled\":true,\"show_spocs\":false,\"hardcoded_layout\":true,\"layout_endpoint\":\"https://getpocket.cdn.mozilla.net/v3/newtab/layout?version=1&consumer_key=$apiKey&layout_variant=basic\"}"); // prev: "{\"api_key_pref\":\"extensions.pocket.oAuthConsumerKey\",\"collapsible\":true,\"enabled\":true,\"show_spocs\":false,\"hardcoded_layout\":true,\"personalized\":true,\"layout_endpoint\":\"https://getpocket.cdn.mozilla.net/v3/newtab/layout?version=1&consumer_key=$apiKey&layout_variant=basic\"}"
pref("browser.topsites.contile.enabled", true); // prev: false
pref("dom.events.coalesce.touchmove", true); // prev: false
pref("dom.storage.next_gen", true); // prev: false
pref("gfx.webrender.fallback.basic", false); // prev: true
pref("image.avif.compliance_strictness", 0); // prev: 1
pref("layout.css.accent-color.enabled", true); // prev: false
pref("layout.css.font-size-adjust.basis.enabled", true); // prev: false
pref("layout.css.size-adjust.enabled", true); // prev: false
pref("network.dns.upgrade_with_https_rr", true); // prev: false
pref("network.dns.use_https_rr_as_altsvc", true); // prev: false
