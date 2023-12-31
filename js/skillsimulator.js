TRUE = true;
FALSE = false;
(function($) {
    $.fn.disableTextSelect = function() {
        return this.each(function() {
            if ($.browser.mozilla) {
                $(this).css('MozUserSelect', 'none');
            } else if ($.browser.msie) {
                $(this).bind('selectstart', function() {
                    return false;
                });
            } else {
                $(this).mousedown(function() {
                    return false;
                });
            }
        });
    };
})(jQuery);
var SkillSimulator = {
    language: "en",
    primaryClass: "Prince",
    secondaryClass: "None",
    levelCaps: [70, 80, 90, 99],
    state: {
        fixed: {},
        primary: {},
        secondary: {}
    },
    url: location.href,
    init: function() {
        var self = this;
        var frag = "";
        for (var c in skills) {
            if (c == "Default") continue;
            frag += '<option value="' + c + '">' + c + '</option>';
        }
        $("#class-selector-primary").html(frag);
        $("#class-selector-primary").val(this.primaryClass);
        $("#class-selector-primary").change(function() {
            self.changePrimaryClass($("#class-selector-primary").val());
            $("#class-selector-secondary option:disabled").removeAttr("disabled");
            $("#class-selector-secondary option[value=" + self.primaryClass + "]").attr("disabled", "disabled");
            $("#class-selector-secondary option[value=Yggdroid]").attr("disabled", "disabled");
        });
        frag += '<option value="None">None</option>';
        $("#class-selector-secondary").html(frag);
        $("#class-selector-secondary").val(this.secondaryClass);
        $("#class-selector-secondary option[value=" + this.primaryClass + "]").attr("disabled", "disabled");
        $("#class-selector-secondary").change(function() {
            self.changeSecondaryClass($("#class-selector-secondary").val());
            $("#class-selector-primary option:disabled").removeAttr("disabled");
            $("#class-selector-primary option[value=" + self.secondaryClass + "]").attr("disabled", "disabled");
            self.cbUpdateSkillPoints();
        });
        $("#class-selector-secondary option[value=Yggdroid]").attr("disabled", "disabled");
        $("#level-cap").html("");
        for (var i in this.levelCaps) {
            $("#level-cap").append('<option value="' + this.levelCaps[i] + '">' + this.levelCaps[i] + '</option>');
        }
        $("#level,#retire-level").keyup(function(e) {
            this.value = this.value.replace(/[^0-9\.]/g, '').substring(0, 2);
        });
        $("#level,#level-cap,#retired,#retire-level").change(this.cbUpdateSkillPoints);
        $("#points-total,#points-available,#level,#retire-level").addClass("form-textbox");
        $("#points-total,#points-available").attr("disabled", "disabled");
        $("#points-total").val(0);
        $("#points-available").val(0);
        $("#level").val(1);
        $("#level-cap").val(70);
        this.cbUpdateSkillPoints();
        $(".skill-name-jp").hide();
        $("#language-button").toggle(function() {
            $(".skill-name-en").hide();
            $(".skill-name-jp").show();
            self.language = "jp";
            $(this).removeClass("jp").addClass("en");
            $(this).attr("title", "Switch to English");
        }, function() {
            $(".skill-name-jp").hide();
            $(".skill-name-en").show();
            self.language = "en";
            $(this).removeClass("en").addClass("jp");
            $(this).attr("title", "Switch to Japanese");
        });
        $("#help-button").fancybox({
            'type': 'ajax',
            'titleShow': false,
            'autoDimensions': true,
            'padding': 10,
            'speedIn': 600,
            'speedOut': 200,
            'overlayOpacity': 0.7,
            'overlayColor': '#fff',
            'centerOnScroll': true,
            'onStart': this.showHelp,
            'onClosed': this.hideHelp
        });
        $("#export-button").fancybox({
            'titleShow': false,
            'padding': 10,
            'speedIn': 600,
            'speedOut': 200,
            'overlayOpacity': 0.7,
            'overlayColor': '#fff',
            'scrolling': 'no',
            'autoScale': false,
            'onStart': this.exportToText,
            'onComplete': this.setExportControls
        });
        $("#clear-button").click(this.clearAll);
        $("#theme-selector").change(this.changeTheme);
        $("#controls").submit(function(e) {
            e.preventDefault();
        });
        $("#main").disableTextSelect();
        $(".skill-info-layer").disableTextSelect();
        this.createSkillNodes("fixed", "Default");
        this.createSkillInfoNodes("fixed", "Default");
        for (var skill in skills.Default) {
            this.state.fixed[skill] = 0;
        }
        this.changePrimaryClass(this.primaryClass);
        this.changeSecondaryClass(this.secondaryClass);
    },
    changePrimaryClass: function(classname) {
        this.primaryClass = classname;
        this.createSkillNodes("primary", classname);
        this.createSkillInfoNodes("primary", classname);
        this.cbUpdateSkillPoints();
    },
    changeSecondaryClass: function(classname) {
        this.secondaryClass = classname;
        this.createSkillNodes("secondary", classname);
        this.createSkillInfoNodes("secondary", classname);
        this.cbUpdateSkillPoints();
    },
    createSkillNodes: function(section, classname) {
        this.state[section] = {}
        var frag = '<div class="tree-bg-' + section + '"></div>';
        if (section == "secondary" && classname == "None") {
            $("#tree-secondary").html(frag);
            return;
        }
        if (section == "fixed") {
            frag += '<div id="skill-unique"></div>';
        } else {
            frag += '<div class="arrows arrows-' + classname.toLowerCase() + '"></div>';
        }
        for (var skillname in skills[classname]) {
            var s = skills[classname][skillname];
            var id = 'skill-' + classname + '-' + skillname;
            this.state[section][skillname] = 0;
            if (s.unique && section == "secondary") continue;
            if (s.unique && section == "primary") {
                $("#skill-unique").html('<div class="skill skill-primary skill-primary-available" id="skill-' + classname + '-' + skillname + '">' +
                    '<div class="skill-name skill-name-jp">' + s.name_jp + '</div>' +
                    '<div class="skill-name skill-name-en">' + s.name_en + '</div>' +
                    '<div class="skill-level skill-level-max' + s.max + ' skill-level-' + s.max + '-0">' +
                    this.createLevelNodes(s.max) + '</div></div>');
            } else {
                var x = s.coords["x"];
                var y = s.coords["y"];
                var a = true;
                for (var i in s.dep) {
                    a = false;
                    break;
                }
                frag += '<div class="skill skill-' + section + ' skill-' + section + '-' + (a ? '' : 'un') + 'available"' +
                    ' id="' + id + '" style="left:' + x + 'px;top:' + y + 'px;">' +
                    '<div class="skill-name skill-name-jp">' + s.name_jp + '</div>' +
                    '<div class="skill-name skill-name-en">' + s.name_en + '</div>' +
                    '<div class="skill-level skill-level-max' + s.max + ' skill-level-' + s.max + '-0">' +
                    this.createLevelNodes(s.max) + '</div></div>';
            }
        }
        $("#tree-" + section).html(frag);
        $(".skill-" + section + " .skill-name").click(this.cbShowSkillInfo);
        $(".skill-" + section + " .skill-name").mouseout(this.cbHideSkillInfo);
        $(".skill-" + section + " .skill-level-node").click(this.cbChangeLevel);
        $(".skill-" + section + " .skill-level-node").mouseover(function() {
            var parts = $(this).closest(".skill").attr("id").split("-");
            var classname = parts[1];
            var skillname = parts[2];
            if (SkillSimulator.state[section][skillname] > 0) return false;
            var level = $(this).parent().find(".skill-level-node").index(this) + 1;
            var max = $(this).parent().find(".skill-level-node").length;
            $(this).parent().removeClass().addClass("skill-level").addClass("skill-level-max" + max).addClass("skill-level-" + max + "-" + level);
        });
        $(".skill-" + section + " .skill-level-node").mouseout(function() {
            var parts = $(this).closest(".skill").attr("id").split("-");
            var classname = parts[1];
            var skillname = parts[2];
            var level = SkillSimulator.state[section][skillname];
            var max = skills[classname][skillname].max;
            $(this).parent().removeClass().addClass("skill-level").addClass("skill-level-max" + max).addClass("skill-level-" + max + "-" + level);
        });
        this.updateLanguage();
    },
    createSkillInfoNodes: function(section, classname) {
        $("#skill-info-layer-" + section).html("");
        var frag = "";
        for (var skillname in skills[classname]) {
            var active = skills[classname][skillname].active;
            frag += '<div class="skill-info" id="skill-info-' + classname + '-' + skillname + '">' +
                '<div class="skill-info-close"></div>' +
                '<div class="title">Name:</div><div class="skill-info-name-en">' + skills[classname][skillname].name_en + '</div>' +
                '<div class="title">名前:</div><div class="skill-info-name-jp">' + skills[classname][skillname].name_jp + '</div>' +
                '<div class="title">Type:</div><div class="skill-info-type ' + (active ? 'active' : 'passive') + '">' + (active ? 'Active' : 'Passive') + '</div>' +
                '<div class="title">Uses:</div><div class="skill-info-requires">' + skills[classname][skillname].requires + '</div>' +
                '<div class="skill-info-details">' + skills[classname][skillname].details + '</div>';
            if (levels[classname][skillname]) {
                frag += '<table class="levels">';
                var skill = levels[classname][skillname];
                for (var level in skill) {
                    frag += "<tr><td>Level " + level + ":</td><td>" + skill[level] + "</td></tr>";
                }
                frag += "</table>"
            }
            frag += "</div>";
        }
        $("#skill-info-layer-" + section).html(frag);
        $("#skill-info-layer-" + section + " .skill-info").mousedown(function(e) {
            if (!$(this).hasClass("pinned")) return;
            var s = $(this).closest(".skill-info");
            var id = s.attr("id");
            var pos = s.offset();
            var ox = e.pageX;
            var oy = e.pageY;
            $("body").mousemove(function(e) {
                var nx = e.pageX;
                var ny = e.pageY;
                $("#" + id).css("left", "" + (pos.left + nx - ox) + "px");
                $("#" + id).css("top", "" + (pos.top + ny - oy) + "px");
            });
            $("body").mouseup(function() {
                $(this).unbind("mousemove");
            });
        });
    },
    createLevelNodes: function(max) {
        var frag = "";
        for (var i = 1; i <= max; i++) {
            frag += '<div class="skill-level-node skill-level-node-' + i + '"></div>';
        }
        return frag;
    },
    cbChangeLevel: function() {
        var s = $(this).closest(".skill");
        var parts = s.attr("id").split("-");
        var classname = parts[1];
        var skillname = parts[2];
        var level = $(this).parent().find(".skill-level-node").index(this) + 1;
        var max = skills[classname][skillname].max;
        var section = "fixed";
        if (s.hasClass("skill-primary")) {
            section = "primary";
        } else if (s.hasClass("skill-secondary")) {
            section = "secondary";
        }
        var old = SkillSimulator.state[section][skillname];
        if (old == level) level = 0;
        SkillSimulator.state[section][skillname] = level;
        if (level > old) {
            var resolve = function(skillname) {
                var d = skills[classname][skillname].dep;
                for (var depname in d) {
                    if (SkillSimulator.state[section][depname] < d[depname]) {
                        SkillSimulator.state[section][depname] = d[depname];
                        resolve(depname);
                    }
                }
            };
            resolve(skillname);
        } else {
            var resolveForward = function(skillname) {
                var l = SkillSimulator.state[section][skillname];
                var d = forward[classname][skillname];
                for (var depname in d) {
                    if (SkillSimulator.state[section][depname] > 0 && l < d[depname]) {
                        SkillSimulator.state[section][depname] = 0;
                        resolveForward(depname);
                    }
                }
            };
            resolveForward(skillname);
        }
        for (var skillname in SkillSimulator.state[section]) {
            var id = "#skill-" + classname + "-" + skillname;
            var max = skills[classname][skillname].max;
            var level = SkillSimulator.state[section][skillname];
            $(id + " .skill-level").removeClass().addClass("skill-level").addClass("skill-level-max" + max).addClass("skill-level-" + max + "-" + level);
            var a = true;
            var skill = skills[classname][skillname];
            for (var depname in skill.dep) {
                if (SkillSimulator.state[section][depname] < skill.dep[depname]) {
                    a = false;
                    break;
                }
            }
            $(id).removeClass().addClass("skill skill-" + section).addClass("skill-" + section + "-" + (a ? "" : "un") + "available");
            var n = SkillSimulator.state[section][skillname];
            $("#skill-info-" + classname + "-" + skillname + " table.levels tr").removeClass("current");
            $("#skill-info-" + classname + "-" + skillname + " table.levels tr:nth-child(" + n + ")").addClass("current");
        }
        SkillSimulator.cbUpdateSkillPoints();
    },
    cbUpdateSkillPoints: function() {
        var startBonus = 2;
        var levelMax = parseInt($("#level-cap").val());
        var level = parseInt($("#level").val());
        if (isNaN(level) || level < 1) level = 1;
        if (level > levelMax) level = levelMax;
        var retired = $("#retired").is(":checked");
        var retireLevel = parseInt($("#retire-level").val());
        if (isNaN(retireLevel)) retireLevel = -1;
        var pointsTotal = startBonus + level;
        if ($("#retired").is(":checked")) {
            if (retireLevel == 99) pointsTotal += 10;
            else if (retireLevel >= 70) pointsTotal += 8;
            else if (retireLevel >= 60) pointsTotal += 7;
            else if (retireLevel >= 50) pointsTotal += 6;
            else if (retireLevel >= 40) pointsTotal += 5;
            else if (retireLevel >= 30) pointsTotal += 4;
            else if (retireLevel >= 0) {
                alert("The minimum retirement level is 30.");
                $("#retire-level").val("");
            }
            $("#retire-level").removeAttr("disabled");
            $("#retire-level").removeClass("disabled");
        } else {
            $("#retire-level").attr("disabled", "disabled");
            $("#retire-level").removeClass("disabled").addClass("disabled");
            $("#retire-level").val("");
        }
        if (SkillSimulator.secondaryClass != "None") {
            pointsTotal += 5;
        }
        var pointsUsed = 0;
        for (var section in SkillSimulator.state) {
            for (var skillname in SkillSimulator.state[section]) {
                pointsUsed += SkillSimulator.state[section][skillname];
            }
        }
        if (pointsUsed > pointsTotal) {
            var bump = Math.min(pointsUsed - pointsTotal, Math.max(levelMax - level, 0));
            level += bump;
            pointsTotal += bump;
        }
        $("#level").val(level);
        $("#points-total").val(pointsTotal);
        $("#points-available").val(pointsTotal - pointsUsed);
        if (pointsTotal < pointsUsed) {
            $("#available-label").removeClass().addClass("negative");
            $("#points-available").removeClass("negative").addClass("negative");
        } else {
            $("#available-label").removeClass();
            $("#points-available").removeClass("negative");
        }
    },
    updateLanguage: function() {
        if (this.language == "en") {
            $(".skill-name-jp").hide();
            $(".skill-name-en").show();
        } else if (this.language == "jp") {
            $(".skill-name-en").hide();
            $(".skill-name-jp").show();
        } else {
            $(".skill-name-en").show();
            $(".skill-name-jp").show();
        }
    },
    cbShowSkillInfo: function() {
        var s = $(this).closest(".skill");
        var parts = s.attr("id").split("-");
        var classname = parts[1];
        var skillname = parts[2];
        var si = $("#skill-info-" + classname + "-" + skillname);
        var sic = si.find(".skill-info-close");
        if (si.hasClass("pinned")) {
            si.removeClass("pinned");
            sic.fadeOut(75);
            si.fadeOut(150);
            return;
        }
        if (!si.hasClass("pinned") && si.is(":visible")) {
            si.addClass("pinned");
            sic.unbind("click").click(function() {
                si.removeClass("pinned");
                sic.fadeOut(75);
                si.fadeOut(150);
            });
            sic.fadeIn(150);
        }
        var vl = ($("html").scrollLeft() || $("body").scrollLeft() || 0);
        var vt = ($("html").scrollTop() || $("body").scrollTop() || 0);
        var vw = window.innerWidth;
        var vh = window.innerHeight;
        var sl = s.offset().left;
        var st = s.offset().top;
        var sx = sl - vl;
        var sy = st - vt;
        var sw = s.outerWidth();
        var sh = s.outerHeight();
        var iw = si.outerWidth();
        var ih = si.outerHeight();
        var ms = (document.all ? 0 : 16);
        var m = {
            t: -20,
            r: 10,
            b: 10,
            l: 0
        };
        si.width(si.width());
        si.css("left", "" + (sx + sw + m.l + iw + m.r + ms > vw ? sl - m.r - iw : sl + sw + m.l) + "px");
        si.css("top", "" + (sy + m.t + ih + m.b + ms > vh ? vt + vh - ms - m.b - ih : st + m.t) + "px");
        if (!si.is(":visible")) si.fadeIn(150);
    },
    cbHideSkillInfo: function() {
        var s = $(this).closest(".skill");
        var parts = s.attr("id").split("-");
        var classname = parts[1];
        var skillname = parts[2];
        var si = $("#skill-info-" + classname + "-" + skillname);
        if (si.hasClass("pinned")) return;
        if (si.is(":visible")) si.fadeOut(400);
    },
    showHelp: function() {
        $("#fancybox-outer").prepend('<div id="help-bg"></div>');
    },
    hideHelp: function() {
        $("#help-bg").remove();
    },
    exportToText: function() {
        $("#export").html('<textarea id="export-data" readonly="readonly"></textarea>');
        $("#export-data").val(SkillSimulator.getExportText());
    },
    getExportText: function(showAll) {
        if (showAll == null) showAll = true;
        var lpad = function(str, len) {
            return (new Array(len - str.length + 1).join(" ")) + str;
        };
        var rpad = function(str, len) {
            return str + (new Array(len - str.length + 1).join(" "));
        };
        var sections = {
            fixed: "Default",
            primary: SkillSimulator.primaryClass,
            secondary: SkillSimulator.secondaryClass
        };
        var max = 0;
        for (var section in sections) {
            var classname = sections[section];
            for (var skillname in skills[classname]) {
                max = Math.max(max, skills[classname][skillname].name_en.length);
            }
        }
        var text = sections.primary + (sections.secondary != "None" ? "/" + sections.secondary : "") + " Build\n";
        text += "Level:            " + lpad($("#level").val(), 3) + "\n";
        text += "Level Cap:        " + lpad($("#level-cap").val(), 3) + "\n";
        text += "Total Points:     " + lpad($("#points-total").val(), 3) + "\n";
        text += "Available Points: " + lpad($("#points-available").val(), 3) + "\n";
        if ($("#retired").is(":checked") && !isNaN(parseInt($("#retire-level").val()))) {
            text += "Retired: Yes, at  " + lpad($("#retire-level").val(), 3) + "\n";
        } else {
            text += "Retired: No\n";
        }
        for (var section in sections) {
            var n = 0;
            var classname = sections[section];
            if (section == "fixed") text += "\nCommon Skills\n";
            if (section == "primary") text += "\nMain Class: " + classname + "\n";
            if (section == "secondary") text += "\nSub Class: " + classname + "\n";
            for (var skillname in skills[classname]) {
                if (showAll || SkillSimulator.state[section][skillname] > 0) {
                    text += "    " + rpad(skills[classname][skillname].name_en + ": ", max + 2) +
                        lpad(SkillSimulator.state[section][skillname].toString(), 2) +
                        "/" + skills[classname][skillname].max + "\n";
                }
                n += SkillSimulator.state[section][skillname];
            }
            if (!showAll && n == 0) text += "    No skills learned\n";
        }
        text += "\nGenerated by Etrian Odyssey 3 Skill Simulator\n" + SkillSimulator.url + "\n";
        return text;
    },
    setExportControls: function() {
        $("#export").append('<div id="export-controls">' +
            '<div id="export-clip">Copy to Clipboard<div id="export-clip-notice"></div></div>' +
            '<input id="export-omit-unused" type="checkbox" /> ' +
            '<label for="export-omit-unused">Omit Unused Skills</label></div>');
        var clip = new ZeroClipboard.Client();
        clip.setText($("#export-data").val());
        clip.addEventListener('onMouseDown', function() {
            $("#export-clip").addClass("down");
        });
        clip.addEventListener('onMouseUp', function() {
            $("#export-clip").removeClass("down");
        });
        clip.addEventListener('onComplete', function() {
            $("#export-clip-notice").html("Build Copied");
            $("#export-clip-notice").show();
            $("#export-clip-notice").fadeOut(2000);
        });
        var cliphtml = clip.getHTML($("#export-clip").width(), $("#export-clip").height());
        $("#export-clip").append('<div id="export-clip-flash">' + cliphtml + '</div>');
        $("#export-omit-unused").change(function() {
            $("#export-data").val(SkillSimulator.getExportText(!$(this).is(":checked")));
            clip.setText($("#export-data").val());
        });
    },
    clearAll: function() {
        SkillSimulator.createSkillNodes("fixed", "Default");
        for (var skill in skills.Default) {
            SkillSimulator.state.fixed[skill] = 0;
        }
        SkillSimulator.changePrimaryClass(SkillSimulator.primaryClass);
        SkillSimulator.changeSecondaryClass(SkillSimulator.secondaryClass);
        $("#points-total").val(0);
        $("#points-available").val(0);
        $("#level").val(1);
        SkillSimulator.cbUpdateSkillPoints();
    },
    changeTheme: function() {
        $("#theme").attr("href", "themes/" + $("#theme-selector").val() + "/style.css");
    }
}
