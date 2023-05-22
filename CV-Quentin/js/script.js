
    var _CONTENT = [ 
        
        "Quentin Sirjean",
        
        "un étudiant DevOps",
        
        "à la recherche d'un stage"

         
        
    ];
    
    // Current sentence being processed
    var _PART = 0;
    
    // Character number of the current sentence being processed 
    var _PART_INDEX = 0;
    
    // Holds the handle returned from setInterval
    var _INTERVAL_VAL;
    
    // Element that holds the text
    var _ELEMENT = document.querySelector(".animation");
    
    // Cursor element 
    var _CURSOR = document.querySelector(".cursor");
    
    // Implements typing effect
    function Type() { 
    
        // Get substring with 1 characater added
        var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
        _ELEMENT.innerHTML = text;
        _PART_INDEX++;
    
        // If full sentence has been displayed then start to delete the sentence after some time
        if(text === _CONTENT[_PART]) {
            
            clearInterval(_INTERVAL_VAL);
            setTimeout(function() {
                _INTERVAL_VAL = setInterval(Delete, 75);
            }, 1000);
        }
    }
    
    // Implements deleting effect
    function Delete() {
        // Get substring with 1 characater deleted
        var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
        _ELEMENT.innerHTML = text;
        _PART_INDEX--;
    
        // If sentence has been deleted then start to display the next sentence
        if(text === '') {
            clearInterval(_INTERVAL_VAL);
    
            // If current sentence was last then display the first one, else move to the next
            if(_PART == (_CONTENT.length - 1))
                _PART = 0;
            else
                _PART++;
            
            _PART_INDEX = 0;
    
            // Start to display the next sentence after some time
            setTimeout(function() {
                _CURSOR.style.display = 'inline-block';
                _INTERVAL_VAL = setInterval(Type, 150);
            }, 1000);
        }
    }
    
    // Start the typing effect on load
    _INTERVAL_VAL = setInterval(Type, 200);
    const overlay = document.getElementById('overlay');
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('close-btn');
    
    closeBtn.addEventListener('click', () => {
      overlay.style.display = 'none';
    });
    
    popup.addEventListener('click', (event) => {
      event.stopPropagation();
    });
    
    overlay.style.display = 'block';
    
    
    const card1 = document.getElementById('card1');
    const card2 = document.getElementById('card2');
    const card3 = document.getElementById('card3');
    const card4 = document.getElementById('card4');
    const goDown = document.getElementById('goDown');
    const svgGoDown = document.getElementById('svgGoDown');
    
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      
      if (scrollPosition >= card1.offsetTop && scrollPosition < card2.offsetTop) {
        goDown.setAttribute('href', '#card2');
        svgGoDown.style.transform = 'rotate(0deg)';
      } else if (scrollPosition >= card2.offsetTop && scrollPosition < card3.offsetTop) {
        goDown.setAttribute('href', '#card3');
        svgGoDown.style.transform = 'rotate(0deg)';
      } else if (scrollPosition >= card3.offsetTop && scrollPosition < card4.offsetTop) {
        goDown.setAttribute('href', '#card4');
        svgGoDown.style.transform = 'rotate(0deg)';
      } else {
        goDown.setAttribute('href', '#');
        svgGoDown.style.transform = 'rotate(180deg)';
      }
    });
    
   
    

 



