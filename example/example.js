import {init_window, remove_window, hide_window, show_window} from "../winlib.js";;
const app = document.getElementById("app");
const my_window = init_window();
const text = document.getElementById("title");
const content = document.getElementById("content");

text.innerText = "A titled window";
app.appendChild(my_window);
const heading_1 = document.createElement("h1");
heading_1.innerText = "This is content in a window";
content.appendChild(heading_1);


    

