This is meant to log changes made to the KU Ichnology website from when it was first downloaded through the term of my employment.

The website is meant primarily as a catalogue of known ichnogenera, with valuable information about each trace. You know, because asking graduate students to actually do research to find out about trace fossils is like asking a cat to do pretty much anything without some sort of reward.
The website was very simple, coded primarily with HTML, CSS, and a very minimal amount of javascript.

The initial state of the site was as follows:

A few stylesheet errors leading to odd glitches in the navbar.
The ENTIRE website had the navbar and footer coded on every single html page - over 800 unique pages.
For some reason, a full clone of the website existed in the Video directory, and a partial older version of the site in the References.
Videos were broken. No video would play in any browser. 5 videos were corrupted. All videos were in .mov format.
Navigation would not link back to index page, but rather a page named page0, an outdated clone of index.
About Us pages were out of date and not reflective of those people who had graduated or dropped from the IBGS program. Some do not have pictures.
Contact page was only linked through the home index page and not in the navbar.
The vast majority of ichnogenera do not have pictures. Many have outdated or incorrect information.

CHANGELOG:

Jan 6, 2017:
Gained access to the website files today through the C-Panel file manager
Made backup through C-Panel of existing site - 1.75GB of 9.77 GB of space. Backup itself brings it closer to 3.5 of 10
Downloaded backup to Desktop and extracted the files to a backup folder on a (mostly) spare drive I'll be dedicating to website work
Added and replaced the following files on the live website:
styles.css (replacement)
jquery-3.1.1.min.js (added)
althover.js (added)

The changes are exclusively fixes to the website style, fixing the navbar pixel issue and centering the text in the footer. The added files are precursors to the updated site formatting utilizing a header.html and footer.html. jquery is needed for those files to work in the first place. althover is a script used to fix the navbar highlighting the current page with the new separate header.html. It works by adding a class named "current" to the link in the navbar for the current page and all of its parents. colourtag.css already has styling for the class name of "current," turning the text white for any link of class "current."

There is a complete copy of the website in the videos folder. There is no reason to have two copies of the same site, so removal is in order. This will reduce the site's footprint by a LOT. Also an incomplete copy in references.

Wasn't going to do more before officially hired on the live version of the site, but since I figured out how to bring back the word-wrapping to the site, I made the necessary edit for it. The site will now wrap content on window resize.

Feb 8: Added header.html and footer.html, as well as the updated index.html, contact_us.html, tracefossils.html
BUG: "KU Ichnology" is not colored white when accessing site from ichnology.ku.edu. It's white when accessing ichnology.ku.edu/index.html
colourtag.css: added #navcontainer .current, .current. Makes sure script that changes navbar text color white for active pages works.

Feb 9: HUGE update to the code. Every page now uses header.html and footer.html thanks to Regular Expressions in N++ find and replace system. Took longer to open the pages than to do the replacement and insertion edits on all of them. Also fixed ALL videos hosted by the site and updated all of their pages. All hosted video files also now have their audio removed. "Ants Burrowing" has been replaced with "Ants Breaking Through Tunnel Wall" for the time being. Fixed a couple of broken 3D images (pages were calling .tif files that wouldn't load so converted them to .jpg). The graduate and alumni pages have been updated, and the navbar now has a link to the alumni page. Contact Us page is now linked to the navbar as well. None of these have been rolled out the site, but they are absolutely ready to go in the morning.

Feb 10: Bugs in the trace fossil code have been squashed, as well as a couple errors on video pages. Added images for me and Matt Jones in About Us. Changed Alumni to degrees, rather than student types. All code-based fixes and edits are now on the live server. With that essentially all of my planned code changes are now complete.

Feb 12 (1:00 am): Reduced video file size drastically (mainly due to GitHub file size restrictions) and uploaded to server. Site itself on the server is now only about 650 MB compared to 1.5 GB prior.

Feb 13 (evening): Drastically optimized performance scores of the website. Grade of 100 on Pingdom, GTmetrix scores 98% PageSpeed and 97% YSlow. Combined css styles, removing unused stylesheets in the process. Combined javascript and jQuery into one file. htaccess file exists (was empty file on server) and does massive work now. Removed all references to deleted css and js files from all page Head elements. Side note - found out that compressing files in a zip lets me upload all of them at once to the server in cPanel file manager. Sped up deployment time as I have no ftp access while off campus (due to the campus firewall).

Feb 15 (morning): 
Scripts: Removed a lot of old code from the main javascript file. Big sections regarding flash and quicktime are gone now. "Althover.js" is removed. The code from althover is now under the jQuery library in javascript.js and is modified to all be in a single function that's called in header.html. This removes a console warning message about synchronous requests caused by the previous implementation of loading the althover.js script in the header file div tag rather than in a head tag. Adding the code to javascript.js meant not having to add the script to the head tag of every page on the site. Also deleted unused activex scripts and removed their references on the one page that used them (that I could find). 
Removed the KU Website Efficiency Update.zip file from the dev environment. It'll still be used to do batch site updates later if needed. Footer.html now adds my name to the text string as the current website developer. Readme updated. 

Feb 15 (Afternoon): 
Links page now has all links open in a new tab by changing the links to rel="external" from rel="self". 
Modified the navigation menu in preparation for further additions to the website: Trace Fossil list now the "important" spot next to the home page, About Us moved next to contact, and Current Research moved from being a child of About Us to its own parent and set between Principles of Ichnology and Videos. A longer term goal is to convert the navbar to javascript. 
Alphabetized graduate student and alumni pages by last name. Fixed bug in javascript navbar highlighting code - navbar now highlights Trace Fossils when on all trace fossil pages.
Trace Fossil pages now have a sidebar! The bar changes size with the content of the page and is the full link list of trace fossils from the main trace fossil page. This took 3 hours to get done properly, as I was having trouble figuring out the scaling thing (turns out I needed to set the bar to position: absolute and give the content a margin).

Feb 16:
Put changes from past few days live on the server. Made the trace pages have a min-height so that the navigation menu doesn't get too small. Added a picture to fuscinapeda. Added Presbyorniformipes page with three images. Added links to new page to trace fossils page and sidebar.

To Do List:
Traces: Font consistency between all pages
Traces: Start adding / fixing the traces I have in my research
New pages on Navajo Sandstone and Antarctica research
Current Research Page: Likely going to get the same treatment as the Trace Fossil pages at some point, as the plan is to develop it into a whole new section of the website with public information related to ongoing research, as well as photos and presentations.
Traces: Add pagination to navigate through traces? Back button on the pages that have single larger images?