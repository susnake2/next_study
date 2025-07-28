import { API_URL } from "../(home)/page";

async function getVideos(id:string) {
    const response = await fetch(`${API_URL}/${id}/videos`, {
      cache: 'force-cache'
    });
    return response.json();
}

export default async function MovieVideos({id}:{id:string}){
    const videos = await getVideos(id);
    return <h6>{JSON.stringify(videos)}</h6>
}