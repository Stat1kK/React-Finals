import axios from "axios";

export const dogApi = async (endpoint,singular=true) => {
    try {
        let url

        if(singular){
            url=`https://dog.ceo/api/breed/${endpoint}`
        }else{
            url=`https://dog.ceo/api/breeds/${endpoint}`
        }

        console.log(url);

        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching books:', error);
        throw error;
    }
};