<template>
    <div class="sketch-container">
      <div class="controls">
        <label>Velocity:</label>
        <input type="range" v-model="sliderVel" min="0.01" max="0.5" step="0.02" />
  
        <label>Density:</label>
        <input type="range" v-model="sliderDens" min="6" max="20" step="1" />
  
        <label>X1:</label>
        <input type="range" v-model="sliderX1" :min="x1Min" :max="x1Max" :step="x1Step" />
  
        <label>Y1:</label>
        <input type="range" v-model="sliderY1" :min="y1Min" :max="y1Max" :step="y1Step" />
  
        <label>X2:</label>
        <input type="range" v-model="sliderX2" :min="x2Min" :max="x2Max" :step="x2Step" />
  
        <label>Y2:</label>
        <input type="range" v-model="sliderY2" :min="y2Min" :max="y2Max" :step="y2Step" />
  
        <div class="check-boxes">
          <label>
            <input type="checkbox" v-model="chk1" /> Wavy Animation
          </label>
          <label>
            <input type="checkbox" v-model="chk2" /> Straight Animation
          </label>
        </div>
      </div>
  
      <!-- Canvas Element for p5.js -->
      <div id="sketch-holder"></div>
    </div>
  </template>
  
  <script>
  import { onMounted, ref } from "vue";
  
  export default {
    data() {
      return {
        // Slider values
        sliderVel: 0.05,
        sliderDens: 10,
        sliderX1: 10,
        sliderY1: 10,
        sliderX2: 10,
        sliderY2: 10,
  
        // Slider limits
        x1Min: 5, x1Max: 50, x1Step: 1,
        y1Min: 5, y1Max: 50, y1Step: 1,
        x2Min: 5, x2Max: 50, x2Step: 1,
        y2Min: 5, y2Max: 50, y2Step: 1,
  
        // Checkboxes for animation types
        chk1: true, // Wavy
        chk2: false, // Straight
  
        letter: "A", // Letter to display
        rotNum: 0, // Rotation number for animation
        strWg: 3, // Stroke weight
      };
    },
    mounted() {
      this.initSketch();
    },
    methods: {
      initSketch() {
        const canvas = createCanvas(600, 600);
        canvas.parent('sketch-holder');
        this.constructGraphics();
      },
      constructGraphics() {
        // Functionality for initial canvas setup
        this.canvas = createGraphics(600, 600);
        this.canvas.fill(255);
        this.canvas.rect(0, 0, this.canvas.width, this.canvas.height);
        this.canvas.smooth(4);
        this.canvas.clear();
        this.canvas.textSize(500);
        this.canvas.textAlign(CENTER, CENTER);
      },
      readCanvas() {
        const myColor = this.canvas.get(x, y);
        if (myColor[0] > 200) {
          stroke(0);
        } else {
          noStroke();
        }
      },
    },
    watch: {
      chk1(newVal) {
        if (newVal) this.chk2 = false; // If wavy animation is selected, unselect straight
      },
      chk2(newVal) {
        if (newVal) this.chk1 = false; // If straight animation is selected, unselect wavy
      },
    },
    methods: {
      keyTyped(event) {
        const letterMap = {
          "A": "A", "B": "B", "C": "C", "D": "D", "E": "E", "F": "F",
          "G": "G", "H": "H", "I": "I", "J": "J", "K": "K", "L": "L",
          "M": "M", "N": "N", "O": "O", "P": "P", "Q": "Q", "R": "R",
          "S": "S", "T": "T", "U": "U", "V": "V", "W": "W", "X": "X",
          "Y": "Y", "Z": "Z", "a": "a", "b": "b", "c": "c", "d": "d",
          "e": "e", "f": "f", "g": "g", "h": "h", "i": "i", "j": "j",
          "k": "k", "l": "l", "m": "m", "n": "n", "o": "o", "p": "p",
          "q": "q", "r": "r", "s": "s", "t": "t", "u": "u", "v": "v",
          "w": "w", "x": "x", "y": "y", "z": "z", "ñ": "ñ", "Ñ": "Ñ"
        };
        if (letterMap[event.key]) {
          this.letter = letterMap[event.key];
        }
      },
      keyPressed(event) {
        if (event.keyCode === LEFT_ARROW) {
          this.strWg -= 1;
        } else if (event.keyCode === RIGHT_ARROW) {
          this.strWg += 1;
        }
      },
    },
    methods: {
      draw() {
        this.canvas.clear();
        this.canvas.text(this.letter, width / 2, height / 2);
        background(255);
  
        let valVel = this.sliderVel;
        let valDens = this.sliderDens;
        let valSliderX1 = this.sliderX1;
        let valSliderY1 = this.sliderY1;
        let valSliderX2 = this.sliderX2;
        let valSliderY2 = this.sliderY2;
  
        strokeWeight(this.strWg);
  
        for (let x = -50; x < width + 50; x += valDens) {
          for (let y = -50; y < height + 50; y += valDens) {
            this.myColor = this.canvas.get(x, y);
            this.readCanvas();
  
            if (this.chk1) {
              line(
                x + sin(this.rotNum) * sin(x) * valSliderX1,
                y + cos(this.rotNum) * cos(x) * valSliderY1,
                x + sin(this.rotNum) * cos(y) * valSliderX2,
                y + cos(this.rotNum) * sin(y) * valSliderY2
              );
            }
  
            if (this.chk2) {
              line(
                x + ((sin(this.rotNum) * y) / valSliderX1) * noise(x) * 5,
                y + ((cos(this.rotNum) * x) / valSliderY1) * noise(y) * 5,
                x + ((sin(this.rotNum) * y) / valSliderX2) * noise(x) * 5,
                y + ((cos(this.rotNum) * x) / valSliderY2) * noise(y) * 5
              );
            }
          }
        }
        this.rotNum += valVel;
      },
    },
  };
  </script>
  
  <style scoped>
  .sketch-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  
  .controls {
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  
  .check-boxes label {
    margin-top: 10px;
  }
  </style>
  