import { createSlice } from '@reduxjs/toolkit';
import darkicon from '../../assets/dark_mode.svg';
import lighticon from '../../assets/light_mode.svg';

const initialState = {
    currentTheme: {
        themeSet: "morning",
        icon: "sample"
    },

    themesList: [
        "night",
        "morning",
        "dawn"
    ]
};

const darkmodeSlice = createSlice({
    name: 'darkmode',
    initialState,
    reducers: {
        toggleTheme: (state, action) => {
            const theme = action.payload;
            const root = document.documentElement;

            // Remove all existing theme classes from the root element
            for (const theme of state.themesList) {
                if (theme !== 'night') {
                    root.classList.remove(theme);
                }
            }

            // Add the new theme class to the root element
            if (theme === 'night') {
                root.classList.add('dark');
            }
            else if (theme === 'morning') {
                root.classList.add('light');
            }
            else {
                console.error('Invalid theme value:', theme);
                return;
            }

            // Update the currentTheme in the state
            state.currentTheme = {
                themeSet: theme,
                icon: "sample"
            }
        }
    }
});

export const { toggleTheme } = darkmodeSlice.actions;
export default darkmodeSlice.reducer;