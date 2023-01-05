const list = document.getElementById("comments-list");
const button = document.getElementById("comment-submit");


// add a click event listener on the form submit button
// don't forget to "prevent" the form from being sent



button.addEventListener("click", function (e) {
    e.preventDefault();
    const username   = document.getElementById("comment-username").value;
    const text       = document.getElementById("comment-content").value;
    const dateDuJour = new Date();
    createComment(username, dateDuJour, text);
});

// create a new comment with the user name, the current date (french format: dd/mm/yyyy)
// new comments must have the same HTML structure as existing comments.

/**
 * 
 * @param {string} username 
 * @param {Date} date 
 * @param {string} text 
 */
function createComment(username, date, text) {
    list.append(createElement("li", {
        children: [
            createElement("h5", {innerText: username}),
            createElement("h6", {innerText: date.toLocaleDateString("fr")}),
            createElement("p",  {innerText: text}),
        ],
    }));
}

function createElement(tag, {children, ...attrs}) {
    /**
     * @type {HTMLElement} 
     */
    const elem = document.createElement(tag)
    if (children) {
        for (const child of children) {
            elem.append(child);
        }
    }

    return Object.assign(elem, attrs);
}