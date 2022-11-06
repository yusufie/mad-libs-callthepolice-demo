/**
 * Complete the implementation of parseStory.
 * 
 * parseStory retrieves the story as a single string from story.txt
 * (I have written this part for you).
 * 
 * In your code, you are required (please read this carefully):
 * - to return a list of objects
 * - each object should definitely have a field, `word`
 * - each object should maybe have a field, `pos` (part of speech)
 * 
 * So for example, the return value of this for the example story.txt
 * will be an object that looks like so (note the comma! periods should
 * be handled in the same way).
 * 
 * Input: "Louis[n] went[v] to the store[n], and it was fun[a]."
 * Output: [
 *  { word: "Louis", pos: "noun" },
 *  { word: "went", pos: "verb", },
 *  { word: "to", },
 *  { word: "the", },
 *  { word: "store", pos: "noun" }
 *  { word: "," }
 *  ....
 * 
 * There are multiple ways to do this, but you may want to use regular expressions.
 * Please go through this lesson: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/
 */
 function parseStory(rawStory) {
  
  let n = /\[n\]/g;
  let v = /\[v\]/g;
  let a = /\[a\]/g;

  const arrayOfStory = [];
  const splittedWords = rawStory.split(' ');

  for (let i = 0; i < splittedWords.length; i++){
    
    const words = splittedWords[i];

    if(v.test(words))
    {arrayOfStory.push({words:words.slice(0,-3), pos:'verb'})}
    else if(n.test(words))
    {arrayOfStory.push({words:words.slice(0,-3), pos:'noun'})}
    else if(a.test(words))
    {arrayOfStory.push({words:words.slice(0,-3), pos:'adjective'})}
    else{arrayOfStory.push({words})}} 
    return arrayOfStory}

/**
 * All your other JavaScript code goes here, inside the function. Don't worry about
 * the `then` and `async` syntax for now.
 * 
 * You'll want to use the results of parseStory() to display the story on the page.
 */

 getRawStory()
 .then(parseStory)
 .then((processedStory) => {
  console.log (processedStory);
     
   const editVersion = document.querySelector('.madLibsEdit');
   const previewVersion = document.querySelector('.madLibsPreview');
     
     for (let words of processedStory){
        if (words.pos){
           const input= document.createElement('input');
           input.setAttribute("type", "text");
           input.setAttribute('placeholder', `${words.pos}`);
           input.setAttribute("maxlength", 20);
           editVersion.appendChild(input);
     
           const output= document.createElement('span');
           output.className="blank";
           output.innerText = `${words.pos}`;
           previewVersion.appendChild(output);
           
           input.addEventListener("input", (event) => {
           output.innerText = input.value})} 
           else {
           const edit= document.createElement('span');
           edit.innerText= ` ${words.words}`;
           editVersion.appendChild(edit);
           const preview= document.createElement ('span');
           preview.innerText= ` ${words.words}`;
           previewVersion.appendChild(preview);}}
 
           const blanks = document.querySelectorAll("input");
           for (let i=0; i<blanks.length; i++){
           blanks[i].addEventListener('keypress', (e) => {
           if (e.key === 'Enter') {
             if ( i === blanks.length-1){blanks[0].focus();}
             else { blanks[i+1].focus()}}})}
 
   //EXTRA
   const reset = document.querySelector(".reset");
   const outputBlanks = document.getElementsByClassName("blank");
   
   reset.addEventListener("click", (e) => {
     for (let i = 0; i < blanks.length; i++) {
       blanks[i].value = "";
       outputBlanks[i].innerText = blanks[i].placeholder;}});
   
   const sound = document.querySelector("#sound");
   const startSound = document.querySelector(".play");
   startSound.addEventListener("click", () => sound.play());
 
   const stopSound = document.querySelector(".stop");
   stopSound.addEventListener("click", () => sound.pause());});
         
