import {win_init, win_display, win_content} from "../winlib.js";
const w = win_init("Window");
win_content(w, "" +
    "<h1>Heading</h1>")
win_display(document.body, w);



    

