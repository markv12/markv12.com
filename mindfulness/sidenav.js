/*for (var i = 1; i <= 16; i++) {
	var secSelector = "#chapter_" + i;
	var sideNavSelector = "#nav" + i;
	console.log(secSelector);
	$(secSelector).waypoint(function(){highlightNav(sideNavSelector)}, {
		offset : 100
	});
}
 */

var CHAPTERKEY = "currentChapter";

if (Cookie.test()) {
	var currentChapter = Cookie.get(CHAPTERKEY);
	if (currentChapter) {
		showLoadChapterDialog(currentChapter);
	} else {
		setCurrentChapter(0);
	}
}
showLoadChapterDialog(0);

function toggleNav(navID) {
	$(navID).toggleClass('current');

}
$('#chapter_0').waypoint(function() {
	toggleNav("#thetop");
	setCurrentChapter(0);
}, {
	offset : 100
});
$('#chapter_1').waypoint(function() {
	toggleNav("#thetop");
	toggleNav("#nav1");
	setCurrentChapter(1);
}, {
	offset : 100
});
$('#chapter_2').waypoint(function() {
	toggleNav("#nav1");
	toggleNav("#nav2");
	setCurrentChapter(2);
}, {
	offset : 100
});
$('#chapter_3').waypoint(function() {
	toggleNav("#nav2")
	toggleNav("#nav3")
	setCurrentChapter(3);
}, {
	offset : 100
});
$('#chapter_4').waypoint(function() {
	toggleNav("#nav3")
	toggleNav("#nav4")
	setCurrentChapter(4);
}, {
	offset : 100
});
$('#chapter_5').waypoint(function() {
	toggleNav("#nav4")
	toggleNav("#nav5")
	setCurrentChapter(5);
}, {
	offset : 100
});
$('#chapter_6').waypoint(function() {
	toggleNav("#nav5")
	toggleNav("#nav6")
	setCurrentChapter(6);
}, {
	offset : 100
});
$('#chapter_7').waypoint(function() {
	toggleNav("#nav6")
	toggleNav("#nav7")
	setCurrentChapter(7);
}, {
	offset : 100
});
$('#chapter_8').waypoint(function() {
	toggleNav("#nav7")
	toggleNav("#nav8")
	setCurrentChapter(8);
}, {
	offset : 100
});
$('#chapter_9').waypoint(function() {
	toggleNav("#nav8")
	toggleNav("#nav9")
	setCurrentChapter(9);
}, {
	offset : 100
});
$('#chapter_10').waypoint(function() {
	toggleNav("#nav9")
	toggleNav("#nav10")
	setCurrentChapter(10);
}, {
	offset : 100
});
$('#chapter_11').waypoint(function() {
	toggleNav("#nav10")
	toggleNav("#nav11")
	setCurrentChapter(11);
}, {
	offset : 100
});
$('#chapter_12').waypoint(function() {
	toggleNav("#nav11")
	toggleNav("#nav12")
	setCurrentChapter(12);
}, {
	offset : 100
});
$('#chapter_13').waypoint(function() {
	toggleNav("#nav12")
	toggleNav("#nav13")
	setCurrentChapter(13);
}, {
	offset : 100
});
$('#chapter_14').waypoint(function() {
	toggleNav("#nav13")
	toggleNav("#nav14")
	setCurrentChapter(14);
}, {
	offset : 100
});
$('#chapter_15').waypoint(function() {
	toggleNav("#nav14")
	toggleNav("#nav15")
	setCurrentChapter(15);
}, {
	offset : 100
});
$('#chapter_16').waypoint(function() {
	toggleNav("#nav15")
	toggleNav("#nav16")
	setCurrentChapter(16);
}, {
	offset : 100
});

function showLoadChapterDialog(chapterNum){
	$("#dialog-text").text("Go to where you left off at chapter " + chapterNum + "?");

	$(function() {
	    $( "#dialog-confirm" ).dialog({
	      resizable: false,
	      modal: true,
	      buttons: {
	        "Yes": function() {
	    	  loadChapterSelection(chapterNum);
	          $( this ).dialog( "close" );
	        },
	        "No": function() {
	          unsetCurrentChapter();
	          $( this ).dialog( "close" );
	        }
	      }
	    });
	  });
}

function loadChapterSelection(sectionNum) {
	var pageSection = "#chapter_" + sectionNum;
	this.document.location.href = pageSection;

}
function setCurrentChapter(chapter){
	if (Cookie.test()) {
		Cookie.set(CHAPTERKEY, chapter);
	}
}
function unsetCurrentChapter(){
	if (Cookie.test()) {
		Cookie.unset(CHAPTERKEY);
	}
}
