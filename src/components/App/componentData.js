//---------------------Input Component Data---------------------//

// object imported by App.jsx
const componentData = {
  // separate object property for each page
  feeling: {
    // title that will be displayed on card
    title: "How dost thou fare this day?",
    // url path name
    name: "feeling",
    // dispatch action
    action: "SET_FEELING",
    // next url path for "advance" button
    next: "/understanding",
    // previous url path for "retreat" button
    previous: "/",
    // reducer to select state from
    reducer: "feelingReducer",
    // image to display when radio value is above 2
    good: "images/happy.jpeg",
    // image to display when radio value is 2 or lower
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
