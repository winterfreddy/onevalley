import React from 'react';
import Modal from 'react-bootstrap/Modal';
import "bootstrap/dist/css/bootstrap.min.css";
import './fruit.css'


class Fruit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
        }

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleShow() {
        this.setState({show: true})
    }

    handleClose() {
        this.setState({show: false});
    }

    render() {
        return(
            <>
                <button
                    variant="primary"
                    onClick={() => this.handleShow()}
                    className="fruit-button"
                >
                    <img src={this.props.imgUrl} alt={`${this.props.description.name}`}/>
                </button>

                <Modal show={this.state.show} onHide={() => this.handleClose()}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.description.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="fruit-body">
                        <img src={this.props.imgUrl} alt={`${this.props.description.name}`}/>
                        <div className="fruit-description">
                            <label>Genus: {this.props.description.genus}</label>
                            <label>Family: {this.props.description.family}</label>
                            <label>Order: {this.props.description.order}</label>
                            <ul> Nutritions:
                                <li>Carbohydrates: {this.props.description.nutritions.carbohydrates}</li>
                                <li>Protein: {this.props.description.nutritions.protein}</li>
                                <li>Fat: {this.props.description.nutritions.fat}</li>
                                <li>Calories: {this.props.description.nutritions.calories}</li>
                                <li>Sugar: {this.props.description.nutritions.sugar}</li>
                            </ul>
                        </div>
                    </Modal.Body>
                </Modal>
            </>
        )
    }

}

export default Fruit;