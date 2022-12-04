const textAreaInput = document.querySelector("#text-area");
const findWordInput = document.querySelector("#findWordInput");
const countBtn = document.querySelector('#countBtn');
const findBtn = document.querySelector('#findBtn');


countBtn.addEventListener("click", countWords);
findBtn.addEventListener("click", findWords);

function countWords() {
  countWords = textAreaInput.value.split(' ').length;
  printData(wordCountInput, countWords);
 
}

function findWords() {
  let arr = textAreaInput.value.split(' ');
  let word = findWordInput.value;
  let count = 0;
  for(let i = 0; i < arr.length; i++){
    if (arr[i].toLowerCase() == word.toLowerCase()){
      count = count + 1;      
    }
  }
  
  findWords = count
  // call printData
  printData(wordFoundInput, count)
}


function printData(field, value) {
  field.value = value;
}
  
