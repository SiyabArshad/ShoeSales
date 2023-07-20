
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    user: null,
    profile: null,
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    setProfile: (state, action) => {
      state.profile = action.payload;
    },

  },
  extraReducers:builder=>{
      builder.addCase(fetchuserdata.fulfilled,(state,action)=>{
        state.user=action.payload
        state.isLoggedIn=true
      })
      builder.addCase(fetchuserdata.rejected,(state,action)=>{
        state.user=null
        state.isLoggedIn=false
      })
  }
});

export const { login, logout, setProfile } = userSlice.actions;

//fetching user data

export const fetchuserdata=createAsyncThunk("fetchuser/user",async()=>{
  try{
      const data=await AsyncStorage.getItem("footclub")
      return data
  }
  catch{
    return false
  }
})

// Thunk action to get user profile data
export const getProfile = (id) => async (dispatch) => {
  try {
    // Replace 'fetchProfileData()' with the function to fetch profile data from your backend
    const profileData = await fetchProfileData(id);

    // Dispatch the setProfile action to store the profile data in the Redux store
    dispatch(setProfile(profileData));
  } catch (error) {
    console.error('Error fetching profile data:', error);
  }
};

// Thunk action to handle login and AsyncStorage update
export const loginUser = (userData) => async (dispatch) => {
  try {
    // Save user data to AsyncStorage
    await AsyncStorage.removeItem('footclub');
    await AsyncStorage.setItem('footclub', JSON.stringify(userData));

    // Dispatch the login action to update the Redux store with user data
    dispatch(login(userData));
  } catch (error) {
    console.error('Error saving user data to AsyncStorage:', error);
  }
};

// Thunk action to handle logout and AsyncStorage update
export const logoutUser = () => async (dispatch) => {
  try {
    // Clear user data from AsyncStorage
    await AsyncStorage.removeItem('footclub');
    await auth().signOut()
    // Dispatch the logout action to update the Redux store
    dispatch(logout());
  } catch (error) {
    console.error('Error removing user data from AsyncStorage:', error);
  }
};

const fetchProfileData = async (userId) => {
    try {
      const userDoc = await firestore().collection('users').doc(userId).get();
  
      if (!userDoc.exists) {
        throw new Error('User profile data not found');
      }
  
      const profileData = userDoc.data();
      return profileData;
    } catch (error) {
      throw new Error('Error fetching profile data:', error);
    }
  };


export default userSlice.reducer;