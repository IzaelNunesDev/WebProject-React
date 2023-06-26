import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import DeleteIcon  from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import { styled } from '@mui/material/styles';
import  { tableCellClasses } from '@mui/material/TableCell';
import { Link } from "react-router-dom";


const Listar = () => {
    const professores = [
        { id: 0, nome: "Vitor Corleone", curso: "SI", titulacao: "MEST" },
        { id: 1, nome: "Michel Corleone", curso: "DD", titulacao: "GRAD" },
        { id: 2, nome: "Luca Brasi", curso: "SI", titulacao: "MEST" },
        { id: 3, nome: "Kay Adams", curso: "SI", titulacao: "DOUT" },
        { id: 4, nome: "Peter Clemenza", curso: "CC", titulacao: "MEST" },
        
    ]
    function deleteProfessorById(id){
        if(window.confirm("Deseja Excluir?")){
            alert("Professor "+id+" excluido com sucesso!")
        }
    }
    return (

        <>
            <Typography variant="h5" fontWeight="bold">
                Listar Professor
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <StyledTableRow >
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell>NOME</StyledTableCell>
                            <StyledTableCell>CURSO</StyledTableCell>
                            <StyledTableCell>TITULAÇÃO</StyledTableCell>
                            <StyledTableCell>AÇÕES</StyledTableCell>
                        </StyledTableRow >
                    </TableHead>
                    <TableBody>
                        {
                            professores.map(
                                (professor) => {
                                    return (
                                        <StyledTableRow key={professor.id}>
                                            <StyledTableCell>{professor.id}</StyledTableCell>
                                            <StyledTableCell>{professor.nome}</StyledTableCell>
                                            <StyledTableCell>{professor.curso}</StyledTableCell>
                                            <StyledTableCell>{professor.titulacao}</StyledTableCell>    
                                            <StyledTableCell>
                                                <Box>
                                                    <IconButton arial-label="edit" color="primary" component={Link} to={`/editarProfessor/${professor.id}`}>
                                                        <EditIcon/>
                                                    </IconButton>
                                                    <IconButton arial-label="delete" color="error" onClick={()=>deleteProfessorById(professor.id)}>
                                                        <DeleteIcon/>
                                                    </IconButton>
                                                </Box>
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    )
                                }
                            )
                        }
                    </TableBody>
                </Table>

            </TableContainer>
        </>
    )
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
export default Listar