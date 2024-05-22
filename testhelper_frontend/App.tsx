// File: App.js

import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';

const App = () => {
  const [selectedDate, setSelectedDate] = useState('2023-05-18');
  const [selectedSubject, setSelectedSubject] = useState('Mathematik SA');
  const [examDate, setExamDate] = useState('2024-06-05');

  return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>My Exams</Text>
          <TouchableOpacity>
            <Text>👤</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.subjectContainer}>
          {['Deutsch', 'Mathe', 'POS', 'DBI'].map((subject) => (
              <TouchableOpacity
                  key={subject}
                  style={[
                    styles.subjectButton,
                    subject === selectedSubject && styles.selectedButton
                  ]}
                  onPress={() => setSelectedSubject(subject)}
              >
                <Text style={styles.subjectText}>{subject}</Text>
              </TouchableOpacity>
          ))}
        </View>

        <View style={styles.viewToggle}>
          <Button title="Calendar View" onPress={() => {}} />
          <Button title="List View" onPress={() => {}} />
        </View>

        <Calendar
            current={'2023-05-01'}
            onDayPress={(day) => setSelectedDate(day.dateString)}
            markedDates={{
              [selectedDate]: { selected: true, marked: true, selectedColor: 'blue' }
            }}
            theme={{
              arrowColor: 'blue',
              todayTextColor: 'blue',
              selectedDayBackgroundColor: 'blue',
            }}
            style={styles.calendar}
        />

        <View style={styles.detailsContainer}>
          <View style={styles.examInfo}>
            <Text style={styles.examText}>{selectedSubject}</Text>
            <Text style={styles.examDate}>{examDate}</Text>
          </View>
          <Text style={styles.teststoff}>Teststoff:</Text>
          <TouchableOpacity style={styles.detailsButton}>
            <Text style={styles.detailsButtonText}>Details</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#000080',
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
  },
  profileIcon: {
    fontSize: 24,
    color: '#fff',
  },
  subjectContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  subjectButton: {
    padding: 10,
    borderRadius: 25,
    backgroundColor: 'lightgrey',
  },
  selectedButton: {
    backgroundColor: 'blue',
  },
  subjectText: {
    color: 'white',
  },
  viewToggle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  calendar: {
    marginVertical: 10,
  },
  detailsContainer: {
    padding: 10,
    borderTopWidth: 1,
    borderColor: 'grey',
  },
  examInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  examText: {
    fontSize: 18,
  },
  examDate: {
    fontSize: 18,
  },
  teststoff: {
    marginBottom: 10,
  },
  detailsButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  detailsButtonText: {
    color: 'white',
  },
});

export default App;
