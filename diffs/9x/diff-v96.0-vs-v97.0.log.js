/******************************************************************************************
 * diffs between FF prefs v96.0 and v97.0
 *
 * prefs: 4457
 *        4371 matching prefs
 *          86 diffs ( 54 new, 14 gone, 18 different )
 ******************************************************************************************/
// new in v97.0:
pref("browser.newtabpage.activity-stream.discoverystream.compactGrid.enabled", false);
pref("browser.newtabpage.activity-stream.discoverystream.compactImages.enabled", false);
pref("browser.newtabpage.activity-stream.discoverystream.descLines", 3);
pref("browser.newtabpage.activity-stream.discoverystream.editorsPicksHeader.enabled", false);
pref("browser.newtabpage.activity-stream.discoverystream.essentialReadsHeader.enabled", false);
pref("browser.newtabpage.activity-stream.discoverystream.hideDescriptions.enabled", false);
pref("browser.newtabpage.activity-stream.discoverystream.imageGradient.enabled", false);
pref("browser.newtabpage.activity-stream.discoverystream.newSponsoredLabel.enabled", false);
pref("browser.newtabpage.activity-stream.discoverystream.readTime.enabled", false);
pref("browser.newtabpage.activity-stream.discoverystream.titleLines", 3);
pref("browser.shell.setDefaultPDFHandler", false);
pref("browser.urlbar.quicksuggest.allowPositionInSuggestions", true);
pref("browser.urlbar.suggest.remotetab", true);
pref("browser.vpn_promo.disallowed_regions", "ae,by,cn,cu,iq,ir,kp,om,ru,sd,sy,tm,tr,ua");
pref("browser.vpn_promo.enabled", true);
pref("devtools.netmonitor.features.newEditAndResend", false);
pref("dom.screenorientation.allow-lock", false);
pref("dom.securecontext.allowlist_onions", false);
pref("dom.svg.pathSeg.enabled", false);
pref("dom.webmidi.gated", true);
pref("editor.background_color", "#FFFFFF");
pref("extensions.pocket.refresh.emailButton.enabled", false);
pref("extensions.pocket.refresh.layout.enabled", false);
pref("gfx.webrender.dcomp-video-overlay-win", false);
pref("intl.hyphenation-alias.as", "bn");
pref("intl.hyphenation-alias.as-*", "bn");
pref("intl.hyphenation-alias.bn-*", "bn");
pref("intl.hyphenation-alias.gu-*", "gu");
pref("intl.hyphenation-alias.hi-*", "hi");
pref("intl.hyphenation-alias.kn-*", "kn");
pref("intl.hyphenation-alias.ml-*", "ml");
pref("intl.hyphenation-alias.mr", "hi");
pref("intl.hyphenation-alias.mr-*", "hi");
pref("intl.hyphenation-alias.or-*", "or");
pref("intl.hyphenation-alias.pa-*", "pa");
pref("intl.hyphenation-alias.ta-*", "ta");
pref("intl.hyphenation-alias.te-*", "te");
pref("layout.css.hyphenate-character.enabled", false);
pref("layout.css.named-pages.enabled", false);
pref("layout.oopif_activity_grace_period_ms", 1000);
pref("layout.throttled_frame_rate", 1);
pref("layout.visibility.min-recompute-interval-ms", 1000);
pref("media.audio.playbackrate.muting_threshold", 8);
pref("media.audio.playbackrate.soundtouch_overlap_ms", 8);
pref("media.audio.playbackrate.soundtouch_seekwindow_ms", 15);
pref("media.audio.playbackrate.soundtouch_sequence_ms", 10);
pref("media.videocontrols.picture-in-picture.video-toggle.visibility-threshold", "0.9");
pref("media.webrtc.software_encoder.fallback", true);
pref("network.auth.choose_most_secure_challenge", true);
pref("network.proxy.allow_bypass", true);
pref("print.cups.enum_dests_timeout_ms", 150);
pref("print.show_page_setup_menu", false);
pref("widget.disable-swipe-tracker", true);
pref("widget.non-native-theme.win11.scrollbar.force-overlay-style", false);

// removed, renamed or hidden in v97.0:
pref("browser.proton.enabled", true);
pref("browser.search.update.interval", 21600);
pref("browser.search.update.log", false);
pref("devtools.debugger.tabsBlackBoxed", "[]");
pref("dom.ipc.plugins.sandbox-level.default", 0);
pref("dom.ipc.plugins.sandbox-level.flash", 3);
pref("dom.quotaManager.temporaryStorage.chunkSize", 10240);
pref("dom.securecontext.whitelist_onions", false);
pref("fission.openNonFissionWindowOption", false);
pref("layers.acceleration.draw-fps", false);
pref("layout.css.touch_action.enabled", true);
pref("media.videocontrols.picture-in-picture.allow-multiple", true);
pref("print.tab_modal.enabled", true);
pref("privacy.antitracking.cacheStorageAllowedForWindow", true);

// changed in v97.0:
pref("app.update.url.manual", "https://www.mozilla.org/%LOCALE%/firefox/new?reason=manual-update"); // prev: "https://www.mozilla.org/%LOCALE%/firefox/"
pref("browser.startup.upgradeDialog.enabled", false); // prev: true
pref("devtools.every-frame-target.enabled", true); // prev: false
pref("devtools.webconsole.input.context", true); // prev: false
pref("dom.vr.enabled", false); // prev: true
pref("dom.w3c_pointer_events.dispatch_by_pointer_messages", true); // prev: false
pref("editor.hr_element.allow_to_delete_from_following_line", true); // prev: false
pref("fission.autostart", true); // prev: false
pref("fission.autostart.session", true); // prev: false
pref("layout.css.cascade-layers.enabled", true); // prev: false
pref("layout.css.d-property.enabled", true); // prev: false
pref("layout.css.scrollbar-gutter.enabled", true); // prev: false
pref("media.webrtc.platformencoder", true); // prev: false
pref("network.cookie.sameSite.laxByDefault", false); // prev: true
pref("network.cookie.sameSite.noneRequiresSecure", false); // prev: true
pref("network.cookie.sameSite.schemeful", false); // prev: true
pref("network.url.max-length", 33554432); // prev: 0
pref("ui.key.textcontrol.prefer_native_key_bindings_over_builtin_shortcut_key_definitions", true); // prev: false
