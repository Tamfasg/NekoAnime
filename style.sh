#!/bin/bash
# Ask the user for login details
echo "Choose 1 to edit"
echo "Choose 2 to run the style"
read -p "Choose: " uservar
echo

if [ "$uservar" = "1" ]; then
  lvim  /data/data/com.termux/files/home/dev/MyAnime/src/Style/style.scss

elif [ "$uservar" = "2" ]; then
  cd /data/data/com.termux/files/home/dev/MyAnime/src/Style/ && sass -w style.scss style.css 
else
  echo "Invalid choice."
fi


