import { AppBar, Box, Button, Container, Menu, MenuItem, Toolbar, Typography } from "@mui/material"
import AdbIcon from "@mui/icons-material/Adb"
import { useState } from "react"
import { Link } from "react-router-dom"
const MyMenu = () => {

    const [anchorElProfessor,setanchorElProfessor] = useState(null)
    const handleOpenAnchorElProfessor =(event)=>{
        setanchorElProfessor(event.currentTarget)
    }
    const handleCloseAnchorElProfessor = ()=>{
        setanchorElProfessor(null)
    }
    function dropProfMenu() {
        return (
            <Box>
                <Button
                    sx={{
                        color: "white",
                        my: 2 
                    }}
                    onClick={handleOpenAnchorElProfessor}
                >
                    Professores
                </Button>
                <Menu
                    anchorEl={anchorElProfessor}
                    open={Boolean (anchorElProfessor)}
                    onClose={handleCloseAnchorElProfessor}
                >
                    <MenuItem
                        onClick={handleCloseAnchorElProfessor}
                        component={Link}
                        to ={"cadastrarProfessor"}
                    >
                        <Typography>Cadastrar</Typography>
                    </MenuItem>
                    <MenuItem
                        onClick={handleCloseAnchorElProfessor}
                        component={Link}
                        to={"listarProfessor"}
                    >
                        <Typography>Listar</Typography>
                    </MenuItem>
                </Menu>
            </Box>
        )
    }

    return (
        <AppBar>
            <Container>
                <Toolbar>
                    <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        component="a"
                        href="/"
                        sx={{
                            textDecoration: "none",
                            color: "white",
                            fontFamily: "monospace",
                            letterSpacing: ".3rem",
                            fontWeight: 800
                        }}
                    >
                        CRUDV2
                    </Typography>
                    <Box sx={{ ml: 3, width: "100%", display: "flex", justifyContent: "flex-end" }}>
                        {dropProfMenu()}
                        <Button
                            sx={{
                                color: "white",
                                my: 2
                            }}
                        >
                            Alunos
                        </Button>
                        <Button>
                            Sobre
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default MyMenu