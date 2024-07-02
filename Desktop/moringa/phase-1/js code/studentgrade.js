//creating grading system
//applying student marks
//grade classification A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.


//user input
let studentmarks = 79


//setting grade function
function grading() {
    if (studentmarks => 0 && studentmarks < 100)

        if(studentmarks > 79) {
            console.log('GRADE A');
        }
        else if(studentmarks > 59) {
            console.log('GRADE B');
        }
        else if(studentmarks > 49) {
            console.log('GRADE C');
        }
        else if(studentmarks > 39) {
            console.log('GRADE D');
        }
        else (studentmarks < 40) {
            console.log('GRADE E');
        };
    

      else ( studentmarks > 100 && studentmarks < 0) {
        console.log('invalid studentmarks')
    }
        
}

//name function grading
grading();
