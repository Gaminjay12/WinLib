export function win_init(title = "No title given") {
    const win = document.createElement("div");
    win.className = 'window';

    //css
    win.style.borderRadius = "5px";
    win.style.position = "relative";
    win.style.width = "500px";
    win.style.height = "500px";
    win.style.border = "1px solid black";

    const titleBar = document.createElement("div");
    titleBar.className = 'title-bar';

    // css
    titleBar.style.width = "100%";
    titleBar.style.height = "20px";
    titleBar.style.backgroundColor = "#333";
    titleBar.style.color = "#fff";
    titleBar.style.userSelect = "none";

    const titleSpan = document.createElement("span");
    titleSpan.className = "title";
    titleSpan.innerText = title;
    titleBar.appendChild(titleSpan);

    const content = document.createElement("div");
    content.className = 'content';

    win.appendChild(titleBar);
    win.appendChild(content);

    return win;
}

// changes the window title
export function win_set_title(windowElement, title) {
    const titleSpan = windowElement.querySelector(".title");
    if (titleSpan) {
        titleSpan.innerText = title;
    }
}

// displays the window
export function win_display(containerElement, windowElement) {
    containerElement.appendChild(windowElement);
    return windowElement;
}
export function win_content(windowElement, htmlContent) {
    let content = windowElement.querySelector(".content");
    if (!content) {
        content = document.createElement("div");
        content.className = 'content';
        windowElement.appendChild(content);
    }
    content.innerHTML = htmlContent;
    return content;
}
export function win_remove(windowElement) {
    windowElement.remove();
}