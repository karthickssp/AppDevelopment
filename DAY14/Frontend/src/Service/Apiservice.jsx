import axios from "axios";
const URL='http://localhost:8080/user';
export default class ApiService{

    getAllUser(){
        return axios.get(URL+'/getall');
    }
    registeruser(user){
        return axios.post(URL+'/post',user);
    }
    getUserById(code){
        return axios.get(URL+'/'+code);
    }
    updateUser(id,user){
        return axios.put(URL+'/'+id,user);
    }
    deleteuser(id){
        return axios.delete(URL+'/'+id);
    }
    searchmail(mail){
        return axios.get(URL+'/'+mail);
    }
}
