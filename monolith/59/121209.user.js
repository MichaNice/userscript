// ==UserScript==
// @name           SetsMaster
// @namespace      Tamozhnya1
// @description    HWM mod - Nabory armii, navykov i oruzhija - 3 v 1 (by Tamozhnya1 & Demin)
// @homepage       http://userscripts.org/scripts/show/124512
// @version        2.6
// @include        http://*heroeswm.ru/*
// @include        http://178.248.235.15/*
// @include        http://209.200.152.144/*
// @include        http://*lordswm.com/*
// @include        http://demin.*
// @exclude        */rightcol.php*
// @exclude        */ch_box.php*
// @exclude        */chat*
// @exclude        */ticker.html*
// @exclude        */frames*
// @exclude        */brd.php*
// ==/UserScript==
// (c) 2012-2013, demin  ( http://www.heroeswm.ru/pl_info.php?id=15091 )
// (c) 2012, Tamozhnya1

var version = '2.6',
	url_cur = location.href,
	url = 'http://' + location.hostname + '/',
	script_num = 124512,
	script_name = "HWM mod - Nabory armii, navykov i oruzhija - 3 v 1 (by Tamozhnya1 & Demin)",
	GlobalCultureName = url.match('lordswm') ? "en-US" : "ru-RU",
	Strings = {
		"ru-RU": {
			Army: ustring("Армия"),
			Save: ustring("Сохранить"),
			Add: ustring("Добавить"),
			SetName: ustring("Наименование набора"),
			Delete: ustring("Удалить"),
			Talents: ustring("Навыки"),
			SavePerkSetAlert: ustring('Сначала выберите навыки и нажмите "Принять"'),
			Weapon: ustring("Оружие"),
			RemoveAll: ustring("Снять все"),
		},
		"en-US": {
			Army: "Army",
			Save: "Save",
			Add: "Add",
			SetName: "Set name",
			Delete: "Delete",
			Talents: "Talents",
			SavePerkSetAlert: 'Please select skills and click on "Accept"',
			Weapon: "Weapon",
			RemoveAll: "Un-equip all",
		}
	},
	LocalizedString = Strings[GlobalCultureName];
	
ensureGmMethods();
update_n(version, script_num, script_name);

