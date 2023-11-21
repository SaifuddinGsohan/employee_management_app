// src/screens/Employee/AddEmployee.js
import React from 'react';
import { View, Text } from 'react-native';
import { useCreateEmployeeMutation } from '../../redux/employeeApi';
import EmployeeBasicInfoForm from '../../components/EmployeeBasicInfoForm';
import EmployeeSkillForm from '../../components/EmployeeSkillForm';
import EmployeePreview from '../../components/EmployeePreview';

const AddEmployee = () => {
  const [createEmployee, { isLoading }] = useCreateEmployeeMutation();

  const handleSubmit = async (employeeData) => {
    try {
      await createEmployee(employeeData).unwrap();
      // Handle success, e.g., navigate to the employee list screen
    } catch (error) {
      // Handle error
      console.error('Error creating employee:', error);
    }
  };

  return (
    <View>
      <Text>Add Employee Screen</Text>
      <EmployeeBasicInfoForm onSubmit={handleSubmit} />
      <EmployeeSkillForm />
      <EmployeePreview />
    </View>
  );
};

export default AddEmployee;
