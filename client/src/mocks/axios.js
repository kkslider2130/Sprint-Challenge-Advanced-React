jest.mock("axios");
export default {
  get: jest.fn().mockResolvedValue({ player: [] })
};
