/******************************************************************************************
 * diffs between FF prefs v45.0 and v46.0
 *
 * prefs: 2672
 *        2585 matching prefs
 *          87 diffs ( 36 new, 35 gone, 16 different )
 ******************************************************************************************/
// new in v46.0:
pref("app.support.e10sAccessibilityUrl", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/accessibility-ppt");
pref("apz.allow_immediate_handoff", true);
pref("apz.paint_skipping.enabled", true);
pref("apz.record_checkerboarding", false);
pref("browser.laterrun.enabled", false);
pref("browser.newtabpage.remote", false);
pref("browser.safebrowsing.downloads.remote.url", "https://sb-ssl.google.com/safebrowsing/clientreport/download?key=%GOOGLE_API_KEY%");
pref("browser.uitour.surveyDuration", 7200);
pref("devtools.memory.custom-dominator-tree-breakdowns", "{}");
pref("dom.input.fallbackUploadDir", "");
pref("extensions.e10sBlocksEnabling", true);
pref("extensions.pocket.enabled", true);
pref("full-screen-api.transition.timeout", 500);
pref("general.smoothScroll.currentVelocityWeighting", "0.25");
pref("general.smoothScroll.stopDecelerationWeighting", "0.4");
pref("gfx.content.use-native-pushlayer", true);
pref("gfx.downloadable_fonts.fallback_delay_short", 100);
pref("javascript.options.shared_memory", false);
pref("layers.single-tile.enabled", true);
pref("layout.accessiblecaret.bar.enabled", true);
pref("layout.css.font-display.enabled", false);
pref("layout.css.prefixes.device-pixel-ratio-webkit", false);
pref("media.ffvpx.enabled", true);
pref("media.navigator.audio.full_duplex", false);
pref("media.peerconnection.simulcast", true);
pref("media.peerconnection.video.min_bitrate_estimate", 0);
pref("media.wmf.skip-blacklist", false);
pref("mousebutton.4th.enabled", true);
pref("mousebutton.5th.enabled", true);
pref("network.http.request.max-attempts", 6);
pref("network.sts.max_time_for_pr_close_during_shutdown", 5000);
pref("plugin.mousewheel.enabled", true);
pref("plugins.rewrite_youtube_embeds", false);
pref("print.print_via_parent", false);
pref("privacy.trackingprotection.ui.enabled", false);
pref("webextensions.tests", false);

// removed, renamed or hidden in v46.0:
pref("apz.num_paint_duration_samples", 3);
pref("apz.use_paint_duration", true);
pref("browser.apps.URL", "https://marketplace.firefox.com/discovery/");
pref("browser.panorama.animate_zoom", true);
pref("browser.pocket.api", "api.getpocket.com");
pref("browser.pocket.enabled", true);
pref("browser.pocket.enabledLocales", "cs de en-GB en-US en-ZA es-ES es-MX fr hu it ja ja-JP-mac ko nl pl pt-BR pt-PT ru zh-CN zh-TW");
pref("browser.pocket.oAuthConsumerKey", "40249-e88c401e1b1f2242d9e441c4");
pref("browser.pocket.site", "getpocket.com");
pref("browser.pocket.useLocaleList", true);
pref("browser.safebrowsing.appRepURL", "https://sb-ssl.google.com/safebrowsing/clientreport/download?key=%GOOGLE_API_KEY%");
pref("datareporting.healthreport.currentDaySubmissionFailureCount", 0);
pref("datareporting.healthreport.documentServerNamespace", "metrics");
pref("datareporting.healthreport.documentServerURI", "https://fhr.data.mozilla.com/");
pref("datareporting.healthreport.lastDataSubmissionFailureTime", "0");
pref("datareporting.healthreport.lastDataSubmissionRequestedTime", "0");
pref("datareporting.healthreport.lastDataSubmissionSuccessfulTime", "0");
pref("datareporting.healthreport.logging.consoleEnabled", true);
pref("datareporting.healthreport.logging.consoleLevel", "Warn");
pref("datareporting.healthreport.logging.dumpEnabled", false);
pref("datareporting.healthreport.logging.dumpLevel", "Debug");
pref("datareporting.healthreport.nextDataSubmissionTime", "0");
pref("datareporting.healthreport.pendingDeleteRemoteData", false);
pref("datareporting.healthreport.service.enabled", true);
pref("datareporting.healthreport.service.loadDelayFirstRunMsec", 60000);
pref("datareporting.healthreport.service.loadDelayMsec", 10000);
pref("datareporting.policy.dataSubmissionEnabled.v2", false);
pref("datareporting.policy.firstRunTime", "0");
pref("dom.abortablepromise.enabled", false);
pref("media.format-reader.webm", true);
pref("selectioncaret.enabled", false);
pref("selectioncaret.inflatesize.threshold", 40);
pref("touchcaret.enabled", false);
pref("touchcaret.expiration.time", 3000);
pref("touchcaret.inflatesize.threshold", 40);

// changed in v46.0:
pref("apz.x_skate_size_multiplier", "1.25"); // prev: "2.5"
pref("apz.x_stationary_size_multiplier", "1.5"); // prev: "3.0"
pref("dom.permissions.enabled", true); // prev: false
pref("dom.vr.add-test-devices", 0); // prev: 1
pref("gfx.font_rendering.graphite.enabled", false); // prev: true
pref("identity.fxaccounts.remote.force_auth.uri", "https://accounts.firefox.com/force_auth?service=sync&context=fx_desktop_v3"); // prev: "https://accounts.firefox.com/force_auth?service=sync&context=fx_desktop_v2"
pref("identity.fxaccounts.remote.signin.uri", "https://accounts.firefox.com/signin?service=sync&context=fx_desktop_v3"); // prev: "https://accounts.firefox.com/signin?service=sync&context=fx_desktop_v2"
pref("identity.fxaccounts.remote.signup.uri", "https://accounts.firefox.com/signup?service=sync&context=fx_desktop_v3"); // prev: "https://accounts.firefox.com/signup?service=sync&context=fx_desktop_v2"
pref("layers.async-pan-zoom.enabled", true); // prev: false
pref("layout.css.text-emphasis.enabled", true); // prev: false
pref("media.getusermedia.screensharing.allowed_domains", "webex.com,*.webex.com,ciscospark.com,*.ciscospark.com,projectsquared.com,*.projectsquared.com,*.room.co,room.co,beta.talky.io,talky.io,*.clearslide.com,appear.in,*.appear.in,tokbox.com,*.tokbox.com,*.sso.francetelecom.fr,*.si.francetelecom.fr,*.sso.infra.ftgroup,*.multimedia-conference.orange-business.com,*.espacecollaboration.orange-business.com,free.gotomeeting.com,g2m.me,*.g2m.me,example.com,*.mypurecloud.com,*.mypurecloud.com.au,spreed.me,*.spreed.me,*.spreed.com,air.mozilla.org,*.circuit.com,*.yourcircuit.com,circuit.siemens.com,yourcircuit.siemens.com,circuitsandbox.net,*.unify.com,tandi.circuitsandbox.net,*.ericsson.net,*.cct.ericsson.net,*.opentok.com,*.conf.meetecho.com,meet.jit.si,*.meet.jit.si,web.stage.speakeasyapp.net,web.speakeasyapp.net,*.hipchat.me,*.beta-wspbx.com,*.wspbx.com,*.unifiedcloudit.com,*.smartboxuc.com,*.smartbox-uc.com,*.panterranetworks.com,pexipdemo.com,*.pexipdemo.com,pex.me,*.pex.me,*.rd.pexip.com,1click.io,*.1click.io,*.fuze.com,*.fuzemeeting.com,*.thinkingphones.com,gotomeeting.com,*.gotomeeting.com,gotowebinar.com,*.gotowebinar.com,gototraining.com,*.gototraining.com,citrix.com,*.citrix.com,expertcity.com,*.expertcity.com,citrixonline.com,*.citrixonline.com,g2m.me,*.g2m.me,gotomeet.me,*.gotomeet.me,gotomeet.at,*.gotomeet.at"); // prev: "webex.com,*.webex.com,ciscospark.com,*.ciscospark.com,projectsquared.com,*.projectsquared.com,*.room.co,room.co,beta.talky.io,talky.io,*.clearslide.com,appear.in,*.appear.in,tokbox.com,*.tokbox.com,*.sso.francetelecom.fr,*.si.francetelecom.fr,*.sso.infra.ftgroup,*.multimedia-conference.orange-business.com,*.espacecollaboration.orange-business.com,free.gotomeeting.com,g2m.me,*.g2m.me,example.com,*.mypurecloud.com,*.mypurecloud.com.au,spreed.me,*.spreed.me,*.spreed.com,air.mozilla.org,*.circuit.com,*.yourcircuit.com,circuit.siemens.com,yourcircuit.siemens.com,circuitsandbox.net,*.unify.com,tandi.circuitsandbox.net"
pref("media.peerconnection.video.max_bitrate", 0); // prev: 2000
pref("media.peerconnection.video.min_bitrate", 0); // prev: 200
pref("media.peerconnection.video.start_bitrate", 0); // prev: 300
pref("network.jar.block-remote-files", false); // prev: true
pref("ui.osk.require_win10", false); // prev: true

