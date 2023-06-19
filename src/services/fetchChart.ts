import axios from 'axios';

const fetchChart = async () => {
  const { data } = await axios.get('http://localhost:9000/chart');
  return data.data;
};

export default fetchChart;
