//<![CDATA[

//Not the most elegant of code, but it gets the job done. Sets a class of "current" to the link on the navbar for the current page and up to two parents (e.g. if on the Ants Scraping video page, the Videos, Tracemaking Experiments, and Ants Scraping link list elements will have a class of "current" and get highlighted by colourtag.css, currently set to White (#FFFFFF). Code originally from a separate blog hosting site, but modified to add the second level check and the homepage path check so that "KU Ichnology" is highlighted when first entering the site.

var homeLink = document.getElementById("homepage");
if(window.location.pathname == "/") //Checks if the path is empty (i.e. you are on the home URL: ichnology.ku.edu and not on another page such as ichnology.ku.edu/tracefossils.html).
	{
		homeLink.className += "current";
	};
 function setActiveLink(currentUrl) {
  var activeClass = 'current';
  var navLinks = document.querySelectorAll('#navcontainer a'); //all links inside the nav
  for (var i = 0, l = navLinks.length; i < l; i++) {
   var link = navLinks[i];
   var url = link.getAttribute('href');

   if(currentUrl == url) {
    if (link.classList) {
     link.classList.add(activeClass);
    } else {
     link.className += ' ' + activeClass;
    }
    setActiveOnParents(link, activeClass);
   }
  }
 }
 
 function setActiveOnParents(link, activeClass) {
  console.log('setActiveOnParents');
  var listitem = link.parentNode; //a level above the link is the <li/>
  if (listitem && listitem.parentNode) { //check the <li/> exists and has a parent (<ul/>)
   var list = listitem.parentNode;
   if (!(list.getAttribute('id'))) { //if the <ul/> is not the nav wrapper proceed
    var topLevelItem = list.parentNode; // <li/> at the top level
    var children = topLevelItem.children;
    var sectionLink = {};
    for (var i = 0, l = children.length; i < l; i++) { //loop through children and get first one - should be the section link
     var child = children[i];
     if(child.nodeType == 1) {
      sectionLink = child;
      break;
     }
    }
    if (sectionLink.classList) {
     sectionLink.classList.add(activeClass);
	 if (listitem.parentNode.parentNode && listitem.parentNode.parentNode.parentNode) { //if parent of the parent <li /> exists and has parent <ul>
		var listParent = listitem.parentNode.parentNode.parentNode;
			if (!(listParent.getAttribute('id'))) {
				var topParentItem = listParent.parentNode;
				var childrenParent = topParentItem.children;
				var sectionParentLink = {};
				for (var i = 0, l = childrenParent.length; i < l; i++) { //loop through children and get first one - should be the section link
				var childParent = childrenParent[i];
					if(childParent.nodeType == 1) {
					sectionLinkParent = childParent;
					break;
					}
				}
				if (sectionLink.classList) {
				sectionLinkParent.classList.add(activeClass);
				} else {sectionLinkParent.className += ' ' + activeClass;					
				}
			}
	 }
	} else {
     sectionLink.className += ' ' + activeClass;
	 if (listitem.parentNode.parentNode && listitem.parentNode.parentNode.parentNode) { //if parent of the parent <li /> exists and has parent <ul>
		var listParent = listitem.parentNode.parentNode.parentNode;
			if (!(listParent.getAttribute('id'))) {
				var topParentItem = listParent.parentNode;
				var childrenParent = topParentItem.children;
				var sectionParentLink = {};
				for (var i = 0, l = childrenParent.length; i < l; i++) { //loop through children and get first one - should be the section link
				var childParent = childrenParent[i];
					if(childParent.nodeType == 1) {
					sectionLinkParent = childParent;
					break;
					}
				}
				if (sectionLink.classList) {
				sectionLinkParent.classList.add(activeClass);
				} else {sectionLinkParent.className += ' ' + activeClass;					
				}
			}
    }
   }
  }
 }
 }
  
 function ready(fn) {
  if (document.readyState != 'loading') {
   fn();
  } else {
   document.addEventListener('DOMContentLoaded', fn);
  }
 }
 

 
 function runApplication() {
  //console.log(window.location.pathname);
  setActiveLink(window.location.pathname + window.location.hash);
 }
 ready(runApplication);
//]]>