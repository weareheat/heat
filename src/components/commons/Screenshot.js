import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default class Screenshot extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  render() {
    return (
      <div className="col-lg-6 px-0">
        <img
          className="img"
          src={`/img/screenshots/${this.props.file}`}
          onClick={() => this.toggle()}
        ></img>
        <Modal isOpen={this.state.modal} toggle={this.toggle} size={"xl"}>
          <ModalHeader toggle={this.toggle}></ModalHeader>
          <ModalBody>
            <img
              className="img"
              src={`/img/screenshots/${this.props.file}`}
            ></img>
          </ModalBody>
        </Modal>
        <style jsx>
          {`
            .img {
              display: block;
              width: 100%;
              height: 100%;
              cursor: pointer;
            }
            .modal-content {
              background: transparent;
              border: none;
            }
            .modal-body {
              background: transparent;
            }
            .modal-header {
              background: transparent;
              border-bottom: none;
            }
            .modal-header span {
              color: white;
              font-size: 2em;
            }
          `}
        </style>
      </div>
    );
  }
}
