//your parameter variables go here!



function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
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

  strokeWeight(0)

  fill(49,120,115)

  triangle(30, 104, 10, 85, 13, 94) //top tail fin

  triangle(30, 103, 13, 93, 10, 100) //bottom tail fin

  arc(100, 100, 150, 60, 0, 180, CHORD) //body

  arc(100, 113, 98, 10, 0, 180) //body line

  triangle(50, 100.5, 56, 96, 58, 100.5) //read top body fin

  fill(0)
  circle(160, 105, 5) //eye

  fill(49,120,115)   //reseting the fill

  strokeWeight(.3)

  arc(100, 113, 98, 10, 0, 180) //body line

  triangle(150, 110, 148, 115, 130, 118) //body fin

  arc(160, 113, 10, 10, 90, 170)  //mouth 

  


  

  




  
}
