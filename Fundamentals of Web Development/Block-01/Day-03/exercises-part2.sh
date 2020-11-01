# @Autor: Rafael Machado Guimarães - rafaelmguimaraes@gmail.com
# Exercises
# Part II - Manipulation & Search

#1. In the folder unix_tests, download a file with the names of all countries in the world using the curl command :
# curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"

#2. Show the entire contents of the file countries.txton the screen.
cat countries.txt 

#3. Show the content of countries.txt, page by page, until you find the Zambia.
less countries

#4. Show the countries.txt page-by-page content again , but now use a command to search for Zambia.
less hardware.html | grep 'Zambia'

#5. Search for Brazil no countries.txt.
grep 'Brazil' countries.txt

#6. Search again for brazil, but now using the lower case.
grep 'brazil' countries.txt

#7. For the next exercises, create a new file called phrases.txt and add a few sentences of your choice. You don't need to create the file from the terminal.
cat > phrases.txt
Thanks so much
I really appreciate
Excuse me
I’m sorry
What do you think?
That sounds great
^C

#8. Search for phrases that do not contain the word fox.
grep -v 'fox' phrases.txt

#9. Count the number of words in the file phrases.txt.
wc -w phrases.txt

#10. Count the number of lines in the file phrases.txt.
wc -l phrases.txt

#11. Create the files empty.tbt and empty.pdf.
touch empty.tbt empty.pdf

#12. List all files in the directory unix_tests.
ls -a 

#13. List all files ending with txt.
ls -a *.txt

#14. List all files ending with tbt or txt.
ls -a *.tbt *.txt

#15. Access the command manual ls.
man ls  