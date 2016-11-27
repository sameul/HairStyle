//JavaScript Document

WriteHtml();

function WriteHtml()
{
	if(screen.width >= 1920)
	{
		document.write('<img src="images/images1920/best_employee.jpg" alt="mess" style=" vertical-align: middle;"/>');	
	}
	else if(screen.width >= 1280)
	{
		document.write('<img src="images/images1280/best_employee.jpg" alt="mess" style=" vertical-align: middle;"/>');	
	}
	else if(screen.width >= 1152)
	{
		document.write('<img src="images/images1152/best_employee.jpg" alt="mess" style=" vertical-align: middle;"/>');	
	}
	else if(screen.width >= 1024)
	{
		document.write('<img src="images/images1024/best_employee.jpg" alt="mess" style=" vertical-align: middle;"/>');
	}
}