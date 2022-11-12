pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                  bat 'mvn install -DskipTests %WORKSPACE%\\imperblog-backend'
                  bat 'npm install %WORKSPACE%\\imperblog-frontend'
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