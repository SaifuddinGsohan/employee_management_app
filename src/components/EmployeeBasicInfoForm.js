import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { addEmployeeBasicInfo } from '../redux/employeeSlice';

const validationSchema = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string(),
  dob: yup.date().required('Date of Birth is required'),
  phone: yup.string().required('Phone is required'),
  gender: yup.string().required('Gender is required'),
});

const EmployeeBasicInfoForm = ({ onSubmit }) => {
    const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      dob: '',
      phone: '',
      gender: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
        dispatch(addEmployeeBasicInfo(values));
        onSubmit(values);
    },
  });

  return (
    <View>
      <TextInput
        placeholder="First Name"
        onChangeText={formik.handleChange('firstName')}
        onBlur={formik.handleBlur('firstName')}
        value={formik.values.firstName}
      />
      {/* Repeat for other input fields */}
      <Button title="Next" onPress={formik.handleSubmit} disabled={formik.isSubmitting} />
    </View>
  );
};

export default EmployeeBasicInfoForm;
