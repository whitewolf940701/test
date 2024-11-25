function setup() {
	createCanvas(windowWidth, windowHeight);
	clear()
}

function draw() {
		
		clear()
		for(i=0;i<3;i++){
		stroke(255)
		line(mouseX, mouseY, mouseX+random(-20*PI,20*PI), mouseY+random(-20*PI,20*PI));
		line(mouseX, mouseY, mouseX+random(-50*PI,50*PI), mouseY+random(-50*PI,50*PI));
		}
		fill(255, 244, 150)
		circle(mouseX+random(-50,50), mouseY+random(-50,50),random(3))
		fill(255)
		circle(mouseX+random(-50,50), mouseY+random(-50,50),random(5))
		
		translate(mouseX,mouseY)
		for(i=0;i<180;i++){
		rotate(2)
		circle(mouseX*noise(0.005 * frameCount), mouseY*noise(0.005 * frameCount),random(3))
		}		
		for(i=0;i<360;i++){
		rotate(2)
		circle(mouseX*noise(0.005 * frameCount-10), mouseY*noise(0.005 * frameCount-10),random(3))
		}		
	
}
