export interface IExam {
    date: Date;
    id: number;
    difficulty_rating: number;
    type: string;
    subject: string;
    materials: IMaterial[];
}


export interface IMaterial {
    id: number;
    file: IPDFFile;
    title: string;
}




