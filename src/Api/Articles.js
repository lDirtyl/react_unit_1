import axios from "axios"

axios.defaults.baseURL = 'https://hn.algolia.com/api/v1'

export const getArticles = async () => {
    const {data} = await axios('/search?query=react')
    return data
}

// export const searchArticles = async (query) => {
//     const {data} = await axios(`/search?query=${query}`)
//     return data
// }
export const searchArticles = async (query, page) => {
    const {data} = await axios('/search', {
        params: {
            query,
            page,
            hitsPerPage: 10,
        }
    })
    return data
}
