$(document).on("ready", start);

function start(e){
	var $btn = $("#likeButton");
	$btn.on("click", like);
	var count = 0

	function like(e){
		count++
		console.log(count);
		if(count === 1) {
			$btn.html("1 like");
		}	
		else {
			$btn.html(count + " likes")
		}
	}
}