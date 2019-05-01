import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import * as R from 'ramda'

import {fetchCars, fetchTypes, fetchTasks, createTasks} from '../store/actions'
import {getCarsSelector, getTypesSelector, getTasksSelector} from '../store/selectors'

import Header from '../components/Header';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {showState: false};

        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
    }

    customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
    }

    show() {
        this.setState({
            showState: true
        });
    }

    hide() {
        this.setState({
            showState: false
        });
    }
    
    createTaskFunc(evt, hide) {
        evt.persist()
        console.log('Event - ', evt.target[0].value)
        const {
            createTasks
        } = this.props
        createTasks(evt.target[0].value)
        hide()
    }

    componentDidMount() {
        const {
            fetchCars,
            fetchTypes,
            fetchTasks
        } = this.props
        fetchCars()
        fetchTypes()
        fetchTasks()
    }

    render() {
        const {
            cars,
            types,
            tasks
        } = this.props
        const physicalStatus = types.__schema ? R.compose(R.prop('enumValues'))(R.find(R.propEq('name', 'PhysicalStatus'))(types.__schema.types)) : null
        const legalStatus = types.__schema ? R.compose(R.prop('enumValues'))(R.find(R.propEq('name', 'LegalStatus'))(types.__schema.types)) : null
        const sellingStatus = types.__schema ? R.compose(R.prop('enumValues'))(R.find(R.propEq('name', 'SellingStatus'))(types.__schema.types)) : null
        return (
            <Fragment>
                <Header />
                {(cars && types.__schema && tasks.tasks) ? <div className="container">
                {console.log('!!! - ', tasks)}
                {/* {console.log('!!! - ', types.__type['enumValues'])} */}
                    <h3>{cars.make} {cars.model} {cars.trim}</h3>
                    <div className="card mb-4">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src="data:image/jpeg;base64,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" className="card-img" alt="Audi A4" />
                            </div>
                            <div className="col-md-4">
                                <div className="card-body">
                                    <h5 className="card-title">Status</h5>
                                    <hr/>
                                    <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <label className="input-group-text" htmlFor="inputGroupSelect01">Physical</label>
                                    </div>
                                    <select className="custom-select" id="inputGroupSelect01">
                                        <option value={cars.physicalStatus}>{cars.physicalStatus}</option>
                                        {physicalStatus.map(item => <option value={item.name} key={item.name}>{item.name}</option>)}
                                    </select>
                                    </div>
                                    <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <label className="input-group-text" htmlFor="inputGroupSelect01">Legal</label>
                                    </div>
                                    <select className="custom-select" id="inputGroupSelect01">
                                        <option value={cars.legalStatus}>{cars.legalStatus}</option>
                                        {legalStatus.map(item => <option value={item.name} key={item.name}>{item.name}</option>)}
                                    </select>
                                    </div>
                                    <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <label className="input-group-text" htmlFor="inputGroupSelect01">Seller</label>
                                    </div>
                                    <select className="custom-select" id="inputGroupSelect01">
                                        <option value={cars.legalStatus}>{cars.sellingStatus}</option>
                                        {sellingStatus.map(item => <option value={item.name} key={item.name}>{item.name}</option>)}
                                    </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card-body">
                                    <h5 className="card-title">Financial information</h5>
                                    <hr/>
                                    <p className="card-text"><small className="text-muted">Purchased</small></p>
                                    <p className="card-text">{cars.financialDetails.purchasePrice}</p>
                                    <p className="card-text"><small className="text-muted">Sold</small></p>
                                    <p className="card-text">{cars.financialDetails.sellingPrice}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-deck">
                        <div className="card">
                            <div className="card-body">
                            <h5 className="card-title">A form to add information</h5>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <label className="input-group-text" htmlFor="inputGroupSelect01">Make</label>
                                </div>
                                <select className="custom-select" id="inputGroupSelect01">
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <label className="input-group-text" htmlFor="inputGroupSelect01">Model</label>
                                </div>
                                <select className="custom-select" id="inputGroupSelect01">
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <label className="input-group-text" htmlFor="inputGroupSelect01">Trim</label>
                                </div>
                                <select className="custom-select" id="inputGroupSelect01">
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <label className="input-group-text" htmlFor="inputGroupSelect01">Engine</label>
                                </div>
                                <select className="custom-select" id="inputGroupSelect01">
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <button className="btn btn-primary">Submmit</button>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                            <h5 className="card-title">A list of tasks</h5>
                            {tasks.tasks.map(item => <h5 key={item.id}>{item.taskType} - {item.comment}</h5>)}
                            <button className="btn btn-primary"  onClick={this.show}>Create new task</button>
                            </div>
                        </div>
                    </div>
                </div> : null}
                <Modal
                    isOpen={this.state.showState}
                    onRequestClose={this.hide}
                    style={this.customStyles}
                    contentLabel="Create new task"
                >
                    <h4>Please input description for new task</h4>
                    <form onSubmit={(event) => this.createTaskFunc(event, this.hide)}>
                    <input className='inputStyle'/>
                    <button onClick={this.hide}>Close</button>
                    <button type='Submit'>Save</button>
                    </form>
                </Modal>
            </Fragment>
        )
    }
}

export default connect((state) => {
    return ({
        cars: getCarsSelector(state),
        types: getTypesSelector(state),
        tasks: getTasksSelector(state)
    });
}, {
    fetchCars,
    fetchTypes,
    fetchTasks,
    createTasks
})(MainPage)