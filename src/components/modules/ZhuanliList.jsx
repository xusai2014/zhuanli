import React,{Component} from 'react';
import { connect } from 'react-redux'
import {setNameActionCreator} from '../../actions/actions';
import { Link, hashHistory } from 'react-router';

class PageHeader extends Component{

    onGetList (delay='jerry') {
        this.props.dispatch(setNameActionCreator(delay))
    }

    render(){
       return <div>
           <nav className="navbar navbar-inverse" role="navigation">
               <div className="container-fluid">

                   <div className="navbar-header">
                       <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                           <span className="sr-only">Toggle navigation</span>
                           <span className="icon-bar"></span>
                           <span className="icon-bar"></span>
                           <span className="icon-bar"></span>
                       </button>
                       <a className="navbar-brand" href="#">Brand</a>
                   </div>

                   <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                       <ul className="nav navbar-nav">
                           <li><Link to={`/simple`} >简单检索 </Link></li>
                           <li> <Link to={`/table`} >表格检索 </Link></li>
                           <li><Link to={`/ipc`} > IPC分类导航</Link></li>

                       </ul>
                   </div>
               </div>
           </nav>
        </div>
    }
}

const mapStateToProps = (state, props) => {
    return {
        a: state.userReducer.a,
    }
}

export default connect(mapStateToProps)(PageHeader)