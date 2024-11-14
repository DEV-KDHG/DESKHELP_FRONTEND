import { useNavigate } from "react-router-dom";
import style from "./cards.module.css";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

const Cards = ({ nombre, imagen, redireccion ,tamanoImagen  }) => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate(redireccion);
  };

  return (
    <Card sx={{ backgroundColor:"#d4e0e1" ,maxWidth: 250, }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height={tamanoImagen?.height || "140"} // Usa la prop tamanoImagen si está definida, sino el valor por defecto
           image={imagen}
          alt={nombre}
          sx={{ objectFit: 'cover', width: '100%' }}

        />
      <CardActions sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Button size="small" color="primary" onClick={handleRedirect}>
{nombre}   </Button>
  </CardActions>
      </CardActionArea>

    </Card>
  );
};

export default Cards;
