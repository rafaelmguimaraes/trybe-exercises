# @Autor: Rafael Machado Guimarães - rafaelmguimaraes@gmail.com
# Exercises
# Part II - Permissions

#1. Navigate to the folder unix_tests;
cd unix_tests/

#2. Run the ls command -l and see what the file permissions are;
ls -l

#3. Change the permission of the file bunch_of_things.txt so that all users can have access to read and write, and check if it is correct with the command ls -l;
#4. Expected result: -rw-rw-rw- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt
chmod o+rw bunch_of_things.txt



#5. Remove the write permission of the file bunch_of_things.txtfor all users, check if it is correct with the command ls -l;
#6. Expected result: -r--r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt
chmod o-w bunch_of_things.txt

#7. Return the file permission bunch_of_things.txtto the one listed initially using the command chmod 644 bunch_of_things.txt. Read this article to understand more about what numbering is and how it works 644.
#8. Expected result: -rw-r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt
chmod 644 bunch_of_things.txt

