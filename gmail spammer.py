# Coded by: Sp1dermanhacker
# I made this simple script in like 10 min, so don't judge the ugly code and all
# IDC if you give me credit or not since this is so ez to make yourself

import smtplib
import getpass
import os

trusted = input("Will you use this for educational purposes only? y/n: ")
if trusted == "N" or trusted == "n":
    quit()
elif trusted == "y" or "Y":
    print("Okay m8, you are now qualified to use this spammingtool")
    input("Press Enter to continue plz")
else:
    print("Invalid option")
    quit()
print("\033[31m")
print("  _____                 _ _    _____                                           ")
print(" / ____|               (_) |  / ____|                                          ")
print("| |  __ _ __ ___   __ _ _| | | (___  _ __   __ _ _ __ ___  _ __ ___   ___ _ __ ")
print("| | |_ | '_ ` _ \ / _` | | |  \___ \| '_ \ / _` | '_ ` _ \| '_ ` _ \ / _ \ '__|")
print("| |__| | | | | | | (_| | | |  ____) | |_) | (_| | | | | | | | | | | |  __/ |   ")
print(" \_____|_| |_| |_|\__,_|_|_| |_____/| .__/ \__,_|_| |_| |_|_| |_| |_|\___|_|   ")
print("                                    | |                                        ")
print("                                    |_|                                        ")
print("\033[0m")
print("\033[32m                          Don't misuse this!!\033[0m")
print(" \033[32m  Make sure you have enabled 'Less Secure Apps' on your Google account\033[0m")
print("")
print("\033[34m")
username = input("Your username: ")
password = getpass.getpass("Your password: ")
To = input("Who do you want to spam?: ")
subject = input("The subject: ")
content = input("The message: ")
msg = 'Subject: %s\n\n%s' % (subject, content)
os.system("clear")
print("\033[0m")
print("\033[32m ")

try:
    server = smtplib.SMTP("smtp.gmail.com", 587)
    server.ehlo()
    server.starttls()
    server.login(username, password)
except smtplib.SMTPAuthenticationError:
    print("Invalid credentials plz retry m8")
except:
    print("Something went wrong...")

while True:
    server.sendmail(username, To, msg)
    print("Successfully sent")
