import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface LoginState {
	showError: boolean;
	user:{token:{accessToken:string}}
}

const initialState: LoginState = { showError: false,user:null };

interface LoginCredential {
	email: string;
	password: string;
}

export const login = createAsyncThunk(
	"login/login",
	async (
		{ email, password }: LoginCredential,
		{ rejectWithValue, dispatch }
	) => {
		try {
			dispatch(loginSlice.actions.hideError({}));
			const response = await axios.post("http://localhost:3001/login/email", {
				email,
				password,
			});
			// dispatch(checkAuth());
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		hideError: (state, action) => {
			state.showError = false;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(login.fulfilled, (state, action:PayloadAction<{data:{token:{accessToken:string}}}>) => {
				state.user = action.payload.data
			})
			.addCase(login.rejected, (state, action) => {
				state.showError = true;
			});
	},
});

export const { hideError } = loginSlice.actions;

export default loginSlice.reducer;