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

Feb 12: (1:00 am) Reduced video file size drastically (mainly due to GitHub file size restrictions) and uploaded to server. Site itself on the server is now only about 650 MB compared to 1.5 GB prior.