var flash_heart = document.querySelector("object > param[value*='heart.swf']");
if(flash_heart) {
	flash_heart = flash_heart.parentNode.querySelector("param[name='FlashVars']");
}
if(flash_heart) {
    flash_heart = flash_heart.value.split('|');
    if(flash_heart[3]) {
        var nick = flash_heart[3] + "_";
    }
}
if(document.querySelector("body") && nick) {
    nick = encodeURIComponent(nick);
    var frak;
    if(location.pathname == '/home.php') {
        frak = /\/i\/(r\d+)\.gif/.exec(document.querySelector("body").innerHTML);
        if(frak) {
            frak = frak[1] + "_";
            GM_setValue(nick + "frak", frak);
        }
    }
    frak = GM_getValue(nick + "frak");
    if(frak) {
        var menuId = "menuSets";
        var functionHash = {
            "rl": rl
        }
        /************************************************************************************************************/
        armySet = {
            oid: 2,
            id: "armySet",
            name: "<a href='army.php' style='color: #f5c137; text-decoration: none;'>" + LocalizedString.Army + "</a>",
            currentSetName: nick + frak + "currentArmySet",
            currentSetNumber: undefined,
            sets: new Array(),
            setObjects: new Array(),
            menuItems: {},
            currentMenuItem: undefined,
            menu: undefined,
            savedSetIdsConst: nick + frak + "savedArmySetIds",
            savedSetConst: nick + frak + "savedArmySet",

            getSets: function () {
                for(var i = 0; i < this.setObjects.length; i++) {
                    var setObject = this.setObjects[i];
                    if(setObject) {
                        var setName = setObject.name;
                        var army = setObject.army;

                        var setTitle = "";
                        for(var j = 0; j < army.length; j++) {
                            setTitle += (army[j] == "" ? "0" : army[j]) + "+";
                        }
                        setTitle = setTitle.substring(0, setTitle.length - 1);

                        var data = "";
                        for(var j = 0; j < army.length; j++) {
                            data = "countv" + (j + 1) + "=" + (army[j] == "" ? "0" : army[j]) + (data == "" ? "" : "&") + data;
                        }
                        this.sets[i] = {
                            number: parseInt(setObject.oid),
                            name: setName,
                            title: setTitle,
                            method: "POST",
                            url: "army_apply.php",
                            data: data,
                            responseHandler: "rl",
                            contentType: "application/x-www-form-urlencoded"
                        }
                    }
                }
            },
            init: function () {
                this.currentSetNumber = GM_getValue(this.currentSetName, -1);
                var savedSetIdsStr = GM_getValue(this.savedSetIdsConst);
                var setIds = new Array();
                if(savedSetIdsStr) {
                    setIds = savedSetIdsStr.split("|");
                }
                for(var i = 0; i < setIds.length; i++) {
                    if(setIds[i] == "") {
                        continue;
                    }
                    var setStr = GM_getValue(this.savedSetConst + setIds[i]);
                    if(!setStr) {
                        continue;
                    }
                    setData = setStr.split("|");
                    this.setObjects[i] = {
                        oid: setIds[i],
                        name: setData[7],
                        fraction: setData[8],
                        army: new Array()
                    }
                    for(var j = 0; j < 7; j++) {
                        this.setObjects[i].army[j] = setData[j];
                    }
                }
                if(/army.php$/.test(location.href)) {
                    this.drawSetsTable();
                }
            },
            drawSetsTable: function () {
                var div = addElement("center", document.querySelector("body"));
                addElement("br", div);
                var htmlTable = addElement("table", div, {
                    bgcolor: "#959595",
                    bordercolor: "#f5c137",
                    border: "1px"
                });
                this.drawTableHeader(htmlTable);
                for(var i = 0; i < this.setObjects.length; i++) {
                    if(this.setObjects[i]) {
                        this.drawSetsRow(htmlTable, this.setObjects[i]);
                    }
                }
				var saveButton = addElement("input", div, { type: "button", value: LocalizedString.Save });
                saveButton.addEventListener("click", this.saveSets);
				var addButton = addElement("input", div, { type: "button", value: LocalizedString.Add });
                addButton.addEventListener("click", this.addSet);
            },
            drawTableHeader: function (htmlTable) {
                var flash = document.querySelector("object > param[value*='recruitarmy.swf']");
                flash = flash.parentNode.querySelector("param[name='FlashVars']");
                var flashVars = flash.value.substr(8);
                var sets = flashVars.split("^;");

                var tr = addElement("tr", htmlTable);
                var th = addElement("td", tr);

                th.style.fontWeight = "bold";
				th.innerHTML = LocalizedString.SetName;
                for(var i = 0; i < sets.length - 1; i++) {
                    var set = sets[i].split("|");
                    var th = addElement("td", tr);

                    th.style.fontWeight = "bold";
                    if(url.match('lordswm')) {
                        th.innerHTML = set[2].split("#")[1];
                    } else {
                        th.innerHTML = set[2].split("#")[0];
                    }
                }
            },
            drawSetsRow: function (htmlTable, setObject) {
                var tr = addElement("tr", htmlTable, {
                    oid: setObject.oid
                });
                var td = addElement("td", tr);
                var input = addElement("input", td, {
                    value: setObject.name,
                    size: 22
                });
                for(var i = 0; i < setObject.army.length; i++) {
                    var td = addElement("td", tr);
                    var input = addElement("input", td, {
                        value: setObject.army[i],
                        size: 2
                    });
                }
                var td = addElement("td", tr);
				var delButton = addElement("input", td, { type: "button", value: "x", title: LocalizedString.Delete });
                delButton.addEventListener("click", this.deleteSet);
            },
            saveSets: function () {
                var table = this.previousSibling;
                var setIdsStr = "";
                for(var i = 1; i < table.rows.length; i++) {
                    var setStr = "";
                    var row = table.rows[i];
                    var oid = row.getAttribute("oid");
                    setIdsStr = setIdsStr + "|" + oid;
                    for(var j = 1; j <= 7; j++) {
                        setStr = setStr + "|" + row.cells[j].firstChild.value;
                    }
                    setStr = setStr + "|" + row.cells[0].firstChild.value;
                    setStr = setStr + "|" + "";
                    GM_setValue(armySet.savedSetConst + oid, setStr.substr(1));
                }
                if(setIdsStr && setIdsStr != "") {
                    GM_setValue(armySet.savedSetIdsConst, setIdsStr.substr(1));

                    // udalit' udalennye komplekty
                    if(typeof GM_listValues == 'function') {
                        var clear_d = GM_listValues();
                        var clear_d_len = clear_d.length;
                        var num_id_regexp = new RegExp(armySet.savedSetConst + '(\\d+)');
                        var num_id;
                        for(var i = clear_d_len; i--;) {
                            num_id = num_id_regexp.exec(clear_d[i]);
                            if(num_id && !setIdsStr.match(num_id[1])) {
                                GM_deleteValue(clear_d[i]);
                            }
                        }
                    }
                } else {
                    GM_deleteValue(armySet.savedSetIdsConst);
                    GM_deleteValue(armySet.currentSetName);

                    // udalit' udalennye komplekty
                    if(typeof GM_listValues == 'function') {
                        var clear_d = GM_listValues();
                        var clear_d_len = clear_d.length;
                        var num_id_regexp = new RegExp(armySet.savedSetConst + '(\\d+)');
                        var num_id;
                        for(var i = clear_d_len; i--;) {
                            num_id = num_id_regexp.exec(clear_d[i]);
                            if(num_id) {
                                GM_deleteValue(clear_d[i]);
                            }
                        }
                    }
                }
            },
            addSet: function () {
                var table = this.previousSibling.previousSibling;
                armySet.drawSetsRow(table, {
                    oid: (new Date()).getTime(),
                    name: "",
                    army: ["", "", "", "", "", "", ""]
                });
            },
            deleteSet: function () {
                var table = this.parentNode.parentNode.parentNode;
                var row = this.parentNode.parentNode;
                table.removeChild(row);
            },
        }
        /***********************************************************************************************************/
        skillSet = {
            oid: 1,
            id: "skillSet",
            name: "<a href='skillwheel.php' style='color: #f5c137; text-decoration: none;'>" + LocalizedString.Talents + "</a>",
            currentSetName: nick + frak + "currentSkillSet",
            currentSetNumber: undefined,
            sets: new Array(),
            setObjects: new Array(),
            menuItems: {},
            currentMenuItem: undefined,
            menu: undefined,
            savedSetIdsConst: nick + frak + "savedSkillSetIds",
            savedSetConst: nick + frak + "savedSkillSet",

            getSets: function () {
                for(var i = 0; i < this.setObjects.length; i++) {
                    var setObject = this.setObjects[i];
                    if(setObject) {
                        var setName = setObject.name;
                        var skills = setObject.skills;
                        var setTitle = setObject.name == setObject.comment ? "" : setObject.comment;
                        var data = "";
                        for(var j = 0; j < skills.length; j++) {
                            data += "&param" + j + "=" + (skills[j] == "" ? "0" : skills[j]);
                        }
                        this.sets[i] = {
                            number: parseInt(setObject.oid),
                            name: setName,
                            title: setTitle,
                            method: "GET",
                            url0: "skillwheel.php?reset_all=1",
                            url: "skillwheel.php?" + data.substr(1),
                            responseHandler: "rl"
                        }
                    }
                }
            },
            init: function () {
                this.currentSetNumber = GM_getValue(this.currentSetName, -1);
                var savedSetIdsStr = GM_getValue(this.savedSetIdsConst);
                var setIds = new Array();
                if(savedSetIdsStr) {
                    setIds = savedSetIdsStr.split("|");
                }
                for(var i = 0; i < setIds.length; i++) {
                    if(setIds[i] == "") {
                        continue;
                    }
                    var setStr = GM_getValue(this.savedSetConst + setIds[i]);
                    if(!setStr) {
                        continue;
                    }
                    setData = setStr.split("|");
                    this.setObjects[i] = {
                        oid: setIds[i],
                        name: setData[0],
                        comment: setData[1],
                        skills: new Array()
                    }
                    for(var j = 2; j < setData.length; j++) {
                        this.setObjects[i].skills[j - 2] = setData[j];
                    }
                }
                if(/skillwheel.php$/.test(location.href)) {
                    this.drawSetsTable();
                }
            },
            drawSetsTable: function () {
                var div = addElement("center", document.querySelector("body"));
                addElement("br", div);
                var htmlTable = addElement("table", div, {
                    bgcolor: "#959595",
                    bordercolor: "#f5c137",
                    border: "1px"
                });
                this.drawTableHeader(htmlTable);
                for(var i = 0; i < this.setObjects.length; i++) {
                    if(this.setObjects[i]) {
                        this.drawSetsRow(htmlTable, this.setObjects[i]);
                    }
                }
				var saveButton = addElement("input", div, { type: "button", value: LocalizedString.Save });
                saveButton.addEventListener("click", this.saveSets);
				var addButton = addElement("input", div, { type: "button", value: LocalizedString.Add });
                addButton.addEventListener("click", this.addSet);
            },
            drawTableHeader: function (htmlTable) {
                var tr = addElement("tr", htmlTable);
                var th = addElement("td", tr);

                th.style.fontWeight = "bold";
				th.innerHTML = LocalizedString.SetName;

                var th = addElement("td", tr);

                th.style.fontWeight = "bold";
				th.innerHTML = LocalizedString.Talents;
            },
            drawSetsRow: function (htmlTable, setObject) {
                var tr = addElement("tr", htmlTable, { oid: setObject.oid });
                var td = addElement("td", tr);
                var input = addElement("input", td, { value: setObject.name, size: 30 });
                var td = addElement("td", tr);
                var input = addElement("input", td, { value: setObject.comment, size: 30, readonly: true });
                var skillsStr = "";
                for(var i = 0; i < setObject.skills.length; i++) {
                    skillsStr += "|" + setObject.skills[i];
                }
                var input = addElement("input", td, { type: "hidden", value: skillsStr.substr(1) });
                var td = addElement("td", tr);

				var delButton = addElement("input", td, { type: "button", value: "x", title: LocalizedString.Delete });
                delButton.addEventListener("click", this.deleteSet);
            },
            saveSets: function () {
                var table = this.previousSibling;
                var setIdsStr = "";
                for(var i = 1; i < table.rows.length; i++) {
                    var row = table.rows[i];
                    var oid = row.getAttribute("oid");
                    setIdsStr = setIdsStr + "|" + oid;
                    var setStr = row.cells[0].firstChild.value + "|" + row.cells[1].firstChild.value + "|" + row.cells[1].firstChild.nextSibling.value;
                    //alert(skillSet.savedSetConst + oid+"="+setStr)
                    GM_setValue(skillSet.savedSetConst + oid, setStr);
                }
                if(setIdsStr && setIdsStr != "") {
                    GM_setValue(skillSet.savedSetIdsConst, setIdsStr.substr(1));
                    // udalit' udalennye komplekty
                    if(typeof GM_listValues == 'function') {
                        var clear_d = GM_listValues();
                        var clear_d_len = clear_d.length;
                        var num_id_regexp = new RegExp(skillSet.savedSetConst + '(\\d+)');
                        var num_id;
                        for(var i = clear_d_len; i--;) {
                            num_id = num_id_regexp.exec(clear_d[i]);
                            if(num_id && !setIdsStr.match(num_id[1])) {
                                GM_deleteValue(clear_d[i]);
                            }
                        }
                    }
                } else {
                    GM_deleteValue(skillSet.savedSetIdsConst);
                    GM_deleteValue(skillSet.currentSetName);

                    // udalit' udalennye komplekty
                    if(typeof GM_listValues == 'function') {
                        var clear_d = GM_listValues();
                        var clear_d_len = clear_d.length;
                        var num_id_regexp = new RegExp(skillSet.savedSetConst + '(\\d+)');
                        var num_id;
                        for(var i = clear_d_len; i--;) {
                            num_id = num_id_regexp.exec(clear_d[i]);
                            if(num_id) {
                                GM_deleteValue(clear_d[i]);
                            }
                        }
                    }

                }
            },
            addSet: function () {
                var flash = document.querySelector("object > param[value*='skillwheel.swf']");
                flash = flash.parentNode.querySelector("param[name='FlashVars']");
                var flashVars = flash.value.substr(6);
                var skills = flashVars.split("|$");
                var appliedSkills = new Array();
                var appliedSkillsLength = 0;
                for(var i = 0; i < skills.length; i++) {
                    var skill = skills[i].split("|");
                    if(skill[8] && skill[8] == 1) {
                        appliedSkills[appliedSkillsLength] = {
                            mnemonicName: skill[0],
                            //rusName: skill[2],
                            shortRusName: skillSet.getShortRusName(skill[2])
                        }
                        appliedSkillsLength++;
                    }
                }
                if(appliedSkills.length == 0) {
                    alert(LocalizedString.SavePerkSetAlert);
                    return;
                }
                var skills = new Array();
                for(var i = 0; i < appliedSkills.length; i++) {
                    skills[i] = appliedSkills[i].mnemonicName;
                }
                var comment = "";
                for(var i = 0; i < appliedSkills.length; i++) {
                    var curShortRusName = appliedSkills[i].shortRusName;
                    if(/^\d$/.test(skills[i].substr(-1)) && skills[i + 1] && /^\d$/.test(skills[i + 1].substr(-1)) && (parseInt(skills[i].substr(-1)) < parseInt(skills[i + 1].substr(-1)))) {
                        continue;
                    }
                    //
                    comment = comment + "+" + curShortRusName;
                }
                comment = comment.substr(1);
                var table = this.previousSibling.previousSibling;
                skillSet.drawSetsRow(table, {
                    oid: (new Date()).getTime(),
                    name: comment,
                    comment: comment,
                    skills: skills
                });
            },
            deleteSet: function () {
                var table = this.parentNode.parentNode.parentNode;
                var row = this.parentNode.parentNode;
                table.removeChild(row);
            },
            getShortRusName: function (name) {
                var arr = name.split(" ");
                if(arr.length <= 1) {
                    return name;
                }
                var result = "";
                for(var i = 0; i < arr.length; i++) {
                    result += arr[i].substr(0, 1).toUpperCase();
                }
                return result;
            },
        }
        /************************************************************************************************************/
        weaponSet = {
            oid: 0,
            id: "weaponSet",
            name: "<a href='inventory.php' style='color: #f5c137; text-decoration: none;'>" + LocalizedString.Weapon + "</a>",
            currentSetName: nick + "currentWeaponSet",
            currentSetNumber: undefined,
            sets: new Array(),
            menuItems: {},
            currentMenuItem: undefined,
            menu: undefined,

            getSets: function () {
                this.sets[0] = {
                    number: 0,
                    name: LocalizedString.RemoveAll,
                    method: "GET",
                    url: "inventory.php?all_off=100",
                    responseHandler: "rl"
                }
                for(var i = 1; i <= 5; i++) {
                    var setName = GM_getValue(nick + "weaponSet" + i);
                    if(setName) {
                        this.sets[i] = {
                            number: i,
                            name: setName,
                            method: "GET",
                            url: "inventory.php?all_on=" + i,
                            responseHandler: "rl",
                            headers: null
                        }
                    }
                }
            },
            init: function () {
                this.currentSetNumber = GM_getValue(this.currentSetName, -1);
                if(/inventory.php$/.test(location.href)) {
                    var a = document.querySelector("a[href^='inventory.php?all_off=']");
                    if(a) {
                        a.addEventListener("click", markCurrentEventHandler, false);
                        a.setAttribute("number", 0);
                        a.setAttribute("oid", this.oid);
                    }

                    var all_on = document.querySelectorAll("a[href^='inventory.php?all_on=']");
                    var FilledSets = new Array();
                    for(var i = 0; i < all_on.length; i++) {
                        a = all_on[i];
                        a.addEventListener("click", markCurrentEventHandler, false);
                        setNumber = parseInt(a.href.substr(a.href.indexOf("all_on=") + 7, 1));
                        a.setAttribute("number", setNumber);
                        a.setAttribute("oid", this.oid);
                        GM_setValue(nick + "weaponSet" + setNumber, a.innerHTML);
                        FilledSets[setNumber] = setNumber;
                    }
                    for(var i = 1; i <= 5; i++) {
                        if(!FilledSets[i]) {
                            GM_deleteValue(nick + "weaponSet" + i);
                        }
                    }
                }
            }
        }

        /************************************************************************************************************/
        var setObjects = new Array();
        setObjects[weaponSet.oid] = weaponSet;
        setObjects[armySet.oid] = armySet;
        setObjects[skillSet.oid] = skillSet;
        main();
    }
}

