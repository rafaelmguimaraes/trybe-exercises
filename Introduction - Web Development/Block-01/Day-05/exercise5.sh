#!/bin/bash

echo "Insert Path: "
read PATH

if [ -f "$PATH" ]
then   
    echo "Its a file!"
elif [ -d "$PATH" ]
then
    echo "Its a directory!"
else
    echo "Its a scrap!"
fi
