#!/bin/bash
#I'll be very successful in programming!
#FILE TEST
FILE="/home/rafael/Documents/Trybe/trybe-exercises/my-shell-scripts/my-file.test"

if [ -e "$FILE" ]
    then
        echo "The path $FILE is enabled!"
fi
if [ -w "$FILE" ]
    then
        echo "You are allowed to edit $FILE"
    else
        echo "You are NOT allowed to edit $FILE"
fi