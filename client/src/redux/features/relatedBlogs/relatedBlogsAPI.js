// change at gpt
import publicAxios from "../../../components/PublicAxios"; // Correct import path and case sensitivity

export const getRelatedBlogs = async ({ tags, id }) => {
    const limit = 5;
    let queryString = tags.length > 0 
        ? `tags_like=${tags[0]}&id_ne=${id}&_limit=${limit}` 
        : `id_ne=${id}&_limit=${limit}`;

    try {
        const response = await publicAxios.get(`/blogs?${queryString}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}; 
