import axios from "axios";
import { baseURL } from "./config/baseURL";

export const api=axios.create({
  baseURL:`${baseURL}`
})

const crudAPIs={

  async getData(){
    const response= await api.get('/posts');
    // console.log(response);
    if([200,201].includes(response.status)){

    }
    return response.data;

  },
  async deleteData(id){
    // console.log(id)
    const response= await api.delete(`/posts/${id}`);
    // console.log(response);
    if([200,201].includes(response.status)){

    }
    return response;

  },
  async updateData(data){
    // console.log(data)
    const response= await api.put(`/posts/${data?.id}`,data);
    // console.log(response);
    if([200,201].includes(response.status)){

    }
    return response;

  },
  async addData(data){
    // console.log(data)
    const response= await api.post('/posts',data);
    // console.log(response);
    if([200,201].includes(response.status)){

    }
    return response;

  }


}

export const {getData,deleteData,updateData,addData}=crudAPIs;

export default crudAPIs;