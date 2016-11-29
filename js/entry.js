//JavaScript Document
var Other1920_0="index.css";
var Other1920_1="template.css"

var Other1600_0="";
var Other1600_1="";

var Other1280_0="";
var Other1280_1="";

var Other1152_0="";
var Other1152_1="";

var Other1024_0="";
var Other1024_1="";

var Other800_0="";
var Other800_1="";

ScreenWidth();

function ScreenWidth()
{
	if(screen.width >= 1920)
	{
		// SetActiveStyleSheet(Other1920_0, Other1920_1);
		document.write('<link rel="stylesheet type="text/css" href="./css/css1920/index.css">');
		document.write('<link rel="stylesheet type="text/css" href="./css/css1920/template.css">');
	}
	else if (screen.width >= 1600)
	{
		// SetActiveStyleSheet(Other1600_0, Other1600_1);
		document.write('<link rel="stylesheet type="text/css" href="./css/css1600/index.css">');
		document.write('<link rel="stylesheet type="text/css" href="./css/css1600/template.css">');
	}
	else if(screen.width >= 1360)
	{
		document.write('<link rel="stylesheet type="text/css" href="./css/css1360/index.css">');
		document.write('<link rel="stylesheet type="text/css" href="./css/css1360/template.css">');
	}
	else if(screen.width >= 1280)
	{
		// SetActiveStyleSheet(Other1280_0, Other1280_1);
		document.write('<link rel="stylesheet type="text/css" href="./css/css1280/index.css">');
		document.write('<link rel="stylesheet type="text/css" href="./css/css1280/template.css">');
	}
	else if(screen.width >= 1152)
	{
		// SetActiveStyleSheet(Other1152_0, Other1152_1);
		document.write('<link rel="stylesheet type="text/css" href="./css/css1152/index.css">');
		document.write('<link rel="stylesheet type="text/css" href="./css/css1152/template.css">');
	}
	else if(screen.width >= 1024)
	{
		// SetActiveStyleSheet(Other1024_0, Other1024_1);
		document.write('<link rel="stylesheet type="text/css" href="./css/css1024/index.css">');
		document.write('<link rel="stylesheet type="text/css" href="./css/css1024/template.css">');
	}
	else if(screen.width >= 800)
	{
		// SetActiveStyleSheet(Other800_0, Other800_1);
		document.write('<link rel="stylesheet type="text/css" href="./css/css800/index.css">');
		document.write('<link rel="stylesheet type="text/css" href="./css/css800/template.css">');
	}
}

// }
