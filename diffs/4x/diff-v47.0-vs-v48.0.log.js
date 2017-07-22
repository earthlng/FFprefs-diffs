/******************************************************************************************
 * diffs between FF prefs v47.0 and v48.0
 *
 * prefs: 2700
 *        2578 matching prefs
 *         122 diffs ( 54 new, 16 gone, 52 different )
 ******************************************************************************************/
// new in v48.0:
pref("apz.disable_for_scroll_linked_effects", false);
pref("apz.fling_min_velocity_threshold", "0.5");
pref("apz.minimap.visibility.enabled", false);
pref("apz.peek_messages.enabled", true);
pref("browser.newtabpage.remote.content-signing-test", false);
pref("browser.newtabpage.remote.keys", "");
pref("browser.newtabpage.remote.version", "1");
pref("browser.urlbar.daysBeforeHidingSuggestionsPrompt", 4);
pref("browser.urlbar.lastSuggestionsPromptDate", 20160601);
pref("devtools.dom.enabled", false);
pref("devtools.memory.custom-label-displays", "{}");
pref("devtools.memory.custom-tree-map-displays", "{}");
pref("devtools.memory.max-individuals", 1000);
pref("devtools.memory.max-retaining-paths", 10);
pref("dom.animations-api.element-animate.enabled", true);
pref("dom.node.rootNode.enabled", false);
pref("dom.presentation.session_transport.data_channel.enable", false);
pref("extensions.webextensions.base-content-security-policy", "script-src 'self' https://* moz-extension: blob: filesystem: 'unsafe-eval' 'unsafe-inline'; object-src 'self' https://* moz-extension: blob: filesystem:;");
pref("extensions.webextensions.default-content-security-policy", "script-src 'self'; object-src 'self';");
pref("gfx.logging.painted-pixel-count.enabled", false);
pref("javascript.options.mem.gc_refresh_frame_slices_enabled", true);
pref("layers.child-process-shutdown", true);
pref("layout.accessiblecaret.allow_dragging_across_other_caret", true);
pref("layout.accessiblecaret.always_show_when_scrolling", true);
pref("layout.css.background-clip-text.enabled", false);
pref("layout.css.color-adjust.enabled", true);
pref("layout.css.text-combine-upright-digits.enabled", false);
pref("layout.display-list.dump-content", false);
pref("layout.framevisibility.enabled", true);
pref("layout.framevisibility.numscrollportheights", 1);
pref("layout.framevisibility.numscrollportwidths", 0);
pref("media.decoder-doctor.notifications-allowed", "MediaWidevineNoWMFNoSilverlight");
pref("media.decoder-doctor.verbose", false);
pref("media.wmf.disable-d3d9-for-dlls", "igdumd64.dll: 8.15.10.2189, 8.771.1.0; atiumd64.dll: 7.14.10.833, 7.14.10.867, 7.14.10.885, 7.14.10.903, 7.14.10.911, 8.14.10.768, 9.14.10.1001, 9.14.10.1017, 9.14.10.1080, 9.14.10.1128, 9.14.10.1162, 9.14.10.1171, 9.14.10.1183, 9.14.10.1197, 9.14.10.945, 9.14.10.972, 9.14.10.984, 9.14.10.996");
pref("network.notify.IPv6", false);
pref("network.predictor.enable-prefetch", false);
pref("network.predictor.prefetch-force-valid-for", 10);
pref("network.predictor.prefetch-min-confidence", 100);
pref("network.predictor.prefetch-rolling-load-count", 10);
pref("security.content.signature.root_hash", "97:E8:BA:9C:F1:2F:B3:DE:53:CC:42:A4:E6:57:7E:D6:4D:F4:93:C2:47:B4:14:FE:A0:36:81:8D:38:23:56:0E");
pref("security.onecrl.via.amo", true);
pref("security.pki.name_matching_mode", 1);
pref("security.webauth.u2f_enable_softtoken", false);
pref("security.webauth.u2f_enable_usbtoken", false);
pref("services.kinto.addons.checked", 0);
pref("services.kinto.addons.collection", "addons");
pref("services.kinto.changes.path", "/buckets/monitor/collections/changes/records");
pref("services.kinto.gfx.checked", 0);
pref("services.kinto.gfx.collection", "gfx");
pref("services.kinto.plugins.checked", 0);
pref("services.kinto.plugins.collection", "plugins");
pref("services.kinto.update_enabled", false);
pref("toolkit.asyncshutdown.crash_timeout", 60000);
pref("webgl.dxgl.needs-finish", false);