function main() {
    var menuId = "menuSetsTable";
    var logobEngChild = document.querySelector("img[src$='logob_eng.jpg']");
    var styleObject = { borderColor: "#f5c137", background: "#6b6b69", color: "#f5c137" }
    if(!logobEngChild) {
        logobEngChild = document.querySelector("img[src*='logob_'][src$='eng_.jpg']");
        styleObject.background = "#003399";
        if(!logobEngChild) {
            return;
        }
    }
    if(!logobEngChild) {
        logobEngChild = document.querySelector("img[src$='23f_05.jpg']");
        var styleObject = { borderColor: "#f5c137", background: "#6b6b69", color: "#f5c137" }
    }
    if(!logobEngChild) {
        return;
    }
    var offSet = -55;
    for(var i = 0; i < setObjects.length; i++) {
        if(!setObjects[i]) {
            continue;
        }
        var currentSetObject = setObjects[i];
        if(currentSetObject.init) {
            currentSetObject.init();
        }
        currentSetObject.getSets();

        if(i > 0) {
			offSet += $(menuId + (i - 1) + "Header").clientWidth;
		}
        var menuHeaderStyleObject = {
            position: "absolute",
            margin: "3px 0px 0px " + offSet + "px",
            background: styleObject.background,
            color: styleObject.color,
            border: "1px solid " + styleObject.borderColor,
            "font-weight": "bold",
            padding: "2px 5px 2px 5px",
            "z-index": (url_cur.match('photo_pl_photos') ? "0" : "2")
        }
        var menuHeader = addElement("div", logobEngChild.parentNode, {
            id: menuId + i + "Header",
            headerId: menuId + i + "Header",
            menuId: menuId + i
        }, menuHeaderStyleObject);
        var aLevel1 = addElement("b", menuHeader, {}, "color: #f5c137;");
        //	aLevel1.style.cursor = "pointer";
        aLevel1.innerHTML = currentSetObject.name;
        currentSetObject.menu = aLevel1;

        var menuContent = addElement("div", menuHeader, {
            id: menuId + i,
            headerId: menuId + i + "Header",
            menuId: menuId + i
        }, "position: relative; padding: 6px 3px 2px 3px; white-space: nowrap;");

        menuHeader.addEventListener("mouseover", showMenu, false);
        menuHeader.addEventListener("mouseout", hideMenu, false);
        menuContent.addEventListener("mouseover", showMenu, false);
        menuContent.addEventListener("mouseout", hideMenu, false);

        for(var j = 0; j < currentSetObject.sets.length; j++) {
            var currentSet = currentSetObject.sets[j];
            if(!currentSet) continue;

            var liData = {};
            if(currentSetObject.title) {
                liData.title = currentSetObject.title;
            }
            var liLevel2 = (url_cur.match('photo_pl_photos') ? addElement("div", menuContent, liData) : addElement("li", menuContent, liData));
            var aLevel2 = addElement("b", liLevel2, currentSet, "color: #f5c137;");
            aLevel2.style.cursor = "pointer";
            aLevel2.innerHTML = currentSet.name;
            aLevel2.addEventListener("click", applySet, false);

            aLevel2.setAttribute("oid", currentSetObject.oid);
            if(currentSet.number == currentSetObject.currentSetNumber) {
                markCurrent(aLevel2);
            }
            currentSetObject.menuItems[j] = aLevel2;
        }
        $(menuId + i).style.width = ($(menuId + i).clientWidth + 20) + "px";
        $(menuId + i).style.display = "none";
    }
}

