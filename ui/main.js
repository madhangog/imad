var button = document.getElementById('counter');
button.onclick = function(){

	//creating requesr\t object

	var request = new XMLHttpRequest()


		// capture the response iand store it in the variable


	request.onreadystatechange = function(){
		if(request.readyState === XMLHttpRequest.DONE){
			if(request.status===200){
				var counter = request.responseText;
    			var span = document.getElementById('count')
    			span.innerHTML=counter.toString();
    		}
    	} 
    };

    //make the request

    request.open('GET', "/counter", true);
	request.send(null);
	};	

	
	var submit = document.getElementById("submitbt");
	submit.onclick = function() {

			// capture the response iand store it in the variable

			var request = new XMLHttpRequest()
			request.onreadystatechange = function(){
			if(request.readyState === XMLHttpRequest.DONE){
			if(request.status===200){
					//make the request to the server and send the name
			//capture the list of names and render it as list
			var names = request.responseText;
			names = JSON.parse(names);
			var list ='';
			for (var i=0; i<names.length; i++)
			{
				list += '<li>'+names[i]+'</li>';
			}
			var ul = document.getElementById('namelist');
			ul.innerHTML = list;
    		}
    	} 
    };

    //make the request
    //sumbit name 
	var nameinput = document.getElementById('name');
	var name = nameinput.value;
    request.open('GET', "/submitname?name="+name, true);
	request.send(null);
	
	};
  