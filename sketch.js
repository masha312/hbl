let phrases = [
    "form follows funding",
    "a fix becomes a feature",
    "self-sensing and self-healing materials",
    "learn by paying attention",
    "time as formgiver",
    "theories mislead",
    "fine-tuning from a nuisance into a joy",
    "healing the whole",
    "humiliated by the building, by a nuance untended to",
    "well-made buildings are fractal",
    "debug the building",
    "vision is generic, and generic is adaptive",
    "seeking to improve control led to loss of control",
    "blue-jeans buildings among us?",
    "elegant because it is quick and dirty",
    "full of small microenvironments",
    "temporary is permanent, and permanent is temporary",
    "fond memories of improvisation",
    "labor of love measured in lifetimes",
    "romance of maintenance"
  ];
  
  function setup() {
    createCanvas(windowWidth, windowHeight);
    textAlign(CENTER, CENTER);
    textSize(16);
  }

  
  function draw() {
    background(255);
    translate(width / 2, height / 2);
  
    let radius = 400;
    let angleStep = TWO_PI / phrases.length + map(mouseX, 0, width, 0, 2);
  
    // let angleStep = TWO_PI / phrases.length + map(radians(frameCount), 0, TWO_PI, 0, 0.5);

    for (let i = 0; i < phrases.length; i++) {
      let angle = (i + 1) * angleStep;
      let x = cos(angle + map(mouseX, 0, width, 0, 4)) * radius;
      let y = sin(angle + map(mouseY, 0, height, 0, 4)) * radius;
  
    //   let x = cos(angle + map(radians(frameCount), 0, TWO_PI, 0, 1)) * radius;
    //   let y = sin(angle + map(radians(frameCount), 0, TWO_PI, 0, 1)) * radius;
  
      push();
      translate(x, y);
      rotate(angle); // Rotate so text is vertical along the ray
      text(phrases[i], 0, 0);
      pop();
    }
  }