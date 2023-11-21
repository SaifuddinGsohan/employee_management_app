import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';

const EmployeePreview = () => {
  const basicInfo = useSelector((state) => state.employee.basicInfo);
  const skillInfo = useSelector((state) => state.employee.skillInfo);

  return (
    <View>
      <Text>Employee Preview</Text>
      <Text>{`Name: ${basicInfo.firstName} ${basicInfo.lastName}`}</Text>
      <Text>{`DOB: ${basicInfo.dob}`}</Text>
      {/* Display other preview information */}
    </View>
  );
};

export default EmployeePreview;
