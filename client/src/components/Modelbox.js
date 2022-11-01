import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

function ModalExampleModal({ children, Content }) {
    const [open, setOpen] = React.useState(false)

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={children}
        >
            <Modal.Header>Select a Photo</Modal.Header>
            <Modal.Content>
                <Content />
            </Modal.Content>
            <Modal.Actions>
                <Button color='black' onClick={() => setOpen(false)}>
                    Close
                </Button>
                {/* <Button
                    content="Yep, that's me"
                    labelPosition='right'
                    icon='checkmark'
                    onClick={() => setOpen(false)}
                    positive
                /> */}
            </Modal.Actions>
        </Modal>
    )
}

export default ModalExampleModal