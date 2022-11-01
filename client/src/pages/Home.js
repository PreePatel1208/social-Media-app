import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Grid, Transition } from "semantic-ui-react";

import { AuthContext } from "../context/auth";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import { FETCH_POSTS_QUERY } from "../utils/graphql";
import MyProfile from "../components/MyProfile";

function Home() {
    const { user } = useContext(AuthContext);
    const { loading, data: { getPosts: posts } = {} } = useQuery(
        FETCH_POSTS_QUERY
    );

    return (
        <Grid columns={3} doubling={true} stackable={true}>
            <Grid.Row className="page-title">
                {user ? <h1>Recent Posts</h1> : <h1>Please login for mor posts</h1>}
            </Grid.Row>

            <Grid.Row className="page-title">
                {user &&
                    (
                    <>
                       <Grid.Column width={10}>
                        <MyProfile {...{ user }} />
                        </Grid.Column>
                        <Grid.Column>
                            <PostForm />
                        </Grid.Column>
                    </>
                    )
                }
            </Grid.Row>
            <Grid.Row>

                {user && (
                    loading ? (
                        <h1>Loading Posts..</h1>
                    ) : (
                        <Transition.Group>
                            {posts &&
                                posts.map((post) => (
                                    <Grid.Column
                                        key={post.id}
                                        style={{ marginBottom: 20 }}
                                    >
                                        <PostCard post={post} />
                                    </Grid.Column>
                                ))}
                        </Transition.Group>
                    )
                )}
            </Grid.Row>
        </Grid>
    );
}

export default Home;
