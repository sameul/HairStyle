// JavaScript Document
function $(element)
{
	return document.getElementById(element);
}

var scroll_img = new Array();
if(screen.width >= 1920)
{
	scroll_img[0] = "images/images1920/head01.jpg";
	scroll_img[1] = "images/images1920/head02.jpg";
	scroll_img[2] = "images/images1920/head03.jpg";
	scroll_img[3] = "images/images1920/head04.jpg";
	scroll_img[4] = "images/images1920/head05.jpg";
	scroll_img[5] = "images/images1920/head06.jpg";
}
else if(screen.width == 1024)
{
	scroll_img[0] = "images/images1024/head01.jpg";
	scroll_img[1] = "images/images1024/head02.jpg";
	scroll_img[2] = "images/images1024/head03.jpg";
	scroll_img[3] = "images/images1024/head04.jpg";
	scroll_img[4] = "images/images1024/head05.jpg";
	scroll_img[5] = "images/images1024/head06.jpg";
}

var scroll_number = new Array();
scroll_number[0] = "scroll_number_1";
scroll_number[1] = "scroll_number_2";
scroll_number[2] = "scroll_number_3";
scroll_number[3] = "scroll_number_4";
scroll_number[4] = "scroll_number_5";
scroll_number[5] = "scroll_number_6";
var NowFrame = 1;
var MaxFrame = 6;

function loopShow(elementId)
{
	if(Number(elementId))
	{
		NowFrame = elementId;
	}
	for(var i = 1; i < (MaxFrame + 1); i++)
	{
		if( i == NowFrame)
		{
			document.getElementById("dd_scroll").src = scroll_img[i - 1];
			document.getElementById(scroll_number[i - 1]).className="scroll_number_over";
		}
		else
		{
			document.getElementById(scroll_number[i - 1]).className="scroll_number_out";
		}
	}
	if(NowFrame == MaxFrame)
	{
		NowFrame = 1;
	}
	else
	{
		NowFrame++;
	}
}
var theTimer = setInterval('loopShow()', 3000);

var huazhuangpinCate = new Array();
huazhuangpinCate[0] = "huazhuangpin_hufu";
huazhuangpinCate[1] = "huazhuangpin_meirong";
huazhuangpinCate[2] = "huazhuangpin_xiangshui";
huazhuangpinCate[3] = "huazhuangpin_meifa";
var huazhuangpinClass = new Array();
huazhuangpinClass[0] = "hufu";
huazhuangpinClass[1] = "meirong";
huazhuangpinClass[2] = "xiangshui";
huazhuangpinClass[3] = "meifa";
function huazhuangpinPutUp(elementId)
{
	for(var i = 0; i < huazhuangpinCate.length; i++)
	{
		if(elementId == i)
		{
			document.getElementById(huazhuangpinCate[i]).className = "huazhuangpin_show";
			document.getElementById(huazhuangpinClass[i]).className = "huazhuangpin_head_type_out";
		}
		else
		{
			document.getElementById(huazhuangpinCate[i]).className = "huazhuangpin_none";
			document.getElementById(huazhuangpinClass[i]).className = "huazhuangpin_head_type";
		}
	}
}