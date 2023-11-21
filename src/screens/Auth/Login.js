import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/authSlice';

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const Login = () => {
    const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      // Handle authentication logic here
      dispatch(login(values));
    },
  });

  return (
    <View>
      <Text>Login Screen</Text>
      <TextInput
        placeholder="Username"
        onChangeText={formik.handleChange('username')}
        onBlur={formik.handleBlur('username')}
        value={formik.values.username}
      />
      <Text>{formik.touched.username && formik.errors.username}</Text>

      <TextInput
        placeholder="Password"
        onChangeText={formik.handleChange('password')}
        onBlur={formik.handleBlur('password')}
        value={formik.values.password}
        secureTextEntry
      />
      <Text>{formik.touched.password && formik.errors.password}</Text>

      <Button title="Login" onPress={formik.handleSubmit} />
    </View>
  );
};

export default Login;
