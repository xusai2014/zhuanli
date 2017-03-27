import React from 'react'
import { Provider } from 'react-redux';
import { Route, IndexRoute,Router,hashHistory, IndexRedirect } from 'react-router';
import store from '../store/store';
import A from '../components/modules/ZhuanliList'
import SimpleSearch from '../components/pages/SimpleSearch'
import TableSearch from '../components/pages/TableSearch'
import IPCTreeSearch from '../components/pages/IPCTreeSearch'
const storage = store()
export default class Application extends React.Component {
    render () {
        return (
            <Provider store={ storage }>
                <Router history={hashHistory} >
                <Route path="/" component={A}>

                </Route>
                    <Route path="/simple" component={SimpleSearch} />
                    <Route path="/table" component={TableSearch}/>
                    <Route path="/ipc" component={IPCTreeSearch} />
                </Router>
            </Provider>
        )
    }
}