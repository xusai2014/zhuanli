import React from 'react';
import { connect } from 'react-redux';
import A from '../modules/ZhuanliList'
import {zhuanliSearch} from '../../actions/actions'

class SimpleSearch extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            china:true,
            world:false
        }
    }
    selectRadio(e){
           if(e.currentTarget.value === "china") {
               this.setState({
                   china:true,
                   world:false
               })
           } else {
               this.setState({
                   china:false,
                   world:true
               })
           }
    }
    zhuanliSearch(){
        const data ={}
        debugger
        this.props.dispatch(zhuanliSearch(data))
    }

    render(){
        return( <div>
            <A/>
            <div className="container">
                <div className="row ">
                  <div className="input-group searchWidth">
                      <div className="input-group-btn"><span className="form-control textwidth">专利检索:</span></div>
                        <input type="text" className="form-control" placeholder="专利检索,请输入检索关键词例如：计算机" />
                            <span className="input-group-btn">
                                <button className="btn btn-default" type="button" onClick={()=>this.zhuanliSearch()}>检索
                                    <span className="glyphicon glyphicon-search" aria-hidden="true"></span></button>
                              </span>
                        </div>
                </div>
                <div className="row marginRow">
                    <div className="checkboxRow">
                            <div  className="textwidth" ><input type="radio" value="china" checked={this.state.china} aria-label="..."  onChange={(e)=> this.selectRadio(e)}/>中国专利</div>
                            <div  className="textwidth" ><input type="radio" value="world" checked={this.state.world} aria-label="..." onChange={(e)=> this.selectRadio(e)}/>世界专利</div>

                    </div>
                </div>

                <div className="row">

                    <div className="input-group searchWidth">
                        <div className="input-group-btn "><span className="form-control textwidth">法律状态检索:</span></div>
                            <input type="text" className="form-control" placeholder="法律状态检索，请输入检索关键词例如：计算机" />
                            <span className="input-group-btn">
                                <button className="btn btn-default" type="button">检索
                                    <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                                </button>
                              </span>
                        </div></div>
                    </div>

            </div>
        )



    }
    
}

const mapStateToProps = (state, props) => {
    return {
        a: state.userReducer.a,
    }
}

export default connect(mapStateToProps)(SimpleSearch)