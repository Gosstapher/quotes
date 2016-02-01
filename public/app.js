window.onload = function(){
  
  var colours = function(){
    var blockQuotes = document.querySelectorAll("blockquote");
      if(blockQuotes.length > 0 ){
      for (var i = 0; i < blockQuotes.length; i++) {
        if(i % 3 === 0 ){
          blockQuotes[i].style.backgroundColor = "rebeccapurple";
          blockQuotes[i].style.color = "wheat";
        }else if(i % 3 === 1){
          blockQuotes[i].style.backgroundColor = "chartreuse";
          blockQuotes[i].style.color = "tomato";
        }else{
          blockQuotes[i].style.backgroundColor = "blue";
            blockQuotes[i].style.color = "orange";
        } 
      }
    }
  }





  var quoteArray = [
    {
      quote:"Visual Basic is the way forward, I don't know why we are doing Javascript. ",
      author:"Jay Chetty"
    },
    {
      quote:"The only CSS you need to know is background-color: tomato ",
      author:"Rick"
    },
    {
      quote:"No Blockers *smug tone* ",
      author:"Keith"
    },
    {
      quote:"Scaffold is nothing but a fiery hell. ",
      author:"Valerie"
    },
    {
      quote:"CSS is stupid and I hate it. ",
      author:"Oscar Brooks"
    }
  ]

  var quoteSection = document.getElementsByClassName("quotes-go-here")[0];
  var quoteArticle = document.createElement("article");
  var blockQuote = document.createElement("blockquote");
  var cite = document.createElement("cite");

  var populateQuotes = function(){
    for (var i = 0; i < quoteArray.length; i++) {
      var blockQuote = document.createElement("blockquote");
      var cite = document.createElement("cite");
      blockQuote.innerText = ('"' + quoteArray[i].quote + '"' );
      cite.innerText = quoteArray[i].author;
      blockQuote.appendChild(cite);
      quoteArticle.appendChild(blockQuote);
      quoteSection.appendChild(quoteArticle);

    };
  }

  populateQuotes();
//-------------------------------------------------------------

  var button = document.getElementById('add-button');
  var quoteTextBox = document.getElementById('quote-text-input');
  var quoteAuthorBox = document.getElementById('quote-author-input');


  var handleClick = function(){
    var quoteInput = quoteTextBox.value;
    var authorInput = quoteAuthorBox.value;
    var blockQuote = document.createElement("blockquote");
    var cite = document.createElement("cite");
    blockQuote.innerText = ('"' + quoteInput + '"' );
    cite.innerText = authorInput;
    blockQuote.appendChild(cite);
    quoteArticle.appendChild(blockQuote);
    quoteSection.appendChild(quoteArticle);
    colours();
  }










  button.onclick = handleClick;




  // var tagline = document.getElementsByTagName('h2')[0];
  // tagline.innerText = "Featured Quotes";



  // var quoteArticle = document.createElement("article");
  // quoteArticle.classList.add("quote");

  // var blockQuote = document.createElement("blockquote");
  // blockQuote.innerText = "CSS is stupid and I hate it. ";

  // var cite = document.createElement("cite");
  // cite.innerText = "Oscar Brooks";

  // blockQuote.appendChild(cite);
  // quoteArticle.appendChild(blockQuote);
  
  // var quotes = document.querySelector("section");
  // quotes.appendChild(quoteArticle);

  //-----------------------------------------------------

  
  // var blockQuote = document.createElement("blockquote");
  // blockQuote.innerText = "Burn it all down and start again. MWA HA HA HA HA! " ;

  // var cite = document.createElement("cite");
  // cite.innerText = "Evelyn";

  // blockQuote.appendChild(cite);
  
  // var featured = document.getElementsByClassName("featured")[0];
  
  // featured.appendChild(blockQuote);
  

//-------------------------------------------------




  
  
  colours();
  document.backgroundColor = "gainsboro";
}
