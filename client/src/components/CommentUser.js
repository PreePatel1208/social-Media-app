import React from 'react'
import { Card, Feed, Modal, Button } from 'semantic-ui-react'

const CommentUser = ({ children, comments }) => {
    const [open, setOpen] = React.useState(false)
   
    return (
        < Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={children}
        >
            <Modal.Header>comment Activity</Modal.Header>
            <Modal.Content>
                <Card>
                    <Card.Content>
                        <Feed>
                            {comments.map((comment) =>
                                <Feed.Event>
                                    <Feed.Label image='https://react.semantic-ui.com/images/avatar/large/molly.png' />
                                    <Feed.Content>
                                        <Feed.Date content='1 day ago' />
                                        <Feed.Summary>
                                            <a>{comment.username}</a> <span>"{comment.body}"</span> comments your post.
                                        </Feed.Summary>
                                    </Feed.Content>
                                </Feed.Event>
                            )}

                        </Feed>
                    </Card.Content>
                </Card>
            </Modal.Content>
            <Modal.Actions>
                <Button color='black' onClick={() => setOpen(false)}>
                    Close
                </Button>
            </Modal.Actions>

        </Modal >
    )
}

export default CommentUser