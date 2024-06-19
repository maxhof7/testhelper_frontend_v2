import React, {createContext, useContext, useEffect, useState, ReactNode} from 'react';
import {IExam} from "../models/exam";
import {createExam, deleteExam, getExams, updateExam} from "../api/API Access";


interface ExamContextProps {
    exams: IExam[];
    loading: boolean;
    fetchExams: () => void;
    addExam: (exam: IExam) => Promise<void>;
    updateExamById: (id: string, exam: Partial<IExam>) => Promise<void>;
    deleteExamById: (id: string) => Promise<void>;
    initializeTestData: () => Promise<void>;
}

const ExamContext = createContext<ExamContextProps | undefined>(undefined);

const ExamProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [exams, setExams] = useState<IExam[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchExams = async () => {
        setLoading(true);
        try {
            const examsData = await getExams();
            setExams(examsData);
        } catch (error) {
            console.error('Error fetching exams:', error);
        } finally {
            setLoading(false);
        }
    };

    const addExam = async (exam: IExam) => {
        try {
            const newExam = await createExam(exam);
            setExams(prevExams => [...prevExams, newExam]);
        } catch (error) {
            console.error('Error adding exam:', error);
        }
    };

    const updateExamById = async (id: string, exam: Partial<IExam>) => {
        try {
            const updatedExam = await updateExam(id, exam);
            setExams(prevExams => prevExams.map(e => (e.id === updatedExam.id ? updatedExam : e)));
        } catch (error) {
            console.error('Error updating exam:', error);
        }
    };

    const deleteExamById = async (id: string) => {
        try {
            await deleteExam(id);
            setExams(prevExams => prevExams.filter(e => e.id + "" !== id));
        } catch (error) {
            console.error('Error deleting exam:', error);
        }
    };

    const initializeTestData = async () => {
        const testData: IExam[] = [
            {
                id: Date.now(),
                date: new Date(),
                difficulty_rating: 3,
                type: 'Midterm',
                subject: 'Mathematics',
                materials: [],
            },
            {
                id: Date.now() + 1,
                date: new Date(),
                difficulty_rating: 4,
                type: 'Final',
                subject: 'Physics',
                materials: [],
            },
            {
                id: Date.now() + 2,
                date: new Date(),
                difficulty_rating: 2,
                type: 'Quiz',
                subject: 'Chemistry',
                materials: [],
            },
        ];

        try {
            for (const exam of testData) {
                await addExam(exam);
            }
        } catch (error) {
            console.error('Error initializing test data:', error);
        }
    };

    useEffect(() => {
        fetchExams();
    }, []);

    return (
        <ExamContext.Provider
            value={{exams, loading, fetchExams, addExam, updateExamById, deleteExamById, initializeTestData}}>
            {children}
        </ExamContext.Provider>
    );
};

const useExamContext = () => {
    const context = useContext(ExamContext);
    if (context === undefined) {
        throw new Error('useExamContext must be used within an ExamProvider');
    }
    return context;
};

export {ExamProvider, useExamContext};
