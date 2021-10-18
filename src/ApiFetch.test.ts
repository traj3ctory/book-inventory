// import axios from "axios";

// import request from "../src/util/axios";

// jest.mock("axios");

// const API = `${process.env.REACT_APP_API}`;

// describe("request", () => {
//   it("fetches successfully data from an API", async () => {
//     const data = {
//       data: {
//         hits: [
//           {
//             objectID: "1",
//             title: "a",
//           },
//           {
//             objectID: "2",
//             title: "b",
//           },
//         ],
//       },
//     };

//     axios.get.mockImplementationOnce(() => Promise.resolve(data));

//     await expect(request("books")).resolves.toEqual(data);

//     expect(axios.get).toHaveBeenCalledWith(`${API}/books`);
//   });

//   it("fetches erroneously data from an API", async () => {
//     const errorMessage = "Network Error";

//     axios.get.mockImplementationOnce(() =>
//       Promise.reject(new Error(errorMessage))
//     );

//     await expect(request("books")).rejects.toThrow(errorMessage);
//   });
// });

import request from "./util/axios";
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

it('Calls the GET method as expected', async () => {
  const expectedResult: string = 'result';

  mockedAxios.get.mockReturnValueOnce({ data: expectedResult } as any);
  const result = await request('books');

  expect(mockedAxios.get).toHaveBeenCalled();
  expect(result).toBe(expectedResult);
});