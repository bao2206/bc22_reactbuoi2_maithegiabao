import React, { Component } from "react";
import "./Css/Style.css";
import data from "./data.json";
import GlassesList from "./GlassesList";
export default class GlassesStore extends Component {

  state ={
    glassesCurrent: {
      "id": 1,
        "price": 30,
        "name": "GUCCI G8850U",
        "url": "./glassesImage/v1.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
  }

  renderGlassesList = () => {
    return data.map((glassesItem, index) => {
      return (
        <img key={index} src={glassesItem.url} className="glass__img ml-1 border border-width-1" onClick={() =>{this.changeGlasses(glassesItem)}}/>
      );
    });
  };
  changeGlasses = (newGlasses) =>{
    this.setState({
      glassesCurrent: newGlasses
    })
  }
  render() {
    return (
      <div className="bg__store">
        <div className="bg__inner">
          <h3 className="text-center text-light p-5">TRY GLASSES APP ONLINE</h3>

          <div className="container">
            <div className="row mt-5 text-center">
              <div className="col-6 ">
                <div className="position-relative">
                  <img
                    className="position-absolute"
                    src="./glassesImage/model.jpg"
                    alt="model.jpg"
                    style={{ width: "250px" }}
                  />
                  <img
                    className="position-absolute style__glasses"
                    src={this.state.glassesCurrent.url}
                    alt="v1.png"
                  />
                  <div className="position-relative glass_description">
                    <p>{this.state.glassesCurrent.name}</p>
                    <span>{this.state.glassesCurrent.desc}</span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <img
                  src="./glassesImage/model.jpg"
                  alt="model.jpg"
                  style={{ width: "250px" }}
                />
              </div>
            </div>
          </div>
          {/* Div chứa các kính được chọn */}
          <div className="bg-light container text-center mt-5 d-flex justify-content-center p-5">
            {this.renderGlassesList()}
          </div>
        </div>
      </div>
    );
  }
}
