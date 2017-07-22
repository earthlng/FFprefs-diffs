/******************************************************************************************
 * diffs between FF prefs v38.0 and v39.0
 *
 * prefs: 2449
 *        2384 matching prefs
 *          65 diffs ( 45 new, 6 gone, 14 different )
 ******************************************************************************************/
// new in v39.0:
pref("browser.addon-watch.ignore", "[\"mochikit@mozilla.org\",\"special-powers@mozilla.org\",\"fxdevtools-adapters@mozilla.org\",\"fx-devtools\"]");
pref("browser.addon-watch.interval", -1);
pref("browser.addon-watch.percentage-limit", 5);
pref("browser.pocket.api", "api.getpocket.com");
pref("browser.pocket.enabled", true);
pref("browser.pocket.enabledLocales", "en-US en-GB en-ZA de es-ES ja ja-JP-mac ru");
pref("browser.pocket.oAuthConsumerKey", "40249-e88c401e1b1f2242d9e441c4");
pref("browser.pocket.site", "getpocket.com");
pref("browser.pocket.useLocaleList", true);
pref("browser.reader.detectedFirstArticle", false);
pref("browser.shell.mostRecentDateSetAsDefault", "");
pref("converter.html2txt.always_include_ruby", false);
pref("devtools.devices.url", "https://code.cdn.mozilla.net/devices/devices.json");
pref("devtools.performance.memory.max-log-length", 2147483647);
pref("devtools.performance.memory.sample-probability", "0.05");
pref("devtools.performance.timeline.hidden-markers", "[]");
pref("devtools.serviceWorkers.testing.enabled", false);
pref("devtools.webconsole.inputHistoryCount", 50);
pref("devtools.webide.sidebars", false);
pref("dom.caches.enabled", false);
pref("dom.mouseEvent.offsetXY.enabled", true);
pref("geo.provider.ms-windows-location", false);
pref("gfx.downloadable_fonts.disable_cache", false);
pref("image.decode-immediately.enabled", false);
pref("image.decode-only-on-draw.enabled", true);
pref("intl.tsf.hack.google_ja_input.do_not_return_no_layout_error_at_caret", true);
pref("intl.tsf.hack.google_ja_input.do_not_return_no_layout_error_at_first_char", true);
pref("javascript.options.asyncstack", false);
pref("javascript.options.compact_on_user_inactive", true);
pref("layout.css.expensive-style-struct-assertions.enabled", false);
pref("layout.css.scroll-snap.enabled", true);
pref("layout.css.scroll-snap.prediction-max-velocity", 2000);
pref("layout.css.scroll-snap.prediction-sensitivity", "0.750");
pref("layout.css.scroll-snap.proximity-threshold", 200);
pref("layout.css.unprefixing-service.enabled", true);
pref("loop.contextInConverations.enabled", false);
pref("loop.debug.twoWayMediaTelemetry", false);
pref("network.dns.offline-localhost", true);
pref("network.http.enforce-framing.soft", true);
pref("network.standard-url.max-length", 1048576);
pref("network.sts.max_time_for_events_between_two_polls", 100);
pref("network.sts.serve_multiple_events_per_poll_iteration", true);
pref("privacy.trackingprotection.pbmode.enabled", false);
pref("services.sync.prefs.sync.lightweightThemes.selectedThemeID", true);
pref("xpinstall.customConfirmationUI", false);

// removed, renamed or hidden in v39.0:
pref("dom.fetch.enabled", false);
pref("image.mem.decodeondraw", true);
pref("layout.async-containerless-scrolling.enabled", true);
pref("loop.screenshare.enabled", false);
pref("print.enable_e10s_testing", true);
pref("services.sync.prefs.sync.lightweightThemes.isThemeSelected", true);

// changed in v39.0:
pref("browser.newtabpage.directory.ping", "https://tiles.services.mozilla.com/v3/links/"); // prev: "https://tiles.services.mozilla.com/v2/links/"
pref("browser.newtabpage.directory.source", "https://tiles.services.mozilla.com/v3/links/fetch/%LOCALE%/%CHANNEL%"); // prev: "https://tiles.services.mozilla.com/v2/links/fetch/%LOCALE%"
pref("devtools.remote.wifi.scan", true); // prev: false
pref("devtools.remote.wifi.visible", true); // prev: false
pref("devtools.webide.simulatorAddonRegExp", "fxos_(.*)_simulator@mozilla\\.org$"); // prev: "fxos_(.*)_simulator@mozilla\.org$"
pref("gfx.downloadable_fonts.woff2.enabled", true); // prev: false
pref("layout.float-fragments-inside-column.enabled", true); // prev: false
pref("loop.CSP", "default-src 'self' about: file: chrome:; img-src * data:; font-src 'none'; connect-src wss://*.tokbox.com https://*.opentok.com https://*.tokbox.com wss://*.mozilla.com https://*.mozilla.org wss://*.mozaws.net; media-src blob:"); // prev: "default-src 'self' about: file: chrome:; img-src 'self' data: https://www.gravatar.com/ about: file: chrome:; font-src 'none'; connect-src wss://*.tokbox.com https://*.opentok.com https://*.tokbox.com wss://*.mozilla.com https://*.mozilla.org wss://*.mozaws.net; media-src blob:"
pref("media.getusermedia.screensharing.allowed_domains", "webex.com,*.webex.com,ciscospark.com,*.ciscospark.com,projectsquared.com,*.projectsquared.com,*.room.co,room.co,beta.talky.io,talky.io,*.clearslide.com,appear.in,*.appear.in,tokbox.com,*.tokbox.com,*.sso.francetelecom.fr,*.si.francetelecom.fr,*.sso.infra.ftgroup,*.multimedia-conference.orange-business.com,*.espacecollaboration.orange-business.com,free.gotomeeting.com,g2m.me,*.g2m.me,example.com,*.mypurecloud.com,*.mypurecloud.com.au"); // prev: "webex.com,*.webex.com,ciscospark.com,*.ciscospark.com,projectsquared.com,*.projectsquared.com,*.room.co,room.co,beta.talky.io,talky.io,*.clearslide.com,appear.in,*.appear.in,tokbox.com,*.tokbox.com,*.sso.francetelecom.fr,*.si.francetelecom.fr,*.sso.infra.ftgroup,*.multimedia-conference.orange-business.com,*.espacecollaboration.orange-business.com,free.gotomeeting.com,g2m.me,*.g2m.me,example.com"
pref("network.http.altsvc.enabled", true); // prev: false
pref("network.http.altsvc.oe", true); // prev: false
pref("network.http.atsvc.enabled", true); // prev: false
pref("network.http.atsvc.oe", true); // prev: false
pref("reader.parse-on-load.enabled", true); // prev: false

