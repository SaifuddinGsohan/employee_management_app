import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useGetEmployeeListQuery } from '../../redux/employeeApi';

const EmployeeList = () => {
  const { data: employeeList, isLoading, isError } = useGetEmployeeListQuery();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error fetching employee list</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={employeeList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.employeeName}>{item.employee_name}</Text>
            <Text style={styles.salary}>{`Salary: ${new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(item.employee_salary)}`}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  itemContainer: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  employeeName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  salary: {
    fontSize: 16,
    color: '#888',
  },
});

export default EmployeeList;
