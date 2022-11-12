pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                  bat 'mvn install -DskipTests --file ./backend/imperblog-backend'
                  bat 'npm install %WORKSPACE%\\frontend-angular\\imperblog-frontend'
            }
        }
       stage('Testing backend'){
                   steps{
                       echo 'Running backend tests'
                       bat 'mvn test --file ./backend/imperblog-backend'
//                        junit allowEmptyResults: true, testResults: '**\\surefire-reports\\**.xml'
//                        echo 'Backend tests finished execution'
                   }
               }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}