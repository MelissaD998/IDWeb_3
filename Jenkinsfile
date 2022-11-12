pipeline {
    agent any

    stages {
        stage('Building App') {
            steps {
                  bat 'mvn install -DskipTests --file ./backend/imperblog-backend'
                  bat 'npm install %WORKSPACE%\\frontend-angular\\imperblog-frontend'
            }
        }
       stage('Run backend tests') {
                   steps{
                       echo 'Running backend tests'
                       bat 'mvn test --file ./backend/imperblog-backend'
                       junit allowEmptyResults: true, testResults: '**\\surefire-reports\\**.xml'
                   }
               }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}