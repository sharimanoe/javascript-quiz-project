class Question {
  constructor(text, choices, answer, difficulty) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    this.difficulty = difficulty;
  }

  shuffleChoices() {
    let mixedArray = this.choices.sort(() => Math.random() - 0.5);
    return mixedArray;
  }
}
