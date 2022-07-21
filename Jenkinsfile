pipeline {
	agent any
	stages {
		stage('Checkout and Build') {
			steps {
			    checkout([$class: 'GitSCM', branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/lakeshkumar/MyMoviePlanFE']]])
				sh "npm install"
				sh "ng build --prod"
			}
		}
		stage("Build Docker Image") {
		    steps {
		        script {
		            sh "docker build -t mymovieplanfe:${BUILD_NUMBER} ."
		            sh "docker tag mymovieplanfe:${BUILD_NUMBER} lakeshkumar/mymovieplanfe:${BUILD_NUMBER}"
		        }
		    }
		}
		stage("Push Image to Hub") {
		    steps {
		        script {
		            withCredentials([string(credentialsId: 'DockerId', variable: 'Password')]) {
		            sh "docker login -u lakeshkumar -p ${Password}"
		            sh "docker push lakeshkumar/mymovieplanfe:${BUILD_NUMBER}"
		            }
		        }
		    }
		}
    stage("Docker Deploy") {
			steps {
				sh "docker run -itd -p 4200:4200 lakeshkumar/mymovieplanfe:${BUILD_NUMBER}"
			}
		}
	}
}
