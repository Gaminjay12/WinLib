//
export function win_init(title = "No title given") {
    const win = document.createElement("div");
    win.className = 'windowEl';

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
    titleBar.style.display = 'flex';

    // make the title and add it to the title bar
    const titleSpan = document.createElement("span");
    titleSpan.className = "title";
    titleSpan.innerText = title;
    titleBar.appendChild(titleSpan);

    const content = document.createElement("div");
    content.className = 'content';

    const removeButton = document.createElement("button");
    removeButton.className = 'remove-button';
    removeButton.innerHTML = "Close";

    removeButton.onclick = function () {
        win_remove(win)
    }

    // css
    removeButton.style.width = '70px';
    removeButton.style.height = '19px';
    removeButton.style.marginLeft = 'auto';
    removeButton.style.color = "white";
    removeButton.style.backgroundColor = "darkred";

    titleBar.appendChild(removeButton);


    win.appendChild(titleBar);
    win.appendChild(content);



    return win;
}


// Displays the specified window
export function win_display(containerElement, windowElement) {
    containerElement.appendChild(windowElement);
    return windowElement;
}
// Adds content to the content area
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
// Removes the specified window
export function win_remove(windowElement) {
    windowElement.remove();
}
// Hides the specified window
export function win_undisplay(windowElement) {
    windowElement.style.display = 'none';
    return windowElement;
}
// Creates a link to display the window
export function win_link_create_type_shown(windowElement) {
    let link = document.createElement("a");
    link.href = "#";
    link.textContent = 'open window';
    link.addEventListener("click", function (e) {
        e.preventDefault();
        win_display(document.body, windowElement);
    });
    return link;

}