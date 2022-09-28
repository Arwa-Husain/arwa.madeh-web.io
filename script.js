



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

  // Example starter JavaScript for disabling form submissions if there are invalid fields
  function verify () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  }
// pro// var steps = document.getElementsByClassName('form-select');
    // if (steps.option == " " ){
    //   alert("Please Select");
    //   return false;
    // }ceed button 

// function getval() {
//     var sel = document.getElementById('select_value');
    
//     if (sel.value == "1") {
//     window.location.href = "milaad.html";
//     }
//      else if (sel.value == "2") {
//     window.location.href = "ashara.html";
//     }  
// }


// $("#proceed").click(function()
// {
//     selectedopts = $('[id^=ReasonCd] option:selected');
//     for(i=0;i<selectedopts.length;i++)
//     {
        
//         if(selectedopts.eq(i).text() == 'Select Number')
//         {
//             alert('Please Select a Number!!!');
//             return false;
//         }
//     }
// });
// $('#submitButton').on('click', function(e) {
//   $('[id^=ReasonCd] option:selected').each(function(){
//   if($(this).text() == "Select Number"){
//       alert('Please Select a Number!!!');
//       e.preventDefault();
//       return false;
//   }
// });
// });
// $('#submitButton').on('click', function(e) {
//   $('[id^=ReasonCd] option:selected').each(function(){
//   if($(this).text() == "Select Number"){
//       alert('Please Select a Number!!!');
//       e.preventDefault();
//       return false;
//   }
// });
// });





// validation for proceed button 

function getval(){
  var sel = document.getElementById('select_value');

  var lang = document.getElementById('Language').value;
  var lehn = document.getElementById('Lehen').value;
  var qafya = document.getElementById('qafiyah').value;

  if(lang == "" || lehn== "" || qafya == ""){
    window.alert("please select an option");
    return;
}
  else if(sel.value == "1"){
  window.location.href = "milaad.html";
}
}
















 