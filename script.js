// Global Variables
var DIRECTION = {
   IDLE: 0,
   UP: 1,
   DOWN: 2,
   LEFT: 3,
   RIGHT: 4
};

var rounds = [5, 5, 3, 3, 2];
var colors = ['#1abc9c', '#2ecc71', '#3498db', '#8c52ff', '#9b59b6']

// Ball (The cube acts as the pong ball)
var Ball = {
   new: function (incrementedSpeed) {
      return {
         width: 18,
         height: 18,
         x: (this.canvas.width / 2) - 9,
         y: (this.canvas.height / 2) - 9,
         moveX: DIRECTION.IDLE,
         moveY: DIRECTION.IDLE,
         speed: incrementedSpeed || 7
      };
   }
};

// The AI for Player and Bot
var Ai = {
   new: function (side) {
      return {
         width: 18,
         height: 180,
         x: side === 'left' ? 150 : this.canvas.width - 150,
         y: (this.canvas.height / 2) - 35,
         score: 0,
         move: DIRECTION.IDLE,
         speed: 8
      };
   }
};

var Game = {}