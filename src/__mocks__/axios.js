const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: "Anderson",
          last: "Santana",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/women/1.jpg",
        },
        login: {
          username: "anderson88",
        },
      },
    ],
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
