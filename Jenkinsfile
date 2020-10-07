pipeline {
    agent any
    tools {nodejs "nodejs"}

    environment {
        CI = 'true'
    }
    stages {
        stage("Copy Files"){
            steps{
            print 'copy build folder to server'
            sh 'mkdir deployment'
            sh 'mkdir deployment/public'
            sh 'cp config/buildpacks/releaseBuildpack/nginx.conf deployment'
            }
        }
       stage('Test') {
            steps {
                sh 'npm run test'
              
                
            }
        }
        stage('Deliver') {
            steps {
                sh './jenkins/scripts/deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './jenkins/scripts/kill.sh'
                
                
            }
        }
    }
}
