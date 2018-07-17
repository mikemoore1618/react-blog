import React from 'react'
import NavBar from './NavBar';
import PostsContainer from './PostsContainer'

class App extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <PostsContainer />
            </div>
        )
    }
}

export default App