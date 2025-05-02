# How to Push Code to GitHub After Updating

1. Open Command Prompt and go to your project folder:  
   cd C:\xampp\htdocs\Jansahara  

2. Check file changes:  
   git status  

3. Add updated files:  
   git add .  

4. Commit changes with a message:  
   git commit -m "Your message here"  

5. Push to GitHub:  
   git push origin main  

6. If errors occur, try pulling first:  
   git pull origin main --rebase  

7. Repeat steps 2-5 for future updates.  

# Notes:  
- Use meaningful commit messages.  
- Always check `git status` before adding files.  
- If prompted, enter GitHub credentials.  
