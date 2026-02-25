import {win_init, win_display, win_content, win_draggable} from "../winlib.js";
const w = win_init("Title");
win_content(w, "" +
    "<h1>Heading</h1>" +
    "<p>content</p>")
win_display(document.body, w);
win_draggable(w)



    

