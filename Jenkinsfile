pipeline {
    agent any

    stages {
        stage('Stage 1: Build') {
            steps {
                echo 'Stage 1: Build'
                echo 'Description: Build the React application using a bundler like Webpack or Vite to compile and package the code.'
                echo 'Tool used: Webpack or Vite'
      
             
                git branch: 'main', url: 'https://github.com/ArjunBhardwaj3/PricingPlan.git'
            }
        }

        stage('Stage 2: Unit and Integration Tests') {
            steps {
                echo 'Stage 2: Unit and Integration Tests'
                echo 'Description: Run unit tests using Jest or other testing frameworks to ensure the React components and functionality work as expected. Additionally, run integration tests using tools like Cypress or Selenium to test the application as a whole.'
                echo 'Tools used: Jest, Cypress, or Selenium'
                git branch: 'main', url: 'https://github.com/ArjunBhardwaj3/PricingPlan.git'
            }
            post {
                success {
                    emailext attachLog: true, body: "Stage 2: Unit and Integration Tests passed successfully.", subject: "Pipeline Notification: Stage 2 Passed", to: "arjunbhardwaj219@gmail.com"
                }
                failure {
                    emailext attachLog: true, body: "Stage 2: Unit and Integration Tests failed. Please check the logs for details.", subject: "Pipeline Notification: Stage 2 Failed", to: "arjunbhardwaj219@gmail.com"
                }
            }
        }

        stage('Stage 3: Code Analysis') {
            steps {
                echo 'Stage 3: Code Analysis'
                echo 'Description: Integrate code analysis tools like ESLint or SonarQube to analyze the React code and ensure it meets industry standards and best practices.'
                echo 'Tool used: ESLint or SonarQube'
                git branch: 'main', url: 'https://github.com/ArjunBhardwaj3/PricingPlan.git'
            }
        }

        stage('Stage 4: Security Scan') {
            steps {
                echo 'Stage 4: Security Scan'
                echo 'Description: Perform a security scan on the React application using tools like OWASP ZAP or other security scanners to identify potential vulnerabilities.'
                echo 'Tool used: OWASP ZAP or other security scanners'
                git branch: 'main', url: 'https://github.com/ArjunBhardwaj3/PricingPlan.git'
            }
            post {
                success {
                    emailext attachLog: true, body: "Stage 4: Security Scan passed successfully.", subject: "Pipeline Notification: Stage 4 Passed", to: "arjunbhardwaj219@gmail.com"
                }
                failure {
                    emailext attachLog: true, body: "Stage 4: Security Scan failed. Please check the logs for details.", subject: "Pipeline Notification: Stage 4 Failed", to: "arjunbhardwaj219@gmail.com"
                }
            }
        }

        stage('Stage 5: Deploy to Staging') {
            steps {
                echo 'Stage 5: Deploy to Staging'
                echo 'Description: Deploy the React application to a staging environment (e.g., AWS S3 bucket or Netlify) for testing and preview.'
                echo 'Tool used: AWS S3 or Netlify'
                git branch: 'main', url: 'https://github.com/ArjunBhardwaj3/PricingPlan.git'
            }
        }

        stage('Stage 6: Integration Tests on Staging') {
            steps {
                echo 'Stage 6: Integration Tests on Staging'
                echo 'Description: Run integration tests on the staged React application using tools like Cypress or Selenium to ensure it functions as expected in a production-like environment.'
                echo 'Tool used: Cypress or Selenium'
                git branch: 'main', url: 'https://github.com/ArjunBhardwaj3/PricingPlan.git'
            }
        }

        stage('Stage 7: Deploy to Production') {
            steps {
                echo 'Stage 7: Deploy to Production'
                echo 'Description: Deploy the React application to the production environment (e.g., AWS S3 bucket, Netlify, or a web server).'
                echo 'Tool used: AWS S3, Netlify, or a web server'
                git branch: 'main', url: 'https://github.com/ArjunBhardwaj3/PricingPlan.git'
            }
        }
    }
}
