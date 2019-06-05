pipeline {
    agent any
    
    tools {nodejs "node"}

    stages {
        stage('Build') {
            steps {
                sh 'cd hypertime-frontend && npm install && cd ..'
                sh 'cd hypertime-e2e && npm install && cd ..'
            }
        }

        stage('Build Production Files') {
            steps {
                sh 'cd hypertime-frontend && npm run build && cd ..'
            }
        }

        
        stage('Pre-analyze') {
            steps {
                sh 'cd hypertime-frontend && npm run preanalyze && cd ..'
            }
        }

        stage('Test 4 Reelz') {
            steps {
                sh 'cd hypertime-frontend && npm run test && cd ..'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}