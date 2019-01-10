import * as multitabActions from 'src/app/multitab/store/actions/multitab.actions';

const newState = (state, newDate) => {
    return Object.assign({}, state, newDate);
};

// export interface FeatureState extends fromApp.AppState {
//     recipes: State;
// }

export interface State {
    // community: Community;
}

const initialState: State = {
    community: {
        communityId: 0,
        communityType: null,
        name: '',
        description: '',
        geoServices: null,
        members: null,
        governance: null,
        attributes: null,
        activeTab: 1,
        activeRow: -1
    }
};

export function communityReducer(state = initialState, action: multitabActions.MultitabActions) {
    switch (action.type) {
        // MAIN CASES

        case multitabActions.MULTITAB_ADD:
            return newState(state, {});

        case multitabActions.MULTITAB_EDIT:
            return newState(state, {});

        case multitabActions.MULTITAB_DELETE:
            return newState(state, initialState);

        default:
            return state;
    }
}
