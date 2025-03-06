import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
    name :{
        type: String,
        required : true
    },
    teacher: {
        type: String,
        required : true
    },
    alumnes: {
        type : String,
        required : true
    }
});

export interface ISubject{
    name : string;
    age : number;
    email : string;

}

const Subject = mongoose.model('Subject', subjectSchema);
export default Subject;
