pipeline {
    agent any

    stages {
        stage('Clonar el Repositorio'){
            steps {
                git branch: 'main', url: 'https://github.com/jorearmando15/MICRO-SERVICIO-IUDIGITAL-API'
            }
        }
        stage('Construir imagen de Docker'){
            steps {
                script {
                    withCredentials([
                        string(credentialsId: 'MONGODB_URI_LOCAL', variable: 'MONGODB_URI_LOCAL')
                    ]) {
                    docker.build('proyecto-micro-iudigital', "--build-arg MONGODB_URI_LOCAL=${MONGODB_URI_LOCAL} .")
                    }
                }
            }
        }
       stage('Desplegar contenedores Docker'){
            steps {
                script {
                    // Eliminar contenedores existentes si es necesario
                    sh 'docker rm -f proyecto-micro-iudigital balanceador || true'

                    withCredentials([
                        string(credentialsId: 'MONGODB_URI_LOCAL', variable: 'MONGODB_URI_LOCAL')
                    ]) {
                        sh 'docker-compose up -d'
                    }
                }
            }
        }

    

    post {
        always {
            emailext (
                subject: "Status del build: ${currentBuild.currentResult}",
                body: "Se ha completado el build. Puede detallar en: ${env.BUILD_URL}",
                to: "indira.hamdam@est.iudigital.edu.co",
                from: "jenkins@iudigital.edu.co"
            )
        }
    }
}