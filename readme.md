#GitHub

git config --global --list                      // List all global git config

git config --local --list                       // List all local repo config

git config --global core.autocrlf true          // Auto control line feed

git config --unset `configName`                 // Removes the confirguation 

git config --global core.editor "Notepad"

git config --global user.name "username"        // Sets global username

git config --global credential.helper wincred   // Cache password


#Basics

git init

git add . 

git status

git commit -m "Message"

git log

git log --oneline

git log --oneline --graph       // With branches

git shortlog    // User commit message grouped together


git add -u  // Only updated files

#History and diffs

git diff `firstHarsh`..`secondHash`

git diff HEAD~1..

#Resetting
// To restore the filename as per the last commit
git checkout `fileName`

// Resets all files and changes to last commit
git reset --hard

git reset --soft

// To remove any new files added (temperary or log files) since last commit
git clean -f 

#Ignoring files -- NOT WORKING
add .gitignore file and specify files and folder using / strucutre

#Working with Remote Repository

git clone `url`

git show HEAD       // Show last changes

git remote -v       // Show push and fetch url


git branch          // Show local branches

git branch -r       // Show remote branches


// Adding remote repository and getting the files

git remote add origin `url`

git fetch

git log origin/master       // View changes from remote branch

git merge origin/master     // Add changes from remote to local


// git fetch and git merge in single command

git pull


// To remove remote 

git remote rm origin


// For this we need to first setup the configuration

git branch --set-upstream master origin/master 

    // master is my branch

    // origin/master remote branch

// Local to remote

git push



#Version control using Tag
After commit

git tag `details`

git tag -a `details`    // To specifiy message open external editor

git tag -am `details` "messageText"    // To specifiy message within the command

git tag -s `details`

`details` can be version number or some information


git tag -l              // Lists all tags

git tag -v `tagName`    // To verify the tag 

Pushing tags to remote repository

git push --tags


#Branching and merging
git log --graph --oneline --all --decorate // Shows everything in nicer way

git config alias.`aliasName` "log --graph --oneline --all --decorate"           // Creating alias for above command 


git b

#Stash