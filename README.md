1. Setup New Project Environment

mkdir drata-cypress-project
cd drata-cypress-project
npm init -y

2. Install Cypress

npm install cypress --save-dev

3. Open Cypress Application

npx cypress open
		
4. Extension Service Install Steps:

Install Mocha framework extension for Cypress test suite reporting

npm install mochawesome mochawesome-merge mochawesome-report-generator --save-dev

5. Run Tests

npm run cypress:run

6. Generate Reports

npm run merge:reports
npm run generate:report

7. View Reports

Open HTML files under cypress/reports directory

Clone Existing Repo and Run Tests
=================================

git clone https://github.com/sabitha-anasuri/drata-assignment-1.git

Follow steps 2 through 7 
