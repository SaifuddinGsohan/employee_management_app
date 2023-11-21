import axios from 'axios';

const BASE_URL = 'https://dummy.restapiexample.com/api/v1';

export const getEmployeeList = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/employees`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching employee list:', error);
    throw error;
  }
};

export const createEmployee = async (employeeData) => {
  try {
    const response = await axios.post(`${BASE_URL}/create`, employeeData);
    return response.data.data;
  } catch (error) {
    console.error('Error creating employee:', error);
    throw error;
  }
};

export const updateEmployee = async (employeeId, employeeData) => {
  try {
    const response = await axios.put(`${BASE_URL}/update/${employeeId}`, employeeData);
    return response.data.data;
  } catch (error) {
    console.error('Error updating employee:', error);
    throw error;
  }
};
