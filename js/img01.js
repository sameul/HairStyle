//JavaScript Document

WriteHtml();

function WriteHtml()
{
	if(screen.width >= 1920)
	{
		document.write('<img src="images/images1920/dd_book_mess.gif" alt="mess" style=" vertical-align: middle;"/>');	
	}
	else if(screen.width >= 1360)
	{
		document.write('<img src="images/images1360/dd_book_mess.gif" alt="mess" style=" vertical-align: middle;"/>');
	}
	else if(screen.width >= 1280)
	{
		document.write('<img src="images/images1280/dd_book_mess.gif" alt="mess" style=" vertical-align: middle;"/>');
	}
	else if(screen.width >= 1152)
	{
		document.write('<img src="images/images1152/dd_book_mess.gif" alt="mess" style=" vertical-align: middle;"/>');	
	}
	else if(screen.width >= 1024)
	{
		document.write('<img src="images/images1024/dd_book_mess.gif" alt="mess" style=" vertical-align: middle;"/>');
	}
}