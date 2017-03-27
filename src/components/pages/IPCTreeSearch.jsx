import React from 'react';
import { connect } from 'react-redux';
import A from '../modules/ZhuanliList';
import Tree from '../modules/Tree';
import '../../lib/tree'

class IPCTreeSearch extends React.Component{
    componentDidMount(){

        function getTree() {
            // Some logic to retrieve, or generate tree structure
            return  [
                {
                    text: "Parent 1",
                    nodes: [
                        {
                            text: "Child 1",
                            nodes: [
                                {
                                    text: "Grandchild 1"
                                },
                                {
                                    text: "Grandchild 2"
                                }
                            ]
                        },
                        {
                            text: "Child 2"
                        }
                    ]
                },
                {
                    text: "Parent 2"
                },
                {
                    text: "Parent 3"
                },
                {
                    text: "Parent 4"
                },
                {
                    text: "Parent 5"
                }
            ];
        }
        $('#tree').treeview({data: getTree()});

    }
    render(){
        return( <div>
                <A/>
                <div className="container">

                    <div  id="tree" className="col-md-4">
                    </div>
                    <div className="col-md-8">
                        <nav className="navbar navbar-default" role="navigation">
                            <div className="container-fluid">

                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                    <span className="navbar-brand" ></span>
                                </div>

                                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                    <ul className="nav navbar-nav">
                                        <li><a><input type="checkbox" value="3"  className="paddingLeft" />全选</a></li>
                                        <li className="dropdown">
                                            <a className="dropdown-toggle"
                                               data-toggle="dropdown"
                                               >
                                                收藏
                                                <b className="caret"></b>
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a>收藏选中</a></li>
                                                <li><a>收藏全部</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown">
                                            <a className="dropdown-toggle"
                                               data-toggle="dropdown"
                                            >
                                                下载
                                                <b className="caret"></b>
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a>著录项下载</a></li>
                                                <li><a>专利全文图像下载</a></li>
                                                <li><a>著录项批量下载</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown">
                                            <a className="dropdown-toggle"
                                               data-toggle="dropdown"
                                            >
                                                分析预警
                                                <b className="caret"></b>
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a>专利分析</a></li>

                                            </ul>
                                        </li>




                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
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

export default connect(mapStateToProps)(IPCTreeSearch)