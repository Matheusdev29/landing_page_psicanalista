import {Grid, styled, Typography, Card} from "@mui/material"


    const StyledClient = styled("div")(() =>({
        backgroundColor: "#0F141C",
        backgroundSize: "400% 400%",
        justifyContent:"center",
        minHeight:"100vh",
        display:"flex",
        alignItems:"center",
        position: "relative",
        textAlign:"center",

  
}))


    const StyledCard = styled(Card)(() => ({
  backgroundColor: "#252C3A",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "16px",
  overflow: "hidden",
  transition: "transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  cursor: "pointer",
  padding:"1%",


  "&:hover": {
    transform: "translateY(-10px) scale(1.02)",
    boxShadow: "0 24px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(100,160,255,0.3)",
    borderColor: "rgba(100,160,255,0.4)",

    "& .card-image": {
      transform: "scale(1.08)",
    },
    "& .card-overlay": {
      opacity: 1,
    },
  },
}))

export default function Clients(){

    return(
         <StyledClient>
                <Grid container spacing={4} justifyContent="center" alignItems="stretch" sx={{ padding: 2 }}>
                   <Grid size={12}>
                    <Typography 
                        variant="h2" color = "#F4F6F8" fontWeight={300} mb={1}>  
                            Depoimentos
                        </Typography> 
                   </Grid>
                   <Grid size={{ xs: 12, sm: 6, md: 3}}>    
                        <StyledCard>
                            <Typography
                            variant="body2"
                            color="#F4F6F8"
                            lineHeight={1.7}
                            mb={2}
                            >
                                "Bom diaaa meu filho, paz 
                                Filho, você não é comum.
                                Existe algo dentro de você que é forte, valioso e cheio de propósito… mesmo quando você ainda não percebe totalmente."
                            </Typography>
                            <Typography variant="h6"
                            color="#F4F6F8"
                            fontWeight={300}
                            mb={1}> 
                                Paciente 1
                            </Typography>   
                        </StyledCard>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 3}} >   
                        <StyledCard>
                            <Typography
                            variant="body2"
                            color="#F4F6F8"
                            lineHeight={1.7}
                            mb={2}
                            >
                                "Bom diaaa meu filho, paz 💙."
                            </Typography>
                            <Typography variant="h6"
                            color="#F4F6F8"
                            fontWeight={300}
                            mb={1}> 
                                Paciente 2
                            </Typography>   
                        </StyledCard>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 3}}>   
                        <StyledCard>
                            <Typography
                            variant="body2"
                            color="#F4F6F8"
                            lineHeight={1.7}
                            mb={2}
                            >
                                "Bom diaaa meu filho, paz 💙
                            Filho, você não é comum.
                            Existe algo dentro de você que é forte, valioso e cheio de propósito… mesmo quando você ainda não percebe totalmente."
                            </Typography>
                            <Typography variant="h6"
                            color="#F4F6F8"
                            fontWeight={300}
                            mb={1}> 
                                Paciente 3
                            </Typography>   
                        </StyledCard>
                    </Grid>
                    
                </Grid>
                </StyledClient>
    )
}