/******************************************************************************************
 * diffs between FF prefs v50.0 and v51.0
 *
 * prefs: 2785
 *        2703 matching prefs
 *          82 diffs ( 55 new, 15 gone, 12 different )
 ******************************************************************************************/
// new in v51.0:
pref("accessibility.AOM.enabled", false);
pref("browser.crashReports.unsubmittedCheck.autoSubmit", false);
pref("browser.crashReports.unsubmittedCheck.chancesUntilSuppress", 4);
pref("browser.crashReports.unsubmittedCheck.enabled", false);
pref("browser.download.showPanelDropmarker", false);
pref("browser.newtabpage.compact", false);
pref("browser.newtabpage.thumbnailPlaceholder", false);
pref("browser.shell.skipDefaultBrowserCheckOnFirstRun", true);
pref("browser.startup.firstrunSkipsHomepage", false);
pref("browser.urlbar.oneOffSearches", false);
pref("datareporting.policy.firstRunURL", "");
pref("devtools.debugger.chrome-debugging-websocket", false);
pref("devtools.debugger.new-debugger-frontend", false);
pref("devtools.debugger.remote-websocket", false);
pref("dom.forms.datetime", false);
pref("dom.maxHardwareConcurrency", 16);
pref("dom.MediaError.message.enabled", false);
pref("dom.permissions.revoke.enable", false);
pref("dom.presentation.controller.enabled", false);
pref("dom.presentation.discoverable.encrypted", true);
pref("dom.presentation.discoverable.retry_ms", 5000);
pref("dom.presentation.receiver.enabled", false);
pref("dom.storageManager.enabled", false);
pref("dom.vr.openvr.enabled", false);
pref("dom.webaudio.enabled", true);
pref("dom.workers.maxPerDomain", 512);
pref("extensions.webextensions.keepStorageOnUninstall", false);
pref("extensions.webextensions.keepUuidOnUninstall", false);
pref("findbar.iteratorTimeout", 100);
pref("gfx.content.always-paint", false);
pref("gfx.text.disable-aa", false);
pref("gfx.vr.openvr-runtime", "");
pref("gl.ignore-dx-interop2-blacklist", false);
pref("intl.tsf.hack.atok.do_not_return_no_layout_error_of_composition_string", true);
pref("javascript.options.mem.gc_per_zone", true);
pref("layout.accessiblecaret.enabled_on_touch", false);
pref("layout.css.shape-outside.enabled", false);
pref("mathml.disabled", false);
pref("media.block-autoplay-until-in-foreground", false);
pref("media.flac.enabled", true);
pref("media.ogg.flac.enabled", true);
pref("media.ondevicechange.enabled", false);
pref("media.ondevicechange.fakeDeviceChangeEvent.enabled", false);
pref("media.peerconnection.ice.no_host", false);
pref("media.peerconnection.ice.proxy_only", false);
pref("media.peerconnection.video.vp9_enabled", true);
pref("network.proxy.autoconfig_url.include_path", false);
pref("privacy.firstparty.isolate", false);
pref("privacy.usercontext.about_newtab_segregation.enabled", false);
pref("security.block_script_with_wrong_mime", true);
pref("security.mixed_content.send_hsts_priming", true);
pref("security.mixed_content.use_hsts", false);
pref("security.tls.enable_0rtt_data", false);
pref("signon.formlessCapture.enabled", true);
pref("webgl.allow-fb-invalidation", false);

// removed, renamed or hidden in v51.0:
pref("accessibility.typeaheadfind.matchesCountTimeout", 100);
pref("app.update.cert.checkAttributes", false);
pref("dom.mozAlarms.enabled", false);
pref("dom.vr.add-test-devices", 0);
pref("dom.vr.cardboard.enabled", false);
pref("dom.vr.oculus050.enabled", true);
pref("gfx.vr.mirror-textures", false);
pref("image.single-color-optimization.enabled", true);
pref("javascript.options.mem.gc_per_compartment", true);
pref("layers.d3d11.disable-warp", true);
pref("layers.d3d11.force-warp", false);
pref("layout.css.vertical-text.enabled", true);
pref("media.block-play-until-visible", false);
pref("network.http.spdy.enabled.v3-1", false);
pref("signon.ui.experimental", false);

