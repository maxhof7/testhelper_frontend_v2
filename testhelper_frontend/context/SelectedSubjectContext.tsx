/**
 * author: simon
 * date: 05.06.2024
 * project: testhelper_frontend_v2
 * package_name:
 **/
import React, {createContext, useContext, useState, ReactNode} from 'react';

interface SelectedSubjectContextProps {
    selectedSubject: string | undefined;
    selectSubject: (subject: string) => void;
    clearSubjectSelection: () => void;
}

const SelectedSubjectContext = createContext<SelectedSubjectContextProps | undefined>(undefined);

const SelectedSubjectProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [selectedSubject, setSelectedSubject] = useState<string | undefined>(undefined);

    const selectSubject = (subject: string) => {
        setSelectedSubject(subject);
    };

    const clearSubjectSelection = () => {
        setSelectedSubject(() => undefined);
    };

    return (
        <SelectedSubjectContext.Provider value={{selectedSubject, selectSubject, clearSubjectSelection}}>
            {children}
        </SelectedSubjectContext.Provider>
    );
};

const useSelectedSubjectContext = () => {
    const context = useContext(SelectedSubjectContext);
    if (context === undefined) {
        throw new Error('useSelectedSubjectContext must be used within a SelectedSubjectProvider');
    }
    return context;
};

export {SelectedSubjectProvider, useSelectedSubjectContext};
