#!/bin/bash
PARAMDIR=$1

if [ -d "$PARAMDIR" ]
then   
    echo "Its a directory!"
    VARCOM=$(ls -l $PARAMDIR | wc -l)
    echo "$VARCOM files in directory $PARAMDIR"
else
    echo "Isn't a directory!"
fi