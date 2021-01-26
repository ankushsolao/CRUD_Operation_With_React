import http from "../common/httpService";

const getAllEmployee = () => {
    return http.get("/Employee");
};

const getEmployeeById = id => {
    return http.get(`/Employee/${id}`);
};

const createEmployee = data => {
    data.ctc = parseInt(data.ctc);
    console.log("data", data);
    return http.post("/Employee", data);
};

const updateEmployee = (id, data) => {
    data.ctc = parseInt(data.ctc);  
    return http.put(`/Employee/${id}`, data);
};

const deleteEmployee = id => {
    return http.delete(`/Employee/${id}`);
};
export default {
    getAllEmployee,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee
};