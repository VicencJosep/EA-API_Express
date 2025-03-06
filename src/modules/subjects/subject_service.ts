// src/services/user_service.ts
import Subject, { ISubject } from './subject_models.js';

export const saveMethod = () => {
    return 'Hola';
};
export const createSubject = async (subjectData: ISubject) => {
    const subject = new Subject(subjectData);
    return await subject.save();
};

export const getAllSubjects = async () => {
    return await Subject.find();
};

export const getSubjectById = async (id: string) => {
    return await Subject.findById(id);
};


