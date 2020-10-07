pipeline {
    agent any
    environment {
        CI = 'false'
    }
    stages {
        stage("Prepare WS"){
            steps{
                script{
                    env.nodeJS="${tool  'NodeJS-10.16.0'}";
                    env.PATH="${env.nodeJS}/bin:${env.PATH}"
                }
            }
        }
        stage("NPM Install"){
            steps{
                sh 'npm install'
            }
        }
         stage('JEST Test') {
            steps {
                sh 'npm run test'
            }
        }
         stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage("Deploy"){
            steps{
            print 'copy build folder to server'
            sh 'rm -r -f deployment'
            sh 'mkdir deployment'
            sh 'mkdir deployment/public'
            sh 'cp config/buildpacks/releaseBuildpack/nginx.conf deployment'
            sh 'cp -r build deployment/public'
            }
        }
      
        stage('Start Servers') {
            steps {
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './jenkins/scripts/kill.sh'
                
                
            }
        }
    }
}