function showMenu() {
    var menu = $(this.getAttribute("menuId"));
    menu.style.display = "block";
}

function hideMenu() {
    var menu = $(this.getAttribute("menuId"));
    menu.style.display = "none";
}

function markCurrentEventHandler(e) {
    var obj = setObjects[this.getAttribute("oid")];
    var menuItemToMark = obj.menuItems[this.getAttribute("number")];
    markCurrent(menuItemToMark);
}

function markCurrent(el) {
    var obj = setObjects[el.getAttribute("oid")];
    GM_setValue(obj.currentSetName, el.getAttribute("number"));
    el.style.color = '#0f0';
    if(obj.currentMenuItem && obj.currentMenuItem != el) {
        obj.currentMenuItem.style.color = "#f5c137";
    }
    obj.currentMenuItem = el;
}

function applySet() {
    markCurrent(this);
    var obj = setObjects[parseInt(this.getAttribute("oid"))];
    var responseHandler = functionHash[this.getAttribute("responseHandler")];
    //obj.menu.innerHTML = obj.menu.innerHTML + " " + loaders();
    var _this = this;
    var title = this.innerHTML;
    this.innerHTML += " " + loaders();
    var contentType = this.getAttribute("contentType");
    var headers = {};
    if(contentType) {
        headers['Content-type'] = contentType;
    }
    var requestObject = {
        headers: headers,
        method: this.getAttribute("method"),
        url: this.getAttribute("url"),
        data: this.getAttribute("data"),
        onload: function (response) {
            //obj.menu.innerHTML = obj.name;
            _this.innerHTML = title;
            responseHandler(response);
        }
    }
    var url0 = this.getAttribute("url0");
    if(url0) {
        var requestObject0 = {
            headers: headers,
            method: this.getAttribute("method"),
            url: url0,
            data: this.getAttribute("data"),
            onload: function (response) {}
        }
        var objXMLHttpReqSM = new XMLHttpRequest();
        objXMLHttpReqSM.open(requestObject0.method, requestObject0.url, true);
        objXMLHttpReqSM.onreadystatechange = function () {
            handleHttpResponseSM_2(objXMLHttpReqSM, requestObject, _this, title);
        }
        for(var i_headers in requestObject0.headers) {
            objXMLHttpReqSM.setRequestHeader(i_headers, requestObject0.headers[i_headers]);
        }
        objXMLHttpReqSM.send(requestObject0.data);
    } else {
        var objXMLHttpReqSM = new XMLHttpRequest();
        objXMLHttpReqSM.open(requestObject.method, requestObject.url, true);
        objXMLHttpReqSM.onreadystatechange = function () {
            handleHttpResponseSM(objXMLHttpReqSM, requestObject, _this, title);
        }
        for(var i_headers in requestObject.headers) {
            objXMLHttpReqSM.setRequestHeader(i_headers, requestObject.headers[i_headers]);
        }
        objXMLHttpReqSM.send(requestObject.data);

    }
    return false;
}

