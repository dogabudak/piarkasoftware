import React, {Component} from 'react'
import './SideBox.css';

export default class SideBox extends Component {
    render() {
        return (
            <div className="infoBox">
                <input type="checkbox" id="toggle" className="toggle__checkbox"/>
                <div className="box">
                    <label htmlFor="toggle" className="toggle">
                        <div className="icon"/>
                    </label>
                    <div className="infoSection">
                        <h4 style={{yIndex: 1}} className="box__item">Current Projects</h4>
                        <p style={{yIndex: 2}} className="box__item">81 guides</p>
                        <p style={{yIndex: 3}} className="box__item">Slide & Learn</p>
                        <p style={{yIndex: 4}} className="box__item">Piarka</p>
                        <p style={{yIndex: 5}} className="box__item">Yeşil Doğa</p>
                        <p style={{yIndex: 6}} className="box__item">Procedure Dungeons</p>
                        <p style={{yIndex: 7}} className="box__item">An Unusual Refugee </p>
                        <p style={{yIndex: 8}} className="box__item">piarkasoftware.com</p>
                        <p style={{yIndex: 9}} className="box__item">dogabudak.com</p>
                        <p style={{yIndex: 10}} className="box__item">node-to-csv-ts</p>
                        <p style={{yIndex: 11}} className="box__item">btcturk_websockets</p>
                    </div>
                </div>
            </div>
        )
    }
}
