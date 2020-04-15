import { DARK_MODE_ON, DARK_MODE_OFF, SettingsActionTypes } from '../actions/settingsActions';
interface SettingsState {
    isDarkMode: boolean;
}

const initialState = {
    isDarkMode: false,
};

const settingsReducer = (state = initialState, action: SettingsActionTypes): SettingsState => {
    switch (action.type) {
        case DARK_MODE_ON:
            return Object.assign({}, state, {
                isDarkMode: true,
            });
        case DARK_MODE_OFF:
            return Object.assign({}, state, {
                isDarkMode: false,
            });
        default:
            return state;
    }
};
export default settingsReducer;
