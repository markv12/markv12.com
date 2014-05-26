/*for (var i = 1; i <= 16; i++) {
	var secSelector = "#chapter_" + i;
	var sideNavSelector = "#nav" + i;
	console.log(secSelector);
	$(secSelector).waypoint(function(){highlightNav(sideNavSelector)}, {
		offset : 50
	});
}
 */
function toggleNav(navID) {
	$(navID).toggleClass('current');

}
$('#top').waypoint(function() {
	toggleNav("#thetop");
}, {
	offset : 50
});
$('#chapter_1').waypoint(function() {
	toggleNav("#thetop");
	toggleNav("#nav1");
}, {
	offset : 50
});
$('#chapter_2').waypoint(function() {
	toggleNav("#nav1")
	toggleNav("#nav2")
}, {
	offset : 50
});
$('#chapter_3').waypoint(function() {
	toggleNav("#nav2")
	toggleNav("#nav3")
}, {
	offset : 50
});
$('#chapter_4').waypoint(function() {
	toggleNav("#nav3")
	toggleNav("#nav4")
}, {
	offset : 50
});
$('#chapter_5').waypoint(function() {
	toggleNav("#nav4")
	toggleNav("#nav5")
}, {
	offset : 50
});
$('#chapter_6').waypoint(function() {
	toggleNav("#nav5")
	toggleNav("#nav6")
}, {
	offset : 50
});
$('#chapter_7').waypoint(function() {
	toggleNav("#nav6")
	toggleNav("#nav7")
}, {
	offset : 50
});
$('#chapter_8').waypoint(function() {
	toggleNav("#nav7")
	toggleNav("#nav8")
}, {
	offset : 50
});
$('#chapter_9').waypoint(function() {
	toggleNav("#nav8")
	toggleNav("#nav9")
}, {
	offset : 50
});
$('#chapter_10').waypoint(function() {
	toggleNav("#nav9")
	toggleNav("#nav10")
}, {
	offset : 50
});
$('#chapter_11').waypoint(function() {
	toggleNav("#nav10")
	toggleNav("#nav11")
}, {
	offset : 50
});
$('#chapter_12').waypoint(function() {
	toggleNav("#nav11")
	toggleNav("#nav12")
}, {
	offset : 50
});
$('#chapter_13').waypoint(function() {
	toggleNav("#nav12")
	toggleNav("#nav13")
}, {
	offset : 50
});
$('#chapter_14').waypoint(function() {
	toggleNav("#nav13")
	toggleNav("#nav14")
}, {
	offset : 50
});
$('#chapter_15').waypoint(function() {
	toggleNav("#nav14")
	toggleNav("#nav15")
}, {
	offset : 50
});
$('#chapter_16').waypoint(function() {
	toggleNav("#nav15")
	toggleNav("#nav16")
}, {
	offset : 50
});
