//JavaScript Document

WriteHtml();

function WriteHtml()
{
	if(screen.width >= 1920)
	{
		document.write('<img src="images/images1920/validate.gif"  alt="版权"  style="vertical-align:middle;"/>');	
	}
	else if(screen.width >= 1360)
	{
		document.write('<img src="images/images1360/validate.gif"  alt="版权"  style="vertical-align:middle;"/>');	
	}
	else if(screen.width >= 1280)
	{
		document.write('<img src="images/images1280/validate.gif"  alt="版权"  style="vertical-align:middle;"/>');
	}
	else if(screen.width >= 1152)
	{
		document.write('<img src="images/images1152/validate.gif"  alt="版权"  style="vertical-align:middle;"/>');	
	}
	else if(screen.width >= 1024)
	{
		document.write('<img src="images/images1024/validate.gif"  alt="版权"  style="vertical-align:middle;"/>');	
	}
}