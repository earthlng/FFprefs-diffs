/******************************************************************************************
 * diffs between FF prefs v48.0 and v49.0
 *
 * prefs: 2744
 *        2631 matching prefs
 *         113 diffs ( 60 new, 36 gone, 17 different )
 ******************************************************************************************/
// new in v49.0:
pref("apz.scale_repaint_delay_ms", 500);
pref("browser.bookmarks.showRecentlyBookmarked", true);
pref("browser.migrate.automigrate.daysToOfferUndo", 4);
pref("browser.migrate.automigrate.enabled", false);
pref("browser.migrate.automigrate.ui.enabled", true);
pref("browser.safebrowsing.provider.google.pver", "2.2");
pref("browser.safebrowsing.provider.mozilla.pver", "2.2");
pref("browser.search.reset.enabled", false);
pref("browser.search.reset.whitelist", "");
pref("canvas.imagebitmap_extensions.enabled", false);
pref("devtools.webconsole.new-frontend-enabled", false);
pref("dom.animations.offscreen-throttling", true);
pref("dom.audiochannel.audioCompeting", false);
pref("dom.enable_performance_observer", false);
pref("dom.flyweb.enabled", false);
pref("dom.global_stop_script", true);
pref("dom.vr.osvr.enabled", false);
pref("gfx.vr.osvr.clientKitLibPath", "");
pref("gfx.vr.osvr.clientLibPath", "");
pref("gfx.vr.osvr.commonLibPath", "");
pref("gfx.vr.osvr.utilLibPath", "");
pref("layers.allow-d3d9-fallback", true);
pref("layout.accessiblecaret.extend_selection_for_phone_number", false);
pref("media.decoder-doctor.wmf-disabled-is-failure", false);
pref("media.default_volume", "1.0");
pref("media.gmp-eme-adobe.visible", true);
pref("media.gmp-widevinecdm.visible", true);
pref("media.navigator.video.use_remb", true);
pref("media.navigator.video.use_tmmbr", false);
pref("media.seekToNextFrame.enabled", false);
pref("media.suspend-bkgnd-video.delay-ms", 10000);
pref("media.suspend-bkgnd-video.enabled", false);
pref("network.http.keep_empty_response_headers_as_empty_string", false);
pref("print.use_simplify_page", false);
pref("reader.content_width", 3);
pref("reader.line_height", 4);
pref("security.cert_pinning.max_max_age_seconds", 5184000);
pref("security.pki.netscape_step_up_policy", 1);
pref("security.signed_content.CSP.default", "script-src 'self'; style-src 'self'");
pref("security.ssl3.ecdhe_ecdsa_aes_256_gcm_sha384", true);
pref("security.ssl3.ecdhe_rsa_aes_256_gcm_sha384", true);
pref("services.blocklist.addons.checked", 0);
pref("services.blocklist.addons.collection", "addons");
pref("services.blocklist.bucket", "blocklists");
pref("services.blocklist.changes.path", "/buckets/monitor/collections/changes/records");
pref("services.blocklist.gfx.checked", 0);
pref("services.blocklist.gfx.collection", "gfx");
pref("services.blocklist.onecrl.checked", 0);
pref("services.blocklist.onecrl.collection", "certificates");
pref("services.blocklist.plugins.checked", 0);
pref("services.blocklist.plugins.collection", "plugins");
pref("services.blocklist.signing.enforced", false);
pref("services.blocklist.update_enabled", false);
pref("services.settings.server", "https://firefox.settings.services.mozilla.com/v1");
pref("services.sync.prefs.sync.browser.urlbar.suggest.bookmark", true);
pref("services.sync.prefs.sync.browser.urlbar.suggest.history", true);
pref("services.sync.prefs.sync.browser.urlbar.suggest.history.onlyTyped", true);
pref("services.sync.prefs.sync.browser.urlbar.suggest.openpage", true);
pref("services.sync.prefs.sync.browser.urlbar.suggest.searches", true);
pref("signon.schemeUpgrades", true);

