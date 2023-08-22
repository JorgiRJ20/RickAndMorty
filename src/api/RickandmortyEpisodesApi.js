import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import EpisodesList from '../components/Character/EpisodesList';

export default function RickandmortyEpisodesApi(props) {
    const {ep} = props;

    const [episodes, setEpisodes] = useState([])

    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const response = await Promise.all(ep.map(url => axios.get(url)));
                const data = response.map(response => response.data);
                setEpisodes(data);
            }catch(error){
                console.log(error)
            }
        }

        fetchData();
    }, []);
    return (
      <EpisodesList episodes={episodes}/>
  )
}