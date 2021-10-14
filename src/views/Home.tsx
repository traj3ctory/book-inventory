import { useState, useEffect } from "react";
import request from "../services/axios";
import { toast } from "../services/alerts";
import ListUi from "../components/List";
import LoaderUi from '../components/Loader';
import SearchUi from '../components/Search';

// interface dataObject {
//     url: string,
//     name: string,
//     isbn: string,
//     author: Array<string>,
//     numberOfPages: string,
//     publisher: string,
//     country: string,
//     released: string,
//     character: Array<string>,
//     povCharacters: Array<string>,
// };

const HomeUi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getBooks = async () => {
      try {
        setLoading(true);
        const response: any = await request("books");
        if (response.length) {
          setData(response);
        }
      } catch (error) {
        toast(`${error}`);
      } finally {
        setLoading(false);
      }
    };

    getBooks();
    // return () => {
    //   cleanup;
    // };
  }, []);

  return (
    <>
      <SearchUi />
      {data && <ListUi data={data} />}
      {loading && <LoaderUi />}
    </>
  );
};

export default HomeUi;
