import { useState } from "react";
import Plant from "../structure/Plant.json";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "../../assets/styles/plantveiw.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function PlantView() {
  const [selectedPlant, setSelectedPlant] = useState(null);

  const handleViewClick = (plant) => {
    setSelectedPlant(plant);
    handleOpen();
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="plant-bg">
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Plant Detail:
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {selectedPlant && (
                <div className="plant-details">
                  <p>
                    <strong>Name:</strong> {selectedPlant.name}
                  </p>
                  <p>
                    <strong>Description:</strong> {selectedPlant.description}
                  </p>
                  <p>
                    <strong>Harvesting Age:</strong>{" "}
                    {selectedPlant.harvesting_age}
                  </p>
                  <p>
                    <strong>Season Type:</strong> {selectedPlant.season_type}
                  </p>
                  <p>
                    <strong>Soil Type:</strong> {selectedPlant.soil_type}
                  </p>
                  <p>
                    <strong>Water Consumption:</strong>{" "}
                    {selectedPlant.water_consumption}
                  </p>
                  <p>
                    <strong>Maintenance:</strong> {selectedPlant.maintenance}
                  </p>
                  <p>
                    <strong>Plant Type:</strong> {selectedPlant.plant_type}
                  </p>
                </div>
              )}
            </Typography>
          </Box>
        </Modal>
      </div>
      <div className="container">
        <div className="row">
          {Plant.map((plant) => (
            <div className="plant col-sm-3" key={plant.id}>
              <div className="plant-card">
                <h4>{plant.name}</h4>
                <p>Harvesting Age: {plant.harvesting_age}</p>
                <p>Maintenance: {plant.maintenance}</p>
                <p>Plant Type: {plant.plant_type}</p>
                <button
                  className="btn"
                  onClick={() => {
                    handleViewClick(plant);
                  }}
                >
                  <VisibilityIcon />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="modal fade"
        id="myModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Plant Details
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {selectedPlant && (
                <div className="plant-details">
                  <p>
                    <strong>Name:</strong> {selectedPlant.name}
                  </p>
                  <p>
                    <strong>Description:</strong> {selectedPlant.description}
                  </p>
                  <p>
                    <strong>Harvesting Age:</strong>{" "}
                    {selectedPlant.harvesting_age}
                  </p>
                  <p>
                    <strong>Season Type:</strong> {selectedPlant.season_type}
                  </p>
                  <p>
                    <strong>Soil Type:</strong> {selectedPlant.soil_type}
                  </p>
                  <p>
                    <strong>Water Consumption:</strong>{" "}
                    {selectedPlant.water_consumption}
                  </p>
                  <p>
                    <strong>Maintenance:</strong> {selectedPlant.maintenance}
                  </p>
                  <p>
                    <strong>Plant Type:</strong> {selectedPlant.plant_type}
                  </p>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlantView;
