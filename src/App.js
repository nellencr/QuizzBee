import React, { Component } from 'react';
import './App.css';
import QuizService from './assets/QuizService';
import Questions from './Components/Questions';
import Results from './Components/Results';

class QuizBee extends Component {
  state = {
    questionBank: [],
    score:0,
    responses:0
  };
  getQuestions = () => {
    QuizService().then(question => {
      this.setState ({
        questionBank: question
      });
    });
  };
  computeAnswer= (answer, correctAnswer) => {
    if (answer === correctAnswer){
      this.setState ({
        score: this.state.score+1
      });
    }
    this.setState({
      responses: this.state.responses < 5 ? this.state.responses +1 :5
    });
  }

  playAgain=()=>{
    this.getQuestions();
    this.setState({
      score:0,
      responses:0
    })
  }
  componentDidMount() {
    this.getQuestions();
  }
 
  render() {
  return (
    <div className="container">
      <div className="title">QuizBee</div>
        {this.state.questionBank.length > 0 &&
        this.state.responses <5 &&
          this.state.questionBank.map( ({question, answers, correct, questionId}) =>
          <Questions question={question} 
          options={answers} 
          key={questionId}
          selected={answer => this.computeAnswer(answer, correct)}/>
          )}
          {this.state.responses === 5 ? <Results score={this.state.score}
           playAgain={this.playAgain}/> :null }
    </div>
    );
  }
}

export default QuizBee ;
