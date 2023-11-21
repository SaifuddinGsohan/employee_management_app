import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { addEmployeeSkillInfo } from '../redux/employeeSlice';

const validationSchema = yup.object().shape({
  skillName: yup.string().required('Skill Name is required'),
  experience: yup.string().required('Experience is required'),
  skillLevel: yup.string().required('Skill Level is required'),
});

const EmployeeSkillForm = ({ onSubmit }) => {
    const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      skillName: '',
      experience: '',
      skillLevel: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
        dispatch(addEmployeeSkillInfo(values));
        onSubmit(values);
    },
  });

  return (
    <View>
      <TextInput
        placeholder="Skill Name"
        onChangeText={formik.handleChange('skillName')}
        onBlur={formik.handleBlur('skillName')}
        value={formik.values.skillName}
      />
      {/* Repeat for other input fields */}
      <Button title="Next" onPress={formik.handleSubmit} />
    </View>
  );
};

export default EmployeeSkillForm;
