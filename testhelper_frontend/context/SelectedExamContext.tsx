/**
 * author: simon
 * date: 05.06.2024
 * project: testhelper_frontend_v2
 * package_name:
 **/

import React, {createContext, useContext, useState, ReactNode} from 'react';
import {IExam} from "../models/exam";
import {updateExam} from "../api/API Access";

interface SelectedExamContextProps {
    selectedExam: IExam | null;
    selectExam: (exam: IExam) => void;
    clearSelection: () => void;
    updateSelectedExam: (exam: Partial<IExam>) => Promise<void>;
}

const SelectedExamContext = createContext<SelectedExamContextProps | undefined>(undefined);

const SelectedExamProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [selectedExam, setSelectedExam] = useState<IExam | null>(null);

    const selectExam = (exam: IExam) => {
        setSelectedExam(exam);
    };

    const clearSelection = () => {
        setSelectedExam(null);
    };

    const updateSelectedExam = async (exam: Partial<IExam>) => {
        if (selectedExam) {
            try {
                const updatedExam = await updateExam(selectedExam.id.toString(), exam);
                setSelectedExam(updatedExam);
            } catch (error) {
                console.error('Error updating selected exam:', error);
            }
        }
    };

    return (
        <SelectedExamContext.Provider value={{selectedExam, selectExam, clearSelection, updateSelectedExam}}>
            {children}
        </SelectedExamContext.Provider>
    );
};

const useSelectedExamContext = () => {
    const context = useContext(SelectedExamContext);
    if (context === undefined) {
        throw new Error('useSelectedExamContext must be used within a SelectedExamProvider');
    }
    return context;
};

export {SelectedExamProvider, useSelectedExamContext};
