pipeline {
    agent any

    tools {
        nodejs 'NodeJS_24'
    }

    environment {
        CI = 'true'
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://your.repo.url/TypeScript_Cypress.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci' 
            }
        }

        stage('Build Project') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                sh 'npm run cypress:run'
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