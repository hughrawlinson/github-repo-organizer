const initialGridState = {
  filteringState: [],
  sortingState: [],
  searchState: "",
  columnVisibilityState: [
    "isPrivate",
    "isArchived",
    "isFork",
    "owner",
    "licenseNickname",
    "vulnerabilityAlerts",
    "collaborators",
    "issueCount",
  ],
};

const initialState = {
  loggedIn: false,
  gridState: initialGridState,
  repositories: undefined,
};

export type GridState = typeof initialGridState;
type Repository = unknown;
type User = unknown;

type Action = {
  type: string;
  access_token?: string;
  repositories?: Repository[];
  user?: User;
  gridState?: typeof initialState.gridState;
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "SET_ACCESS_TOKEN":
      return {
        ...state,
        accessToken: action.access_token,
        loggedIn: true,
      };
    case "SET_REPOSITORIES":
      if (!action.repositories) {
        return state;
      }
      return {
        ...state,
        repositories: [...(state.repositories || []), ...action.repositories],
      };
    case "DELETE_REPOSITORIES":
      return {
        ...state,
        repositories: [],
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_GRID_STATE":
      return {
        ...state,
        gridState: action.gridState,
      };
    default:
      return state;
  }
};

export default reducer;