function rl(response) {
    //location.href = url_cur;
}

function handleHttpResponseSM(objXMLHttpReqSM, requestObject, _this, title) {
    if(objXMLHttpReqSM.readyState == 2) {
        objXMLHttpReqSM.abort();
        _this.innerHTML = title;
    }
}

function handleHttpResponseSM_2(objXMLHttpReqSM, requestObject, _this, title) {
    if(objXMLHttpReqSM.readyState == 2) {

        objXMLHttpReqSM.abort();

        var objXMLHttpReqSM = new XMLHttpRequest();
        objXMLHttpReqSM.open(requestObject.method, requestObject.url, true);
        objXMLHttpReqSM.onreadystatechange = function () {
            handleHttpResponseSM(objXMLHttpReqSM, requestObject, _this, title);
        }
        for(var i_headers in requestObject.headers) {
            objXMLHttpReqSM.setRequestHeader(i_headers, requestObject.headers[i_headers]);
        }
        objXMLHttpReqSM.send(requestObject.data);
    }
}

function addElement(type, parent, data, style) {
    var el = document.createElement(type);
    if(parent) {
        parent.appendChild(el);
    }
    if(data) {
        for(var key in data) {
            el.setAttribute(key, data[key]);
        }
	}
    if(style && el.id) {
		var styleStr = "";
        if(typeof (style) == "string") {
			styleStr = style;
        } else {
            for(var key in style) {
                styleStr += key + ": " + style[key] + "; ";
            }
        }
		GM_addStyle("#" + el.id + "{" + styleStr + "}");
    }
    return el;
}

