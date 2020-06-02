import React, { Component } from "react";
import {Button, Card, Row, Col} from "react-bootstrap";
import airhorn from './assets/shortAirhorn.mp3';
import { Howl, Howler } from "howler"
import "bootstrap/dist/css/bootstrap.min.css";
import "./Game.css";
import Reel from 'react-reel'
import { CountdownCircleTimer } from "react-countdown-circle-timer";


// shuffle(){
//     odoo.default({ el:'.js-odoo', from: 'NOVEMBER', to: 'CODEVEMBER', animationDelay: 1000 });
// }

const audioClips = [
    {sound: airhorn, label: 'Airhorn'},
]

const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
        return <div className="timer"><h1>You Did it!</h1></div>;
      }
    return (
      <div className="timer">
        <div className="value"><h1>{remainingTime}</h1></div>
      </div>
    );
  };
  
  function Timer() {
    return (
  
        <div className="timer-wrapper">
          <CountdownCircleTimer
            isPlaying
            duration={30}
            colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
            onComplete={() => [false, 1000]} // boolean sets if it will replay when complete
          >
            {renderTime}
          </CountdownCircleTimer>
        </div>
  
    );
  }

export class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      speakingList: [],
      topics: [],
      judgements: [
        "is great",
        "sucks",
        "is alright",
        "could be better",
        "is your favorite thing in the world",
        "is the subject of all loathing in your being",
      ],
      errors: 0,
      currentSpeaker: [],
      currentTopic: [],
      currentJudgement: [],
      speakerTrash: [],
      topicTrash: [],
      start: false,
    };
  }

  startGame = () => {
    const start = [...this.state.start];
    this.setState({ start: true });
  }

  soundPlay = (src) => {
      const sound =new Howl({
          src
      });
      sound.play();
    //   const errors = [...this.state.errors];
    //   this.setState({
    //     errors: errors + 1
    //   })
    //   console.log(errors)
  }

  renderSoundButton = () => {
    return audioClips.map((soundObj, index) => {
        return(
            <Button
              className="btn-primary"
              size="lg"
              variant="danger"
              onMouseDown = {() => this.soundPlay(soundObj.sound)}
            >
              Hit Me
            </Button>
        )
    });
  }



  updateInput(key, value) {
    //update react state
    this.setState({
      [key]: value,
    });
  }

  addSpeaker() {
    // create item with unique id
    const newSpeaker = {
      id: 1 + Math.random(),
      value: this.state.newSpeaker.slice(),
    };
    // copy of current list of items
    const speakingList = [...this.state.speakingList];
    // add new item to list
    speakingList.push(newSpeaker);
    // update state with new list and reset
    this.setState({
      speakingList,
      newSpeaker: "",
    });
  }

  addTopic() {
    // create item with unique id
    const newTopic = {
      id: 1 + Math.random(),
      value: this.state.newTopic.slice(),
    };
    // copy of current list of Topics
    const topics = [...this.state.topics];
    // add new Topic to list
    topics.push(newTopic);
    // update state with new list and reset
    this.setState({
      topics,
      newTopic: "",
    });
  }

  deleteTopic(id) {
    // copy current list of items
    const topics = [...this.state.topics];
    //filter out item being deleted
    const updatedTopics = topics.filter((topic) => topic.id !== id);
    this.setState({ topics: updatedTopics });
  }

  deleteSpeaker(id) {
    // copy current list of items
    const speakingList = [...this.state.speakingList];
    //filter out item being deleted
    const updatedSpeakingList = speakingList.filter(
      (Speaker) => Speaker.id !== id
    );
    this.setState({ speakingList: updatedSpeakingList });
  }


  shuffle() {
    const speakingList = [...this.state.speakingList];
    const topics = [...this.state.topics];
    const judgements = [...this.state.judgements];

    let shuffledSpeaker = speakingList[Math.floor(Math.random() * speakingList.length)];
    let shuffledTopic = topics[Math.floor(Math.random() * topics.length)];
    let shuffledJudgement = judgements[Math.floor(Math.random() * judgements.length)];

    this.setState({ currentSpeaker: shuffledSpeaker.value });
    this.setState({ currentTopic: shuffledTopic.value });
    this.setState({ currentJudgement: shuffledJudgement });

  }

  render() {
    Howler.volume(1.0)
    return (
      <>
        <Row>
          <Col>
            <Card className="left">
              <Card.Body>
                <Card.Title>Speakers: </Card.Title>

                <br />
                <input
                  type="text"
                  placeholder="Add a Speaker"
                  value={this.state.newSpeaker}
                  onChange={(e) =>
                    this.updateInput("newSpeaker", e.target.value)
                  }
                />
                <Button
                  className="addSpeaker"
                  size="md"
                  variant="success"
                  onClick={() => this.addSpeaker()}
                >
                  +
                </Button>
                <Card.Text>
                  <ul>
                    {this.state.speakingList.map((Speaker) => {
                      return (
                        <li key={Speaker.id}>
                          {Speaker.value}
                          <Button
                            variant="outline-danger"
                            onClick={() => this.deleteSpeaker(Speaker.id)}
                          >
                            <i class="material-icons">x</i>
                          </Button>
                        </li>
                      );
                    })}
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Who's up: </Card.Title>
                <Card.Text>
                  {this.state.currentSpeaker}, tell us about how {this.state.currentTopic} {this.state.currentJudgement}
                </Card.Text>
                <Button variant="info" onClick={() => this.shuffle()}>
                  NEXT
                </Button>
              </Card.Body>
            </Card>
            <Timer />
            {this.renderSoundButton()}
          </Col>
          <Col>
            <Card className="right">
              <Card.Body>
                <Card.Title>Topics: </Card.Title>
                <br />
                <input
                  type="text"
                  placeholder="Add a Speech Topic"
                  value={this.state.newTopic}
                  onChange={(e) => this.updateInput("newTopic", e.target.value)}
                />
                <Button
                  className="addTopic"
                  size="md"
                  variant="success"
                  onClick={() => this.addTopic()}
                >
                  +
                </Button>
                <Card.Text>
                  <ul>
                    {this.state.topics.map((topic) => {
                      return (
                        <li key={topic.id}>
                          {topic.value}
                          <Button variant="outline-danger" onClick={() => this.deleteTopic(topic.id)}>
                            <i class="material-icons">x</i>
                          </Button>
                        </li>
                      );
                    })}
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

export default Game;
