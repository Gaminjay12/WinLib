export function win_init(title = "No title given") {
    const window = document.createElement("div");
    window.setAttribute("id", "window");
    window.style.borderRadius = "5px";

    const titleBar = document.createElement("div");
    titleBar.setAttribute("id", "title-bar");
    titleBar.style.position = "absolute";
    titleBar.style.top = "0";
    titleBar.style.left = "0";
    titleBar.style.width = "100%";
    titleBar.style.height = "20px";
    titleBar.style.backgroundColor = "#333";
    titleBar.style.color = "#fff";
    titleBar.style.padding = "2px";
    titleBar.style.userSelect = "none";

    const titleSpan = document.createElement("span");
    titleSpan.setAttribute("id", "title");
    titleSpan.innerText = title;
    titleBar.appendChild(titleSpan);
    
    window.appendChild(titleBar);
    return window;
}

export function win_set_title(windowElement, title) {
    const titleSpan = windowElement.querySelector("#title");
    if (titleSpan) {
        titleSpan.innerText = title;
    }
}

export function win_display(containerElement, windowElement) {
    containerElement.appendChild(windowElement);
}
export function win_content(windowElement, htmlContent) {
    const content = document.createElement("div");
    content.setAttribute("id", "content");
    content.innerHTML = htmlContent;
    windowElement.appendChild(content);
    return content;
};