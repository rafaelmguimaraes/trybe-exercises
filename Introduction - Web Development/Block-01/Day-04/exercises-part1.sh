# @Autor: Rafael Machado Guimarães - rafaelmguimaraes@gmail.com
# Exercises
# Part I - Input and Output Commands

#1. Navigate to the folder unix_tests;
cd unix_tests

#2. Create a text file through the terminal with the name skills2.txtand add the values Internet, Unixand Bash, one on each line.
cat > skills2.txt
Internet
Unix
Bash
^C

#3. Add 5 more items to your list of skills and then print the list ordered in the terminal. 🤓
cat >> skills2.txt
HTML
CSS
JavaScript
React
JET
^C

sort < skills2.txt


#4. Count how many lines the file has skills2.txt.
wc -l skills2.txt

#5. Create a file called top_skills.txt using skills2.txt, containing the first 3 skills in alphabetical order.
sort < skills2.txt | head -n3 | cat > top_skills.txt

#6. Create a new file called phrases2.txt by the terminal and add some phrases of your choice.
cat > phrases2.txt 
(Oh) never mind
I’m learning English
I don’t understand
Could you repeat that please?
^C

#7. Count the number of lines that contain the letters br.
grep br phrases2.txt | wc -l 

#8. Count the number of lines that do not contain the letters br.
grep -v br phrases2.txt | wc -l

#9. Add two country names to the end of the file phrases2.txt.
cat countries.txt >> phrases2.txt

#10. Create a new file called bunch_of_things.txt with the contents of the files phrases2.txt and countries.txt
cat phrases2.txt countries.txt >> bunch_of_things.txt

#11. Order the file bunch_of_things.txt.
sort -o bunch_of_things.txt bunch_of_things.txt
