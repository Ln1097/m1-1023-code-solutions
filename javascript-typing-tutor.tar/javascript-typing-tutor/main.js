const typeSentenceDisplay=document.getElementbyID('typeSentence')
const sentenceFieldDisplay=document.getElementById('sentenceField')

sentenceFieldDisplay.addEventListener('input',()=>{
  const arraySentence=typeSentenceDisplay.querySelectorAll('span')
  const arrayType = sentenceFieldDisplay.value.split('')
  arraySentence.forEach((characterSpan, index)=>{
    const character=arrayType[index]
    if (character==null){
      characterSpan.classList.remove('correct');
      characterSpan.classList.remove('incorrect');
    }else if (character===characterSpan.innerText){
      characterSpan.classList.add('correct')
      characterSpan.classList.remove('incorrect');
    }else{
      characterSpan.classList.remove('correct');
      characterSpan.classList.add('incorrect');
    }
  })
})

function sentenceStyle() {
  const sentence=function sentenceColor() {
    typeSentenceDisplay.innerHTML=''
  }
  sentence.split('').forEach((character)=>{
    const characterSpan = document.createElement('span');
    characterSpan.innerText = character;
    typeSentenceDisplay.appendChild(characterSpan);
  })
  sentenceFieldDisplay.value = null;
}
sentenceStyle()
