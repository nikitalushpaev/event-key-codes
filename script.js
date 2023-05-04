const insert = document.getElementById('insert');
const body = document.body;

window.addEventListener('keydown', (e) =>
{
    console.log(e);
    
    insert.innerHTML = `
    <div class="key">
      ${e.key}
      <small>event.key</small>
    </div>
   
    <div class="key">
      ${e.code}
      <small>event.code</small>
    </div>
 
    <div class="key">
      ${e.keyCode}
      <small>event.keyCode</small>
    </div>
  `;

    if(e.key == 'o'){
        body.style.background = '#f76928';
    }

    else if(e.key == 'b'){
        body.style.background = '#eba434';
    }
    
    else if(e.key == 'r'){
        body.style.background = '#ff3838';
    }
    else if(e.key == 'p'){
      body.style.background = '#b300ff';
  }

  else if(e.key == 'y'){
    body.style.background = '#f4fc56';
}

else if(e.key == 'w'){
  body.style.background = '#21f5fc';
}
else
{
  body.style.background = '#e1e1e1';
}

});