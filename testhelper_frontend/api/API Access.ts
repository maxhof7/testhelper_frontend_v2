import axios from 'axios';
import {IExam} from "../models/exam";


// Create an axios instance with a base URL
const api = axios.create({
    baseURL: 'http://localhost:3000/exams',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Function to create a new exam
export const createExam = async (examData: IExam): Promise<IExam> => {
    try {
        const response = await api.post<IExam>('/post', examData);
        return response.data;
    } catch (error) {
        console.error('Error creating exam:', error);
        throw error;
    }
};

// Function to get all exams
export const getExams = async (): Promise<IExam[]> => {
    try {
        const response = await api.get<IExam[]>('/exams');
        return response.data;
    } catch (error) {
        console.error('Error fetching exams:', error);
        throw error;
    }
};

// Function to get a specific exam by ID
export const getExamById = async (id: string): Promise<IExam> => {
    try {
        const response = await api.get<IExam>(`/exams/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching exam:', error);
        throw error;
    }
};

// Function to update an exam by ID
export const updateExam = async (id: string, examData: Partial<IExam>): Promise<IExam> => {
    try {
        const response = await api.put<IExam>(`/exams/${id}`, examData);
        return response.data;
    } catch (error) {
        console.error('Error updating exam:', error);
        throw error;
    }
};

// Function to delete an exam by ID
export const deleteExam = async (id: string): Promise<void> => {
    try {
        await api.delete(`/exams/${id}`);
    } catch (error) {
        console.error('Error deleting exam:', error);
        throw error;
    }
};