function loaders() {
    return '<img border="0" align="absmiddle" height="11" src="data:image/gif;base64,' +
        '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' +
        'fySDhGYQdDWGQyUhADs=">';
}

function $(id) {
    return document.querySelector("#" + id);
}

function addEvent(elem, evType, fn) {
    if(elem.addEventListener) {
        elem.addEventListener(evType, fn, false);
    } else if(elem.attachEvent) {
        elem.attachEvent("on" + evType, fn);
    } else {
        elem["on" + evType] = fn;
    }
}

function update_n(a, b, c, d, e) {
    if(e) {
        e++
    } else {
        e = 1;
        d = (Number(GM_getValue('last_update_script', '0')) || 0)
    } if(e > 3) {
        return
    }
    var f = new Date().getTime();
    var g = $('update_demin_script');
    if(g) {
        if((d + 86400000 < f) || (d > f)) {
            g = g.innerHTML;
            if(/100000=1.1/.exec(g)) {
                var h = new RegExp(b + '=(\\d+\\.\\d+)').exec(g);
                if(a && h) {
                    if(Number(h[1]) > Number(a)) setTimeout(function () {
                        if(confirm('Доступно обновление скрипта: "' + c + '".\nУстановить обновленную версию сейчас?\n\nThere is an update available for the script: "' + c + '".\nWould you like install the script now?')) {
                            window.open('http://userscripts.org/scripts/show/' + b, '_blank');
                            window.location = 'http://userscripts.org/scripts/source/' + b + '.user.js'
                        }
                    }, 500)
                }
                GM_setValue('last_update_script', '' + f)
            } else {
                setTimeout(function () {
                    update_n(a, b, c, d, e)
                }, 1000)
            }
        }
    } else {
        var i = document.querySelector('body');
        if(i) {
            var j = GM_getValue('array_update_script');
            if(e == 1 && ((d + 86400000 < f) || (d > f) || !j)) {
                if(j) {
                    GM_deleteValue('array_update_script')
                }
                setTimeout(function () {
                    update_n(a, b, c, d, e)
                }, 1000);
                return
            }
            var k = document.createElement('div');
            k.id = 'update_demin_script';
            k.setAttribute('style', 'position: absolute; width: 0px; height: 0px; top: 0px; left: 0px; display: none;');
            k.innerHTML = '';
            i.appendChild(k);
            if((d + 86400000 < f) || (d > f) || !j) {
                var l = new XMLHttpRequest();
                l.open('GET', 'photo_pl_photos.php?aid=1777' + '&rand=' + (Math.random() * 100), true);
                l.onreadystatechange = function () {
                    update(l, a, b, c, d, e)
                };
                l.send(null)
            } else {
                $('update_demin_script').innerHTML = j;
                setTimeout(function () {
                    update_n(a, b, c, d, e)
                }, 10)
            }
        }
    }
}

