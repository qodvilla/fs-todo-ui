# FoodStyles: Todo Application Project (UI)

### Features:
* Sign up:
  * Create new users in the database
  * Passwords are stored as hashes (Using bcrypt)
* Login:
  * Users can login by comparing provided information to the information in the DB
  * Plain password are compared to their hashes to authenticate. 
* Todos:
  * New todo items can be created and stored in the DB
  * Todo items can be marked as done and undone, their state is persisted in the DB
  * Todo items can be deleted
  * Todo items can be filter by `Complete`, `Incomplete`, or simple view `All`
  
  
#### Note, the code can be improved in the following areas:
* Folder structure
* All HTTP requests can be moved to the service
* One form can can be re-used for Sign Up and Sign In
* Better error handling
* Better Experience
* and few other things, should be easy to pickup 