// removed, renamed or hidden in v48.0:
pref("browser.urlbar.unifiedcomplete", true);
pref("devtools.errorconsole.enabled", false);
pref("devtools.memory.custom-dominator-tree-displays", "{}");
pref("dom.document.scrollingElement.enabled", false);
pref("dom.mozContacts.enabled", false);
pref("dom.requestcache.enabled", false);
pref("layers.offmainthreadcomposition.enabled", true);
pref("layout.accessiblecaret.extendedvisibility", false);
pref("layout.css.sticky.enabled", true);
pref("layout.imagevisibility.enabled", true);
pref("layout.imagevisibility.numscrollportheights", 1);
pref("layout.imagevisibility.numscrollportwidths", 0);
pref("security.csp.debug", false);
pref("security.webauth.u2f.softtoken", false);
pref("security.webauth.u2f.usbtoken", false);
pref("toolkit.asyncshutdown.timeout.crash", 60000);

// changed in v48.0:
pref("app.update.url", "https://aus5.mozilla.org/update/6/%PRODUCT%/%VERSION%/%BUILD_ID%/%BUILD_TARGET%/%LOCALE%/%CHANNEL%/%OS_VERSION%/%SYSTEM_CAPABILITIES%/%DISTRIBUTION%/%DISTRIBUTION_VERSION%/update.xml"); // prev: "https://aus5.mozilla.org/update/3/%PRODUCT%/%VERSION%/%BUILD_ID%/%BUILD_TARGET%/%LOCALE%/%CHANNEL%/%OS_VERSION%/%DISTRIBUTION%/%DISTRIBUTION_VERSION%/update.xml"
pref("apz.velocity_bias", "0.0"); // prev: "1.0"
pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", true); // prev: false
pref("browser.safebrowsing.downloads.remote.block_uncommon", true); // prev: false
pref("browser.urlbar.maxRichResults", 10); // prev: 12
pref("devtools.fontinspector.enabled", true); // prev: false
pref("extensions.webservice.discoverURL", "https://discovery.addons.mozilla.org/%LOCALE%/firefox/discovery/pane/%VERSION%/%OS%/%COMPATIBILITY_MODE%"); // prev: "https://services.addons.mozilla.org/%LOCALE%/firefox/discovery/pane/%VERSION%/%OS%/%COMPATIBILITY_MODE%"
pref("font.name.monospace.x-geor", "BPG Classic 99U"); // prev: "Code2000"
pref("font.name.monospace.x-gujr", "Shruti"); // prev: "Code2000"
pref("font.name.monospace.x-guru", "Raavi"); // prev: "Code2000"
pref("font.name.monospace.x-khmr", "Khmer OS"); // prev: "Code2000"
pref("font.name.sans-serif.x-guru", ""); // prev: "Code2000"
pref("font.name.sans-serif.x-tamil", ""); // prev: "Code2000"
pref("font.name-list.monospace.x-armn", "Arial AMU"); // prev: "Arial AMU, Arial Unicode MS, Code2000"
pref("font.name-list.monospace.x-beng", "Likhan, Mukti Narrow"); // prev: "Likhan, Mukti Narrow, Code2000, Arial Unicode MS"
pref("font.name-list.monospace.x-ethi", "Ethiopia Jiret"); // prev: "Ethiopia Jiret, Code2000"
pref("font.name-list.monospace.x-geor", "BPG Classic 99U"); // prev: "BPG Classic 99U, Code2000, Arial Unicode MS"
pref("font.name-list.monospace.x-gujr", "Shruti"); // prev: "Code2000, Shruti, Arial Unicode MS"
pref("font.name-list.monospace.x-guru", "Raavi, Saab"); // prev: "Code2000, Raavi, Saab, Arial Unicode MS"
pref("font.name-list.monospace.x-khmr", "Khmer OS, Khmer OS System"); // prev: "Code2000, Khmer OS, Khmer OS System"
pref("font.name-list.monospace.x-knda", "Tunga, AksharUnicode"); // prev: "Tunga, AksharUnicode, Code2000, Arial Unicode MS"
pref("font.name-list.monospace.x-mlym", "AnjaliOldLipi, Kartika, ThoolikaUnicode"); // prev: "AnjaliOldLipi, Kartika, ThoolikaUnicode, Code2000, Arial Unicode MS"
pref("font.name-list.monospace.x-orya", "Kalinga, ori1Uni"); // prev: "Kalinga, ori1Uni, Code2000, Arial Unicode MS"
pref("font.name-list.monospace.x-tamil", "Latha"); // prev: "Latha, Code2000"
pref("font.name-list.monospace.x-telu", "Gautami, Akshar Unicode"); // prev: "Gautami, Akshar Unicode, Code2000, Arial Unicode MS"
pref("font.name-list.sans-serif.x-beng", "Vrinda, Akaash, Likhan, Ekushey Punarbhaba"); // prev: "Vrinda, Akaash, Likhan, Ekushey Punarbhaba, Code2000, Arial Unicode MS"
pref("font.name-list.sans-serif.x-knda", "Tunga, AksharUnicode"); // prev: "Tunga, AksharUnicode, Code2000, Arial Unicode MS"
pref("font.name-list.sans-serif.x-mlym", "AnjaliOldLipi, Kartika, ThoolikaUnicode"); // prev: "AnjaliOldLipi, Kartika, ThoolikaUnicode, Code2000, Arial Unicode MS"
pref("font.name-list.sans-serif.x-orya", "Kalinga, ori1Uni"); // prev: "Kalinga, ori1Uni, Code2000, Arial Unicode MS"
pref("font.name-list.sans-serif.x-telu", "Gautami, Akshar Unicode"); // prev: "Gautami, Akshar Unicode, Code2000, Arial Unicode MS"
pref("font.name-list.sans-serif.zh-CN", "Microsoft YaHei, SimHei"); // prev: "Microsoft YaHei, SimHei, Arial Unicode MS"
pref("font.name-list.serif.x-armn", "Sylfaen"); // prev: "Sylfaen,Arial Unicode MS, Code2000"
pref("font.name-list.serif.x-beng", "Vrinda, Akaash, Likhan, Ekushey Punarbhaba"); // prev: "Vrinda, Akaash, Likhan, Ekushey Punarbhaba, Code2000, Arial Unicode MS"
pref("font.name-list.serif.x-ethi", "Visual Geez Unicode, Visual Geez Unicode Agazian"); // prev: "Visual Geez Unicode, Visual Geez Unicode Agazian, Code2000"
pref("font.name-list.serif.x-gujr", "Shruti"); // prev: "Shruti, Code2000, Arial Unicode MS"
pref("font.name-list.serif.x-guru", "Raavi, Saab"); // prev: "Raavi, Saab, Code2000, Arial Unicode MS"
pref("font.name-list.serif.x-knda", "Tunga, AksharUnicode"); // prev: "Tunga, AksharUnicode, Code2000, Arial Unicode MS"
pref("font.name-list.serif.x-mlym", "AnjaliOldLipi, Kartika, ThoolikaUnicode"); // prev: "AnjaliOldLipi, Kartika, ThoolikaUnicode, Code2000, Arial Unicode MS"
pref("font.name-list.serif.x-orya", "Kalinga, ori1Uni"); // prev: "Kalinga, ori1Uni, Code2000, Arial Unicode MS"
pref("font.name-list.serif.x-tamil", "Latha"); // prev: "Latha, Code2000"
pref("font.name-list.serif.x-telu", "Gautami, Akshar Unicode"); // prev: "Gautami, Akshar Unicode, Code2000, Arial Unicode MS"
pref("full-screen-api.transition.timeout", 1000); // prev: 500
pref("layers.d3d11.disable-warp", true); // prev: false
pref("layout.accessiblecaret.bar.enabled", false); // prev: true
pref("layout.css.text-combine-upright.enabled", true); // prev: false
pref("media.getusermedia.screensharing.allowed_domains", "webex.com,*.webex.com,ciscospark.com,*.ciscospark.com,projectsquared.com,*.projectsquared.com,*.room.co,room.co,beta.talky.io,talky.io,*.clearslide.com,appear.in,*.appear.in,tokbox.com,*.tokbox.com,*.sso.francetelecom.fr,*.si.francetelecom.fr,*.sso.infra.ftgroup,*.multimedia-conference.orange-business.com,*.espacecollaboration.orange-business.com,free.gotomeeting.com,g2m.me,*.g2m.me,*.mypurecloud.com,*.mypurecloud.com.au,spreed.me,*.spreed.me,*.spreed.com,air.mozilla.org,*.circuit.com,*.yourcircuit.com,circuit.siemens.com,yourcircuit.siemens.com,circuitsandbox.net,*.unify.com,tandi.circuitsandbox.net,*.ericsson.net,*.cct.ericsson.net,*.opentok.com,*.conf.meetecho.com,meet.jit.si,*.meet.jit.si,web.stage.speakeasyapp.net,web.speakeasyapp.net,*.hipchat.me,*.beta-wspbx.com,*.wspbx.com,*.unifiedcloudit.com,*.smartboxuc.com,*.smartbox-uc.com,*.panterranetworks.com,pexipdemo.com,*.pexipdemo.com,pex.me,*.pex.me,*.rd.pexip.com,1click.io,*.1click.io,*.fuze.com,*.fuzemeeting.com,*.thinkingphones.com,gotomeeting.com,*.gotomeeting.com,gotowebinar.com,*.gotowebinar.com,gototraining.com,*.gototraining.com,citrix.com,*.citrix.com,expertcity.com,*.expertcity.com,citrixonline.com,*.citrixonline.com,g2m.me,*.g2m.me,gotomeet.me,*.gotomeet.me,gotomeet.at,*.gotomeet.at,miriadaxdes.miriadax.net,certificacion.miriadax.net,miriadax.net,*.wire.com"); // prev: "webex.com,*.webex.com,ciscospark.com,*.ciscospark.com,projectsquared.com,*.projectsquared.com,*.room.co,room.co,beta.talky.io,talky.io,*.clearslide.com,appear.in,*.appear.in,tokbox.com,*.tokbox.com,*.sso.francetelecom.fr,*.si.francetelecom.fr,*.sso.infra.ftgroup,*.multimedia-conference.orange-business.com,*.espacecollaboration.orange-business.com,free.gotomeeting.com,g2m.me,*.g2m.me,example.com,*.mypurecloud.com,*.mypurecloud.com.au,spreed.me,*.spreed.me,*.spreed.com,air.mozilla.org,*.circuit.com,*.yourcircuit.com,circuit.siemens.com,yourcircuit.siemens.com,circuitsandbox.net,*.unify.com,tandi.circuitsandbox.net,*.ericsson.net,*.cct.ericsson.net,*.opentok.com,*.conf.meetecho.com,meet.jit.si,*.meet.jit.si,web.stage.speakeasyapp.net,web.speakeasyapp.net,*.hipchat.me,*.beta-wspbx.com,*.wspbx.com,*.unifiedcloudit.com,*.smartboxuc.com,*.smartbox-uc.com,*.panterranetworks.com,pexipdemo.com,*.pexipdemo.com,pex.me,*.pex.me,*.rd.pexip.com,1click.io,*.1click.io,*.fuze.com,*.fuzemeeting.com,*.thinkingphones.com,gotomeeting.com,*.gotomeeting.com,gotowebinar.com,*.gotowebinar.com,gototraining.com,*.gototraining.com,citrix.com,*.citrix.com,expertcity.com,*.expertcity.com,citrixonline.com,*.citrixonline.com,g2m.me,*.g2m.me,gotomeet.me,*.gotomeet.me,gotomeet.at,*.gotomeet.at"
pref("media.windows-media-foundation.allow-d3d11-dxva", true); // prev: false
pref("media.wmf.disable-d3d11-for-dlls", "igd10iumd32.dll: 20.19.15.4444, 20.19.15.4424, 20.19.15.4409, 20.19.15.4390, 20.19.15.4380, 20.19.15.4360, 10.18.10.4358, 20.19.15.4331, 20.19.15.4312, 20.19.15.4300, 10.18.15.4281, 10.18.15.4279, 10.18.10.4276, 10.18.15.4268, 10.18.15.4256, 10.18.10.4252, 10.18.15.4248, 10.18.14.4112, 10.18.10.3958, 10.18.10.3496, 10.18.10.3431, 10.18.10.3412, 10.18.10.3355, 9.18.10.3234, 9.18.10.3071, 9.18.10.3055, 9.18.10.3006; igd10umd32.dll: 9.17.10.4229, 9.17.10.3040, 9.17.10.2857, 8.15.10.2274, 8.15.10.2272, 8.15.10.2246, 8.15.10.1840, 8.15.10.1808; igd10umd64.dll: 9.17.10.4229, 10.18.10.3496; isonyvideoprocessor.dll: 4.1.2247.8090, 4.1.2153.6200; tosqep.dll: 1.2.15.526, 1.1.12.201, 1.0.11.318, 1.0.11.215, 1.0.10.1224; tosqep64.dll: 1.1.12.201, 1.0.11.215; nvwgf2um.dll: 10.18.13.6510, 10.18.13.5891, 10.18.13.5887, 10.18.13.5582, 10.18.13.5382, 9.18.13.4195, 9.18.13.3165; atidxx32.dll: 8.17.10.671, 8.17.10.661, 8.17.10.648, 8.17.10.644, 8.17.10.625, 8.17.10.605, 8.17.10.581, 8.17.10.569, 8.17.10.560, 8.17.10.545, 8.17.10.539, 8.17.10.531, 8.17.10.525, 8.17.10.520, 8.17.10.519, 8.17.10.514, 8.17.10.511, 8.17.10.494, 8.17.10.489, 8.17.10.483, 8.17.10.453, 8.17.10.451, 8.17.10.441, 8.17.10.436, 8.17.10.432, 8.17.10.425, 8.17.10.418, 8.17.10.414, 8.17.10.401, 8.17.10.395, 8.17.10.385, 8.17.10.378, 8.17.10.362, 8.17.10.355, 8.17.10.342, 8.17.10.331, 8.17.10.318, 8.17.10.310, 8.17.10.286, 8.17.10.269, 8.17.10.261, 8.17.10.247, 8.17.10.240, 8.15.10.212; atidxx64.dll: 8.17.10.661, 8.17.10.644"); // prev: "igd10iumd32.dll: 20.19.15.4444, 20.19.15.4424, 20.19.15.4409, 20.19.15.4390, 20.19.15.4380, 20.19.15.4360, 10.18.10.4358, 20.19.15.4331, 20.19.15.4312, 20.19.15.4300, 10.18.15.4281, 10.18.15.4279, 10.18.10.4276, 10.18.15.4268, 10.18.15.4256, 10.18.10.4252, 10.18.15.4248, 10.18.14.4112, 10.18.10.3958, 10.18.10.3496, 10.18.10.3431, 10.18.10.3412, 10.18.10.3355, 9.18.10.3234, 9.18.10.3071, 9.18.10.3055, 9.18.10.3006; igd10umd32.dll: 9.17.10.4229, 9.17.10.3040, 9.17.10.2857, 8.15.10.2274, 8.15.10.2272, 8.15.10.2246, 8.15.10.1840, 8.15.10.1808; igd10umd64.dll: 9.17.10.4229, 10.18.10.3496; isonyvideoprocessor.dll: 4.1.2247.8090, 4.1.2153.6200; tosqep.dll: 1.2.15.526, 1.1.12.201, 1.0.11.318, 1.0.11.215, 1.0.10.1224; tosqep64.dll: 1.1.12.201, 1.0.11.215; nvwgf2um.dll: 10.18.13.6510, 10.18.13.5891, 10.18.13.5887, 10.18.13.5582, 10.18.13.5382, 9.18.13.4195, 9.18.13.3165; atidxx32.dll: 8.17.10.671, 8.17.10.661, 8.17.10.648, 8.17.10.644, 8.17.10.625, 8.17.10.605, 8.17.10.539, 8.17.10.531, 8.17.10.525, 8.17.10.519, 8.17.10.511, 8.17.10.511, 8.17.10.453, 8.17.10.451; atidxx64.dll: 8.17.10.661, 8.17.10.644"
pref("network.autodial-helper.enabled", false); // prev: true
pref("network.http.max-connections", 900); // prev: 256
pref("network.http.request.max-attempts", 10); // prev: 6
pref("security.pki.sha1_enforcement_level", 3); // prev: 0

