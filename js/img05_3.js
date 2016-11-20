//JavaScript Document

WriteHtml();

function WriteHtml()
{
	if(screen.width >= 1920)
	{
		document.write('<dt><img src="images/images1920/makeup01.jpg" alt="focus"/></dt>');	
		document.write('<dt><img src="images/images1920/makeup02.jpg" alt="focus"/></dt>');	
		document.write('<dt><img src="images/images1920/makeup03.jpg" alt="focus"/></dt>');	
		document.write('<dt><img src="images/images1920/makeup04.jpg" alt="focus"/></dt>');	
	}
	else if(screen.width == 1024)
	{
		document.write('<dt><img src="images/images1024/makeup01.jpg" alt="focus"/></dt>');	
		document.write('<dt><img src="images/images1024/makeup02.jpg" alt="focus"/></dt>');	
		document.write('<dt><img src="images/images1024/makeup03.jpg" alt="focus"/></dt>');	
		document.write('<dt><img src="images/images1024/makeup04.jpg" alt="focus"/></dt>');	
	}
}