// CSS TEXT 


// let para =$0
// undefined

// para
// <p id=​"fpara" style=​"background-color:​ green;​ padding:​ 1rem" class=​"firstClass secondClass">​ First para ​</p>​


// fpara.classList
// DOMTokenList(2) ['firstClass', 'secondClass', value: 'firstClass secondClass']0: "firstClass"1: "secondClass"length: 2value: "firstClass secondClass"[[Prototype]]: DOMTokenList
// fpara.classList.add("thirdClass");

// undefined
// fpara

// <p id=​"fpara" style=​"background-color:​ green;​ padding:​ 1rem" class=​"firstClass secondClass thirdClass">​ First para ​</p>​


// fpara.classList.remove("firstClass");
// undefined

// fpara
// <p id=​"fpara" style=​"background-color:​ green;​ padding:​ 1rem" class=​"secondClass thirdClass">​ First para ​</p>​
// fpara.classList
// DOMTokenList(2) ['secondClass', 'thirdClass', value: 'secondClass thirdClass']0: "secondClass"1: "thirdClass"length: 2value: "secondClass thirdClass"[[Prototype]]: DOMTokenList
// fpara.classList.toggle('secondClass');
// false
// fpara.classList
// DOMTokenList ['thirdClass', value: 'thirdClass']0: "thirdClass"length: 1value: "thirdClass"[[Prototype]]: DOMTokenList
// fpara.cla
// undefined
// fpara.classList.toggle('secondClass');
// true
// fpara.classList
// DOMTokenList(2) ['thirdClass', 'secondClass', value: 'thirdClass secondClass']0: "thirdClass"1: "secondClass"length: 2value: "thirdClass secondClass"[[Prototype]]: DOMTokenList
// fpara.classList.toggle('cr');
// true
// fpara.classList
// DOMTokenList(3) ['thirdClass', 'secondClass', 'cr', value: 'thirdClass secondClass cr']0: "thirdClass"1: "secondClass"2: "cr"length: 3value: "thirdClass secondClass cr"[[Prototype]]: DOMTokenList
// fpara.classList.contains("cccdcc");
// false