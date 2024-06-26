import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    loading: true,
    error: '',
    data: {
        _id: "",
        user_id: "",
        name: "",
        bio: "",
        githubProfile: "",
        numberOfProjects: "",
        yearsOfExperience: "",
        mainDesignations: [""],
        description: "",
        profilePicture: {
            url: "",
            filename: "",
            _id: ""
        },
        myEducation: [],
        myExperience: [],
        myProjects: [],
        mySkills: {
            programmingSkills: [{skillName: "", skillLevel: ""}],
            toolsAndFrameworks: [{toolName: "", toolLevel: ""}],
            _id: ""
        },
        myAchievements: [""],
        linkedIn: "",
        email: "",
        instagram: "",
        telephone: 0,
        __v: 0,
        updatedAt: ""
    },
    auth: {
        user: null,
        token: null,
        isLoading: true
    }
}

export const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {
        login: (state, action) => {
            
            return {
                ...state,
                auth: action.payload,
                loading: false
            }
        },

        logout: (state, action) => {
            return {
                ...state,
                auth: {
                    user: null,
                    token: null,
                    isLoading: null
                },
                data: { ...initialState.data },
                loading: false
            }
        },

        set_portfolio: (state, action) => {
            return {
                ...state,
                data: action.payload,
                loading: false
            }
        },

        update_portfolio: (state, action) => {
            return {
                ...state,
                data: {
                    ...state.data,
                    ...action.payload
                },
                loading: false
            }
        },

        user_not_found: (state, action) => {
            return {
                ...state,
                data: {
                    ...initialState.data
                },
                auth: {
                    user: null,
                    token: null,
                    isLoading: null
                },
                error: action.payload
            }
        }, 

        delete_portfolio: (state, action) => {
            return {
                ...state,
                data: {
                    ...initialState.data
                }
            }
        }
    }
});

export const {login, logout, set_portfolio, update_portfolio, user_not_found, delete_portfolio} = portfolioSlice.actions;
export default portfolioSlice.reducer;