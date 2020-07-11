/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
var quotes=[
//quote1

  {
  number:0,
  quote:'The way to get started is to quit talking and begin doing.',
  source:'Walt Disney',
  tag:'motivate',
  citation:'0',
  year:'0',
  
},


{
number:1,
  quote:'Life is what happens when you are busy making other plans.',
  source:'John Lennon',
  tag:'motivate',
  citation:'0',
  year:'0',
  
},

{
  number:2,
    quote:'If you look at what you have in life, you will always have more. If you look at what you do not have in life, you will never have enough.',
    source:'Oprah Winfrey',
    tag:'Awareness',
    citation:'0',
    year:'0',
    
  },


  {
    number:3,
      quote:'The future belongs to those who believe in the beauty of their dreams.',
      source:'Eleanor Roosevelt',
      tag:'motivate',
      citation:'0',
      year:'0',
      
    
    },


    {
      number:4,
        quote:'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
        source:'Benjamin Franklin',
        tag:'Teamwork',
        citation:'0',
        year:'0',
       
      },
      {
      number:5,
      quote:'Give yourself an even greater challenge than the one you are trying to master and you will develop the powers necessary to overcome the original difficulty.',
      source:'William J. Bennett',
      tag:'motivate',
      citation:' The Book of Virtues',
      year:'0',
      
    },

    {
      number:6,
      quote:'A sister can be seen as someone who is both ourselves and very much not ourselves, a special kind of double.',
      source:'Toni Morrison',
      tag:'family',
      citation:' Twitter',
      year:'2019',
      
    },

    {
      number:7,
      quote:'Death is no more than passing from one room into another. But there is a difference for me, you know. Because in that other room I shall be able to see.',
      source:'Helen Keller',
      tag:'faith',
      citation:'0',
      year:'0',
      
    },

];



// This function getRandomNumber....:
function getRandomNumber(){
 
  return Math.floor(Math.random() * 7)+0; 
  }


/***
 * `getRandomQuote` function
***/

var quoteSelected=[];

var i=0;
function getRandomQuote(){
  //clear array to accept new data
  quoteSelected=[];
  // Call getRandomNumberFunction
    getRandomNumber();
 i = getRandomNumber(); //this var will take the number was return from getRandomNumberFunction
 for(var j=0;j<=quotes.length;j++){
  if(j===i){
   quoteSelected.push(quotes[j]['quote']);
   quoteSelected.push(quotes[j]['source']);   
   quoteSelected.push(quotes[j]['tag']);
   if(quotes[j].citation!='0')
   quoteSelected.push(quotes[j]['citation']);
    if(quotes[j].year!='0'){
    quoteSelected.push(quotes[j]['year']);
   }
   
   console.log(j);
        }
   
    }    
 
    return quoteSelected;
}



/***
 * `printQuote` function
***/
function printQuote(){
  getRandomQuote();
  var printQuote=quoteSelected[0];
  var printSource=quoteSelected[1] + " ,";
  var printTag=quoteSelected[2];
 printSource+= "Tags :"+ printTag +".";
  var printCitation='';
  var printYear='';
  
  if(quoteSelected.length==4){
    printCitation=quoteSelected[3];
    printSource+=" ,"+"Citation: "+printCitation;
  }
 if(quoteSelected.length==5){
  printYear=quoteSelected[3];
  printCitation=quoteSelected[4];
  printSource+=" ,"+printCitation+" ,"+printYear;
}

 document.getElementById('quoteSelectedP').innerHTML=printQuote;
 document.getElementById('quoteSelectdSource').innerHTML=printSource;

}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

function changeEveryTenSeconds(){
//This function will change quote Every 10 Seconds   
   window.setInterval(printQuote,10000);
}
changeEveryTenSeconds();
document.getElementById('load-quote').addEventListener("click", printQuote, false);
