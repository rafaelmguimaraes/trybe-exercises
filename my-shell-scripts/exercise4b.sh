#!/bin/bash

DATE=$(date '+%Y-%m-%d')

FILEDIRECTORY=$1
FILEEXTENSION=$2


cd $FILEDIRECTORY

for FILE in `ls *.$FILEEXTENSION`
    do
        echo "RENAME $FILE to $DATE-$FILE"
        mv $FILE "$DATE-$FILE"    
    done