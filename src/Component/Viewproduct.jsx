import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Grid from '@mui/material/Grid';
import img from '../Assets/logoplant.jpg';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { MenuItem, Menu } from '@mui/material';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
}));

export default function ViewProduct() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [data, setData] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = (event, id) => {
    setAnchorEl(event.currentTarget);
    setDeleteId(id);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleDelete = () => {
    const updatedData = data.filter(item => item.p_id !== deleteId);
    setData(updatedData);
    localStorage.setItem("Plant", JSON.stringify(updatedData));
    handleClose();
    handleMenuClose();
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("Plant"));
    if (Array.isArray(storedData)) {
      setData(storedData);
    }
  }, []);

  return (
    <div>
      <Grid container spacing={2} style={{ marginTop: "20px", gap: "9px", justifyContent: "center" }}>
        {data.map((item, index) => (
          <Card sx={{ maxWidth: 345 }} key={index}>
            <CardHeader
              avatar={<img src={img} style={{ height: "50px", width: "50px" }} alt="logo" />}
              action={
                <>
                  <IconButton aria-label="settings" onClick={(event) => handleMenuClick(event, item.p_id)}>
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                  >
                    <MenuItem onClick={handleClickOpen}>Delete</MenuItem>
                  </Menu>
                </>
              }
              title={
                <Typography variant="body2" sx={{ fontSize: "30px", color: "black", fontWeight: "bold" }}>
                  {item.name}
                </Typography>
              }
            />
            <CardMedia component="img" height="300" image={item.image} alt={item.name} />
            <CardContent>
              <Typography variant="body2" sx={{ fontSize: "12px", color: "black" }}>
                Availability: {item.availability}
              </Typography>
              <Typography variant="body2">{item.description}</Typography>
              <Typography variant="body2" sx={{ color: "red" }}>Price: {item.price}</Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
          </Card>
        ))}
      </Grid>
      <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{"Confirm Deletion"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this item? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDelete} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}