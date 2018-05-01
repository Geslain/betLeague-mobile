# betLeague-mobile

## Install

First install [Nodejs](http://nodejs.org/)

1. Intall Ionic
```
npm install -g ionic
```

2. Install dependancies
```
npm install
```

3. Run the project
```
ionic serve
```

## Connection to CI

1. First connect to Ionic Pro in your terminal with your ionic credentials :
 ``` 
 ionic login
 ```

Use the automatic SSH setup

2. Link your app to Ionic Pro:
```
ionic link
```

3. If there is no app, you'll have to create one, otherwise go to step 5.To create a new app, select "create a new app", name it "betleague" and use github. To do the next steps, its important to fork your own copy of this repo, because github will check your github credentials and will look for this project.

4. When you're logged with github, select the proper repository (betleague-mobile) and use master branch (or don't if you want to specify a branch)

5. Your are all good, you can now run :
```
ionic serve -c
```
If your are connected on the same network with the computer which serve the app and your phone, you can use the app "Ionic Dev App" to see the result on mobile



