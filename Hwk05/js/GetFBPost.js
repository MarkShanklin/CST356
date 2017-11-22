var post = $('#messages');

$(document).ready(function(){
    document.getElementById('Button').onclick = function(){ 
		FB.api('/OregonTech/feed?fields=id,message,link,from,picture', function (response) {
			console.log(response);
			response.data.forEach(function(x) {
				//console.log(x);
				if(x.hasOwnProperty('message'))
				{
					if(x.hasOwnProperty('from') && x.from.name === 'Oregon Tech')
					{
						post.append('<li><div class="post"><a href="'+ x.link +'"><img id="pic" src="'+ x.picture + '" alt="picture"></a>'+ x.message +'</div></li>');
					}
					else
					{
						post.append('<li><div class="post">'+x.message+'</div></li>');
					}
				}
			});
		});		
	}
});