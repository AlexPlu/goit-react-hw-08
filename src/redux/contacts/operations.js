import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";

const api = axios.create({
  baseURL: "https://connections-api.goit.global",
});

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
  try {
    const response = await api.get("/contacts");
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk("contacts/addContact", async (contact, thunkAPI) => {
  try {
    const response = await api.post("/contacts", contact);
    toast.success("Contact added successfully");
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (id, thunkAPI) => {
  try {
    await api.delete(`/contacts/${id}`);
    toast.success("Contact deleted successfully");
    return id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
