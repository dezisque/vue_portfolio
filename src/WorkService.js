import axios from 'axios';

const url = 'http://localhost:5000/api/works/';

class WorkService {
    // Get work
    // static getWorks(){
    //     return new Promise(async (resolve, reject) => {
    //         try{
    //             const res = await axios.get(url);
    //             const data = res.data;
    //             resolve(data.map(post => ({
    //                 ...post,
    //                 title: post.title,
    //                 description: post.description
    //             })));
    //         } catch (e) {
    //             reject(e);
    //         }
    //     });
    // }
    static getWorks = async () => {
        try{
            const res = await axios.get(url);
            //console.log(res.status);
            if (res.status === 200){
                const data = res.data;
                return data.map(post => ({
                    ...post,
                    title: post.title,
                    description: post.description
                }))
            }else {
                console.log(res)
            }
        } catch (e) {
            console.log(e)
            throw e;
        }
    }

    // Create work
    static insertWork(title, description){
        return axios.post(url, {
            title: title,
            description: description
        });
    }

    // Edit work


    // Delete work
    static deleteWork(id){
        return axios.delete(`${url}${id}`);
    }
}

export default WorkService;