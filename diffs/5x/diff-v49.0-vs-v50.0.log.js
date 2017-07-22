/******************************************************************************************
 * diffs between FF prefs v49.0 and v50.0
 *
 * prefs: 2765
 *        2653 matching prefs
 *         112 diffs ( 57 new, 27 gone, 28 different )
 ******************************************************************************************/
// new in v50.0:
pref("apz.fling_accel_min_velocity", "1.5");
pref("browser.download.forbid_open_with", false);
pref("browser.safebrowsing.phishing.enabled", true);
pref("browser.safebrowsing.provider.google4.gethashURL", "https://safebrowsing.googleapis.com/v4/fullHashes:find?$req=%REQUEST_BASE64%&$ct=application/x-protobuf&key=%GOOGLE_API_KEY%");
pref("browser.safebrowsing.provider.google4.lists", "goog-phish-proto,googpub-phish-proto,goog-malware-proto,goog-unwanted-proto");
pref("browser.safebrowsing.provider.google4.pver", "4");
pref("browser.safebrowsing.provider.google4.reportURL", "https://safebrowsing.google.com/safebrowsing/diagnostic?client=%NAME%&hl=%LOCALE%&site=");
pref("browser.safebrowsing.provider.google4.updateURL", "https://safebrowsing.googleapis.com/v4/threatListUpdates:fetch?$req=%REQUEST_BASE64%&$ct=application/x-protobuf&key=%GOOGLE_API_KEY%");
pref("browser.safebrowsing.provider.mozilla.lists.base.description", "mozstdDesc");
pref("browser.safebrowsing.provider.mozilla.lists.base.name", "mozstdName");
pref("browser.safebrowsing.provider.mozilla.lists.content.description", "mozfullDesc");
pref("browser.safebrowsing.provider.mozilla.lists.content.name", "mozfullName");
pref("devtools.hud.loglimit", 1000);
pref("devtools.sourcemap.locations.enabled", false);
pref("dom.gamepad.test.enabled", false);
pref("dom.input.dirpicker", false);
pref("dom.ipc.cpows.allow-cpows-in-compat-addons", "{b9db16a4-6edc-47ec-a1f4-b86292ed211d},firegestures@xuldev.org,{DDC359D1-844A-42a7-9AA1-88A850A938A8},privateTab@infocatcher,mousegesturessuite@lemon_juice.addons.mozilla.org,treestyletab@piro.sakura.ne.jp,cliqz@cliqz.com,{AE93811A-5C9A-4d34-8462-F7B864FC4696},contextsearch2@lwz.addons.mozilla.org,{EF522540-89F5-46b9-B6FE-1829E2B572C6},{677a8f98-fd64-40b0-a883-b8c95d0cbf17},images@wink.su,fx-devtools,toolkit/require,url_advisor@kaspersky.com,{d10d0bf8-f5b5-c8b4-a8b2-2b9879e08c5d},{dc572301-7619-498c-a57d-39143191b318},dta@downthemall.net,{86095750-AD15-46d8-BF32-C0789F7E6A32},screenwise-prod@google.com,{91aa5abe-9de4-4347-b7b5-322c38dd9271},secureLogin@blueimp.net,ich@maltegoetz.de,come.back.block.image.from@cat-in-136.blogspot.com,{7b1bf0b6-a1b9-42b0-b75d-252036438bdc},s3crypto@data,{1e0fd655-5aea-4b4c-a583-f76ef1e3af9c},akahuku.fx.sp@toshiakisp.github.io,{aff87fa2-a58e-4edd-b852-0a20203c1e17},{1018e4d6-728f-4b20-ad56-37578a4de76b},rehostimage@engy.us,lazarus@interclue.com,{b2e69492-2358-071a-7056-24ad0c3defb1},flashstopper@byo.co.il,{e4a8a97b-f2ed-450b-b12d-ee082ba24781},jid1-f3mYMbCpz2AZYl@jetpack,{8c550e28-88c9-4764-bb52-aa489cf2efcd},{37fa1426-b82d-11db-8314-0800200c9a66},{ac2cfa60-bc96-11e0-962b-0800200c9a66},igetter@presenta.net,killspinners@byo.co.il,abhere2@moztw.org,{fc6339b8-9581-4fc7-b824-dffcb091fcb7},wampi@wink.su,backtrack@byalexv.co.uk,Gladiator_X@mail.ru,{73a6fe31-595d-460b-a920-fcc0f8843232},{46551EC9-40F0-4e47-8E18-8E5CF550CFB8},acewebextension_unlisted@acestream.org,@screen_maker,yasearch@yandex.ru,sp@avast.com,s3google@translator,igetterextension@presenta.net,{C1A2A613-35F1-4FCF-B27F-2840527B6556},screenwise-testing@google.com,helper-sig@savefrom.net,browser-loader,ImageSaver@Merci.chao,proxtube@abz.agency,wrc@avast.com,{9AA46F4F-4DC7-4c06-97AF-5035170634FE},jid1-CikLKKPVkw6ipw@jetpack,artur.dubovoy@gmail.com,nlgfeb@nlgfeb.ext,{A065A84F-95B6-433A-A0C8-4C040B77CE8A},fdm_ffext@freedownloadmanager.org");
pref("dom.ipc.cpows.forbid-cpows-in-compat-addons", true);
pref("dom.manifest.oninstall", false);
pref("dom.presentation.discovery.legacy.enabled", false);
pref("dom.push.maxRecentMessageIDsPerSubscription", 10);
pref("dom.webcomponents.customelements.enabled", false);
pref("dom.webkitBlink.dirPicker.enabled", true);
pref("dom.webkitBlink.filesystem.enabled", true);
pref("findbar.entireword", false);
pref("findbar.highlightAll", false);
pref("findbar.modalHighlight", false);
pref("font.name.cursive.zh-HK", "DFKai-SB");
pref("font.name.cursive.zh-TW", "DFKai-SB");
pref("font.name-list.cursive.zh-CN", "KaiTi, KaiTi_GB2312");
pref("gfx.ycbcr.accurate-conversion", false);
pref("intl.ime.remove_placeholder_character_at_commit", false);
pref("javascript.options.wasm_baselinejit", false);
pref("layers.shared-buffer-provider.enabled", false);
pref("layout.css.initial-letter.enabled", false);
pref("media.format-reader.ogg", true);
pref("media.navigator.audio.use_fec", true);
pref("media.navigator.video.red_ulpfec_enabled", false);
pref("places.frecency.reloadVisitBonus", 0);
pref("plugins.navigator_hide_disabled_flash", false);
pref("pointer-lock-api.prefixed.enabled", false);
pref("pointer-lock-api.warning.timeout", 3000);
pref("privacy.userContext.ui.enabled", false);
pref("security.family_safety.mode", 2);
pref("security.sandbox.content.level", 1);
pref("security.sandbox.content.tempDirSuffix", "");
pref("security.xcto_nosniff_block_images", false);
pref("services.sync.prefs.sync.browser.ctrlTab.previews", true);
pref("services.sync.prefs.sync.browser.download.useDownloadDir", true);
pref("services.sync.prefs.sync.browser.safebrowsing.phishing.enabled", true);
pref("services.sync.sendTabToDevice.enabled", false);
pref("services.sync.telemetry.maxPayloadCount", 500);
pref("services.sync.telemetry.submissionInterval", 43200);
pref("webchannel.allowObject.urlWhitelist", "https://accounts.firefox.com https://content.cdn.mozilla.net https://input.mozilla.org https://support.mozilla.org https://install.mozilla.org");
pref("webextensions.webRequest.requestBodyMaxRawBytes", 16777216);
pref("webgl.disable-wgl", false);
pref("webgl.enable-webgl2", false);

