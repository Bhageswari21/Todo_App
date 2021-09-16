 import React, { Component } from 'react';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this);
        this.state = {
            item:"" ,
        }
    }
     
    componentWillReceiveProps(nextProps) {
        this.setState({
            item: nextProps.item,
            
        });
    }

    itemHandler(e) {
        this.setState({ item: e.target.value });
    }



    handleSave() {
        const index = this.state;
        this.props.saveModalDetails(index)
    }

    render() {
        return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <p><span className="modal-lable">Let's make some change : </span><input value={this.state.item} onChange={(e) => this.itemHandler(e)} /></p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => { this.handleSave() }}>OK</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
 