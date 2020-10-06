pipeline {
    agent any
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
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
         stage('Start Node') {
            steps {
                print 'Node Starting----------'
                sh 'npm run node-server &' 
            }
        }
        stage('Deliver') {
            steps {
                
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                print 'Deployment Success'
            }
        }
    }
}
