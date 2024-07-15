
import { Box, Breadcrumbs, Container } from '@mui/material'
import { Link } from 'react-router-dom'

const MyAccount = () => {
    return (
        <div>
            <Breadcrumbs aria-label="breadcrumb" style={{ margin: '80px 1200px 0px 135px' }}>
                <Link underline="hover" color="#7F7F7F" to="/">
                    <p style={{ color: "#7F7F7F" }}>Home</p>
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    to="/my-account"
                >
                    My Account
                </Link>
            </Breadcrumbs>
            <Container>
                <Box sx={{ mt: "180px", display: "flex", gap: "116px" }}>
                    <Box sx={{ display: "grid" }}>
                        <div>
                            <h6 style={{ fontWeight: "500" }}>Manage My Account</h6>
                            <p style={{ color: "#DB4444" }}>My Profile</p>
                        </div>
                        <h6 style={{ fontWeight: "500" }}>My Orders</h6>
                        <h6 style={{ fontWeight: "500" }}>My WishList</h6>
                    </Box>
                    <Box sx={{
                        width: 870,
                        height: 630,
                        borderRadius: "4px",
                        boxShadow: "0px 1px 13px 0px #0000000D",
                        padding: "40px 80px 40px 80px",
                        display: "grid"
                    }}>
                        <p style={{ fontSize: "20px", color: "#DB4444", fontWeight: "500" }}>Edit Your Profile</p>
                        <Box sx={{ display: "flex", gap: "50px" }}>
                            <div>
                                <p>First Name</p>
                                <input type="text" placeholder='Md' style={{ width: "330px", height: "50px", background: "#F5F5F5", borderRadius: "4px", padding: "13px 16px 13px 16px" }} />
                            </div>
                            <div>
                                <p>Last Name</p>
                                <input type="text" placeholder='Rimel' style={{ width: "330px", height: "50px", background: "#F5F5F5", borderRadius: "4px", padding: "13px 16px 13px 16px" }} />
                            </div>
                        </Box>
                        <Box sx={{ display: "flex", gap: "50px" }}>
                            <div>
                                <p>Email</p>
                                <input type="text" placeholder='rimel1111@gmail.com' style={{ width: "330px", height: "50px", background: "#F5F5F5", borderRadius: "4px", padding: "13px 16px 13px 16px" }} />
                            </div>
                            <div>
                                <p>Address</p>
                                <input type="text" placeholder='Kingston, 5236, United State' style={{ width: "330px", height: "50px", background: "#F5F5F5", borderRadius: "4px", padding: "13px 16px 13px 16px" }} />
                            </div>
                        </Box>
                        <Box sx={{ display: "grid", gap: "15px" }}>
                            <p>Password Changes</p>
                            <input type="text" style={{ width: 710, height: 50, background: "#F5F5F5", borderRadius: '4px', padding: "13px 16px 13px 16px" }} placeholder='Current Passwod' />
                            <input type="text" style={{ width: 710, height: 50, background: "#F5F5F5", borderRadius: '4px', padding: "13px 16px 13px 16px" }} placeholder='New Passwod' />
                            <input type="text" style={{ width: 710, height: 50, background: "#F5F5F5", borderRadius: '4px', padding: "13px 16px 13px 16px" }} placeholder='Confirm New Passwod' />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: "center", marginLeft: "auto", gap: "35px" }}>
                            <button>Cancel</button>
                            <button style={{
                                width: 214,
                                height: 56,
                                borderRadius: "4px",
                                padding: "16px, 48px, 16px, 48px",
                                background: "#DB4444",
                                color: "#fff",
                            }}>Save Changes</button>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </div>
    )
}

export default MyAccount