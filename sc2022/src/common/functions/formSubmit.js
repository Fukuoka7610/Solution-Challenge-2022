export const formSubmit = (e) =>{
    if(e.key == 'Enter'){ // If Enter key is pressed down, the content in the form of Search Bar will be submitted
        const value = document.getElementById('form').value;
        e.preventDefault();
        console.log(value);
      }
}

export const formSubmit1 = (e) =>{
  if(e.key == 'Enter'){ // If Enter key is pressed down, the content in the form of Search Bar will be submitted
      const value = document.getElementById('form1').value;
      e.preventDefault();
      console.log(value);
    }
}

export const formSubmit2 = (e) =>{
  if(e.key == 'Enter'){ // If Enter key is pressed down, the content in the form of Search Bar will be submitted
      const value = document.getElementById('form2').value;
      e.preventDefault();
      console.log(value);
    }
}

export const formSubmit3 = (e) =>{
  if(e.key == 'Enter'){ // If Enter key is pressed down, the content in the form of Search Bar will be submitted
      const value = document.getElementById('form3').value;
      e.preventDefault();
      console.log(value);
    }
}

