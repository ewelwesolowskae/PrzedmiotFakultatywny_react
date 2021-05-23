import { Search } from '@material-ui/icons';
import React from 'react' ;
import NavPanel from '../../components/NavPanel';
import { omdApiKey } from '../../key';
import http from '../../utils/http';
import movieService from '../../services/movies.service';
const Home = () =>{
    const [search, SetSearch] = React.useState('harry potter');
    const [movie,setMovie] = React.useState<any>({});

    React.useEffect(()=>{
        const makeRequest = async () => {
        try{
            const response = movieService.searchByName(search,1);
    //`http://www.omdbapi.com/?apikey=${omdApiKey}&s=${search}&plot=full`

    //const response = await <any>http.get('http://www.omdbapi.com/', {
    //    apikey: omdApiKey,
    //    s: search,
    //    plot: 'full',
    //});

    setMovie(response);
    } catch (error){
        console.log(error);
    }
};
makeRequest();
    },[search]);
    return(
        <div>
            <NavPanel />
            <div>this is homepage</div>
        </div>
    );
}

export default Home;