// removed, renamed or hidden in v49.0:
pref("app.update.incompatible.mode", 0);
pref("app.update.mode", 1);
pref("app.update.showInstalledUI", false);
pref("devtools.webconsole.fontSize", 0);
pref("dom.datastore.enabled", false);
pref("dom.disable_window_open_feature.scrollbars", false);
pref("dom.inter-app-communication-api.enabled", false);
pref("dom.push.adaptive.enabled", false);
pref("dom.push.adaptive.gap", 60000);
pref("dom.push.adaptive.lastGoodPingInterval", 180000);
pref("dom.push.adaptive.lastGoodPingInterval.mobile", 180000);
pref("dom.push.adaptive.lastGoodPingInterval.wifi", 180000);
pref("dom.push.adaptive.upperLimit", 1740000);
pref("dom.push.pingInterval.default", 180000);
pref("dom.push.pingInterval.mobile", 180000);
pref("dom.push.pingInterval.wifi", 180000);
pref("dom.push.udp.wakeupEnabled", false);
pref("dom.requestSync.enabled", false);
pref("dom.server-events.enabled", true);
pref("intl.tsf.force_enable", false);
pref("layout.css.text-emphasis.enabled", true);
pref("network.autodial-helper.enabled", false);
pref("network.tcp.sendbuffer", 131072);
pref("services.kinto.addons.checked", 0);
pref("services.kinto.addons.collection", "addons");
pref("services.kinto.base", "https://firefox.settings.services.mozilla.com/v1");
pref("services.kinto.bucket", "blocklists");
pref("services.kinto.changes.path", "/buckets/monitor/collections/changes/records");
pref("services.kinto.gfx.checked", 0);
pref("services.kinto.gfx.collection", "gfx");
pref("services.kinto.onecrl.checked", 0);
pref("services.kinto.onecrl.collection", "certificates");
pref("services.kinto.plugins.checked", 0);
pref("services.kinto.plugins.collection", "plugins");
pref("services.kinto.update_enabled", false);
pref("services.sync.prefs.sync.app.update.mode", true);

