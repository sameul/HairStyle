//JavaScript Document

WriteHtml();

function WriteHtml()
{
	if(screen.width >= 1920)
	{
		document.write('<img src="images/images1920/head01.jpg" id="dd_scroll">');	
	}
	else if(screen.width >= 1360)
	{
		document.write('<img src="images/images1360/head01.jpg" id="dd_scroll">');
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
}