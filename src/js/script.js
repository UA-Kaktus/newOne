const firstQuestion = ['Tanya', 'Yura'];
const secondQuestion = [22, 25];
const answerArr = [];

let firstAnswer = 'Yura';
let secondAnswer = '22';

let consoleAnswer = ``;
// if (firstQuestion.forEach(el => el == firstAnswer)) {
//     console.log('done');
// } else {
//     console.log('Answer is wrong');
// }


firstQuestion.forEach((el) => {
    if (el == firstAnswer) {
        console.log('done');
        consoleAnswer += `${el}, `;
        answerArr.push(el);
    }
});

secondQuestion.forEach((el) => {
    if (el == secondAnswer) {
        console.log('done');
        consoleAnswer += `${el}, `;
        answerArr.push(el);
    }
});

if (answerArr.length == 2) {
    console.log('test done');
    let a = consoleAnswer.slice(0, -2);
    console.log(`Your answers are "${a}"`);
}