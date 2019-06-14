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

        stage('Deploy') {
            steps {
                sh 'az storage blob upload-batch -s /var/lib/jenkins/workspace/Hypertime_master/hypertime-frontend/build -d \$web --connection-string="DefaultEndpointsProtocol=https;AccountName=hypertimehenrik;AccountKey=IpfrB5TP7FFm7K+rcRg+B6vE6qJIW+vL7HYl9MU2pZrAXqQdYzClMlJCR3htcbqcMofApx+b60UEbD1R0LRIPA==;EndpointSuffix=core.windows.net"'
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

/*        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }*/
    }
}