// changed in v49.0:
pref("app.update.promptWaitTime", 691200); // prev: 172800
pref("browser.safebrowsing.blockedURIs.enabled", true); // prev: false
pref("browser.safebrowsing.provider.google.gethashURL", "https://safebrowsing.google.com/safebrowsing/gethash?client=SAFEBROWSING_ID&appver=%MAJOR_VERSION%&pver=2.2"); // prev: "https://safebrowsing.google.com/safebrowsing/gethash?client=SAFEBROWSING_ID&appver=%VERSION%&pver=2.2"
pref("browser.safebrowsing.provider.google.updateURL", "https://safebrowsing.google.com/safebrowsing/downloads?client=SAFEBROWSING_ID&appver=%MAJOR_VERSION%&pver=2.2&key=%GOOGLE_API_KEY%"); // prev: "https://safebrowsing.google.com/safebrowsing/downloads?client=SAFEBROWSING_ID&appver=%VERSION%&pver=2.2&key=%GOOGLE_API_KEY%"
pref("browser.safebrowsing.provider.mozilla.gethashURL", "https://shavar.services.mozilla.com/gethash?client=SAFEBROWSING_ID&appver=%MAJOR_VERSION%&pver=2.2"); // prev: "https://shavar.services.mozilla.com/gethash?client=SAFEBROWSING_ID&appver=%VERSION%&pver=2.2"
pref("browser.safebrowsing.provider.mozilla.updateURL", "https://shavar.services.mozilla.com/downloads?client=SAFEBROWSING_ID&appver=%MAJOR_VERSION%&pver=2.2"); // prev: "https://shavar.services.mozilla.com/downloads?client=SAFEBROWSING_ID&appver=%VERSION%&pver=2.2"
pref("canvas.filters.enabled", true); // prev: false
pref("devtools.apps.forbidden-permissions", "embed-apps,embed-widgets"); // prev: "embed-apps,engineering-mode,embed-widgets"
pref("dom.details_element.enabled", true); // prev: false
pref("extensions.blocklist.detailsURL", "https://www.mozilla.com/%LOCALE%/blocklist/"); // prev: "https://www.mozilla.org/%LOCALE%/blocklist/"
pref("gfx.font_rendering.graphite.enabled", true); // prev: false
pref("layout.accessiblecaret.timeout_ms", 0); // prev: 3000
pref("layout.css.background-clip-text.enabled", true); // prev: false
pref("layout.css.prefixes.webkit", true); // prev: false
pref("media.decoder-doctor.notifications-allowed", "MediaWMFNeeded,MediaWidevineNoWMFNoSilverlight"); // prev: "MediaWidevineNoWMFNoSilverlight"
pref("media.getusermedia.screensharing.allowed_domains", "webex.com,*.webex.com,ciscospark.com,*.ciscospark.com,projectsquared.com,*.projectsquared.com,*.room.co,room.co,beta.talky.io,talky.io,*.clearslide.com,appear.in,*.appear.in,tokbox.com,*.tokbox.com,*.sso.francetelecom.fr,*.si.francetelecom.fr,*.sso.infra.ftgroup,*.multimedia-conference.orange-business.com,*.espacecollaboration.orange-business.com,free.gotomeeting.com,g2m.me,*.g2m.me,*.mypurecloud.com,*.mypurecloud.com.au,spreed.me,*.spreed.me,*.spreed.com,air.mozilla.org,*.circuit.com,*.yourcircuit.com,circuit.siemens.com,yourcircuit.siemens.com,circuitsandbox.net,*.unify.com,tandi.circuitsandbox.net,*.ericsson.net,*.cct.ericsson.net,*.opentok.com,*.conf.meetecho.com,meet.jit.si,*.meet.jit.si,web.stage.speakeasyapp.net,web.speakeasyapp.net,*.hipchat.me,*.beta-wspbx.com,*.wspbx.com,*.unifiedcloudit.com,*.smartboxuc.com,*.smartbox-uc.com,*.panterranetworks.com,pexipdemo.com,*.pexipdemo.com,pex.me,*.pex.me,*.rd.pexip.com,1click.io,*.1click.io,*.fuze.com,*.fuzemeeting.com,*.thinkingphones.com,gotomeeting.com,*.gotomeeting.com,gotowebinar.com,*.gotowebinar.com,gototraining.com,*.gototraining.com,citrix.com,*.citrix.com,expertcity.com,*.expertcity.com,citrixonline.com,*.citrixonline.com,g2m.me,*.g2m.me,gotomeet.me,*.gotomeet.me,gotomeet.at,*.gotomeet.at,miriadaxdes.miriadax.net,certificacion.miriadax.net,miriadax.net,*.wire.com,sylaps.com,*.sylaps.com"); // prev: "webex.com,*.webex.com,ciscospark.com,*.ciscospark.com,projectsquared.com,*.projectsquared.com,*.room.co,room.co,beta.talky.io,talky.io,*.clearslide.com,appear.in,*.appear.in,tokbox.com,*.tokbox.com,*.sso.francetelecom.fr,*.si.francetelecom.fr,*.sso.infra.ftgroup,*.multimedia-conference.orange-business.com,*.espacecollaboration.orange-business.com,free.gotomeeting.com,g2m.me,*.g2m.me,*.mypurecloud.com,*.mypurecloud.com.au,spreed.me,*.spreed.me,*.spreed.com,air.mozilla.org,*.circuit.com,*.yourcircuit.com,circuit.siemens.com,yourcircuit.siemens.com,circuitsandbox.net,*.unify.com,tandi.circuitsandbox.net,*.ericsson.net,*.cct.ericsson.net,*.opentok.com,*.conf.meetecho.com,meet.jit.si,*.meet.jit.si,web.stage.speakeasyapp.net,web.speakeasyapp.net,*.hipchat.me,*.beta-wspbx.com,*.wspbx.com,*.unifiedcloudit.com,*.smartboxuc.com,*.smartbox-uc.com,*.panterranetworks.com,pexipdemo.com,*.pexipdemo.com,pex.me,*.pex.me,*.rd.pexip.com,1click.io,*.1click.io,*.fuze.com,*.fuzemeeting.com,*.thinkingphones.com,gotomeeting.com,*.gotomeeting.com,gotowebinar.com,*.gotowebinar.com,gototraining.com,*.gototraining.com,citrix.com,*.citrix.com,expertcity.com,*.expertcity.com,citrixonline.com,*.citrixonline.com,g2m.me,*.g2m.me,gotomeet.me,*.gotomeet.me,gotomeet.at,*.gotomeet.at,miriadaxdes.miriadax.net,certificacion.miriadax.net,miriadax.net,*.wire.com"
pref("media.webspeech.synth.enabled", true); // prev: false

