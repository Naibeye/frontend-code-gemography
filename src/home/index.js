import { useEffect , useState} from 'react';
import RepositoriesService from '../services/SearchService';
import moment  from 'moment';
import ReposCard from './ReposCard';
import { Box } from '@chakra-ui/react';

function Home() {
  const searchService=new RepositoriesService()
  const [items, setItems]=useState([])
  const [page, setPage] = useState(1);


  const onScroll = (e) => {
    if (e.target.scrollHeight-e.target.scrollTop===e.target.clientHeight){
        setPage(page+1)
    }
  };

  useEffect(()=>{
    const date= moment().subtract(30, "days").format("yyyy-MM-DD")
    searchService.getRepositories(`q=created:>${date}&sort=stars&order=desc&page=${page}`,
    response=>{
      console.log(response)
      setItems([...items, ...response.items])},
    error=>{
        console.log(error)

      }
    )
  },[page])
  return (
    <div onScroll={onScroll} style={{ height:"800px", overflowY: "scroll" }}>
    <Box alignContent="center">
    {items
      .map((item, index) => {
        return <div key={index}><ReposCard  item={item}/></div>;
      })}
      </Box>
  </div>
  );
}

export default Home
