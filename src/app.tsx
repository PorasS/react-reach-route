import React from 'react';
import NavBar from './components/NavBar';
import Route from './Routes/Route';
import { connect } from 'react-redux';

import './index.css';

class App extends React.Component {


    render(): JSX.Element {
        console.log("props object", this.props);
        return (
            <React.Fragment>
                <div>
                    <NavBar />
                    {/* <Route /> */}
                </div>
                {/* <div>
                    <button onClick={() => deleteId(1)}>DeleteId</button>
                </div> */}
            </React.Fragment>
        )
    }
}

const deleteId = (id: number) => {
    // this.props.deletePost(id);
    console.log("deleteId", this.props)
}
//taking a state object from redux store and applying to props object
//whatever we adding through mapStateToProps and mapDispatchToProps are getting added in props object
const mapStateToProps = (state: any) => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch: any) => {

    return {
        deletePost: (id: number) => dispatch({ type: "DELETE_POST", id: id })
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);