pipeline {

    stages{
        stage('Clonacion de repositorio'){
            steps{
                //clonar repo
            }
        }
    }

    //opcional
   stages{
        stage('Construccion de imagen de docker'){
            steps{
                    // comando docker para un build
            }
        }
    }

   stages{
        stage('Despliegue imagen de docker'){
            steps{
                script{
                    //docker compose up -d
                }
            }
        }
    }

    post{
        always{
            //envie un email de configuracion
        }
    }

}