import { legacy_createStore as createStore } from "redux";

const initialState = {
    mainPageContent: 'PROFILE_DETAILS',
    profileDetails: {},
    links: [],
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TO_LINKS': //change content of main page
            return {
                ...state,
                mainPageContent: 'LINKS',
            }
        case 'TO_PROFILE': //change content of main page
            return {
                ...state,
                mainPageContent: 'PROFILE_DETAILS',
            }
        case 'CREATE_FORM': //create new form for Add Links component
            return {
                ...state,
                links: [...state.links, { id: state.links.length, platform: 'GITHUB', url: '' }]
            }
        case 'CHANGE_LINK_PLATFORM': //modify links with sent platform value for specific link object 
            const newLinksPlatform = state.links.map(link => {
                if (link.id === action.payload.id) {
                    return { ...link, platform: action.payload.value };
                }
                return link;
            });
            return {
                ...state,
                links: newLinksPlatform,
            }
        case 'CHANGE_LINK_URL': //modify links with sent url value for specific link object 
            const newLinksUrl = state.links.map(link => {
                if (link.id === action.payload.id) {
                    return { ...link, url: action.payload.value };
                }
                return link;
            });
            return {
                ...state,
                links: newLinksUrl,
            }
        case 'SET_PROFILE_DETAILS':
            return {
                ...state,
                profileDetails: action.payload,
            }
        case 'REMOVE_LINK': //remove each link under clicking the remove button
            const newLinks = state.links.filter(link => link.id !== action.payload);
            return {
                ...state,
                links: newLinks,
            }
        default:
            return state;
    }
};
const store = createStore(reducer);
export default store;