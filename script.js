// select button and show selection options 
function showcontent(){
  var sel = document.getElementById('select_value');

    if (sel.value == "1") 
    {
      var elems = document.getElementsByClassName('selection');
        for (var i=0;i<elems.length;i+=1)
        {
            elems[i].style.display = 'flex';
        }
    } 
    else if (sel.value == "2") {
      window.location.href = "ashara.html";
    }
}




// validation for proceed button and show next options for mafaheem

function getval(){
  $('#lang-error')[0].innerHTML=''
  $('#lehn-error')[0].innerHTML=''
  $('#qafya-error')[0].innerHTML=''

  const errors={};
  var sel = document.getElementById('select_value');

  var lang = document.getElementById('Language').value;
  var lehn = document.getElementById('Lehen').value;
  var qafya = document.getElementById('qafiyah').value;

  if(!lang){
    errors.lang="Please select language";
    $('#lang-error')[0].innerHTML=errors.lang
  }
  if(!lehn){
    errors.lehn="Please select lehn";
    $('#lehn-error')[0].innerHTML=errors.lehn
  }
  if(!qafya){
    errors.qafya="Please select qafiyah";
    $('#qafya-error')[0].innerHTML=errors.qafya
  }

  if(Object.keys(errors).length){
    return;
  };

  var elems = document.getElementsByClassName('mafaheem');
        for (var i=0;i<elems.length;i+=1)
        {
            elems[i].style.display = 'flex';
        }
        
  
}

  

// render on the next page for start writing  
function getmafaheem(){
  var lang = document.getElementById('Language').value;
  var lehn = document.getElementById('Lehen').value;
  var qafya = document.getElementById('qafiyah').value;

window.location.href = `milaad.html?lang=${lang}&&lehn=${lehn}&&qafya=${qafya}`;
  // var matla = document.getElementById('').value;
  // var shanaat = document.getElementById('shanaat').value;
  // var tehniyat = document.getElementById('tehniyat').value;
  // var tululumr = document.getElementById('tululumr').value;
  // var khidmat = document.getElementById('khidmat').value;
  // var salawat = document.getElementById('salawat').value;
  
  
}










 