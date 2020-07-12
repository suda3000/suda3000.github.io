function mob_jdt(){
	var tabScroll=new iScroll('imgTabNav', {hScrollbar:false, vScrollbar:false });
	//tabScroll.scrollTo(-300,0,1000,false);
	var oImgTab=document.getElementById('imgTabNav');
	var aContent=document.getElementById("vTit01").getElementsByTagName("p");
	var aShowList=document.getElementById("btnTab01").getElementsByTagName("li");
	var oImgTabMouseX=0;
	var currentIndex=0;
	var _clickChange=0;
	//var oLeng = aShowList.length;

	var oTimer=setInterval(function(){
		currentIndex++;
		if(currentIndex>3){
			currentIndex=0;
		}
		tabScroll.scrollTo((-currentIndex%4)*300,0,1000,false);
		showTabs();
	},8000);


	oImgTab.ontouchstart=function(ev){
	if(oTimer){
		clearInterval(oTimer);
	}
	oImgTabMouseX=ev.touches[0] && ev.touches[0].pageX || ev.pageX;
	}
	oImgTab.ontouchmove=function(ev){
	  _clickChange=ev.touches[0] && ev.touches[0].pageX || ev.pageX;
	}
	oImgTab.ontouchend=function(ev){
	var _x=_clickChange-oImgTabMouseX;
	//alert(_clickX);
	//alert(_x);
	if(_x<0){
		if(_x<-50){
			currentIndex++;
			if(currentIndex>=3){
				currentIndex=3;
			}
		}
	   //document.title=_x+"|"+currentIndex;

		tabScroll.scrollTo((-currentIndex%4)*300,0,1000,false);
	}

	if(_x>0){
		if(_x>50){
			currentIndex--;
			if(currentIndex<=0){
				currentIndex=0;
			}
		}
		tabScroll.scrollTo((-currentIndex%4)*300,0,1000,false);
	}
	showTabs();
	oTimer=setInterval(function(){
		currentIndex++;
		if(currentIndex>3){
			currentIndex=0;
		}
		tabScroll.scrollTo((-currentIndex%4)*300,0,1000,false);
		showTabs();
	},8000);
	}

	function showTabs(){
		for(var i=0;i<aContent.length;i++){
			aContent[i].style.display="none";
		}
		aContent[currentIndex].style.display="block";

		for(var i=0;i<aContent.length;i++){
			aShowList[i].getElementsByTagName("span")[0].className="";
		}
		aShowList[currentIndex].getElementsByTagName("span")[0].className="current01";
	}


};