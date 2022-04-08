/******************************************************************************************
 * diffs between FF prefs v98.0 and v99.0
 *
 * prefs: 4493
 *        4424 matching prefs
 *          69 diffs ( 38 new, 11 gone, 20 different )
 ******************************************************************************************/
// new in v99.0:
pref("browser.urlbar.bestMatch.blockingEnabled", false);
pref("browser.urlbar.suggest.bestmatch", true);
pref("devtools.inspector.selectedSidebar", "layoutview");
pref("devtools.netmonitor.customRequest", "{}");
pref("docshell.shistory.bfcache.ship_allow_beforeunload_listeners", false);
pref("dom.script_loader.delazification.max_size", 10485760);
pref("dom.script_loader.delazification.min_mem", 2);
pref("dom.script_loader.delazification.strategy", 255);
pref("dom.streams.pipeTo.enabled", false);
pref("dom.streams.transform_streams.enabled", false);
pref("extensions.formautofill.addresses.supported", "detect");
pref("extensions.formautofill.addresses.supportedCountries", "US,CA");
pref("extensions.formautofill.creditCards.supported", "detect");
pref("extensions.formautofill.creditCards.supportedCountries", "US,CA,UK,FR,DE");
pref("extensions.pocket.refresh.hideRecentSaves.enabled", false);
pref("gfx.font_rendering.directwrite.bold_simulation", 1);
pref("intl.multilingual.aboutWelcome.languageMismatchEnabled", false);
pref("javascript.options.watchtower.megamorphic", true);
pref("layout.css.scrollbar-width-thin.disabled", false);
pref("media.videocontrols.picture-in-picture.display-text-tracks.enabled", false);
pref("network.http.encoding.trustworthy_is_https", true);
pref("network.http.useragent.forceVersion", 0);
pref("network.max_socket_process_failed_count", 1);
pref("network.trr.strict_fallback_request_timeout_ms", 6000);
pref("network.trr.strict_native_fallback_allow_timeouts", true);
pref("reader.improvements_H12022.enabled", false);
pref("services.sync.engine.tabs.filteredSchemes", "about|resource|chrome|file|blob|moz-extension");
pref("services.sync.syncedTabs.syncDelayAfterTabChange", 0);
pref("signon.usernameOnlyForm.lookupThreshold", 5);
pref("svg.use-element.graphics-element-restrictions", 1);
pref("widget.gtk.native-context-menus", false);
pref("widget.gtk.overlay-scrollbars.enabled", false);
pref("widget.gtk.theme-scrollbar-colors.enabled", true);
pref("widget.non-native-theme.scrollbar.dark-themed", true);
pref("widget.swipe.success-threshold", "0.5");
pref("widget.swipe.success-velocity-contribution", "0.05");
pref("widget.swipe.velocity-twitch-tolerance", "1e-7");
pref("widget.windows.overlay_scrollbars.enabled", false);

// removed, renamed or hidden in v99.0:
pref("browser.contentblocking.report.vpn.enabled", true);
pref("browser.newtabpage.activity-stream.asrouter.disable-captive-portal-vpn-promo", false);
pref("dom.script_loader.full_parse_max_size", 10485760);
pref("dom.script_loader.full_parse_min_mem", 2);
pref("editor.create_element_transaction.enabled", false);
pref("extensions.formautofill.supportedCountries", "US,CA");
pref("extensions.webextensions.background-delayed-startup", true);
pref("media.peerconnection.rtpsourcesapi.enabled", true);
pref("security.csp.enable", true);
pref("services.sync.engine.tabs.filteredUrls", "^(about:.*|resource:.*|chrome:.*|file:.*|blob:.*|moz-extension:.*)$");
pref("widget.gtk.alt-theme.scrollbar", false);

// changed in v99.0:
pref("browser.contentblocking.report.vpn_regions", "at,be,ca,ch,de,fr,ie,it,my,nl,nz,sg,es,gb,us"); // prev: "us,ca,nz,sg,my,gb,de,fr"
pref("browser.newtabpage.activity-stream.discoverystream.readTime.enabled", true); // prev: false
pref("browser.urlbar.bestMatch.enabled", false); // prev: true
pref("dom.serviceWorkers.navigationPreload.enabled", true); // prev: false
pref("dom.workers.requestAnimationFrame", true); // prev: false
pref("font.name-list.monospace.ar", "Consolas"); // prev: "Courier New"
pref("font.name-list.monospace.el", "Consolas"); // prev: "Courier New"
pref("font.name-list.monospace.he", "Fixed Miriam Transparent, Miriam Fixed, Rod, Consolas, Courier New"); // prev: "Fixed Miriam Transparent, Miriam Fixed, Rod, Courier New"
pref("font.name-list.monospace.x-cyrillic", "Consolas"); // prev: "Courier New"
pref("font.name-list.monospace.x-math", "Consolas"); // prev: "Courier New"
pref("font.name-list.monospace.x-unicode", "Consolas"); // prev: "Courier New"
pref("font.name-list.monospace.x-western", "Consolas"); // prev: "Courier New"
pref("gfx.canvas.accelerated.cache-items", 2048); // prev: 1024
pref("gfx.canvas.accelerated.cache-size", 256); // prev: 128
pref("gfx.offscreencanvas.domain-allowlist", "*.zoom.us"); // prev: ""
pref("gfx.offscreencanvas.domain-enabled", true); // prev: false
pref("gfx.will-change.ignore-opacity", true); // prev: false
pref("media.audio.audiosink.threshold_ms", "200.0"); // prev: "1000.0"
pref("reader.color_scheme", "auto"); // prev: "light"
pref("reader.color_scheme.values", "[\"light\",\"dark\",\"sepia\",\"auto\"]"); // prev: "[\"light\",\"dark\",\"sepia\"]"
