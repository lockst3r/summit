"use strick";

//1. learn requirement
//2. Create step by step
//3. Write fraft solution & testing
//4. Refactoring final testing

let timer = {

  secondsPassed: 0,
  minsPassed: 0,
  loopID: 0,

  startTimer() {

      this.loopID = setInterval(() => {

          this.secondsPassed++;
          if (this.secondsPassed === 60) {
              this.secondsPassed = 0;
              this.minsPassed++;
          }

      }, 1000);
  },

  getTime() {

      return `${this.minsPassed}:${this.secondsPassed < 10 ?
           '0' + this.secondsPassed : this.secondsPassed}`;
  },

  stopTimer() {

      clearInterval(this.loopID);
  },

  resetTimer() {

      this.minsPassed = 0;
      this.secondsPassed = 0;
  }
};

export { timer };