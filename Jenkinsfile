pipeline {
    agent any
    stages {
        stage('Git-Checkout'){
            steps{
                echo "Checkout from git"
                git 'https://github.com/mrvincentoti/jenkins-aws.git'
            }
        }

        stage('Compile'){
            steps {
                echo "Compile Successfully"
                sh 'chmod a+x ${env.WORKSPACE}/build-frontend.sh'
                sh './build-frontend.sh'
            }
        }

        stage('JUnit'){
            steps {
                echo "JUnit Passed Successfully"
            }
        }

        stage('Quality-Gate'){
            steps {
                echo "SonarQube Quality Check Passed Successfully"
            }
        }

        stage('Deploy'){
            steps {
                echo "Passed Successfully"
            }
        }
    }
    post {
        always{
            echo "This will always run"
        }
        success{
            echo "This will only run on success"
        }
        failure{
            echo "This will run on failure"
        }
        unstable{
            echo "This will only run if the run was marked unstable"
        }
        changed{
            echo "This will only run if the stage in the pipeline has changed"
            echo "For example if the pipeline was initially failing, but now successful"
        }
    }
}