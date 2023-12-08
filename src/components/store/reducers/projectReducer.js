const initState = {
projects: [
    {
        id:'1', title: 'MARK', content: 'Frontend'
    },
    {
        id:'2', title: 'MARK', content: 'REDUX'
    },
    {
        id:'2', title: 'MARK', content: 'API'
    }


]
};

const projectReducer = (state = initState, action) => {
    switch (action.type){
    case 'CREATE_PROJECT':
        console.log('create project!', action.project);
        return state;
    case 'CREATE_PROJECT_ERROR':
        console.log('create project error', action.err);
        return state;
    default:
        return state;
    }
}
 
export default projectReducer;