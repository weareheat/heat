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
      <div className="">
        <img
          className="imgPreview"
          src={`../img/screenshots/${this.props.file}`}
          onClick={this.props.viewModal ? null : () => this.toggle()}
        ></img>
        <Modal isOpen={this.state.modal} toggle={this.toggle} size={"xl"}>
          <ModalHeader toggle={this.toggle}></ModalHeader>
          <ModalBody>
            <img
              className="imgModal"
              src={`../img/screenshots/${this.props.file}`}
            ></img>
          </ModalBody>
        </Modal>
        <style jsx>
          {`
            .imgPreview {
              display: block;
              width: 100%;
              height: 100%;
              ${this.props.viewModal ? null : "cursor: pointer"};
            }
            .imgModal {
              width: 100%;
            }
            .modal-content {
              background: transparent;
              border: none;
            }
            .modal-body {
              display: block !important;
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
