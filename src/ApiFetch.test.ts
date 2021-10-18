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