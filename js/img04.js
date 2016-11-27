<<<<<<< HEAD
//JavaScript Document

WriteHtml();

function WriteHtml()
{
	if(screen.width >= 1920)
	{
		document.write('<img src="images/images1920/head01.jpg" id="dd_scroll">');	
	}
	else if(screen.width >= 1280)
	{
		document.write('<img src="images/images1280/head01.jpg" id="dd_scroll">');
	}
	else if(screen.width >= 1152)
	{
		document.write('<img src="images/images1152/head01.jpg" id="dd_scroll">');
	}
	else if(screen.width >= 1024)
	{
		document.write('<img src="images/images1024/head01.jpg" id="dd_scroll">');	
	}
=======
//JavaScript Document

WriteHtml();

function WriteHtml()
{
	if(screen.width >= 1920)
	{
		document.write('<img src="images/images1920/head01.jpg" id="dd_scroll">');	
	}
	else if(screen.width == 1024)
	{
		document.write('<img src="images/images1024/head01.jpg" id="dd_scroll">');	
	}
>>>>>>> 46bb8ec138f9648023cc6d500e234730462faac0
}