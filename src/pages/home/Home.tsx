import {Grid, styled, Typography} from "@mui/material"
import Avatar from "../../assets/image/Avatar.jpg"
import background from "../../assets/image/escritoriopsicanalise.jpg"
    const StyledImg = styled("img")(() =>({
        marginLeft: "5%",
        width: "60%",
        borderRadius:"100%",
        border:"4px solid white ",
    }))


    const StyledHome = styled("div")(() =>({
        backgroundColor: "#0F141C",
        backgroundSize: "400% 400%",
        justifyContent:"center",
        height:"100vh",
        display:"flex",
        alignItems:"center",
        position: "relative",
        textAlign:"center",
        backgroundImage: background
}))

export default function Home() {
    return(
        <StyledHome>
        <Grid container spacing={4} justifyContent="center" alignItems="stretch" sx={{ padding: 2 }}>
                   <Grid size={{ xs: 12, sm: 6, md:6}} >     
                <StyledImg src = {Avatar}/>           </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 6}}>
                <Typography variant="h2" color = "#F4F6F8" fontWeight={300} mb={1}>
                Sou Alessandra Souza
                </Typography>
                <Typography 
                variant="h6"
                color="#F4F6F8"
                fontWeight={700}
                mb={1} > 
                    Sou psicanalista formada, especialista em Transtorno de Personalidade, Psicoterapia Breve, Psicoterapia Infantil e Juvenil, Sexóloga e em Traumas Religiosos.
Há mais de   10 anos eu acolho pessoas que carregam histórias que doem em silêncio.

                </Typography>   
            </Grid>
        </Grid>
        </StyledHome>
    )
}