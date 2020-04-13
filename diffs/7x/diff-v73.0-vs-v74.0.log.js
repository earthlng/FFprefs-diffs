/******************************************************************************************
 * diffs between FF prefs v73.0 and v74.0
 *
 * prefs: 3926
 *        3854 matching prefs
 *          72 diffs ( 46 new, 11 gone, 15 different )
 ******************************************************************************************/
// new in v74.0:
pref("apz.touch_acceleration_factor_x", "1.0");
pref("apz.touch_acceleration_factor_y", "1.0");
pref("browser.newtabpage.activity-stream.discoverystream.personalization.modelKeys", "nb_model_arts_and_entertainment, nb_model_autos_and_vehicles, nb_model_beauty_and_fitness, nb_model_blogging_resources_and_services, nb_model_books_and_literature, nb_model_business_and_industrial, nb_model_computers_and_electronics, nb_model_finance, nb_model_food_and_drink, nb_model_games, nb_model_health, nb_model_hobbies_and_leisure, nb_model_home_and_garden, nb_model_internet_and_telecom, nb_model_jobs_and_education, nb_model_law_and_government, nb_model_online_communities, nb_model_people_and_society, nb_model_pets_and_animals, nb_model_real_estate, nb_model_reference, nb_model_science, nb_model_shopping, nb_model_sports, nb_model_travel");
pref("browser.newtabpage.activity-stream.discoverystream.personalization.version", 1);
pref("browser.newtabpage.activity-stream.feeds.recommendationproviderswitcher", true);
pref("browser.tabs.allowTabDetach", true);
pref("browser.urlbar.update1.interventions", false);
pref("browser.urlbar.update1.searchTips", false);
pref("browser.urlbar.update2.expandTextOnFocus", false);
pref("canvas.mozgetasfile.enabled", false);
pref("devtools.performance.recording.preset", "web-developer");
pref("dom.about_newtab_sanitization.enabled", false);
pref("dom.image-lazy-loading.enabled", false);
pref("dom.input_events.beforeinput.enabled", false);
pref("dom.security.skip_about_page_csp_allowlist_and_assert", false);
pref("dom.security.skip_about_page_has_csp_assert", false);
pref("dom.security.skip_html_fragment_assertion", false);
pref("dom.security.skip_remote_script_assertion_in_system_priv_context", false);
pref("dom.textMetrics.actualBoundingBox.enabled", true);
pref("dom.textMetrics.baselines.enabled", false);
pref("dom.textMetrics.emHeight.enabled", false);
pref("dom.textMetrics.fontBoundingBox.enabled", false);
pref("dom.worker.console.dispatch_events_to_main_thread", true);
pref("extensions.experiments.enabled", false);
pref("full-screen-api.exit-on.windowOpen", true);
pref("full-screen-api.exit-on.windowRaise", true);
pref("geo.provider.network.timeout", 60000);
pref("geo.provider.network.url", "https://www.googleapis.com/geolocation/v1/geolocate?key=%GOOGLE_LOCATION_SERVICE_API_KEY%");
pref("gfx.webrender.debug.tile-cache-logging", false);
pref("gfx.webrender.enable-capture", false);
pref("gfx.webrender.enable-item-cache", false);
pref("gfx.webrender.enable-multithreading", true);
pref("javascript.options.property_error_message_fix", false);
pref("layout.css.comparison-functions.enabled", false);
pref("layout.css.prefixes.columns", false);
pref("layout.css.serialize-grid-implicit-tracks", true);
pref("media.videocontrols.picture-in-picture.keyboard-controls.enabled", false);
pref("network.socket.forcePort", "");
pref("places.search.matchDiacritics", false);
pref("privacy.dynamic_firstparty.limitForeign", false);
pref("privacy.restrict3rdpartystorage.expiration_redirect", 900);
pref("privacy.restrict3rdpartystorage.heuristic.redirect", true);
pref("privacy.userContext.newTabContainerOnLeftClick.enabled", false);
pref("toolkit.shutdown.fastShutdownStage", 0);
pref("toolkit.shutdown.lateWriteChecksStage", 0);
pref("webgl.out-of-process", false);

// removed, renamed or hidden in v74.0:
pref("browser.urlbar.update1.expandTextOnFocus", false);
pref("devtools.toolbox.content-frame", true);
pref("extensions.contentblocker.enabled", false);
pref("extensions.legacy.enabled", false);
pref("geo.wifi.uri", "https://www.googleapis.com/geolocation/v1/geolocate?key=%GOOGLE_LOCATION_SERVICE_API_KEY%");
pref("geo.wifi.xhr.timeout", 60000);
pref("javascript.options.parser_defer_allocation", false);
pref("layout.css.parsing.parallel", true);
pref("privacy.userContext.longPressBehavior", 0);
pref("signon.management.page.enabled", true);
pref("webgl.disable-extensions", false);

// changed in v74.0:
pref("browser.tabs.documentchannel", true); // prev: false
pref("browser.tabs.remote.separatedMozillaDomains", "addons.mozilla.org,accounts.firefox.com"); // prev: "addons.cdn.mozilla.net,addons.mozilla.org,accounts.firefox.com"
pref("browser.tabs.remote.useCORP", true); // prev: false
pref("corroborator.enabled", true); // prev: false
pref("dom.missing_prop_counters.enabled", true); // prev: false
pref("dom.security.featurePolicy.enabled", true); // prev: false
pref("dom.serviceWorkers.parent_intercept", true); // prev: false
pref("gfx.webrender.enable-low-priority-pool", true); // prev: false
pref("layout.css.outline-style-auto.enabled", true); // prev: false
pref("layout.css.text-underline-position.enabled", true); // prev: false
pref("layout.css.use-counters.enabled", true); // prev: false
pref("layout.css.use-counters-unimplemented.enabled", true); // prev: false
pref("media.peerconnection.ice.obfuscate_host_addresses", true); // prev: false
pref("security.tls.version.min", 3); // prev: 1
pref("webgl.default-low-power", true); // prev: false
