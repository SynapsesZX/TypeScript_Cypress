pipeline {
    agent any

    tools {
        nodejs 'NodeJS_24'
    }

    environment {
        CI = 'true'
    }

    stages {
        

        stage('Install Dependencies') {
            steps {
                bat 'npm ci' 
            }
        }

        stage('Build Project') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                bat 'npm run cypress:run'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'cypress/videos/**, cypress/screenshots/**', allowEmptyArchive: true
            junit 'cypress/results/*.xml' 
        }
    }
}