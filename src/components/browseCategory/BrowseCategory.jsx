import { Box } from "@mui/material"
import { Container } from "postcss"



const BrowseCategory = () => {
  return (
    <div>
        <Container>
            <Box>
                <Box>
                    <div style={{
                        width: '20px',
                        height: '40px',
                        background: '#DB4444',
                        borderRadius: '4px',
                        border: '1px solid red'
                    }}></div>
                </Box>
                <Box>
                    <h1>Browse By Category</h1>
                </Box>
            </Box>
            <Box></Box>
        </Container>
    </div>
  )
}

export default BrowseCategory