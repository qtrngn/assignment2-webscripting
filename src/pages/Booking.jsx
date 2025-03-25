import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  Button,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  Grid,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import services from "../data/services.json";
import Footer from "../components/Footer"; 
import "./Booking.css";

const timeSlots = ["9:00 AM", "10:30 AM", "12:00 PM", "2:00 PM", "4:00 PM"];
const serviceOptions = services.map((s) => s.title);

const PetBookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    petName: "",
    location: "",
    service: "",
    date: dayjs(),
    time: "",
    notes: "",
  });

  const handleChange = (field) => (e) => {
    setFormData({
      ...formData,
      [field]: e?.$d || e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking submitted:", formData);
    // You could show a success message here later
  };

  return (
    <>
      <div className="booking-page">
        <Typography variant="h4" component="h2" gutterBottom>
          🐾 Book a Pet Service
        </Typography>

        <form onSubmit={handleSubmit} className="booking-form">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Your Name"
                value={formData.name}
                onChange={handleChange("name")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Pet's Name"
                value={formData.petName}
                onChange={handleChange("petName")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Location"
                value={formData.location}
                onChange={handleChange("location")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Service</InputLabel>
                <Select
                  value={formData.service}
                  label="Service"
                  onChange={handleChange("service")}
                >
                  {serviceOptions.map((s) => (
                    <MenuItem key={s} value={s}>
                      {s}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Time</InputLabel>
                <Select
                  value={formData.time}
                  label="Time"
                  onChange={handleChange("time")}
                >
                  {timeSlots.map((t) => (
                    <MenuItem key={t} value={t}>
                      {t}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Select Date"
                  value={formData.date}
                  onChange={handleChange("date")}
                  disablePast
                  slotProps={{ textField: { fullWidth: true } }}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Additional Notes"
                multiline
                rows={3}
                value={formData.notes}
                onChange={handleChange("notes")}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                type="submit"
                className="cta-button"
              >
                Book Now
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default PetBookingForm;
