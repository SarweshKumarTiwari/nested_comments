var _a;
var comments = [
    {
        name: "Saurabh",
        message: "This demo uses reccursion to show comments and replies",
        reply: [
            {
                name: "Samdish Ji",
                message: "Agreed 100% &#x1F44D",
                reply: [
                    {
                        name: "Ramesh",
                        message: "how i did not see anything",
                        reply: [
                            {
                                name: "Samdish Ji",
                                message: "Please spicify if there is an problem",
                                reply: []
                            }
                        ]
                    },
                    {
                        name: "Suresh",
                        message: "ok then some talked about it",
                        reply: []
                    }
                ]
            },
            {
                name: "Larry Collins",
                message: "This tutorial helped me alot \n Thank u",
                reply: []
            }
        ]
    },
    {
        name: "Sarvanand",
        message: "Excellent Work keep doing it",
        reply: [
            {
                name: "Aditya",
                message: "It may be debateble",
                reply: [
                    {
                        name: "Yograj",
                        message: "True",
                        reply: []
                    }
                ]
            },
            {
                name: "Anmol",
                message: "This not ideal solution",
                reply: []
            }
        ]
    }
];
var state = true;
(_a = document.getElementById("getallcomments")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var _a;
    var commentsSection = document.getElementById("csection");
    if (state) {
        var allCommentElements = getallcomments(comments);
        if (allCommentElements) {
            commentsSection === null || commentsSection === void 0 ? void 0 : commentsSection.appendChild(allCommentElements);
        }
        state = !state;
    }
    else {
        (_a = commentsSection === null || commentsSection === void 0 ? void 0 : commentsSection.firstElementChild) === null || _a === void 0 ? void 0 : _a.remove();
        state = !state;
    }
});
function getallcomments(params) {
    var ele = document.createElement('div');
    if (params.length === 0) {
        return null;
    }
    params.forEach(function (element) {
        var details = document.createElement('div');
        details.style.marginLeft = "14px";
        var h4 = document.createElement('h4');
        var p = document.createElement('p');
        var reply = document.createElement('button');
        var less = document.createElement('button');
        less.innerText = "Less";
        less.className = "button hide";
        reply.innerText = "reply";
        reply.className = "button show";
        h4.innerText = element.name;
        p.innerText = element.message;
        details.appendChild(h4);
        details.appendChild(p);
        details.appendChild(reply);
        details.appendChild(less);
        reply.addEventListener('click', function () {
            var com = getallcomments(element.reply);
            if (com) {
                details.appendChild(com);
            }
            less.className = "button show";
            reply.className = "button hide";
        });
        less.addEventListener('click', function () {
            var _a;
            (_a = details.lastElementChild) === null || _a === void 0 ? void 0 : _a.remove();
            less.className = "button hide";
            reply.className = "button show";
        });
        ele.appendChild(details);
    });
    return ele;
}
