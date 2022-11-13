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
        junit allowEmptyResults: true, testResults: '**\\surefire-reports.xml'
      }
    }
    stage('Run frontend tests'){
      when {
        expression { TESTING_FRONTEND == "true" }
       }
      steps {
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
      mail subject: "Jenkins job ${env.JOB_NAME} result",
           body: "The build with number ${env.BUILD_NUMBER} has status ${currentBuild.currentResult}. To view result access next link: ${BUILD_URL}",
           to: 'melissadragutan@gmail.com'
    }
    failure{
      mail subject: "Jenkins job ${env.JOB_NAME} result",
           body: "The build with number ${env.BUILD_NUMBER} has status ${currentBuild.currentResult}. To view result access next link: ${BUILD_URL}",
           to: 'melissadragutan@gmail.com'
    }
  }
}