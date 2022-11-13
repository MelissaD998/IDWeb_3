pipeline {
  agent any

  stages {
    stage('Building App') {
      steps {
        bat 'mvn install -DskipTests --file ./backend/imperblog-backend'
        bat 'npm install %WORKSPACE%\frontend-angular\imperblog-frontend'
      }
    }
    stage('Run backend tests') {
      steps{
        echo 'Running backend tests'
        bat 'mvn test --file ./backend/imperblog-backend'
        junit allowEmptyResults: true, testResults: '\surefire-reports.xml'
      }
    }
    stage('Run frontend tests'){
      steps{
        echo "Testing frontend ${TESTING_FRONTEND}"
      }
    }
    stage('Delete workspace'){
      when{
        expression { CLEAN_WORKSPACE == "true" }
      }
      steps{
        echo "Deleting workspace ${CLEAN_WORKSPACE}"
        deleteDir()
      }
    }
  }
  post{
      success{
              mail body: "Test email",
              to: 'melissadragutan@gmail.com'
          }
          failure{
              mail body: "Test email",
              to: 'melissadragutan@gmail.com'
          }
      }
}