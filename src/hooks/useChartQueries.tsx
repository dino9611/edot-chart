import { useQuery } from '@tanstack/react-query';
import fetchChart from '../services/fetchChart';

interface Response {
  data: number[];
  message: string;
}

const useChartQueries = () => {
  const { data, isLoading, isError } = useQuery<Response>({
    queryKey: ['chart'],
    queryFn: fetchChart,
  });

  return { data, isLoading, isError };
};

export default useChartQueries;
