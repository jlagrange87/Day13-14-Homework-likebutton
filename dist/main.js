$(document).on("ready", start);

function start(e){
	var $btn = $("#likeButton");
	$btn.on("click", like);
	var count = 0 //Initialize a count from 0 in the beginning

	function like(e){
		count++ //Start the count
		console.log(count); //I wanted to see if it output a number like I wanted it to.
		if(count === 1) {
			$btn.html("1 Like");
		}	
		else {
			$btn.html(count + " Likes")
		}
	}
}