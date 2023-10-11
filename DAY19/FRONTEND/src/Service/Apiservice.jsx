import axios from "axios";
const USER_URL ='http://localhost:8080/api/v1/auth/user';
const ADMIN_URL='http://localhost:8080/api/v1/auth/admin';
const PLANT_URL='http://localhost:8080/api/v1/auth/plant';
export default class ApiService{

    getAllUser(){
        return axios.get(USER_URL+'/getall');
    }
    registeruser(user){
        return axios.post(USER_URL+'/post',user);
    }
    getUserById(code){
        return axios.get(USER_URL+'/'+code);
    }
    updateUser(id,user){
        return axios.put(USER_URL+'/'+id,user);
    }
    deleteuser(id){
        return axios.delete(USER_URL+'/'+id);
    }
    searchmail(mail){
        return axios.get(USER_URL+'/'+mail);
    }

    validateAdmin(credentials){
        axios.post(ADMIN_URL+'/authenticate',credentials)
    }
    adminRegister(register){
        axios.post(ADMIN_URL+'/register',register);
    }

    getAllPlant(){
        return axios.get(PLANT_URL+'/getall');
    }
    getPlantById(id){
        return axios.get(PLANT_URL+'/getplant/'+id)
    }
    deletePlant(id){
        return axios.delete(PLANT_URL+'/delete/'+id);
    }
    updatePlant(id,plant){
        return axios.put(PLANT_URL+'/update/'+id,plant);
    }

}
