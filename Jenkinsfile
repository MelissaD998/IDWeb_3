pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                  bat 'mvn install -DskipTests %WORKSPACE%\\backend\\imperblog-backend'
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