import { BrowserRouter, Routes, Route } from "react-router-dom"
import MyMenuV1 from "./MyMenuV1"
import { Container } from "@mui/material"
//páginas do Professor
import CadastrarProfessor from "./Professor/Cadastrar"
import ListarProfessor from "./Professor/Listar"
import EditarProfessor from "./Professor/Editar"

const MainPage = () => {
    return (
        <BrowserRouter>
            <MyMenuV1 />
            <Container sx={{mt:4}}>
                <Routes>1
                    <Route path="cadastrarProfessor" element={<CadastrarProfessor />}/>
                    <Route path="listarProfessor" element={<ListarProfessor />}/>
                    <Route path="editarProfessor" element={<EditarProfessor />}/>
                </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default MainPage