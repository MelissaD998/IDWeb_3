pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                  bat 'mvn install -DskipTests --file ./backend/imperblog-backend'
                  bat 'npm install %WORKSPACE%\\frontend-angular\\imperblog-frontend'
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