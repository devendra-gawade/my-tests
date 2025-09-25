pipeline {
    agent any

    environment {
        NVM_DIR = "$HOME/.nvm"
        PATH = "$NVM_DIR/versions/node/v22.19.0/bin:$PATH"
        BROWSERSTACK_USERNAME = 'devendragawade_a7XBUS'
        BROWSERSTACK_ACCESS_KEY = 'zsVnCSszQ9C8JX7FnZKA'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh '''
                [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
                npm install
                '''
            }
        }

        stage('Run BrowserStack Test') {
            steps {
                sh 'node googleSearch.spec.js'
            }
        }
    }

    post {
        always {
            echo "Pipeline finished. Check BrowserStack for test report."
        }
    }
}

