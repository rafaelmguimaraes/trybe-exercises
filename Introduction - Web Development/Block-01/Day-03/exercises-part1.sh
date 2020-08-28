# @Autor: Rafael Machado Guimarães - rafaelmguimaraes@gmail.com
# Exercises
# Part I - Creating files and directories

#1. Using the terminal, apply the directory creation command you learned: create a directory called unix_testsand navigate to it.
mkdir unix_tests
cd unix_tests
ls unix_tests

#2. Create a text file with the name trybe.txt.
touch trybe.txt

#3. Create a copy of the trybe.txt named file trybe_backup.txt.
cp trybe.txt trybe_backup.txt

#4. Rename the file trybe.txt.
mv trybe.txt new-trybe.txt

#5. Inside unix_tests, create a new directory called backup.
cd unix_tests
mkdir backup

#6. Move the file trybe_backup.txt to the directory backup.
mv ../trybe_backup.txt backup/ 

#7. Inside unix_tests, create a new directory called backup2.
mkdir backup2

#8. Move the file trybe_backup.txt from the folder backup to the folder backup2.
mv backup/trybe_backup.txt backup2/trybe_backup.txt

#9. Delete the folder backup.
rmdir backup

#10. Rename the folder backup2 to backup.
mv backup2/ backup/

#11. See the full path of the current directory and list all files within it.
pwd
ls -a

#12. Delete the directory backup.
rmdir backup

#13. Clean the terminal.
clear

# For exercises 14 and 15, manually create a text file with the content below, called skills.txt:
# Internet
# Unix
# Bash
# HTML
# CSS
# JavaScript
# React
# SQL

cat > skills.txt
Internet
Unix
Bash
HTML
CSS
JavaScript
React
SQL
^C

#14 Show on the screen the first 5 skills of the file skills.txt.
head -n5 skills.txt

#15 Show on the screen the last 4 skills of the file skills.txt.
tail -n4 skills.txt

#16 Delete all files ending in .txt.
rm *.txt