//banner
{
	const imgs=document.querySelectorAll(".banner_box_xia_imgs li");
	const pagers=document.querySelectorAll(".banner_pagebox li");
	const color=document.querySelectorAll(".banner_imgs li")
	const banner=document.querySelector(".banner");
	pagers.forEach(function(ele,index){
		ele.onmouseenter=function(){
			for(let i=0;i<imgs.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
				color[i].classList.remove("active");
			}
			this.classList.add("active");
			imgs[index].classList.add("active");
			color[index].classList.add("active");
			n=index;
		}
	});
	let n=0;
	let t=setInterval(move,3000);
	function move(){
		n++;
		// n=n%5;
		if(n===imgs.length){
			n=0;
		}
		if(n<0){
			n=imgs.length-1;
		}
		for(let i=0;i<imgs.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
				color[i].classList.remove("active");
			}
			imgs[n].classList.add("active");
			pagers[n].classList.add("active");
			color[n].classList.add("active");
	}
	banner.onmouseenter=function(){
		clearInterval(t);
	}
	banner.onmouseleave=function(){
		t=setInterval(move,3000);
		
	}
	imgs.forEach(function(ele,index){
		ele.addEventListener("transitionend",function(){
			flag=true;
		})
	})

}
//top
{
	const topbar=document.querySelector(".topbar");
	const leftbar=document.querySelector(".leftbar");
	window.onscroll=function(){
		let st=document.documentElement.scrollTop;
		if(st>729){
			topbar.style.display="block";
		}else{
			topbar.style.display="none";
		}
		if(st>630){
			leftbar.style.display="block";
		}else{
			leftbar.style.display="none";
		}
		
	}
}
//left
{
	let items=document.querySelectorAll(".leftbar_item");
	let contains=document.querySelectorAll(".box");
	let leftfan=document.querySelector(".leftbar_di");
	leftfan.onclick=function(){
		document.documentElement.scrollTop=0;
	}
	let flag=true;
	items.forEach(function(ele,index){
		ele.onclick=function(){
			flag=false;
			let ot=contains[index].offsetTop-150;
			document.documentElement.scrollTop=ot;
			let now=document.documentElement.scrollTop;
			let speed=(ot-now)/10;
			let time=0;
			let t=setInterval(function(){
				time+=25;
				now+=speed;
				if(time===200){
					clearInterval(t);
					flag=true;
				}
				document.documentElement.scrollTop=now;
			},25)
		}
	});
}
//right
{
	const spe=document.querySelectorAll(".rigbar_xiao");
	const tan=document.querySelectorAll(".rigbar_xia_tan");
	spe.forEach(function(ele,index){
		ele.onmouseenter=function(){
			tan[index-1].style.opacity=1;
			tan[index-1].style.marginRight="0";
			// tan[index].style.opacity=1;

		}
		ele.onmouseleave=function(){
			tan[index-1].style.opacity=0;
			tan[index-1].style.marginRight="125px";

			// tan[index].style.zIndex="-1";
		}
	})
}