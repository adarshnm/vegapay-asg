import { useState } from 'react';
import { AxiosError } from 'axios';
import { searchCustomers } from '../services/api';

const useSearchSuggestions = () => {
  const [searchSuggestions, setSearchSuggestions] = useState<Records | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  const clearSearchSuggestions = () => {
    setSearchSuggestions(undefined);
  };

  const getUsers = async (keyword: string) => {
    try {
      setIsLoading(true);
      const response = await searchCustomers(keyword);
      if (response) {
        console.log(response);

        setSearchSuggestions(response.data.items);
      }
    } catch (error) {
      console.log(error);

    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, searchSuggestions, getUsers, clearSearchSuggestions };
};

export default useSearchSuggestions;
