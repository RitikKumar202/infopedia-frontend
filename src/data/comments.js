export const getCommentsData = async () => {
  return [
    {
      _id: "10",
      user: {
        _id: "a",
        name: "Bittu Kumar",
      },
      desc: "It was a nice post, Thank you!",
      post: "1",
      parent: null,
      replyOnUser: null,
      createdAt: "2022-12-31T04:22:15.092+0000",
    },
    {
      _id: "11",
      user: {
        _id: "b",
        name: "Aniket Anand",
      },
      desc: "Informative..",
      post: "1",
      parent: "10",
      replyOnUser: "a",
      createdAt: "2022-12-31T17:22:05.092+0000",
    },
    {
      _id: "12",
      user: {
        _id: "b",
        name: "Ashutosh",
      },
      desc: "Keep it up bro <3",
      post: "1",
      parent: null,
      replyOnUser: null,
      createdAt: "2022-12-31T18:19:05.092+0000",
    },
    {
      _id: "13",
      user: {
        _id: "c",
        name: "Chandan",
      },
      desc: "I'm always interested in your content :)",
      post: "1",
      parent: null,
      replyOnUser: null,
      createdAt: "2022-12-31T17:22:05.092+0000",
    },
  ];
};
