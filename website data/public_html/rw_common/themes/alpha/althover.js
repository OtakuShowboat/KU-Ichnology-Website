//<![CDATA[
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
    } else {
     sectionLink.className += ' ' + activeClass;
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