import * as axios from "axios";

export default class RestoService {

  url = "http://localhost:3000/menu";

    getMenuItems = async () => {
        const response = await axios.get(this.url);
        if (!response){
            throw new Error('Server Error');
        }
        const result = response.data;
        return result
    }
}