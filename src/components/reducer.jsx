import Student from './Student';

const Reducer = (state="",action) =>{
    switch(action){
     case NewStudents : return <Student/>
     default : return <Student/>
    }
}

export default Reducer;