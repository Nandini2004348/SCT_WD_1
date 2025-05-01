window.addEventlistener("scroll",()=>{
	document.queryselector(".navbar").classlist.toggle("scrolled",window.scrollY > 50);
});