// removed, renamed or hidden in v50.0:
pref("browser.addon-watch.percentage-limit", 5);
pref("browser.safebrowsing.enabled", true);
pref("browser.safebrowsing.forbiddenURIs.enabled", false);
pref("browser.safebrowsing.provider.mozilla.lists.mozfull.description", "mozfullDesc");
pref("browser.safebrowsing.provider.mozilla.lists.mozfull.name", "mozfullName");
pref("browser.safebrowsing.provider.mozilla.lists.mozstd.description", "mozstdDesc");
pref("browser.safebrowsing.provider.mozilla.lists.mozstd.name", "mozstdName");
pref("browser.usedOnWindows10", false);
pref("browser.usedOnWindows10.introURL", "https://www.mozilla.org/%LOCALE%/firefox/windows-10/welcome/?utm_source=firefox-browser&utm_medium=firefox-browser");
pref("devtools.command-button-eyedropper.enabled", false);
pref("dom.mozKillSwitch.enabled", false);
pref("dom.workers.maxPerDomain", 50);
pref("gfx.filter.nearest.force-enabled", false);
pref("javascript.options.mem.gc_decommit_threshold_mb", 32);
pref("layers.compositor-lru-size", 0);
pref("layers.tiled-drawtarget.enabled", false);
pref("media.webvtt.enabled", true);
pref("plugins.update.notifyUser", false);
pref("plugins.update.url", "https://www.mozilla.org/%LOCALE%/plugincheck/?utm_source=firefox-browser&utm_medium=firefox-browser&utm_campaign=plugincheck-update");
pref("security.ssl3.ecdhe_ecdsa_rc4_128_sha", true);
pref("security.ssl3.ecdhe_rsa_rc4_128_sha", true);
pref("security.ssl3.rsa_rc4_128_md5", true);
pref("security.ssl3.rsa_rc4_128_sha", true);
pref("services.sync.addons.ignoreRepositoryChecking", false);
pref("services.sync.prefs.sync.browser.safebrowsing.enabled", true);
pref("urlclassifier.forbiddenTable", "test-forbid-simple");
pref("webgl.enable-prototype-webgl2", false);

