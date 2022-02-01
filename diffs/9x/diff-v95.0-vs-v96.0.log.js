/******************************************************************************************
 * diffs between FF prefs v95.0 and v96.0
 *
 * prefs: 4425
 *        4329 matching prefs
 *          96 diffs ( 60 new, 22 gone, 14 different )
 ******************************************************************************************/
// new in v96.0:
pref("browser.download.alwaysOpenPanel", true);
pref("browser.snapshots.score.CurrentSession", 1);
pref("browser.snapshots.score.InNavigation", 3);
pref("browser.snapshots.score.IsOverlappingVisit", 3);
pref("browser.snapshots.score.IsUsedRemoved", -10);
pref("browser.snapshots.score.IsUserPersisted", 1);
pref("browser.snapshots.score.Visit", 1);
pref("browser.tabs.remote.serviceWorkerIsolationList", "");
pref("browser.urlbar.merino.clientVariants", "");
pref("browser.urlbar.merino.providers", "");
pref("devtools.debugger.features.blackbox-lines", false);
pref("dom.document.edit_command.contentReadOnly.enabled", true);
pref("dom.document.edit_command.decreasefontsize.enabled", false);
pref("dom.document.edit_command.gethtml.enabled", false);
pref("dom.document.edit_command.heading.enabled", false);
pref("dom.document.edit_command.increasefontsize.enabled", false);
pref("dom.document.edit_command.insertBrOnReturn.enabled", true);
pref("dom.document.edit_command.readonly.enabled", false);
pref("editor.create_element_transaction.enabled", false);
pref("fission.highValue.login.expiration", 2592000);
pref("fission.highValue.login.monitor", false);
pref("gfx.canvas.accelerated", false);
pref("gfx.canvas.accelerated.cache-items", 1024);
pref("gfx.canvas.accelerated.cache-size", 128);
pref("gfx.canvas.accelerated.max-size", 0);
pref("gfx.canvas.accelerated.max-surface-size", 5280);
pref("gfx.canvas.accelerated.min-size", 128);
pref("gfx.canvas.accelerated.shared-page-size", 1024);
pref("gfx.webrender.batched-upload-threshold", 65536);
pref("gfx.webrender.debug.window-visibility", false);
pref("javascript.options.mem.incremental_weakmap", true);
pref("layout.css.computed-style.dont-resolve-image-local-refs", true);
pref("layout.css.computed-style.shorthands", true);
pref("layout.css.computed-style.styles-outside-flat-tree", true);
pref("layout.css.moz-locale-dir.content.enabled", false);
pref("layout.css.moz-lwtheme.content.enabled", false);
pref("layout.css.scroll-anchoring.reselect-if-suboptimal", true);
pref("layout.css.scrollbar-gutter.enabled", false);
pref("layout.forms.input-type-show-password-button.enabled", false);
pref("layout.outline.include-overflow", false);
pref("media.getusermedia.agc2_forced", true);
pref("media.getusermedia.residual_echo_enabled", false);
pref("media.getusermedia.transient_enabled", true);
pref("midi.testing", false);
pref("network.http.http3.priorization", true);
pref("network.http.http3.send_background_tabs_depriorization", false);
pref("network.proxy.detect_system_proxy_changes", false);
pref("network.trr.async_connInfo", false);
pref("network.trr.temp_blocklist", true);
pref("privacy.partition.serviceWorkers", false);
pref("ui.key.textcontrol.prefer_native_key_bindings_over_builtin_shortcut_key_definitions", false);
pref("ui.-moz-autofill-background", "rgba(255, 249, 145, .5)");
pref("ui.textSelectAttentionBackground", "#38d878");
pref("ui.textSelectAttentionForeground", "#ffffff");
pref("ui.textSelectDisabledBackground", "#b0b0b0");
pref("webgl.out-of-process.worker", true);
pref("webgl.threadsafe-gl.force-disabled", false);
pref("webgl.threadsafe-gl.force-enabled", false);
pref("widget.non-native-theme.scrollbar.size.override", 0);
pref("widget.non-native-theme.scrollbar.style", 0);

// removed, renamed or hidden in v96.0:
pref("app.update.background.scheduling.enabled", false);
pref("devtools.command-button-paintflashing.enabled", false);
pref("devtools.contenttoolbox.webconsole.input.context", false);
pref("devtools.debugger.features.original-blackbox", true);
pref("gfx.webrender.debug.tile-cache-logging", false);
pref("layout.css.autofill.background", true);
pref("layout.css.autofill.enabled", true);
pref("layout.css.moz-submit-invalid.enabled", false);
pref("layout.css.scroll-behavior.enabled", true);
pref("media.getusermedia.aec_extended_filter", true);
pref("media.getusermedia.aecm_output_routing", 3);
pref("media.peerconnection.mute_on_bye_or_timeout", false);
pref("network.trr.blocklist_cleanup_done", false);
pref("nglayout.debug.paint_flashing", false);
pref("nglayout.debug.paint_flashing_chrome", false);
pref("print.print_unwriteable_margin_bottom", -1);
pref("print.print_unwriteable_margin_left", -1);
pref("print.print_unwriteable_margin_right", -1);
pref("print.print_unwriteable_margin_top", -1);
pref("ui.textSelectBackgroundAttention", "#38d878");
pref("ui.textSelectBackgroundDisabled", "#b0b0b0");
pref("widget.non-native-theme.scrollbar.size", 17);

// changed in v96.0:
pref("browser.active_color.dark", "#FF6666"); // prev: "#FF9E9E"
pref("browser.anchor_color.dark", "#8C8CFF"); // prev: "#9E9EFF"
pref("browser.history.maxStateObjectSize", 16777216); // prev: 2097152
pref("browser.newtabpage.activity-stream.asrouter.providers.messaging-experiments", "{\"id\":\"messaging-experiments\",\"enabled\":true,\"type\":\"remote-experiments\",\"messageGroups\":[\"cfr\",\"aboutwelcome\",\"infobar\",\"spotlight\",\"moments-page\"],\"updateCycleInMs\":3600000}"); // prev: "{\"id\":\"messaging-experiments\",\"enabled\":true,\"type\":\"remote-experiments\",\"messageGroups\":[\"cfr\",\"moments-page\",\"aboutwelcome\",\"infobar\",\"spotlight\"],\"updateCycleInMs\":3600000}"
pref("browser.startup.upgradeDialog.enabled", true); // prev: false
pref("browser.theme.toolbar-theme", 1); // prev: 2
pref("browser.urlbar.merino.enabled", true); // prev: false
pref("browser.visited_color.dark", "#FFADFF"); // prev: "#D0ADF0"
pref("dom.weblocks.enabled", true); // prev: false
pref("layout.css.color-scheme.enabled", true); // prev: false
pref("media.getusermedia.noise", 2); // prev: 1
pref("network.cookie.sameSite.laxByDefault", true); // prev: false
pref("network.cookie.sameSite.noneRequiresSecure", true); // prev: false
pref("network.cookie.sameSite.schemeful", true); // prev: false
