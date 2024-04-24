import { useState } from "react"
import { Button } from "../Button"
import Modal from "./index"
import { Box } from "../Box"
import { Heading, Text } from "../Typography"
import { Spacer } from "../Spacer"

const TestModal = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal open={open} handleClose={() => { setOpen(false) }}>
        <Box>
          <Heading>Test Modal</Heading>
          <Spacer gap="5px" />
          <Text>This is test modal</Text>
        </Box>
      </Modal>
    </>
  )
}

export default TestModal