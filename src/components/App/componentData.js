const componentData = {
  feeling: {
    title: "How dost thou fare this day?",
    name: "feeling",
    action: "SET_FEELING",
    next: "/understanding",
    previous: "/",
    reducer: "feelingReducer",
    good: "images/happy.jpeg",
    bad: "images/sad.jpeg",
  },

  understanding: {
    title: "How well dost thou comprehend thy coursework?",
    name: "understanding",
    action: "SET_UNDERSTANDING",
    next: "/supported",
    previous: "/feeling",
    reducer: "understandingReducer",
    good: "images/scholar.jpg",
    bad: "images/jester.webp",
  },

  supported: {
    title: "How well art thou being supported?",
    name: "supported",
    action: "SET_SUPPORTED",
    next: "/comment",
    previous: "/understanding",
    reducer: "supportedReducer",
    good: "images/party.jpeg",
    bad: "images/alone.jpeg",
  },
  comment: {
    title: "Dost thou have any comments?",
    action: "SET_COMMENT",
    next: "/review",
    previous: "/supported",
    reducer: "commentReducer",
    good: "images/noComment.jpeg",
    bad: "images/comments.webp",
  },
};

module.exports = componentData;
