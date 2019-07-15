
const initState = {
    posts: [
        { id: 1, title: "React Js", body: "React is a js Library Supported and Maintained by facebook" },
        { id: 2, title: "Angular Js", body: "React is a js Library Supported and Maintained by facebook" },
        { id: 3, title: "Node Js", body: "React is a js Library Supported and Maintained by facebook" }
    ]
    
}
const rootReducer =(state = initState , action) => {
    //console.log(action);
    if(action.type==='DELETE_POSTS'){
    let newPosts=state.posts.filter(post=>{
        return action.id!==post.id;
    })
    return{...state,
        posts:newPosts
    }
    }
    return state;
}
export default rootReducer