const questions = [
    {
        'ques':'Which of the following is a markup Language ?',
        'a':'HTML',
        'b':'CSS',
        'c':'JavaScript',
        'd':'PHP',
        'correct': 'a'
    },
    {
        'ques':'Which type of JavaScript language is ___ ',
         'a':'Object-Oriented',
         'b':'Object-Based',
         'c':'Assembly-language',
         'd':'High-level'
    },
    {
        'ques':'Which one of the following also known as Conditional Expression: ',
         'a':'Alternative to if-else',
         'b':'Switch statement',
         'c':'If-then-else statement',
         'd':'immediate if',
         'correct':'b'
    },
    {
        'ques':'The "function" and " var" are known as: ',
         'a':'Keywords',
         'b':'Declaration statements',
         'c':'Prototypes',
         'd':'Data types',
         'correct': 'c'
         
    },
    {
        'ques':'In the following given syntax of the switch statement, the Expression is compared with the labels using which one of the following operators?switch(expression){ statement}',
        'a':'===',
        'b':'equals',
        'c':'==',
        'd':'equals',
        'correct': 'a'
    },
    {
        'ques':'Which of the following is the correct output for the following JavaScript code: varx=5,y=1  var obj ={ x:10}  with(obj)  { alert(y) }',
        'a':'1',
        'b':'Error',
        'c':'10',
        'd':'5',
        'correct':'a'
    },
    {
        'ques':'What will happen, if the following JavaScript code is executed? var count =0;  while (count <10)  {  console.log(count);  count++;  }',          
         'a':'An error is displayed',
         'b':'An exception is thrown',
         'c':'The values of count variable are logged or stored in a particular location or storage',
         'd':'The value of count from 0 to 9 is displayed in the console',
         'correct':'c'
    },
    {
        'ques':'When interpreter encounters an empty statements, what it will do: ',
        'a':'Shows a warning',
        'b':'Prompts to complete the statement',
        'c':'Throws an error',
        'd':'Ignores the statements',
        'correct':'d'
    },
    {
        'ques':' Which of the following is the correct output for the following JavaScript code: Int x=8;  if(x>9)  {  document.write(9);  }  else  {  document.write(x);  }',
        'a':'9',
        'b':'8',
        'c':'0',
        'd':'Undefined',
        'correct':'c'
       
    },
    {
        'ques':' Which one of the following is the correct way for calling the JavaScript code?',
         'a':'Preprocessor',
         'b':'Triggering Event',
         'c':'RMI',
         'd':'Function/Method',
         'correct':'d'
    }
]
let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options') 
const loadQuestion = () => 
{   
    if(index === total ){
        return endQuiz()
    }
    reset()
    const data= questions[index]
    quesBox.innerText = `${index+1}) ${data.ques}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;

}
const submitQuiz = () =>{
    const data= questions[index];
    const ans = getAns()
    console.log(ans,data.correct)
    if(ans == data.correct){
         right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
const getAns = ()=>{
    let answer;
    optionInputs.forEach(
        (input) =>{
            if(input.checked){
                answer = input.value; 
            }
        }
    )
    return answer;
}

const reset = () =>{ 
     optionInputs.forEach(
        (input)=>{
            input.checked = false;
        }
    )
}

const endQuiz = () =>{
    document.getElementById("box").innerHTML = `
    <div style="text-align:center">
     <h2> Thank You for playing the quiz </h2>
     <h2> ${right} / ${total} are correct </h2>
     </div>
    `
}
loadQuestion();