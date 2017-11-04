import axios from 'axios';

class AppService{

    static submitBase64(data){

        return axios.post('http://10.66.66.124:3000/items',{
        //return axios.post('https://jsonplaceholder.typicode.com',{
            item: {
                name: data.name.slice(0, -4),
                guetzli: data.guetzli,
                picture: data.base64,
                extension: data.base64.substring("data:image/".length, data.base64.indexOf(";base64"))
            }
        })
        .then(function (response) {
            console.log(response)
            //dispatch action
        })
        .catch(function (error) {
            // throw error
            //
         });
    }
}

export default AppService;