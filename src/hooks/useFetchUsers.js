import { useEffect, useState } from 'react';
import { BASE_URL } from '../config';
import axios from 'axios';

const useFetchUsers = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          `${BASE_URL}/?results=100&seed=abc`,
        );

        // console.log('api:data: ' + JSON.stringify(response));

        setData(response);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return {
    data,
    loading,
  };
};

export default useFetchUsers;
