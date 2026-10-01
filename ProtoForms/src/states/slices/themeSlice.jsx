import { createSlice } from '@reduxjs/toolkit';
import nightIcon from '../../assets/dark_mode.svg';
import morningIcon from '../../assets/light_mode.svg';

const initialState = {
    theme: {
        themeSet: "morning",
        icon: morningIcon
    },
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state, action) => {
            const root = document.documentElement;

            // Remove all existing theme classes from the root element
            for (const theme of state.themesList) {
                if (theme !== 'night') {
                    root.classList.remove(theme);
                }
            }

            // Night > Morning > Dawn
            if (state.theme.themeSet === 'night') {
                root.classList.add('morning');
                state.theme = {
                    themeSet: 'morning',
                    icon: morningIcon
                }
            }
            else if (state.theme.themeSet === 'morning') {
                root.classList.add('night');
                state.theme = {
                    themeSet: 'night',
                    icon: nightIcon
                }
            }
            else {
                console.error('Invalid theme value:', state.theme.themeSet);
                return;
            }
        }
    }
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;