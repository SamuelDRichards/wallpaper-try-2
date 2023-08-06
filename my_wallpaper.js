//your parameter variables go here!
let evil = 0


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print
  //angleMode(DEGREES)

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}
  
function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  fish()
 
}



function fish(){
  if( evil >= 1){
    evilfish()
  }
  else{
    fishnotevil()
  }
}




function fishnotevil() {
  


  strokeWeight(0)

  fill(54, 79, 110)

  triangle(30, 104, 10, 80, 13, 94) //top tail fin

  triangle(30, 103, 13, 93, 10, 108) //bottom tail fin

  arc(100, 100, 150, 60, 0, 180, CHORD) //body

  arc(100, 113, 98, 10, 0, 180) //body line

  triangle(50, 100.5, 56, 94, 58, 100.5) //read top body fin

  fill(0)
  circle(160, 105, 5) //eye

  fill(54, 79, 110)   //reseting the fill

  stroke(229, 216, 189)

  strokeWeight(1.5)

  arc(100, 113, 98, 10, 0, 180) //body line

  arc(160, 113, 10, 10, 100, 170)  //mouth 


  strokeWeight(1)

  triangle(150, 110, 148, 115, 130, 118) //body fin


//everything below is the hat

  fill(255,72,165)   //pink color for the hat 

  strokeWeight(.3)
  stroke(255,72,165) //pink color for the hat 

  arc(157, 93, 15, 15, 35, 140) //brim of the hat

  triangle(155, 99.5, 157, 92, 159, 99.5) //tringle of the hat

  fill(240, 255, 240) //background color 
  strokeWeight(0)
  arc(157, 91.9, 15, 15, 35, 140) //arc to help shape the hat

  fill(255,72,165)  //pink color for the hat 
  strokeWeight(.3)
  stroke(255,72,165) //pink color for the hat 
  

  triangle(155, 99.5, 157, 92, 159, 99.5) ////tringle of the hat

  
}





function evilfish() { //evil fish but with a sense of style so he keeps the pink hat
  strokeWeight(0)

  fill(0, 18, 41)

  triangle(30, 104, 10, 80, 13, 94) //top tail fin

  triangle(30, 103, 13, 93, 10, 108) //bottom tail fin

  arc(100, 100, 150, 60, 0, 180, CHORD) //body

  arc(100, 113, 98, 10, 0, 180) //body line

  triangle(50, 100.5, 56, 94, 58, 100.5) //read top body fin

  fill(172, 11, 11)
  circle(160, 105, 5) //eye

  triangle(162, 111, 166, 113, 164.5, 120) //fang 1 
  triangle(159, 111, 162, 112, 159, 120) //fang 2

 noFill()

  stroke(172, 11, 11)

  strokeWeight(1.5)

  arc(100, 113, 97, 10, 0, 180) //body line

  arc(158, 116, 17, 10, 260, 345)  //mouth 

  fill(0, 18, 41)   //reseting the fill

  strokeWeight(1)

  triangle(150, 110, 148, 115, 130, 118) //body fin

  



//everything below is the hat

  fill(255,72,165)   //pink color for the hat 

  strokeWeight(.3)
  stroke(255,72,165) //pink color for the hat 

  arc(157, 93, 15, 15, 35, 140) //brim of the hat

  triangle(155, 99.5, 157, 92, 159, 99.5) //tringle of the hat

  fill(240, 255, 240) //background color 
  strokeWeight(0)
  arc(157, 91.9, 15, 15, 35, 140) //arc to help shape the hat

  fill(255,72,165)  //pink color for the hat 
  strokeWeight(.3)
  stroke(255,72,165) //pink color for the hat 
  

  triangle(155, 99.5, 157, 92, 159, 99.5) ////tringle of the hat

  
}