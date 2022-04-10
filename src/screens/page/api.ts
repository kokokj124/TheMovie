import axios from "axios";

const pageUrl: string = `https://api.themoviedb.org/3/discover/movie?api_key=26763d7bf2e94098192e629eb975dab0`
export function getPages(pageNumber: number){   
    return axios.get(pageUrl, {
        params: {
            page: pageNumber
        }
    })
}