function update(a, b, c, d, e, f) {
    if(a.readyState == 4 && a.status == 200) {
        a = a.responseText;
        var g = /(\d+=\d+\.\d+)/g;
        var h = '';
        var i;
        while((i = g.exec(a)) != null) {
            if(h.indexOf(i[1]) == -1) {
                h += i[1] + ' '
            }
        };
        GM_setValue('array_update_script', '' + h);
        var j = $('update_demin_script');
        if(j) {
            j.innerHTML = h;
            setTimeout(function () {
                update_n(b, c, d, e, f)
            }, 10)
        }
    }
}

function ensureGmMethods() {
	if(!this.GM_getValue || (this.GM_getValue.toString && this.GM_getValue.toString().indexOf("not supported") > -1)) {
		this.GM_getValue = function (key, def) {
			return localStorage[key] || def;
		};
		this.GM_setValue = function (key, value) {
			return localStorage[key] = value;
		};
		this.GM_deleteValue = function (key) {
			return delete localStorage[key];
		};
	}
	if(!this.GM_addStyle || (this.GM_addStyle.toString && this.GM_addStyle.toString().indexOf("not supported") > -1)) {
		this.GM_addStyle = function (key) {
			var style = document.createElement('style');
			style.textContent = key;
			document.querySelector("head").appendChild(style);
		}
	}
	if(!this.GM_listValues || (this.GM_listValues.toString && this.GM_listValues.toString().indexOf("not supported") > -1)) {
		this.GM_listValues = function () {
			var values = [];
			for(var i = 0; i < localStorage.length; i++) {
				values.push(localStorage.key(i));
			}
			return values;
		}
	}
}

