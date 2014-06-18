var CHAPTERKEY = "currentChapter";

if (Cookie.test()) {
	var currentChapter = Cookie.get(CHAPTERKEY);
	if (currentChapter) {
		showLoadChapterDialog(currentChapter);
	} 
}

$('#chapter_0').waypoint(function(direction)
		{
			toggleNavChapter(0);
			setCurrentChapter(0);
		}, {
			offset : 100
		});

for (var i = 1; i <= 16; i++) {
	var secSelector = "#chapter_" + i;
	$(secSelector).waypoint(function(direction)
		{
			var chapterNum = this.id.split("_")[1];

			toggleNavChapter(chapterNum-1);
			toggleNavChapter(chapterNum);
		
			if(direction === "down"){
				setCurrentChapter(chapterNum);
			}
			else if (direction === "up"){
				setCurrentChapter(chapterNum-1);
			}
		}, {
		offset : 100
	});
}

function toggleNavChapter(chapterNum) {
	$("#nav"+ chapterNum).toggleClass('current');

}

function showLoadChapterDialog(chapNum){
	$("#dialog-text").text("Go to where you left off at chapter " + chapNum + "?");

	$(function() {
	    $( "#dialog-confirm" ).dialog({
	      resizable: false,
	      modal: true,
	      buttons: {
	        "Yes": function() {
	          goToChapterNumber(chapNum);
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

function setCurrentChapter(chapNum){
	if (Cookie.test()) {
		Cookie.set(CHAPTERKEY, chapNum);
	}
}
function unsetCurrentChapter(){
	if (Cookie.test()) {
		Cookie.unset(CHAPTERKEY);
	}
}
function goToChapterNumber(chapNum){
	$('#chapter_' + chapNum)[0].scrollIntoView( true );
}
