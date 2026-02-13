
var version = "0.1";


export function init_window() {
    const main_canvas = document.createElement("div");
    app.appendChild(main_canvas);
    const title_bar = document.createElement("div");
    const title_text = document.createElement("span");
    const close_button = document.createElement("button");
    const content_area = document.createElement("div");
    
    
    title_text.innerText = "undefined window";
    title_text.setAttribute("id", "title");
    title_bar.appendChild(title_text);

    title_bar.style.backgroundColor = "blue";
    title_bar.style.height = "30px";
    title_bar.style.width = "100%";
    title_bar.style.position = "absolute";
    title_bar.style.top = "0";
    title_bar.style.left = "0";
    main_canvas.appendChild(title_bar);

    main_canvas.style.width = "400px";
    main_canvas.style.height = "300px";
    main_canvas.style.border = "1px solid black";
    main_canvas.style.position = "relative";

    close_button.innerText = "X";
    close_button.style.position = "absolute";
    close_button.style.top = "5px";
    close_button.style.right = "5px";
    title_bar.appendChild(close_button);
    close_button.addEventListener("click", () => remove_window(main_canvas));

    content_area.style.position = "absolute";
    content_area.style.top = "30px";
    content_area.style.left = "0";
    content_area.style.width = "100%";
    content_area.style.height = "calc(100% - 30px)";
    content_area.setAttribute("id", "content");
    main_canvas.appendChild(content_area);

    return main_canvas;
}
export function remove_window(window) {
    window.remove();
}
export function hide_window(window) {
    window.style.display = "none";
}
export function show_window(window) {
    window.style.display = "block";
}