// changed in v50.0:
pref("accessibility.typeaheadfind.matchesCountLimit", 1000); // prev: 100
pref("accessibility.typeaheadfind.matchesCountTimeout", 100); // prev: 250
pref("app.update.download.backgroundInterval", 0); // prev: 60
pref("apz.content_response_timeout", 400); // prev: 300
pref("browser.safebrowsing.provider.google.lists", "goog-badbinurl-shavar,goog-downloadwhite-digest256,goog-phish-shavar,googpub-phish-shavar,goog-malware-shavar,goog-unwanted-shavar"); // prev: "goog-badbinurl-shavar,goog-downloadwhite-digest256,goog-phish-shavar,goog-malware-shavar,goog-unwanted-shavar"
pref("browser.safebrowsing.provider.mozilla.lists", "base-track-digest256,mozstd-trackwhite-digest256,content-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256"); // prev: "mozstd-track-digest256,mozstd-trackwhite-digest256,mozfull-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256"
pref("devtools.memory.enabled", true); // prev: false
pref("devtools.toolbox.toolbarSpec", '["splitconsole", "paintflashing toggle","scratchpad","resize toggle","screenshot --fullpage", "rulers", "measure"]'); // prev: '["splitconsole", "paintflashing toggle","scratchpad","resize toggle","eyedropper","screenshot --fullpage", "rulers", "measure"]'
pref("dom.mapped_arraybuffer.enabled", true); // prev: false
pref("dom.push.loglevel", "error"); // prev: "off"
pref("font.name-list.serif.x-math", "Latin Modern Math, XITS Math, Cambria Math, Libertinus Math, DejaVu Math TeX Gyre, TeX Gyre Bonum Math, TeX Gyre Pagella Math, TeX Gyre Schola, TeX Gyre Termes Math, STIX Math, Asana Math, STIXGeneral, DejaVu Serif, DejaVu Sans, Symbol, Times New Roman"); // prev: "Latin Modern Math, XITS Math, Cambria Math, TeX Gyre Bonum Math, TeX Gyre Pagella Math, TeX Gyre Schola, TeX Gyre Termes Math, STIX Math, Asana Math, STIXGeneral, DejaVu Serif, DejaVu Sans, Symbol, Times New Roman"
pref("layers.allow-d3d9-fallback", false); // prev: true
pref("media.decoder-doctor.notifications-allowed", "MediaWMFNeeded,MediaWidevineNoWMFNoSilverlight,MediaUnsupportedLibavcodec"); // prev: "MediaWMFNeeded,MediaWidevineNoWMFNoSilverlight"
pref("media.getusermedia.screensharing.allowed_domains", "webex.com,*.webex.com,ciscospark.com,*.ciscospark.com,projectsquared.com,*.projectsquared.com,*.room.co,room.co,beta.talky.io,talky.io,*.clearslide.com,appear.in,*.appear.in,tokbox.com,*.tokbox.com,*.sso.francetelecom.fr,*.si.francetelecom.fr,*.sso.infra.ftgroup,*.multimedia-conference.orange-business.com,*.espacecollaboration.orange-business.com,free.gotomeeting.com,g2m.me,*.g2m.me,*.mypurecloud.com,*.mypurecloud.com.au,spreed.me,*.spreed.me,*.spreed.com,air.mozilla.org,*.circuit.com,*.yourcircuit.com,circuit.siemens.com,yourcircuit.siemens.com,circuitsandbox.net,*.unify.com,tandi.circuitsandbox.net,*.ericsson.net,*.cct.ericsson.net,*.opentok.com,*.conf.meetecho.com,meet.jit.si,*.meet.jit.si,web.stage.speakeasyapp.net,web.speakeasyapp.net,*.hipchat.me,*.beta-wspbx.com,*.wspbx.com,*.unifiedcloudit.com,*.smartboxuc.com,*.smartbox-uc.com,*.panterranetworks.com,pexipdemo.com,*.pexipdemo.com,pex.me,*.pex.me,*.rd.pexip.com,1click.io,*.1click.io,*.fuze.com,*.fuzemeeting.com,*.thinkingphones.com,gotomeeting.com,*.gotomeeting.com,gotowebinar.com,*.gotowebinar.com,gototraining.com,*.gototraining.com,citrix.com,*.citrix.com,expertcity.com,*.expertcity.com,citrixonline.com,*.citrixonline.com,g2m.me,*.g2m.me,gotomeet.me,*.gotomeet.me,gotomeet.at,*.gotomeet.at,miriadaxdes.miriadax.net,certificacion.miriadax.net,miriadax.net,*.wire.com,sylaps.com,*.sylaps.com,bluejeans.com,*.bluejeans.com,*.a.bluejeans.com"); // prev: "webex.com,*.webex.com,ciscospark.com,*.ciscospark.com,projectsquared.com,*.projectsquared.com,*.room.co,room.co,beta.talky.io,talky.io,*.clearslide.com,appear.in,*.appear.in,tokbox.com,*.tokbox.com,*.sso.francetelecom.fr,*.si.francetelecom.fr,*.sso.infra.ftgroup,*.multimedia-conference.orange-business.com,*.espacecollaboration.orange-business.com,free.gotomeeting.com,g2m.me,*.g2m.me,*.mypurecloud.com,*.mypurecloud.com.au,spreed.me,*.spreed.me,*.spreed.com,air.mozilla.org,*.circuit.com,*.yourcircuit.com,circuit.siemens.com,yourcircuit.siemens.com,circuitsandbox.net,*.unify.com,tandi.circuitsandbox.net,*.ericsson.net,*.cct.ericsson.net,*.opentok.com,*.conf.meetecho.com,meet.jit.si,*.meet.jit.si,web.stage.speakeasyapp.net,web.speakeasyapp.net,*.hipchat.me,*.beta-wspbx.com,*.wspbx.com,*.unifiedcloudit.com,*.smartboxuc.com,*.smartbox-uc.com,*.panterranetworks.com,pexipdemo.com,*.pexipdemo.com,pex.me,*.pex.me,*.rd.pexip.com,1click.io,*.1click.io,*.fuze.com,*.fuzemeeting.com,*.thinkingphones.com,gotomeeting.com,*.gotomeeting.com,gotowebinar.com,*.gotowebinar.com,gototraining.com,*.gototraining.com,citrix.com,*.citrix.com,expertcity.com,*.expertcity.com,citrixonline.com,*.citrixonline.com,g2m.me,*.g2m.me,gotomeet.me,*.gotomeet.me,gotomeet.at,*.gotomeet.at,miriadaxdes.miriadax.net,certificacion.miriadax.net,miriadax.net,*.wire.com,sylaps.com,*.sylaps.com"
pref("media.wmf.disable-d3d11-for-dlls", "igd10iumd32.dll: 20.19.15.4444, 20.19.15.4424, 20.19.15.4409, 20.19.15.4390, 20.19.15.4380, 20.19.15.4360, 10.18.10.4358, 20.19.15.4331, 20.19.15.4312, 20.19.15.4300, 10.18.15.4281, 10.18.15.4279, 10.18.10.4276, 10.18.15.4268, 10.18.15.4256, 10.18.10.4252, 10.18.15.4248, 10.18.14.4112, 10.18.10.3958, 10.18.10.3496, 10.18.10.3431, 10.18.10.3412, 10.18.10.3355, 9.18.10.3234, 9.18.10.3071, 9.18.10.3055, 9.18.10.3006; igd10umd32.dll: 9.17.10.4229, 9.17.10.3040, 9.17.10.2857, 8.15.10.2274, 8.15.10.2272, 8.15.10.2246, 8.15.10.1840, 8.15.10.1808; igd10umd64.dll: 9.17.10.4229, 10.18.10.3496; isonyvideoprocessor.dll: 4.1.2247.8090, 4.1.2153.6200; tosqep.dll: 1.2.15.526, 1.1.12.201, 1.0.11.318, 1.0.11.215, 1.0.10.1224; tosqep64.dll: 1.1.12.201, 1.0.11.215; nvwgf2um.dll: 10.18.13.6510, 10.18.13.5891, 10.18.13.5887, 10.18.13.5582, 10.18.13.5382, 9.18.13.4195, 9.18.13.3165; atidxx32.dll: 21.19.151.3, 21.19.137.1, 21.19.134.1, 20.19.0.32837, 20.19.0.32832, 8.17.10.682, 8.17.10.671, 8.17.10.661, 8.17.10.648, 8.17.10.644, 8.17.10.625, 8.17.10.605, 8.17.10.581, 8.17.10.569, 8.17.10.560, 8.17.10.545, 8.17.10.539, 8.17.10.531, 8.17.10.525, 8.17.10.520, 8.17.10.519, 8.17.10.514, 8.17.10.511, 8.17.10.494, 8.17.10.489, 8.17.10.483, 8.17.10.453, 8.17.10.451, 8.17.10.441, 8.17.10.436, 8.17.10.432, 8.17.10.425, 8.17.10.418, 8.17.10.414, 8.17.10.401, 8.17.10.395, 8.17.10.385, 8.17.10.378, 8.17.10.362, 8.17.10.355, 8.17.10.342, 8.17.10.331, 8.17.10.318, 8.17.10.310, 8.17.10.286, 8.17.10.269, 8.17.10.261, 8.17.10.247, 8.17.10.240, 8.15.10.212; atidxx64.dll: 21.19.151.3, 21.19.137.1, 21.19.134.1, 20.19.0.32832, 8.17.10.682, 8.17.10.661, 8.17.10.644, 8.17.10.625; nvumdshim.dll: 10.18.13.6822"); // prev: "igd10iumd32.dll: 20.19.15.4444, 20.19.15.4424, 20.19.15.4409, 20.19.15.4390, 20.19.15.4380, 20.19.15.4360, 10.18.10.4358, 20.19.15.4331, 20.19.15.4312, 20.19.15.4300, 10.18.15.4281, 10.18.15.4279, 10.18.10.4276, 10.18.15.4268, 10.18.15.4256, 10.18.10.4252, 10.18.15.4248, 10.18.14.4112, 10.18.10.3958, 10.18.10.3496, 10.18.10.3431, 10.18.10.3412, 10.18.10.3355, 9.18.10.3234, 9.18.10.3071, 9.18.10.3055, 9.18.10.3006; igd10umd32.dll: 9.17.10.4229, 9.17.10.3040, 9.17.10.2857, 8.15.10.2274, 8.15.10.2272, 8.15.10.2246, 8.15.10.1840, 8.15.10.1808; igd10umd64.dll: 9.17.10.4229, 10.18.10.3496; isonyvideoprocessor.dll: 4.1.2247.8090, 4.1.2153.6200; tosqep.dll: 1.2.15.526, 1.1.12.201, 1.0.11.318, 1.0.11.215, 1.0.10.1224; tosqep64.dll: 1.1.12.201, 1.0.11.215; nvwgf2um.dll: 10.18.13.6510, 10.18.13.5891, 10.18.13.5887, 10.18.13.5582, 10.18.13.5382, 9.18.13.4195, 9.18.13.3165; atidxx32.dll: 8.17.10.671, 8.17.10.661, 8.17.10.648, 8.17.10.644, 8.17.10.625, 8.17.10.605, 8.17.10.581, 8.17.10.569, 8.17.10.560, 8.17.10.545, 8.17.10.539, 8.17.10.531, 8.17.10.525, 8.17.10.520, 8.17.10.519, 8.17.10.514, 8.17.10.511, 8.17.10.494, 8.17.10.489, 8.17.10.483, 8.17.10.453, 8.17.10.451, 8.17.10.441, 8.17.10.436, 8.17.10.432, 8.17.10.425, 8.17.10.418, 8.17.10.414, 8.17.10.401, 8.17.10.395, 8.17.10.385, 8.17.10.378, 8.17.10.362, 8.17.10.355, 8.17.10.342, 8.17.10.331, 8.17.10.318, 8.17.10.310, 8.17.10.286, 8.17.10.269, 8.17.10.261, 8.17.10.247, 8.17.10.240, 8.15.10.212; atidxx64.dll: 8.17.10.661, 8.17.10.644"
pref("media.wmf.disable-d3d9-for-dlls", "igdumd64.dll: 8.15.10.2189, 8.15.10.2119, 8.15.10.2104, 8.15.10.2102, 8.771.1.0; atiumd64.dll: 7.14.10.833, 7.14.10.867, 7.14.10.885, 7.14.10.903, 7.14.10.911, 8.14.10.768, 9.14.10.1001, 9.14.10.1017, 9.14.10.1080, 9.14.10.1128, 9.14.10.1162, 9.14.10.1171, 9.14.10.1183, 9.14.10.1197, 9.14.10.945, 9.14.10.972, 9.14.10.984, 9.14.10.996"); // prev: "igdumd64.dll: 8.15.10.2189, 8.771.1.0; atiumd64.dll: 7.14.10.833, 7.14.10.867, 7.14.10.885, 7.14.10.903, 7.14.10.911, 8.14.10.768, 9.14.10.1001, 9.14.10.1017, 9.14.10.1080, 9.14.10.1128, 9.14.10.1162, 9.14.10.1171, 9.14.10.1183, 9.14.10.1197, 9.14.10.945, 9.14.10.972, 9.14.10.984, 9.14.10.996"
pref("network.http.enablePerElementReferrer", true); // prev: false
pref("network.http.keep_empty_response_headers_as_empty_string", true); // prev: false
pref("network.http.spdy.enabled.v3-1", false); // prev: true
pref("print.print_via_parent", true); // prev: false
pref("security.onecrl.via.amo", false); // prev: true
pref("security.ssl.errorReporting.url", "https://incoming.telemetry.mozilla.org/submit/sslreports/"); // prev: "https://data.mozilla.com/submit/sslreports"
pref("services.blocklist.signing.enforced", true); // prev: false
pref("services.blocklist.update_enabled", true); // prev: false
pref("services.sync.engine.tabs.filteredUrls", "^(about:.*|chrome://weave/.*|wyciwyg:.*|file:.*|blob:.*)$"); // prev: "^(about:.*|chrome://weave/.*|wyciwyg:.*|file:.*)$"
pref("startup.homepage_welcome_url.additional", ""); // prev: "https://www.mozilla.org/%LOCALE%/firefox/%VERSION%/firstrun/learnmore/"
pref("urlclassifier.disallow_completions", "test-malware-simple,test-phish-simple,test-unwanted-simple,test-track-simple,test-trackwhite-simple,test-block-simple,goog-downloadwhite-digest256,base-track-digest256,mozstd-trackwhite-digest256,content-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256"); // prev: "test-malware-simple,test-phish-simple,test-unwanted-simple,test-track-simple,test-trackwhite-simple,test-forbid-simple,goog-downloadwhite-digest256,mozstd-track-digest256,mozstd-trackwhite-digest256,mozfull-track-digest256,test-block-simple,mozplugin-block-digest256,mozplugin2-block-digest256"
pref("urlclassifier.trackingTable", "test-track-simple,base-track-digest256"); // prev: "test-track-simple,mozstd-track-digest256"

