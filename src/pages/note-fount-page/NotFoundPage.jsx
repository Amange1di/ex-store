import { Container } from '@mui/material'

const NotFoundPage = () => {
  return (
    <div>
        <Container maxWidth="tg">
            <h1>404 Not Found</h1>
            <p>Your visited page not found. You may go home page.</p>
            <button>Back to home page</button>
        </Container>
    </div>
  )
}

export default NotFoundPage