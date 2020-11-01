#!/bin/bash

DATE=$(date '+%Y-%m-%d')
FILESPNG=$(ls *.png)

for FILE in $FILESPNG
    do
        mv $FILE "$DATE-$FILE"    
    done