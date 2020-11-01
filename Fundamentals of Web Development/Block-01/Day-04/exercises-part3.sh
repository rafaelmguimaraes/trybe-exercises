# @Autor: Rafael Machado Guimarães - rafaelmguimaraes@gmail.com
# Exercises
# Part III - Processes & Jobs


#1. List all processes;
ps 

#2. Now use the command sleep 30& ;
sleep 30&

#3. Use the process listing to find the PID of the process that is executing the command sleep 30and finish executing it(kill the process);
ps
kill 26152

#4. Run the command again sleep 30, but now without &. Then, make it continue running in the background;
sleep 30

#5. Create a background process that runs the command sleep for 300 seconds.
sleep 300&

#6. Create two more processes that run the command sleep for 200 and 100 seconds, respectively.
# You must create them in foreground (without using &) and suspend them (pressing ctrl+z) after each one starts to run.
sleep 200&
^Z
sleep 100&
^Z

#7. Check that only the process sleep 300 is running with the command jobs. Stop running this process.
# You will need to bring the process to foreground ( fg) and suspend it ( ctrl+z), or send a signal).
jobs

#8. Resume execution of the sleep 100 background process with the command bg.
bg 1

#9. End the execution of all processes sleep (kill the processes).
kill 1
