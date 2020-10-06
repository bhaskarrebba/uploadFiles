pipeline {
    agent any
    environment {
        CI = 'true'
    }
    stages {
        stage('NPM Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                print 'Test Running----------'
                sh 'npm run test'
            }
        }
         
        stage('Build') {
            steps {
                print 'Building code'
                sh 'npm run build' 
            }
        }
        stage('Prepare SetUp') {
            steps {
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                print 'Deployment Success'
            }
        }
        stage('Start Node') {
            steps {
                print 'Node Starting----------'
                sh 'node index.js' 
            }
        } 
    }
}
