import React from "react";
import Quiz from "./quiz";
export default class QuizComponent extends React.Component {
  state = {
    quizQuestionn: [
      {
        Question: "What is the name of this Animal ?",
        options: ["Lizard", "Cat", "Dog"],
        answer: "Lizard",
        img: "https://i.ibb.co/MPj7pZm/lizard.jpg",
      },
      {
        Question: "Guess the animal?",
        options: ["Monkey", "Rabbit", "moose"],
        answer: "Monkey",
        img: "https://i.ibb.co/wz1Zvm0/monkey.jpg",
      },
      {
        Question: "Guess the Bird ?",
        options: ["duck", "Hen", "peacock"],
        answer: "Hen",
        img: "https://i.ibb.co/1nK6vnG/hen.jpg",
      },
      {
        Question: "What is the name of this animal ?",
        options: ["Hen", "cat", "Wolf"],
        answer: "Wolf",
        img: "https://i.ibb.co/RCsczfB/wolf.jpg",
      },
      {
        Question: "Guess the bird ?",
        options: ["sparrow", "cock", "Owl"],
        answer: "Owl",
        img: "https://i.ibb.co/gSwDGbL/owl.jpg",
      },
      {
        Question: "Guess the animal?",
        options: ["Deer", "horse", "moose"],
        answer: "Deer",
        img: "https://i.ibb.co/8Yxq5Z0/deer.jpg",
      },
      {
        Question: "Guess the animal ?",
        options: ["Snake", "Lizard", "Frog"],
        answer: "Snake",
        img: "https://i.ibb.co/VLG0Yf4/snake.jpg",
      },
      {
        Question: "Guess the animal ?",
        options: ["sheep", "fox", "rat"],
        answer: "sheep",
        img: "https://i.ibb.co/02dWNFL/sheep.jpg",
      },
      {
        Question: "Guess the bird ?",
        options: ["Parrot", "hen", "None"],
        answer: "Parrot",
        img: "https://i.ibb.co/G2j6ngz/parrot.jpg",
      },
      {
        Question: "What is the name of this Bird ?",
        options: ["Sparrow", "Crow", "Peacock"],
        answer: "Crow",
        img: "https://i.ibb.co/TBGy7Jx/crow.jpg",
      },
      {
        Question: "Guess the animal",
        options: ["zebra", "horse", "dog"],
        answer: "zebra",
        img: "https://i.ibb.co/vvF5wmw/zebra.jpg",
      },
    ],
    name: "",
    view: -1,
    randomArr: [],
  };
  async componentDidMount() {
    const { quizQuestionn } = this.state;
    let gen = [];
    for (let i = 0; i < 5; i++) {
      let randomI;
      while (!randomI) {
        let temp = Math.floor(Math.random() * quizQuestionn.length);
        if (!gen.filter((v) => quizQuestionn[temp] == v).length) {
          randomI = temp;
        }
      }
      gen.push(quizQuestionn[randomI]);
    }
    this.setState({ randomArr: gen });
  }
  handleChange = (e) => {
    const { currentTarget: input } = e;
    let s1 = { ...this.state };
    s1[input.name] = input.value;
    this.setState(s1);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ view: 1 });
  };
  render() {
    const { view, name, randomArr = [] } = this.state;

    return (
      <div className="container">
        {view == -1 ? (
          <React.Fragment>
            <div className="text-center welcomeScreen ">
              <h2 className="heading2  my-1">Guess the Image Quiz</h2>
              <div className="form-group my-4 ">
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Enter Your Name"
                />
                <div className="text-center">
                  <button
                    className="btn btn-warning btn-sm my-4"
                    onClick={this.handleSubmit}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </React.Fragment>
        ) : (
          <Quiz name={name} randomArr={randomArr} />
        )}
      </div>
    );
  }
}