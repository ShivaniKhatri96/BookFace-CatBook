//REQUESTS AND RESPONSES
// get /                -main page. Redirects to login if user not logged in
// get /login           -login/signup page
// get /profile/:login  -user profile page
// get /users           -returns list of all users
// get /users/:login    -returns information of a specific user
// get /comments/       -returns list of all comments
// get /comments/:id    -returns information of a specific comment
// post /users/         -creates a new user
// post /comments/      -creates a new comment
// delete /users/:login -deletes user
// delete /comments/:id -deletes comment

export const dummyDB = {
    
}
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });