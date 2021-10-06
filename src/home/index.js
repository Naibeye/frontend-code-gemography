/**
 *  @author DJIMNAIBEYE Sidoine
 */
import { useEffect , useState} from 'react';
import RepositoriesService from '../services/SearchService';
import moment  from 'moment';
import ReposCard from './ReposCard';
import { Box } from '@chakra-ui/react';

/**
 * main component: list the most starred Github repos that were created in the last 30 days.
 */
function Home() {
  const searchService=new RepositoriesService()
  const [listRepos, setListRepos]=useState([])
  const [page, setPage] = useState(1);

/**
 * Detection the end of scroll
 * @param {Event} e
 */
  const onScroll = (e) => {
    if (e.target.scrollHeight-e.target.scrollTop===e.target.clientHeight){
        setPage(page+1)
    }
  };
/**
 * refresh page if Detect end of scroll.
 */
  useEffect(()=>{
    const date= moment().subtract(30, "days").format("yyyy-MM-DD")
    searchService.getRepositories(`q=created:>${date}&sort=stars&order=desc&page=${page}&per_page=100`,
    response=>{
      setListRepos([...listRepos, ...response.items])},
    error=>{
        console.log(error)

      }
    )
  },[page])
  return (
    <div onScroll={onScroll} style={{ height:"800px", overflowY: "scroll" }}>
    <Box alignContent="center">
    {listRepos
      .map((repos, index) => {
        return <div key={index}><ReposCard  repos={repos}/></div>;
      })}
      </Box>
  </div>
  );
}

export default Home
