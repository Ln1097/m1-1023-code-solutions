const books=[{isbn:"111-1111111111",
title:"What is HTML?",
author:"Harry Thomas Mason Lane"},

{isbn:"000-0000000000",
title:"Flex your CSS skills",
author:"Come Style Stuff"},

{isbn:"010-1010101010",
title:"Javascript Brew",
author:"Coffee Coder"}
]
console.log('books: ',books);
console.log('typeof books:',typeof books)

const booksJSS=JSON.stringify(books)
console.log('booksJSS:',booksJSS)
console.log('typeof booksJSS: ',typeof booksJSS)

const studentJS='{"id":9000,"name":"Goku"}'
console.log('studentJS: ', studentJS)
console.log('typeof studentJS: ', typeof studentJS)

const over9000=JSON.parse(studentJS)
console.log('over9000: ', over9000)
console.log('typeof over9000: ', typeof over9000)