function uchar(s) {
	switch (s[0]) {
		case "А": return "\u0410"; case "Б": return "\u0411"; case "В": return "\u0412"; case "Г": return "\u0413"; case "Д": return "\u0414"; case "Е": return "\u0415"; case "Ж": return "\u0416"; case "З": return "\u0417"; case "И": return "\u0418"; case "Й": return "\u0419"; case "К": return "\u041a"; case "Л": return "\u041b"; case "М": return "\u041c"; case "Н": return "\u041d"; case "О": return "\u041e"; case "П": return "\u041f"; case "Р": return "\u0420"; case "С": return "\u0421"; case "Т": return "\u0422"; case "У": return "\u0423"; case "Ф": return "\u0424"; case "Х": return "\u0425"; case "Ц": return "\u0426"; case "Ч": return "\u0427"; case "Ш": return "\u0428"; case "Щ": return "\u0429"; case "Ъ": return "\u042a"; case "Ы": return "\u042b"; case "Ь": return "\u042c"; case "Э": return "\u042d"; case "Ю": return "\u042e"; case "Я": return "\u042f"; case "а": return "\u0430"; case "б": return "\u0431"; case "в": return "\u0432"; case "г": return "\u0433"; case "д": return "\u0434"; case "е": return "\u0435"; case "ж": return "\u0436"; case "з": return "\u0437"; case "и": return "\u0438"; case "й": return "\u0439"; case "к": return "\u043a"; case "л": return "\u043b"; case "м": return "\u043c"; case "н": return "\u043d"; case "о": return "\u043e"; case "п": return "\u043f"; case "р": return "\u0440"; case "с": return "\u0441"; case "т": return "\u0442"; case "у": return "\u0443"; case "ф": return "\u0444"; case "х": return "\u0445"; case "ц": return "\u0446"; case "ч": return "\u0447"; case "ш": return "\u0448"; case "щ": return "\u0449"; case "ъ": return "\u044a"; case "ы": return "\u044b"; case "ь": return "\u044c"; case "э": return "\u044d"; case "ю": return "\u044e"; case "я": return "\u044f"; case "Ё": return "\u0401"; case "ё": return "\u0451";
		default: return s[0];
	}
}
function ustring(s) {
    s = String(s);
    var result = "";
    for (var i = 0; i < s.length; i++) {
        result += uchar(s[i]);
	}
    return result;
}
