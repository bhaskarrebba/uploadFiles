pipeline {
    agent any
    

    environment {
        CI = 'true'
    }
    stages {
        stage("Prepare WS"){
            steps{
                script{
                    env.nodeJS="${tool  'NodeJS-10.16.0'}";
                    env.PATH="${env.nodeJS}/bin:${env.PATH}"
                    sh 'npm install'
                }
            }
        }
        stage("Copy Files"){
            steps{
            print 'copy build folder to server'
            sh 'rm -r -f deployment'
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