// changed in v51.0:
pref("browser.safebrowsing.provider.google4.updateURL", "https://safebrowsing.googleapis.com/v4/threatListUpdates:fetch?$ct=application/x-protobuf&key=%GOOGLE_API_KEY%"); // prev: "https://safebrowsing.googleapis.com/v4/threatListUpdates:fetch?$req=%REQUEST_BASE64%&$ct=application/x-protobuf&key=%GOOGLE_API_KEY%"
pref("media.decoder.heuristic.dormant.timeout", 10000); // prev: 60000
pref("media.getusermedia.screensharing.allowed_domains", "webex.com,*.webex.com,ciscospark.com,*.ciscospark.com,projectsquared.com,*.projectsquared.com,*.room.co,room.co,beta.talky.io,talky.io,*.clearslide.com,appear.in,*.appear.in,tokbox.com,*.tokbox.com,*.sso.francetelecom.fr,*.si.francetelecom.fr,*.sso.infra.ftgroup,*.multimedia-conference.orange-business.com,*.espacecollaboration.orange-business.com,free.gotomeeting.com,g2m.me,*.g2m.me,*.mypurecloud.com,*.mypurecloud.com.au,spreed.me,*.spreed.me,*.spreed.com,air.mozilla.org,*.circuit.com,*.yourcircuit.com,circuit.siemens.com,yourcircuit.siemens.com,circuitsandbox.net,*.unify.com,tandi.circuitsandbox.net,*.ericsson.net,*.cct.ericsson.net,*.opentok.com,*.conf.meetecho.com,meet.jit.si,*.meet.jit.si,web.stage.speakeasyapp.net,web.speakeasyapp.net,*.hipchat.me,*.beta-wspbx.com,*.wspbx.com,*.unifiedcloudit.com,*.smartboxuc.com,*.smartbox-uc.com,*.panterranetworks.com,pexipdemo.com,*.pexipdemo.com,pex.me,*.pex.me,*.rd.pexip.com,1click.io,*.1click.io,*.fuze.com,*.fuzemeeting.com,*.thinkingphones.com,gotomeeting.com,*.gotomeeting.com,gotowebinar.com,*.gotowebinar.com,gototraining.com,*.gototraining.com,citrix.com,*.citrix.com,expertcity.com,*.expertcity.com,citrixonline.com,*.citrixonline.com,g2m.me,*.g2m.me,gotomeet.me,*.gotomeet.me,gotomeet.at,*.gotomeet.at,miriadaxdes.miriadax.net,certificacion.miriadax.net,miriadax.net,*.wire.com,sylaps.com,*.sylaps.com,bluejeans.com,*.bluejeans.com,*.a.bluejeans.com,*.bbcollab.com"); // prev: "webex.com,*.webex.com,ciscospark.com,*.ciscospark.com,projectsquared.com,*.projectsquared.com,*.room.co,room.co,beta.talky.io,talky.io,*.clearslide.com,appear.in,*.appear.in,tokbox.com,*.tokbox.com,*.sso.francetelecom.fr,*.si.francetelecom.fr,*.sso.infra.ftgroup,*.multimedia-conference.orange-business.com,*.espacecollaboration.orange-business.com,free.gotomeeting.com,g2m.me,*.g2m.me,*.mypurecloud.com,*.mypurecloud.com.au,spreed.me,*.spreed.me,*.spreed.com,air.mozilla.org,*.circuit.com,*.yourcircuit.com,circuit.siemens.com,yourcircuit.siemens.com,circuitsandbox.net,*.unify.com,tandi.circuitsandbox.net,*.ericsson.net,*.cct.ericsson.net,*.opentok.com,*.conf.meetecho.com,meet.jit.si,*.meet.jit.si,web.stage.speakeasyapp.net,web.speakeasyapp.net,*.hipchat.me,*.beta-wspbx.com,*.wspbx.com,*.unifiedcloudit.com,*.smartboxuc.com,*.smartbox-uc.com,*.panterranetworks.com,pexipdemo.com,*.pexipdemo.com,pex.me,*.pex.me,*.rd.pexip.com,1click.io,*.1click.io,*.fuze.com,*.fuzemeeting.com,*.thinkingphones.com,gotomeeting.com,*.gotomeeting.com,gotowebinar.com,*.gotowebinar.com,gototraining.com,*.gototraining.com,citrix.com,*.citrix.com,expertcity.com,*.expertcity.com,citrixonline.com,*.citrixonline.com,g2m.me,*.g2m.me,gotomeet.me,*.gotomeet.me,gotomeet.at,*.gotomeet.at,miriadaxdes.miriadax.net,certificacion.miriadax.net,miriadax.net,*.wire.com,sylaps.com,*.sylaps.com,bluejeans.com,*.bluejeans.com,*.a.bluejeans.com"
pref("media.wmf.disable-d3d11-for-dlls", "igd10iumd32.dll: 20.19.15.4444, 20.19.15.4424, 20.19.15.4409, 20.19.15.4390, 20.19.15.4380, 20.19.15.4360, 10.18.10.4358, 20.19.15.4331, 20.19.15.4312, 20.19.15.4300, 10.18.15.4281, 10.18.15.4279, 10.18.10.4276, 10.18.15.4268, 10.18.15.4256, 10.18.10.4252, 10.18.15.4248, 10.18.14.4112, 10.18.10.3958, 10.18.10.3496, 10.18.10.3431, 10.18.10.3412, 10.18.10.3355, 9.18.10.3234, 9.18.10.3071, 9.18.10.3055, 9.18.10.3006; igd10umd32.dll: 9.17.10.4229, 9.17.10.3040, 9.17.10.2857, 8.15.10.2274, 8.15.10.2272, 8.15.10.2246, 8.15.10.1840, 8.15.10.1808; igd10umd64.dll: 9.17.10.4229, 9.17.10.2857, 10.18.10.3496; isonyvideoprocessor.dll: 4.1.2247.8090, 4.1.2153.6200; tosqep.dll: 1.2.15.526, 1.1.12.201, 1.0.11.318, 1.0.11.215, 1.0.10.1224; tosqep64.dll: 1.1.12.201, 1.0.11.215; nvwgf2um.dll: 10.18.13.6510, 10.18.13.5891, 10.18.13.5887, 10.18.13.5582, 10.18.13.5382, 9.18.13.4195, 9.18.13.3165; atidxx32.dll: 21.19.151.3, 21.19.137.1, 21.19.134.1, 20.19.0.32837, 20.19.0.32832, 8.17.10.682, 8.17.10.671, 8.17.10.661, 8.17.10.648, 8.17.10.644, 8.17.10.625, 8.17.10.605, 8.17.10.581, 8.17.10.569, 8.17.10.560, 8.17.10.545, 8.17.10.539, 8.17.10.531, 8.17.10.525, 8.17.10.520, 8.17.10.519, 8.17.10.514, 8.17.10.511, 8.17.10.494, 8.17.10.489, 8.17.10.483, 8.17.10.453, 8.17.10.451, 8.17.10.441, 8.17.10.436, 8.17.10.432, 8.17.10.425, 8.17.10.418, 8.17.10.414, 8.17.10.401, 8.17.10.395, 8.17.10.385, 8.17.10.378, 8.17.10.362, 8.17.10.355, 8.17.10.342, 8.17.10.331, 8.17.10.318, 8.17.10.310, 8.17.10.286, 8.17.10.269, 8.17.10.261, 8.17.10.247, 8.17.10.240, 8.15.10.212; atidxx64.dll: 21.19.151.3, 21.19.137.1, 21.19.134.1, 20.19.0.32832, 8.17.10.682, 8.17.10.661, 8.17.10.644, 8.17.10.625; nvumdshim.dll: 10.18.13.6822"); // prev: "igd10iumd32.dll: 20.19.15.4444, 20.19.15.4424, 20.19.15.4409, 20.19.15.4390, 20.19.15.4380, 20.19.15.4360, 10.18.10.4358, 20.19.15.4331, 20.19.15.4312, 20.19.15.4300, 10.18.15.4281, 10.18.15.4279, 10.18.10.4276, 10.18.15.4268, 10.18.15.4256, 10.18.10.4252, 10.18.15.4248, 10.18.14.4112, 10.18.10.3958, 10.18.10.3496, 10.18.10.3431, 10.18.10.3412, 10.18.10.3355, 9.18.10.3234, 9.18.10.3071, 9.18.10.3055, 9.18.10.3006; igd10umd32.dll: 9.17.10.4229, 9.17.10.3040, 9.17.10.2857, 8.15.10.2274, 8.15.10.2272, 8.15.10.2246, 8.15.10.1840, 8.15.10.1808; igd10umd64.dll: 9.17.10.4229, 10.18.10.3496; isonyvideoprocessor.dll: 4.1.2247.8090, 4.1.2153.6200; tosqep.dll: 1.2.15.526, 1.1.12.201, 1.0.11.318, 1.0.11.215, 1.0.10.1224; tosqep64.dll: 1.1.12.201, 1.0.11.215; nvwgf2um.dll: 10.18.13.6510, 10.18.13.5891, 10.18.13.5887, 10.18.13.5582, 10.18.13.5382, 9.18.13.4195, 9.18.13.3165; atidxx32.dll: 21.19.151.3, 21.19.137.1, 21.19.134.1, 20.19.0.32837, 20.19.0.32832, 8.17.10.682, 8.17.10.671, 8.17.10.661, 8.17.10.648, 8.17.10.644, 8.17.10.625, 8.17.10.605, 8.17.10.581, 8.17.10.569, 8.17.10.560, 8.17.10.545, 8.17.10.539, 8.17.10.531, 8.17.10.525, 8.17.10.520, 8.17.10.519, 8.17.10.514, 8.17.10.511, 8.17.10.494, 8.17.10.489, 8.17.10.483, 8.17.10.453, 8.17.10.451, 8.17.10.441, 8.17.10.436, 8.17.10.432, 8.17.10.425, 8.17.10.418, 8.17.10.414, 8.17.10.401, 8.17.10.395, 8.17.10.385, 8.17.10.378, 8.17.10.362, 8.17.10.355, 8.17.10.342, 8.17.10.331, 8.17.10.318, 8.17.10.310, 8.17.10.286, 8.17.10.269, 8.17.10.261, 8.17.10.247, 8.17.10.240, 8.15.10.212; atidxx64.dll: 21.19.151.3, 21.19.137.1, 21.19.134.1, 20.19.0.32832, 8.17.10.682, 8.17.10.661, 8.17.10.644, 8.17.10.625; nvumdshim.dll: 10.18.13.6822"
pref("memory.low_commit_space_threshold_mb", 256); // prev: 128
pref("memory.low_virtual_memory_threshold_mb", 256); // prev: 128
pref("network.IDN.blacklist_chars", "\u0020\u00A0\u00BC\u00BD\u00BE\u01C3\u02D0\u0337\u0338\u0589\u058A\u05C3\u05F4\u0609\u060A\u066A\u06D4\u0701\u0702\u0703\u0704\u115F\u1160\u1735\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u200B\u200E\u200F\u2010\u2019\u2024\u2027\u2028\u2029\u202A\u202B\u202C\u202D\u202E\u202F\u2039\u203A\u2041\u2044\u2052\u205F\u2153\u2154\u2155\u2156\u2157\u2158\u2159\u215A\u215B\u215C\u215D\u215E\u215F\u2215\u2236\u23AE\u2571\u29F6\u29F8\u2AFB\u2AFD\u2FF0\u2FF1\u2FF2\u2FF3\u2FF4\u2FF5\u2FF6\u2FF7\u2FF8\u2FF9\u2FFA\u2FFB\u3000\u3002\u3014\u3015\u3033\u30A0\u3164\u321D\u321E\u33AE\u33AF\u33C6\u33DF\uA789\uFE14\uFE15\uFE3F\uFE5D\uFE5E\uFEFF\uFF0E\uFF0F\uFF61\uFFA0\uFFF9\uFFFA\uFFFB\uFFFC\uFFFD"); // prev: "\u0020\u00A0\u00BC\u00BD\u00BE\u01C3\u02D0\u0337\u0338\u0589\u05C3\u05F4\u0609\u060A\u066A\u06D4\u0701\u0702\u0703\u0704\u115F\u1160\u1735\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u200B\u200E\u200F\u2024\u2027\u2028\u2029\u202A\u202B\u202C\u202D\u202E\u202F\u2039\u203A\u2041\u2044\u2052\u205F\u2153\u2154\u2155\u2156\u2157\u2158\u2159\u215A\u215B\u215C\u215D\u215E\u215F\u2215\u2236\u23AE\u2571\u29F6\u29F8\u2AFB\u2AFD\u2FF0\u2FF1\u2FF2\u2FF3\u2FF4\u2FF5\u2FF6\u2FF7\u2FF8\u2FF9\u2FFA\u2FFB\u3000\u3002\u3014\u3015\u3033\u3164\u321D\u321E\u33AE\u33AF\u33C6\u33DF\uA789\uFE14\uFE15\uFE3F\uFE5D\uFE5E\uFEFF\uFF0E\uFF0F\uFF61\uFFA0\uFFF9\uFFFA\uFFFB\uFFFC\uFFFD"
pref("security.insecure_password.ui.enabled", true); // prev: false
pref("security.pki.sha1_enforcement_level", 4); // prev: 3
pref("signon.rememberSignons.visibilityToggle", true); // prev: false
pref("webgl.dxgl.enabled", true); // prev: false
pref("webgl.enable-webgl2", true); // prev: false
