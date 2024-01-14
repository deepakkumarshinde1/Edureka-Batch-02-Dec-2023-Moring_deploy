introJs()
  .setOptions({
    steps: [
      {
        title: "Welcome to edureka !",
        intro: "Let's have a tour.",
      },
      {
        title: "Header",
        intro: "All options are here",
        element: document.querySelector(".navbar"),
      },
      {
        title: "Live Support",
        intro: "Here you can find support options",
        element: document.querySelector("#into_page_live_classes > p"),
        position: "left",
      },
      {
        title: "Live Support",
        intro: "Icon",
        element: document.querySelector(".support > span"),
      },
      {
        title: "Live Support",
        intro: "Title",
        element: document.querySelector(".support > .h4"),
      },
      {
        title: "Live Support",
        intro: "Description",
        element: document.querySelector(".support > .m-0"),
      },
    ],
    dontShowAgain: true,
  })
  .start();
