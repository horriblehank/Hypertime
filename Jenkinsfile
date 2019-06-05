pipeline {
    agent any
    
    tools {nodejs "node"}

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Production Files') {
            steps {
                sh 'npm run build'
            }
        }

        
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}