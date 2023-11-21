import React from 'react';
import { View, Text } from 'react-native';
import { useUpdateEmployeeMutation } from '../../redux/employeeApi';
import EmployeeBasicInfoForm from '../../components/EmployeeBasicInfoForm';
import EmployeeSkillForm from '../../components/EmployeeSkillForm';
import EmployeePreview from '../../components/EmployeePreview';

const EditEmployee = ({ route }) => {
  const { employeeId } = route.params;
  const [updateEmployee, { isLoading }] = useUpdateEmployeeMutation();

  const handleSubmit = async (employeeData) => {
    try {
      await updateEmployee({ employeeId, employeeData }).unwrap();
      // Handle success, e.g., navigate to the employee list screen
    } catch (error) {
      // Handle error
      console.error('Error updating employee:', error);
    }
  };

  return (
    <View>
      <Text>Edit Employee Screen</Text>
      <EmployeeBasicInfoForm onSubmit={handleSubmit} />
      <EmployeeSkillForm />
      <EmployeePreview />
    </View>
  );
};

export default EditEmployee;
