import React from 'react'
import SinglePost from './SinglePost'

class PostsContainer extends React.Component {
    render() {
        const posts = [
            { title: "Hello World", body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id suscipit voluptatibus nam enim cum commodi unde libero obcaecati, explicabo et doloribus aspernatur ducimus molestiae tempore quae ut consequatur consequuntur quidem!" },
            
            { title: "My Second Post! Vacation Time", body: "Lorizzle ipsizzle dolizzle sizzle yippiyo, mammasay mammasa mamma oo sa adipiscing elit. Nizzle sapizzle velizzle, for sure volutpizzle, its fo rizzle dizzle, izzle vizzle, pizzle. Pellentesque gangsta tortizzle. Shizzlin dizzle eros. Sure izzle dolor dapibus turpis you son of a bizzle my shizz. Maurizzle pellentesque that's the shizzle et turpizzle. That's the shizzle izzle gangsta. Pellentesque crunk rhoncizzle sheezy." },
            
            { title: "Food truck pop-up roof party!", body: "Lorem ipsum dolor amet bespoke craft beer iPhone hoodie 3 wolf moon. Vexillologist mlkshk authentic af quinoa VHS cardigan green juice humblebrag art party. Direct trade next level pickled jianbing synth single-origin coffee chillwave. Ennui knausgaard cardigan semiotics ethical helvetica. Food truck pop-up roof party readymade. Man bun subway tile gochujang, palo santo VHS bicycle rights cliche. Chillwave venmo shaman, raclette scenester raw denim kickstarter tilde aesthetic semiotics wolf blog shoreditch." }
          ]

        return(
            <div>
                {posts.map(post => {
                    return (
                        <SinglePost
                            title={post.title}
                            body={post.body}
                        />
                    )
                })}
            </div>
        )
    }
}

export default PostsContainer