    //canva
window.addEventListener('load', function() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    
    //draw a red rectangle and a circle inside in the left corner of the canva

    ctx.fillStyle = "#FF6633";
    ctx.fillRect(0,0,170,100);
    ctx.beginPath();
    ctx.arc(85,50,40,0,2*Math.PI);
    ctx.stroke();   
    
     //draw a red rectangle and a circle inside in the right corner of the canva

    ctx.fillStyle = "#FF6633";
    ctx.fillRect(850,0,170,100);
    ctx.beginPath();
    ctx.arc(930,50,40,0,2*Math.PI);
    ctx.stroke();   
    
    //draw a rectangle with a circle inside 

    ctx.fillStyle = "#669999";
    ctx.fillRect(160,100,700,450);
    ctx.beginPath();
    ctx.arc(500,300,120,0,2*Math.PI);
    ctx.stroke(); 
  
    // drawing some lines
    ctx.moveTo(200, 100);
    ctx.lineTo(200, 300);
    ctx.stroke();

    ctx.moveTo(380, 300);
    ctx.lineTo(200, 300);
    ctx.stroke();

    //a linear gradient, from the left red to black-right

    const grd = ctx.createLinearGradient(0, 0, 200, 0);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "black");

    // Fill with gradient

    ctx.fillStyle = grd;
    ctx.fillRect(100, 100, 150, 80);

    //Draw hello world at the center of the canvas

    ctx.font = "30px Comic Sans MS";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("Hello World", canvas.width/2, canvas.height/2);
    });

   