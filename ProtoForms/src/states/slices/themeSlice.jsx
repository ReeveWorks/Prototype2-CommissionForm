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

            root.classList.remove(state.theme.themeSet);

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