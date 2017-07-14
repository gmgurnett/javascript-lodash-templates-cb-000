function postComment() {     
	var commenter = document.getElementById("commenterName").value;     
	var comment = document.getElementById("commentText").value;     
		//insert comment into "comments" div in this format:
 		//<div class="comment"><p>comment</p><p>Posted By: <span class="commenter">commenter</span></p></div>
 
 		//create template string from HTML lodash comment-template
	var commentTemplate = document.getElementById("comment-template").innerHTML;
	//create template function
	var templateFN = _.template(commentTemplate);

	var commentsDiv = document.getElementById("comments");

	//execute template function with JSON object for the interpolated values

	var templateHTML = templateFN ({'comment': comment, 'commenter': commenter});

	//append rather than replace!
	commentsDiv.innerHTML += templateHTML;
}
