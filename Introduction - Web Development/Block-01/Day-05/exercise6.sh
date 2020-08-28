#!/bin/bash
PATH=$1

if [ -f "$PATH" ]
then   
    echo "Its a file!"
elif [ -d "$PATH" ]
then
    echo "Its a directory!"
else
    echo "Its a scrap!"
fi