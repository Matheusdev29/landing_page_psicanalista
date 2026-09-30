import { styled, Grid, Typography } from "@mui/material"
       const StyledClient = styled("div")(() =>({
        backgroundColor: "#0F141C",
        backgroundSize: "400% 400%",
        justifyContent:"center",
        height:"100vh",
        display:"flex",
        alignItems:"center",
        position: "relative",
        textAlign:"center",
       }))
export default function About() {

    return(
       <StyledClient>
                <Grid container  display={"flex"} alignItems={"center"} justifyContent={"center"}>
                   <Grid size={{ xs: 12, sm: 6, md: 6}} >     
                        <Typography 
                        variant="h2" color = "#F4F6F8" fontWeight={300} mb={1}>  
                            Sobre mim
                        </Typography>
                        <Typography 
                variant="body1"
                color="#F4F6F8"
                fontWeight={700}
                mb={1} >Olá! sou Alessandra Souza, psicanalista. Posso te acolher?
                Eu sou mulher, mãe, esposa, filha. Sou humana antes de qualquer título.
                Sou psicanalista, especialista em Transtorno de Personalidade, Psicoterapia Breve, Psicoterapia Infantil e Juvenil, Sexóloga e em Traumas Religiosos.
                Há mais de   10 anos eu acolho pessoas que carregam histórias que doem em silêncio.
                Acolho mulheres que se sentem quebradas por dentro, adolescentes que não se reconhecem no espelho, casais que se perderam no caminho, e pessoas que cresceram com uma fé que virou medo, culpa e trauma.
                Meu trabalho não é te consertar. Você não está quebrada. 
                </Typography>   
                    </Grid>
                </Grid>
                </StyledClient>
    )
}