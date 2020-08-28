# @Autor: Rafael Machado Guimarães - rafaelmguimaraes@gmail.com
# Exercises
# (Bonus) - Part IV - The awakening of the terminal

#1. Open the terminal and execute the command cmatrix. When you are feeling like Neo , press ctrl+cto return to the terminal;
cmatrix

#2. Create a text file called fortune.txt that contains your luck of the day. Use only one command line. Tip: use the command fortune, and the operator >;
cat > fortune.txt | fortune

#3. Count how many words your lucky phrase of the day has. Tip: use the command wc;
wc -w fortune.txt

#4. Run the command sl. Now try sl -F;
sl
sl -F

#5. Run the command cowsay. Now make the kitty say the phrase that is recorded in the file fortune.txt;
fortune.txt | cowsay

#6. Find the prime factors of the number 42 using the command factor;
ffactor 42

#7. See how your luck of the day is upside down. Tip: use the command rev.
rev fortune.txt

#8. Run the command telnet towel.blinkenlights.nl and wait a few seconds. Remember that you have more exercises to do! 😅
telnet towel.blinkenlights.nl