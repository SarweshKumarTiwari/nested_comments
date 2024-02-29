type comment = {
    name: string
    message: string
    reply: comment[]
}

const comments: comment[] = [
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
]
let state = true;
document.getElementById("getallcomments")?.addEventListener("click", () => {
    const commentsSection = document.getElementById("csection");
    if (state) {
        const allCommentElements = getallcomments(comments);
        if (allCommentElements) {
            commentsSection?.appendChild(allCommentElements);
        }
        state = !state;
    }
    else {
        commentsSection?.firstElementChild?.remove();
        state = !state;
    }
})

function getallcomments(params: comment[]): HTMLElement | null {
    const ele = document.createElement('div');
    if (params.length === 0) {
        return null;
    }
    params.forEach(element => {
        const details = document.createElement('div');
        details.style.marginLeft = "14px"
        const h4 = document.createElement('h4');
        const p = document.createElement('p');
        const reply = document.createElement('button');
        const less=document.createElement('button');
        less.innerText="Less"
        less.className="button hide"
        reply.innerText = "reply";
        reply.className = "button show";
        h4.innerText = element.name;
        p.innerText = element.message;
        details.appendChild(h4);
        details.appendChild(p);
        details.appendChild(reply);
        details.appendChild(less);
        reply.addEventListener('click', () => {
            const com = getallcomments(element.reply);
            if (com) {
                details.appendChild(com)
            }
            less.className="button show";
            reply.className="button hide";
        });
        less.addEventListener('click',()=>{
            details.lastElementChild?.remove();
            less.className="button hide";
            reply.className="button show";
        })
        ele.appendChild(details);
    });
    return ele;
}
