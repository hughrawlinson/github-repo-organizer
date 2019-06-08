const initialState = {
  loggedIn: false,
  gridState: {
    filteringState: [],
    sortingState: [],
    searchState: "",
    columnVisibilityState: [
      'isPrivate',
      'isArchived',
      'isFork',
      'owner',
      'licenseNickname',
      'vulnerabilityAlerts',
      'collaborators',
      'issueCount'
    ]
  }
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_ACCESS_TOKEN':
      return {
        ...state,
        accessToken: action.access_token,
        loggedIn: true
      };
    case 'SET_REPOSITORIES':
      return {
        ...state,
        repositories: [
          ...(state.repositories || []),
          ...action.repositories
        ]
      };
    case 'DELETE_REPOSITORIES':
      return {
        ...state,
        repositories: []
      };
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      };
    case 'SET_GRID_STATE':
      return {
        ...state,
        gridState: action.gridState
      }
    default:
      return state;
  }
};

export default reducer;
