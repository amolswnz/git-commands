#GitHub

git config --global --list                      // List all global git config
git config --local --list                       // List all local repo config
git config --global core.autocrlf true          // Auto control line feed
git config --unset `configName`                 // Removes the confirguation 
git config --global core.editor "Notepad"

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

#Remote Repository Working
git clone `url`
git show HEAD       // Show last changes
git remote -v       // Show push and fetch url

git branch          // Show local branches
git branch -r       // Show remote branches