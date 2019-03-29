function inicjalizacjaStyl() 
{
	var tytulStylu = getCookie('styl');
    if (tytulStylu != null) 
    {
        zmienStyl(tytulStylu);
    }
}

function pokazStyle(){
	var ul = document.createElement('ul');
	style = document.getElementsByTagName("link");
	for(var i = 0; i < style.length ; i++) {	
		var li = document.createElement('li');
		var a = document.createElement('a');
		a.setAttribute("onclick","zmienStyl('"+style[i].title+"');");
		a.innerHTML = style[i].title;
		li.appendChild(a);
		ul.appendChild(li);
	}
	document.getElementById("menu").appendChild(ul);
	
}

function setCookie(cname, cvalue) {
	var d = new Date();
	d.setTime(d.getTime() + (7*24*60*60*1000));
	var expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=~/";
	
}

function zmienStyl(styl){
	setCookie('styl', styl);   
	var link = document.getElementsByTagName('link');
	for(var i = 0; i < link.length; i++ ) {
		if(link[i].title==styl){
			link[i].disabled=false;
		}
		else{
			link[i].disabled=true;
		}
	}
	
}

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
		
	}
	return "glowny";
 
}




