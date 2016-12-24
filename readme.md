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

git add -u  // Only updated files

#History and diffs
git diff `firstHarsh`..`secondHash`
git diff HEAD~1..

// To rollback the filename as per the last commit
git checkout `fileName`