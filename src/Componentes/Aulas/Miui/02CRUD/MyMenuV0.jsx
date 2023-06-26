import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material"
//import AdbIcon from "@mui/icons-material/Adb"

/* 
    <adbIcon
        sx= {{

        }}
    />
*/
const MyMenuV0 =()=>{
    return (
        <AppBar position="static">
            <Container maxWidth="x1">
                <Toolbar>
                    <Typography
                        variant="h5"
                        component="a"
                        href="/"
                        sx = {{
                            ml:1,
                            fontFamily:"monospace",
                            fontWeight: 700,
                            letterSpacing: ".2rem",
                            color:"white",
                            textDecoration: "none"
                        }}
                    >
                        CRUD V0
                    </Typography>

                    <Box
                        sx = {{
                            display: "flex",
                            flex: 1,
                        
                            ml:3
                        }}
                    >
                        <Button
                            sx={{
                                my:2,color:"white"
                            }}
                        >
                            Professores
                        </Button>
                        <Button
                            sx={{
                                my:2,color:"white"
                            }}
                        >
                            Alunos
                        </Button>
                        <Button
                            sx={{
                                my:2,color:"white"
                            }}
                            onClick={()=>alert("bottão clicado")}
                        >
                            Sobre
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default MyMenuV0