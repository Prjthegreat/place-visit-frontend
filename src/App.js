import react,{useState,useEffect,useCallback} from "react";
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';
import './App.css';
import Emp_list from "./components/Emp"
import Navlinks  from "./components/Navlinks";
import LoginSignup from "./components/LoginSignup.js"
import PostPage from "./components/PostComponent/PostPage";
import SavedPostPage from "./components/PostComponent/SavedPostPage";
import MyProfilePage from "./components/ProfilePage/MyProfilePage";
import UserProfilePage from "./components/ProfilePage/UserProfilePage";
import Loginsignup from "./components/Authenticate/Loginsignup";
import {AuthContext} from './authcontext/AuthContext'
import MyPostPage from "./components/PostComponent/MyPostPage";
import React from "react";
import PostForm from "./components/CreatePostForm/PostForm";
import UserPostsPage from "./components/PostComponent/UserPostsPage";
let logouttimer
function App() {
  const [token, settoken] = useState(null);
  const [isLoggedIn,setisLoggedIn]=useState(false)
  const [tokenexpirationdate, setTokenexpirationdate] = useState();
  const login = useCallback(
    (token, expirationdate) => {
      settoken(token);
      setisLoggedIn(true)
      //setUserid(userid);
      //setUsername(username);
      //setEmail(useremail);
      //setCountry(country)
      const tokenexpirationdate = new Date(expirationdate);
      setTokenexpirationdate(tokenexpirationdate);
      localStorage.setItem(
        "userdata",
        JSON.stringify({
          token,
          expiration: tokenexpirationdate.toISOString(),
        })
      );
    }
  );

  //This will remove the admin object from the local storage when logout is pressed
  const logout = useCallback(() => {
    settoken(null);
    setTokenexpirationdate(null);
    setisLoggedIn(false)
    localStorage.removeItem("userdata");
  });
  useEffect(() => {
    const storeddata = JSON.parse(localStorage.getItem("userdata"));
    if (
      storeddata &&
      storeddata.token &&
      new Date(storeddata.expiration) > new Date()
    ) {
      console.log('i am here1.....',new Date(storeddata.expiration),new Date())
      login(
        storeddata.token,
        new Date(storeddata.expiration).getTime()
      );
    } else {
      console.log('i am here2.....')
      logout();
    }
  }, []);

  // Checks the remaining time in the token
  useEffect(() => {
    if (token && tokenexpirationdate) {
      const remainingtime = tokenexpirationdate.getTime() - Date.now();
      logouttimer = setTimeout(logout, remainingtime);
    } else if (logouttimer) {
      clearTimeout(logouttimer);
    }
  }, [token, login, tokenexpirationdate]);

  return (
    <React.Fragment>
    <AuthContext.Provider
    value={{
      isLoggedIn:isLoggedIn,
      token:token,
      login: login,
      logout: logout
    }}
    >
        <Router>
          <Navlinks />
          <Switch>
        <Route path="/" exact>
          
        </Route>
        <Route path="/sign" exact>
          <Loginsignup />
        </Route>
        
        <Route path="/emp_list" exact>
        <Emp_list />
        </Route>
          <Route path="/allposts" exact>
            <PostPage />
          </Route>
          <Route path="/savedposts" exact>
            <SavedPostPage />
          </Route>
          <Route path="/myprofile" exact>
              <MyProfilePage />
          </Route>
          <Route path="/myposts" exact>
              <MyPostPage /> 
          </Route>
          <Route path="/createpost" exact>
             <PostForm />
            </Route>
           <Route path="/post/:name/:uid" exact>
             <UserPostsPage />
           </Route> 
          <Route path="/profile/user/:uid" exact>
              <UserProfilePage />
          </Route>

        </Switch>
        </Router>
    </AuthContext.Provider>
    </React.Fragment>
    
  );
}

export default App;
